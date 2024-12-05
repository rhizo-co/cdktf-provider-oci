// https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_downloads_java_download_report_content
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciJmsJavaDownloadsJavaDownloadReportContentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_downloads_java_download_report_content#id DataOciJmsJavaDownloadsJavaDownloadReportContent#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_downloads_java_download_report_content#java_download_report_id DataOciJmsJavaDownloadsJavaDownloadReportContent#java_download_report_id}
  */
  readonly javaDownloadReportId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_downloads_java_download_report_content oci_jms_java_downloads_java_download_report_content}
*/
export class DataOciJmsJavaDownloadsJavaDownloadReportContent extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_jms_java_downloads_java_download_report_content";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_downloads_java_download_report_content oci_jms_java_downloads_java_download_report_content} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciJmsJavaDownloadsJavaDownloadReportContentConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciJmsJavaDownloadsJavaDownloadReportContentConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_jms_java_downloads_java_download_report_content',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '6.18.0',
        providerVersionConstraint: '~> 6.18.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._javaDownloadReportId = config.javaDownloadReportId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // java_download_report_id - computed: false, optional: false, required: true
  private _javaDownloadReportId?: string; 
  public get javaDownloadReportId() {
    return this.getStringAttribute('java_download_report_id');
  }
  public set javaDownloadReportId(value: string) {
    this._javaDownloadReportId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get javaDownloadReportIdInput() {
    return this._javaDownloadReportId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      java_download_report_id: cdktf.stringToTerraform(this._javaDownloadReportId),
    };
  }
}
