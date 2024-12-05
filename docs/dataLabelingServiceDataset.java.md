# `dataLabelingServiceDataset` Submodule <a name="`dataLabelingServiceDataset` Submodule" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataLabelingServiceDataset <a name="DataLabelingServiceDataset" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_labeling_service_dataset oci_data_labeling_service_dataset}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_labeling_service_dataset.DataLabelingServiceDataset;

DataLabelingServiceDataset.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .annotationFormat(java.lang.String)
    .compartmentId(java.lang.String)
    .datasetFormatDetails(DataLabelingServiceDatasetDatasetFormatDetails)
    .datasetSourceDetails(DataLabelingServiceDatasetDatasetSourceDetails)
    .labelSet(DataLabelingServiceDatasetLabelSet)
//  .definedTags(java.util.Map<java.lang.String, java.lang.String>)
//  .description(java.lang.String)
//  .displayName(java.lang.String)
//  .freeformTags(java.util.Map<java.lang.String, java.lang.String>)
//  .id(java.lang.String)
//  .initialImportDatasetConfiguration(DataLabelingServiceDatasetInitialImportDatasetConfiguration)
//  .initialRecordGenerationConfiguration(DataLabelingServiceDatasetInitialRecordGenerationConfiguration)
//  .labelingInstructions(java.lang.String)
//  .timeouts(DataLabelingServiceDatasetTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.Initializer.parameter.annotationFormat">annotationFormat</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_labeling_service_dataset#annotation_format DataLabelingServiceDataset#annotation_format}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.Initializer.parameter.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_labeling_service_dataset#compartment_id DataLabelingServiceDataset#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.Initializer.parameter.datasetFormatDetails">datasetFormatDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetails">DataLabelingServiceDatasetDatasetFormatDetails</a></code> | dataset_format_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.Initializer.parameter.datasetSourceDetails">datasetSourceDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetSourceDetails">DataLabelingServiceDatasetDatasetSourceDetails</a></code> | dataset_source_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.Initializer.parameter.labelSet">labelSet</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSet">DataLabelingServiceDatasetLabelSet</a></code> | label_set block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.Initializer.parameter.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_labeling_service_dataset#defined_tags DataLabelingServiceDataset#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_labeling_service_dataset#description DataLabelingServiceDataset#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_labeling_service_dataset#display_name DataLabelingServiceDataset#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.Initializer.parameter.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_labeling_service_dataset#freeform_tags DataLabelingServiceDataset#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_labeling_service_dataset#id DataLabelingServiceDataset#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.Initializer.parameter.initialImportDatasetConfiguration">initialImportDatasetConfiguration</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfiguration">DataLabelingServiceDatasetInitialImportDatasetConfiguration</a></code> | initial_import_dataset_configuration block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.Initializer.parameter.initialRecordGenerationConfiguration">initialRecordGenerationConfiguration</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialRecordGenerationConfiguration">DataLabelingServiceDatasetInitialRecordGenerationConfiguration</a></code> | initial_record_generation_configuration block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.Initializer.parameter.labelingInstructions">labelingInstructions</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_labeling_service_dataset#labeling_instructions DataLabelingServiceDataset#labeling_instructions}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetTimeouts">DataLabelingServiceDatasetTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `annotationFormat`<sup>Required</sup> <a name="annotationFormat" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.Initializer.parameter.annotationFormat"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_labeling_service_dataset#annotation_format DataLabelingServiceDataset#annotation_format}.

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.Initializer.parameter.compartmentId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_labeling_service_dataset#compartment_id DataLabelingServiceDataset#compartment_id}.

---

##### `datasetFormatDetails`<sup>Required</sup> <a name="datasetFormatDetails" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.Initializer.parameter.datasetFormatDetails"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetails">DataLabelingServiceDatasetDatasetFormatDetails</a>

dataset_format_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_labeling_service_dataset#dataset_format_details DataLabelingServiceDataset#dataset_format_details}

---

##### `datasetSourceDetails`<sup>Required</sup> <a name="datasetSourceDetails" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.Initializer.parameter.datasetSourceDetails"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetSourceDetails">DataLabelingServiceDatasetDatasetSourceDetails</a>

dataset_source_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_labeling_service_dataset#dataset_source_details DataLabelingServiceDataset#dataset_source_details}

---

##### `labelSet`<sup>Required</sup> <a name="labelSet" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.Initializer.parameter.labelSet"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSet">DataLabelingServiceDatasetLabelSet</a>

label_set block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_labeling_service_dataset#label_set DataLabelingServiceDataset#label_set}

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.Initializer.parameter.definedTags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_labeling_service_dataset#defined_tags DataLabelingServiceDataset#defined_tags}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_labeling_service_dataset#description DataLabelingServiceDataset#description}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_labeling_service_dataset#display_name DataLabelingServiceDataset#display_name}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.Initializer.parameter.freeformTags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_labeling_service_dataset#freeform_tags DataLabelingServiceDataset#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_labeling_service_dataset#id DataLabelingServiceDataset#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `initialImportDatasetConfiguration`<sup>Optional</sup> <a name="initialImportDatasetConfiguration" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.Initializer.parameter.initialImportDatasetConfiguration"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfiguration">DataLabelingServiceDatasetInitialImportDatasetConfiguration</a>

initial_import_dataset_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_labeling_service_dataset#initial_import_dataset_configuration DataLabelingServiceDataset#initial_import_dataset_configuration}

---

##### `initialRecordGenerationConfiguration`<sup>Optional</sup> <a name="initialRecordGenerationConfiguration" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.Initializer.parameter.initialRecordGenerationConfiguration"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialRecordGenerationConfiguration">DataLabelingServiceDatasetInitialRecordGenerationConfiguration</a>

initial_record_generation_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_labeling_service_dataset#initial_record_generation_configuration DataLabelingServiceDataset#initial_record_generation_configuration}

---

##### `labelingInstructions`<sup>Optional</sup> <a name="labelingInstructions" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.Initializer.parameter.labelingInstructions"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_labeling_service_dataset#labeling_instructions DataLabelingServiceDataset#labeling_instructions}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetTimeouts">DataLabelingServiceDatasetTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_labeling_service_dataset#timeouts DataLabelingServiceDataset#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.putDatasetFormatDetails">putDatasetFormatDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.putDatasetSourceDetails">putDatasetSourceDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.putInitialImportDatasetConfiguration">putInitialImportDatasetConfiguration</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.putInitialRecordGenerationConfiguration">putInitialRecordGenerationConfiguration</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.putLabelSet">putLabelSet</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.resetDefinedTags">resetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.resetFreeformTags">resetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.resetInitialImportDatasetConfiguration">resetInitialImportDatasetConfiguration</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.resetInitialRecordGenerationConfiguration">resetInitialRecordGenerationConfiguration</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.resetLabelingInstructions">resetLabelingInstructions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDatasetFormatDetails` <a name="putDatasetFormatDetails" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.putDatasetFormatDetails"></a>

```java
public void putDatasetFormatDetails(DataLabelingServiceDatasetDatasetFormatDetails value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.putDatasetFormatDetails.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetails">DataLabelingServiceDatasetDatasetFormatDetails</a>

---

##### `putDatasetSourceDetails` <a name="putDatasetSourceDetails" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.putDatasetSourceDetails"></a>

```java
public void putDatasetSourceDetails(DataLabelingServiceDatasetDatasetSourceDetails value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.putDatasetSourceDetails.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetSourceDetails">DataLabelingServiceDatasetDatasetSourceDetails</a>

---

##### `putInitialImportDatasetConfiguration` <a name="putInitialImportDatasetConfiguration" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.putInitialImportDatasetConfiguration"></a>

```java
public void putInitialImportDatasetConfiguration(DataLabelingServiceDatasetInitialImportDatasetConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.putInitialImportDatasetConfiguration.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfiguration">DataLabelingServiceDatasetInitialImportDatasetConfiguration</a>

---

##### `putInitialRecordGenerationConfiguration` <a name="putInitialRecordGenerationConfiguration" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.putInitialRecordGenerationConfiguration"></a>

```java
public void putInitialRecordGenerationConfiguration(DataLabelingServiceDatasetInitialRecordGenerationConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.putInitialRecordGenerationConfiguration.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialRecordGenerationConfiguration">DataLabelingServiceDatasetInitialRecordGenerationConfiguration</a>

---

##### `putLabelSet` <a name="putLabelSet" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.putLabelSet"></a>

```java
public void putLabelSet(DataLabelingServiceDatasetLabelSet value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.putLabelSet.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSet">DataLabelingServiceDatasetLabelSet</a>

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.putTimeouts"></a>

```java
public void putTimeouts(DataLabelingServiceDatasetTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetTimeouts">DataLabelingServiceDatasetTimeouts</a>

---

##### `resetDefinedTags` <a name="resetDefinedTags" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.resetDefinedTags"></a>

```java
public void resetDefinedTags()
```

##### `resetDescription` <a name="resetDescription" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetFreeformTags` <a name="resetFreeformTags" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.resetFreeformTags"></a>

```java
public void resetFreeformTags()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.resetId"></a>

```java
public void resetId()
```

##### `resetInitialImportDatasetConfiguration` <a name="resetInitialImportDatasetConfiguration" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.resetInitialImportDatasetConfiguration"></a>

```java
public void resetInitialImportDatasetConfiguration()
```

##### `resetInitialRecordGenerationConfiguration` <a name="resetInitialRecordGenerationConfiguration" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.resetInitialRecordGenerationConfiguration"></a>

```java
public void resetInitialRecordGenerationConfiguration()
```

##### `resetLabelingInstructions` <a name="resetLabelingInstructions" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.resetLabelingInstructions"></a>

```java
public void resetLabelingInstructions()
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataLabelingServiceDataset resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_labeling_service_dataset.DataLabelingServiceDataset;

DataLabelingServiceDataset.isConstruct(java.lang.Object x)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_labeling_service_dataset.DataLabelingServiceDataset;

DataLabelingServiceDataset.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_labeling_service_dataset.DataLabelingServiceDataset;

DataLabelingServiceDataset.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_labeling_service_dataset.DataLabelingServiceDataset;

DataLabelingServiceDataset.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataLabelingServiceDataset.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataLabelingServiceDataset resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataLabelingServiceDataset to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataLabelingServiceDataset that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_labeling_service_dataset#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataLabelingServiceDataset to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.property.additionalProperties">additionalProperties</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.property.datasetFormatDetails">datasetFormatDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsOutputReference">DataLabelingServiceDatasetDatasetFormatDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.property.datasetSourceDetails">datasetSourceDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetSourceDetailsOutputReference">DataLabelingServiceDatasetDatasetSourceDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.property.initialImportDatasetConfiguration">initialImportDatasetConfiguration</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationOutputReference">DataLabelingServiceDatasetInitialImportDatasetConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.property.initialRecordGenerationConfiguration">initialRecordGenerationConfiguration</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialRecordGenerationConfigurationOutputReference">DataLabelingServiceDatasetInitialRecordGenerationConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.property.labelSet">labelSet</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetOutputReference">DataLabelingServiceDatasetLabelSetOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.property.lifecycleDetails">lifecycleDetails</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.property.lifecycleSubstate">lifecycleSubstate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.property.timeCreated">timeCreated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetTimeoutsOutputReference">DataLabelingServiceDatasetTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.property.timeUpdated">timeUpdated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.property.annotationFormatInput">annotationFormatInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.property.compartmentIdInput">compartmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.property.datasetFormatDetailsInput">datasetFormatDetailsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetails">DataLabelingServiceDatasetDatasetFormatDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.property.datasetSourceDetailsInput">datasetSourceDetailsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetSourceDetails">DataLabelingServiceDatasetDatasetSourceDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.property.definedTagsInput">definedTagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.property.freeformTagsInput">freeformTagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.property.initialImportDatasetConfigurationInput">initialImportDatasetConfigurationInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfiguration">DataLabelingServiceDatasetInitialImportDatasetConfiguration</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.property.initialRecordGenerationConfigurationInput">initialRecordGenerationConfigurationInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialRecordGenerationConfiguration">DataLabelingServiceDatasetInitialRecordGenerationConfiguration</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.property.labelingInstructionsInput">labelingInstructionsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.property.labelSetInput">labelSetInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSet">DataLabelingServiceDatasetLabelSet</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetTimeouts">DataLabelingServiceDatasetTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.property.annotationFormat">annotationFormat</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.property.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.property.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.property.labelingInstructions">labelingInstructions</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `additionalProperties`<sup>Required</sup> <a name="additionalProperties" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.property.additionalProperties"></a>

```java
public StringMap getAdditionalProperties();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `datasetFormatDetails`<sup>Required</sup> <a name="datasetFormatDetails" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.property.datasetFormatDetails"></a>

```java
public DataLabelingServiceDatasetDatasetFormatDetailsOutputReference getDatasetFormatDetails();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsOutputReference">DataLabelingServiceDatasetDatasetFormatDetailsOutputReference</a>

---

##### `datasetSourceDetails`<sup>Required</sup> <a name="datasetSourceDetails" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.property.datasetSourceDetails"></a>

```java
public DataLabelingServiceDatasetDatasetSourceDetailsOutputReference getDatasetSourceDetails();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetSourceDetailsOutputReference">DataLabelingServiceDatasetDatasetSourceDetailsOutputReference</a>

---

##### `initialImportDatasetConfiguration`<sup>Required</sup> <a name="initialImportDatasetConfiguration" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.property.initialImportDatasetConfiguration"></a>

```java
public DataLabelingServiceDatasetInitialImportDatasetConfigurationOutputReference getInitialImportDatasetConfiguration();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationOutputReference">DataLabelingServiceDatasetInitialImportDatasetConfigurationOutputReference</a>

---

##### `initialRecordGenerationConfiguration`<sup>Required</sup> <a name="initialRecordGenerationConfiguration" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.property.initialRecordGenerationConfiguration"></a>

```java
public DataLabelingServiceDatasetInitialRecordGenerationConfigurationOutputReference getInitialRecordGenerationConfiguration();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialRecordGenerationConfigurationOutputReference">DataLabelingServiceDatasetInitialRecordGenerationConfigurationOutputReference</a>

---

##### `labelSet`<sup>Required</sup> <a name="labelSet" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.property.labelSet"></a>

```java
public DataLabelingServiceDatasetLabelSetOutputReference getLabelSet();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetOutputReference">DataLabelingServiceDatasetLabelSetOutputReference</a>

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.property.lifecycleDetails"></a>

```java
public java.lang.String getLifecycleDetails();
```

- *Type:* java.lang.String

---

##### `lifecycleSubstate`<sup>Required</sup> <a name="lifecycleSubstate" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.property.lifecycleSubstate"></a>

```java
public java.lang.String getLifecycleSubstate();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.property.timeCreated"></a>

```java
public java.lang.String getTimeCreated();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.property.timeouts"></a>

```java
public DataLabelingServiceDatasetTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetTimeoutsOutputReference">DataLabelingServiceDatasetTimeoutsOutputReference</a>

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.property.timeUpdated"></a>

```java
public java.lang.String getTimeUpdated();
```

- *Type:* java.lang.String

---

##### `annotationFormatInput`<sup>Optional</sup> <a name="annotationFormatInput" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.property.annotationFormatInput"></a>

```java
public java.lang.String getAnnotationFormatInput();
```

- *Type:* java.lang.String

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.property.compartmentIdInput"></a>

```java
public java.lang.String getCompartmentIdInput();
```

- *Type:* java.lang.String

---

##### `datasetFormatDetailsInput`<sup>Optional</sup> <a name="datasetFormatDetailsInput" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.property.datasetFormatDetailsInput"></a>

```java
public DataLabelingServiceDatasetDatasetFormatDetails getDatasetFormatDetailsInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetails">DataLabelingServiceDatasetDatasetFormatDetails</a>

---

##### `datasetSourceDetailsInput`<sup>Optional</sup> <a name="datasetSourceDetailsInput" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.property.datasetSourceDetailsInput"></a>

```java
public DataLabelingServiceDatasetDatasetSourceDetails getDatasetSourceDetailsInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetSourceDetails">DataLabelingServiceDatasetDatasetSourceDetails</a>

---

##### `definedTagsInput`<sup>Optional</sup> <a name="definedTagsInput" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.property.definedTagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `freeformTagsInput`<sup>Optional</sup> <a name="freeformTagsInput" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.property.freeformTagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `initialImportDatasetConfigurationInput`<sup>Optional</sup> <a name="initialImportDatasetConfigurationInput" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.property.initialImportDatasetConfigurationInput"></a>

```java
public DataLabelingServiceDatasetInitialImportDatasetConfiguration getInitialImportDatasetConfigurationInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfiguration">DataLabelingServiceDatasetInitialImportDatasetConfiguration</a>

---

##### `initialRecordGenerationConfigurationInput`<sup>Optional</sup> <a name="initialRecordGenerationConfigurationInput" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.property.initialRecordGenerationConfigurationInput"></a>

```java
public DataLabelingServiceDatasetInitialRecordGenerationConfiguration getInitialRecordGenerationConfigurationInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialRecordGenerationConfiguration">DataLabelingServiceDatasetInitialRecordGenerationConfiguration</a>

---

##### `labelingInstructionsInput`<sup>Optional</sup> <a name="labelingInstructionsInput" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.property.labelingInstructionsInput"></a>

```java
public java.lang.String getLabelingInstructionsInput();
```

- *Type:* java.lang.String

---

##### `labelSetInput`<sup>Optional</sup> <a name="labelSetInput" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.property.labelSetInput"></a>

```java
public DataLabelingServiceDatasetLabelSet getLabelSetInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSet">DataLabelingServiceDatasetLabelSet</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetTimeouts">DataLabelingServiceDatasetTimeouts</a>

---

##### `annotationFormat`<sup>Required</sup> <a name="annotationFormat" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.property.annotationFormat"></a>

```java
public java.lang.String getAnnotationFormat();
```

- *Type:* java.lang.String

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.property.definedTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.property.freeformTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `labelingInstructions`<sup>Required</sup> <a name="labelingInstructions" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.property.labelingInstructions"></a>

```java
public java.lang.String getLabelingInstructions();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataLabelingServiceDatasetConfig <a name="DataLabelingServiceDatasetConfig" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_labeling_service_dataset.DataLabelingServiceDatasetConfig;

DataLabelingServiceDatasetConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .annotationFormat(java.lang.String)
    .compartmentId(java.lang.String)
    .datasetFormatDetails(DataLabelingServiceDatasetDatasetFormatDetails)
    .datasetSourceDetails(DataLabelingServiceDatasetDatasetSourceDetails)
    .labelSet(DataLabelingServiceDatasetLabelSet)
//  .definedTags(java.util.Map<java.lang.String, java.lang.String>)
//  .description(java.lang.String)
//  .displayName(java.lang.String)
//  .freeformTags(java.util.Map<java.lang.String, java.lang.String>)
//  .id(java.lang.String)
//  .initialImportDatasetConfiguration(DataLabelingServiceDatasetInitialImportDatasetConfiguration)
//  .initialRecordGenerationConfiguration(DataLabelingServiceDatasetInitialRecordGenerationConfiguration)
//  .labelingInstructions(java.lang.String)
//  .timeouts(DataLabelingServiceDatasetTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetConfig.property.annotationFormat">annotationFormat</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_labeling_service_dataset#annotation_format DataLabelingServiceDataset#annotation_format}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetConfig.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_labeling_service_dataset#compartment_id DataLabelingServiceDataset#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetConfig.property.datasetFormatDetails">datasetFormatDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetails">DataLabelingServiceDatasetDatasetFormatDetails</a></code> | dataset_format_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetConfig.property.datasetSourceDetails">datasetSourceDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetSourceDetails">DataLabelingServiceDatasetDatasetSourceDetails</a></code> | dataset_source_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetConfig.property.labelSet">labelSet</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSet">DataLabelingServiceDatasetLabelSet</a></code> | label_set block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetConfig.property.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_labeling_service_dataset#defined_tags DataLabelingServiceDataset#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_labeling_service_dataset#description DataLabelingServiceDataset#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_labeling_service_dataset#display_name DataLabelingServiceDataset#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetConfig.property.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_labeling_service_dataset#freeform_tags DataLabelingServiceDataset#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_labeling_service_dataset#id DataLabelingServiceDataset#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetConfig.property.initialImportDatasetConfiguration">initialImportDatasetConfiguration</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfiguration">DataLabelingServiceDatasetInitialImportDatasetConfiguration</a></code> | initial_import_dataset_configuration block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetConfig.property.initialRecordGenerationConfiguration">initialRecordGenerationConfiguration</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialRecordGenerationConfiguration">DataLabelingServiceDatasetInitialRecordGenerationConfiguration</a></code> | initial_record_generation_configuration block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetConfig.property.labelingInstructions">labelingInstructions</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_labeling_service_dataset#labeling_instructions DataLabelingServiceDataset#labeling_instructions}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetTimeouts">DataLabelingServiceDatasetTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `annotationFormat`<sup>Required</sup> <a name="annotationFormat" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetConfig.property.annotationFormat"></a>

```java
public java.lang.String getAnnotationFormat();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_labeling_service_dataset#annotation_format DataLabelingServiceDataset#annotation_format}.

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetConfig.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_labeling_service_dataset#compartment_id DataLabelingServiceDataset#compartment_id}.

---

##### `datasetFormatDetails`<sup>Required</sup> <a name="datasetFormatDetails" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetConfig.property.datasetFormatDetails"></a>

```java
public DataLabelingServiceDatasetDatasetFormatDetails getDatasetFormatDetails();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetails">DataLabelingServiceDatasetDatasetFormatDetails</a>

dataset_format_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_labeling_service_dataset#dataset_format_details DataLabelingServiceDataset#dataset_format_details}

---

##### `datasetSourceDetails`<sup>Required</sup> <a name="datasetSourceDetails" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetConfig.property.datasetSourceDetails"></a>

```java
public DataLabelingServiceDatasetDatasetSourceDetails getDatasetSourceDetails();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetSourceDetails">DataLabelingServiceDatasetDatasetSourceDetails</a>

dataset_source_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_labeling_service_dataset#dataset_source_details DataLabelingServiceDataset#dataset_source_details}

---

##### `labelSet`<sup>Required</sup> <a name="labelSet" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetConfig.property.labelSet"></a>

```java
public DataLabelingServiceDatasetLabelSet getLabelSet();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSet">DataLabelingServiceDatasetLabelSet</a>

label_set block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_labeling_service_dataset#label_set DataLabelingServiceDataset#label_set}

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetConfig.property.definedTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_labeling_service_dataset#defined_tags DataLabelingServiceDataset#defined_tags}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_labeling_service_dataset#description DataLabelingServiceDataset#description}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_labeling_service_dataset#display_name DataLabelingServiceDataset#display_name}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetConfig.property.freeformTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_labeling_service_dataset#freeform_tags DataLabelingServiceDataset#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_labeling_service_dataset#id DataLabelingServiceDataset#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `initialImportDatasetConfiguration`<sup>Optional</sup> <a name="initialImportDatasetConfiguration" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetConfig.property.initialImportDatasetConfiguration"></a>

```java
public DataLabelingServiceDatasetInitialImportDatasetConfiguration getInitialImportDatasetConfiguration();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfiguration">DataLabelingServiceDatasetInitialImportDatasetConfiguration</a>

initial_import_dataset_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_labeling_service_dataset#initial_import_dataset_configuration DataLabelingServiceDataset#initial_import_dataset_configuration}

---

##### `initialRecordGenerationConfiguration`<sup>Optional</sup> <a name="initialRecordGenerationConfiguration" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetConfig.property.initialRecordGenerationConfiguration"></a>

```java
public DataLabelingServiceDatasetInitialRecordGenerationConfiguration getInitialRecordGenerationConfiguration();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialRecordGenerationConfiguration">DataLabelingServiceDatasetInitialRecordGenerationConfiguration</a>

initial_record_generation_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_labeling_service_dataset#initial_record_generation_configuration DataLabelingServiceDataset#initial_record_generation_configuration}

---

##### `labelingInstructions`<sup>Optional</sup> <a name="labelingInstructions" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetConfig.property.labelingInstructions"></a>

```java
public java.lang.String getLabelingInstructions();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_labeling_service_dataset#labeling_instructions DataLabelingServiceDataset#labeling_instructions}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetConfig.property.timeouts"></a>

```java
public DataLabelingServiceDatasetTimeouts getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetTimeouts">DataLabelingServiceDatasetTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_labeling_service_dataset#timeouts DataLabelingServiceDataset#timeouts}

---

### DataLabelingServiceDatasetDatasetFormatDetails <a name="DataLabelingServiceDatasetDatasetFormatDetails" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetails.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_labeling_service_dataset.DataLabelingServiceDatasetDatasetFormatDetails;

DataLabelingServiceDatasetDatasetFormatDetails.builder()
    .formatType(java.lang.String)
//  .textFileTypeMetadata(DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadata)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetails.property.formatType">formatType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_labeling_service_dataset#format_type DataLabelingServiceDataset#format_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetails.property.textFileTypeMetadata">textFileTypeMetadata</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadata">DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadata</a></code> | text_file_type_metadata block. |

---

##### `formatType`<sup>Required</sup> <a name="formatType" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetails.property.formatType"></a>

```java
public java.lang.String getFormatType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_labeling_service_dataset#format_type DataLabelingServiceDataset#format_type}.

---

##### `textFileTypeMetadata`<sup>Optional</sup> <a name="textFileTypeMetadata" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetails.property.textFileTypeMetadata"></a>

```java
public DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadata getTextFileTypeMetadata();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadata">DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadata</a>

text_file_type_metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_labeling_service_dataset#text_file_type_metadata DataLabelingServiceDataset#text_file_type_metadata}

---

### DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadata <a name="DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadata" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadata"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadata.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_labeling_service_dataset.DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadata;

DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadata.builder()
    .columnIndex(java.lang.Number)
    .formatType(java.lang.String)
//  .columnDelimiter(java.lang.String)
//  .columnName(java.lang.String)
//  .escapeCharacter(java.lang.String)
//  .lineDelimiter(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadata.property.columnIndex">columnIndex</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_labeling_service_dataset#column_index DataLabelingServiceDataset#column_index}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadata.property.formatType">formatType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_labeling_service_dataset#format_type DataLabelingServiceDataset#format_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadata.property.columnDelimiter">columnDelimiter</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_labeling_service_dataset#column_delimiter DataLabelingServiceDataset#column_delimiter}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadata.property.columnName">columnName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_labeling_service_dataset#column_name DataLabelingServiceDataset#column_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadata.property.escapeCharacter">escapeCharacter</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_labeling_service_dataset#escape_character DataLabelingServiceDataset#escape_character}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadata.property.lineDelimiter">lineDelimiter</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_labeling_service_dataset#line_delimiter DataLabelingServiceDataset#line_delimiter}. |

---

##### `columnIndex`<sup>Required</sup> <a name="columnIndex" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadata.property.columnIndex"></a>

```java
public java.lang.Number getColumnIndex();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_labeling_service_dataset#column_index DataLabelingServiceDataset#column_index}.

---

##### `formatType`<sup>Required</sup> <a name="formatType" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadata.property.formatType"></a>

```java
public java.lang.String getFormatType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_labeling_service_dataset#format_type DataLabelingServiceDataset#format_type}.

---

##### `columnDelimiter`<sup>Optional</sup> <a name="columnDelimiter" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadata.property.columnDelimiter"></a>

```java
public java.lang.String getColumnDelimiter();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_labeling_service_dataset#column_delimiter DataLabelingServiceDataset#column_delimiter}.

---

##### `columnName`<sup>Optional</sup> <a name="columnName" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadata.property.columnName"></a>

```java
public java.lang.String getColumnName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_labeling_service_dataset#column_name DataLabelingServiceDataset#column_name}.

---

##### `escapeCharacter`<sup>Optional</sup> <a name="escapeCharacter" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadata.property.escapeCharacter"></a>

```java
public java.lang.String getEscapeCharacter();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_labeling_service_dataset#escape_character DataLabelingServiceDataset#escape_character}.

---

##### `lineDelimiter`<sup>Optional</sup> <a name="lineDelimiter" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadata.property.lineDelimiter"></a>

```java
public java.lang.String getLineDelimiter();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_labeling_service_dataset#line_delimiter DataLabelingServiceDataset#line_delimiter}.

---

### DataLabelingServiceDatasetDatasetSourceDetails <a name="DataLabelingServiceDatasetDatasetSourceDetails" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetSourceDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetSourceDetails.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_labeling_service_dataset.DataLabelingServiceDatasetDatasetSourceDetails;

DataLabelingServiceDatasetDatasetSourceDetails.builder()
    .bucket(java.lang.String)
    .namespace(java.lang.String)
    .sourceType(java.lang.String)
//  .prefix(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetSourceDetails.property.bucket">bucket</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_labeling_service_dataset#bucket DataLabelingServiceDataset#bucket}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetSourceDetails.property.namespace">namespace</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_labeling_service_dataset#namespace DataLabelingServiceDataset#namespace}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetSourceDetails.property.sourceType">sourceType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_labeling_service_dataset#source_type DataLabelingServiceDataset#source_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetSourceDetails.property.prefix">prefix</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_labeling_service_dataset#prefix DataLabelingServiceDataset#prefix}. |

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetSourceDetails.property.bucket"></a>

```java
public java.lang.String getBucket();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_labeling_service_dataset#bucket DataLabelingServiceDataset#bucket}.

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetSourceDetails.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_labeling_service_dataset#namespace DataLabelingServiceDataset#namespace}.

---

##### `sourceType`<sup>Required</sup> <a name="sourceType" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetSourceDetails.property.sourceType"></a>

```java
public java.lang.String getSourceType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_labeling_service_dataset#source_type DataLabelingServiceDataset#source_type}.

---

##### `prefix`<sup>Optional</sup> <a name="prefix" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetSourceDetails.property.prefix"></a>

```java
public java.lang.String getPrefix();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_labeling_service_dataset#prefix DataLabelingServiceDataset#prefix}.

---

### DataLabelingServiceDatasetInitialImportDatasetConfiguration <a name="DataLabelingServiceDatasetInitialImportDatasetConfiguration" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfiguration"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfiguration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_labeling_service_dataset.DataLabelingServiceDatasetInitialImportDatasetConfiguration;

DataLabelingServiceDatasetInitialImportDatasetConfiguration.builder()
    .importFormat(DataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormat)
    .importMetadataPath(DataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPath)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfiguration.property.importFormat">importFormat</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormat">DataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormat</a></code> | import_format block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfiguration.property.importMetadataPath">importMetadataPath</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPath">DataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPath</a></code> | import_metadata_path block. |

---

##### `importFormat`<sup>Required</sup> <a name="importFormat" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfiguration.property.importFormat"></a>

```java
public DataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormat getImportFormat();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormat">DataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormat</a>

import_format block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_labeling_service_dataset#import_format DataLabelingServiceDataset#import_format}

---

##### `importMetadataPath`<sup>Required</sup> <a name="importMetadataPath" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfiguration.property.importMetadataPath"></a>

```java
public DataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPath getImportMetadataPath();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPath">DataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPath</a>

import_metadata_path block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_labeling_service_dataset#import_metadata_path DataLabelingServiceDataset#import_metadata_path}

---

### DataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormat <a name="DataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormat" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormat"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormat.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_labeling_service_dataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormat;

DataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormat.builder()
    .name(java.lang.String)
//  .version(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormat.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_labeling_service_dataset#name DataLabelingServiceDataset#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormat.property.version">version</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_labeling_service_dataset#version DataLabelingServiceDataset#version}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormat.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_labeling_service_dataset#name DataLabelingServiceDataset#name}.

---

##### `version`<sup>Optional</sup> <a name="version" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormat.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_labeling_service_dataset#version DataLabelingServiceDataset#version}.

---

### DataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPath <a name="DataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPath" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPath"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPath.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_labeling_service_dataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPath;

DataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPath.builder()
    .bucket(java.lang.String)
    .namespace(java.lang.String)
    .path(java.lang.String)
    .sourceType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPath.property.bucket">bucket</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_labeling_service_dataset#bucket DataLabelingServiceDataset#bucket}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPath.property.namespace">namespace</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_labeling_service_dataset#namespace DataLabelingServiceDataset#namespace}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPath.property.path">path</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_labeling_service_dataset#path DataLabelingServiceDataset#path}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPath.property.sourceType">sourceType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_labeling_service_dataset#source_type DataLabelingServiceDataset#source_type}. |

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPath.property.bucket"></a>

```java
public java.lang.String getBucket();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_labeling_service_dataset#bucket DataLabelingServiceDataset#bucket}.

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPath.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_labeling_service_dataset#namespace DataLabelingServiceDataset#namespace}.

---

##### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPath.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_labeling_service_dataset#path DataLabelingServiceDataset#path}.

---

##### `sourceType`<sup>Required</sup> <a name="sourceType" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPath.property.sourceType"></a>

```java
public java.lang.String getSourceType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_labeling_service_dataset#source_type DataLabelingServiceDataset#source_type}.

---

### DataLabelingServiceDatasetInitialRecordGenerationConfiguration <a name="DataLabelingServiceDatasetInitialRecordGenerationConfiguration" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialRecordGenerationConfiguration"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialRecordGenerationConfiguration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_labeling_service_dataset.DataLabelingServiceDatasetInitialRecordGenerationConfiguration;

DataLabelingServiceDatasetInitialRecordGenerationConfiguration.builder()
    .build();
```


### DataLabelingServiceDatasetLabelSet <a name="DataLabelingServiceDatasetLabelSet" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSet"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSet.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_labeling_service_dataset.DataLabelingServiceDatasetLabelSet;

DataLabelingServiceDatasetLabelSet.builder()
    .items(IResolvable)
    .items(java.util.List<DataLabelingServiceDatasetLabelSetItems>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSet.property.items">items</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetItems">DataLabelingServiceDatasetLabelSetItems</a>></code> | items block. |

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSet.property.items"></a>

```java
public java.lang.Object getItems();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetItems">DataLabelingServiceDatasetLabelSetItems</a>>

items block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_labeling_service_dataset#items DataLabelingServiceDataset#items}

---

### DataLabelingServiceDatasetLabelSetItems <a name="DataLabelingServiceDatasetLabelSetItems" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetItems.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_labeling_service_dataset.DataLabelingServiceDatasetLabelSetItems;

DataLabelingServiceDatasetLabelSetItems.builder()
    .name(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetItems.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_labeling_service_dataset#name DataLabelingServiceDataset#name}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetItems.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_labeling_service_dataset#name DataLabelingServiceDataset#name}.

---

### DataLabelingServiceDatasetTimeouts <a name="DataLabelingServiceDatasetTimeouts" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_labeling_service_dataset.DataLabelingServiceDatasetTimeouts;

DataLabelingServiceDatasetTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_labeling_service_dataset#create DataLabelingServiceDataset#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_labeling_service_dataset#delete DataLabelingServiceDataset#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_labeling_service_dataset#update DataLabelingServiceDataset#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_labeling_service_dataset#create DataLabelingServiceDataset#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_labeling_service_dataset#delete DataLabelingServiceDataset#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_labeling_service_dataset#update DataLabelingServiceDataset#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataLabelingServiceDatasetDatasetFormatDetailsOutputReference <a name="DataLabelingServiceDatasetDatasetFormatDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_labeling_service_dataset.DataLabelingServiceDatasetDatasetFormatDetailsOutputReference;

new DataLabelingServiceDatasetDatasetFormatDetailsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsOutputReference.putTextFileTypeMetadata">putTextFileTypeMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsOutputReference.resetTextFileTypeMetadata">resetTextFileTypeMetadata</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putTextFileTypeMetadata` <a name="putTextFileTypeMetadata" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsOutputReference.putTextFileTypeMetadata"></a>

```java
public void putTextFileTypeMetadata(DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadata value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsOutputReference.putTextFileTypeMetadata.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadata">DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadata</a>

---

##### `resetTextFileTypeMetadata` <a name="resetTextFileTypeMetadata" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsOutputReference.resetTextFileTypeMetadata"></a>

```java
public void resetTextFileTypeMetadata()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsOutputReference.property.textFileTypeMetadata">textFileTypeMetadata</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference">DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsOutputReference.property.formatTypeInput">formatTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsOutputReference.property.textFileTypeMetadataInput">textFileTypeMetadataInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadata">DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsOutputReference.property.formatType">formatType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetails">DataLabelingServiceDatasetDatasetFormatDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `textFileTypeMetadata`<sup>Required</sup> <a name="textFileTypeMetadata" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsOutputReference.property.textFileTypeMetadata"></a>

```java
public DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference getTextFileTypeMetadata();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference">DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference</a>

---

##### `formatTypeInput`<sup>Optional</sup> <a name="formatTypeInput" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsOutputReference.property.formatTypeInput"></a>

```java
public java.lang.String getFormatTypeInput();
```

- *Type:* java.lang.String

---

##### `textFileTypeMetadataInput`<sup>Optional</sup> <a name="textFileTypeMetadataInput" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsOutputReference.property.textFileTypeMetadataInput"></a>

```java
public DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadata getTextFileTypeMetadataInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadata">DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadata</a>

---

##### `formatType`<sup>Required</sup> <a name="formatType" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsOutputReference.property.formatType"></a>

```java
public java.lang.String getFormatType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsOutputReference.property.internalValue"></a>

```java
public DataLabelingServiceDatasetDatasetFormatDetails getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetails">DataLabelingServiceDatasetDatasetFormatDetails</a>

---


### DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference <a name="DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_labeling_service_dataset.DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference;

new DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference.resetColumnDelimiter">resetColumnDelimiter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference.resetColumnName">resetColumnName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference.resetEscapeCharacter">resetEscapeCharacter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference.resetLineDelimiter">resetLineDelimiter</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetColumnDelimiter` <a name="resetColumnDelimiter" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference.resetColumnDelimiter"></a>

```java
public void resetColumnDelimiter()
```

##### `resetColumnName` <a name="resetColumnName" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference.resetColumnName"></a>

```java
public void resetColumnName()
```

##### `resetEscapeCharacter` <a name="resetEscapeCharacter" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference.resetEscapeCharacter"></a>

```java
public void resetEscapeCharacter()
```

##### `resetLineDelimiter` <a name="resetLineDelimiter" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference.resetLineDelimiter"></a>

```java
public void resetLineDelimiter()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference.property.columnDelimiterInput">columnDelimiterInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference.property.columnIndexInput">columnIndexInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference.property.columnNameInput">columnNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference.property.escapeCharacterInput">escapeCharacterInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference.property.formatTypeInput">formatTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference.property.lineDelimiterInput">lineDelimiterInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference.property.columnDelimiter">columnDelimiter</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference.property.columnIndex">columnIndex</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference.property.columnName">columnName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference.property.escapeCharacter">escapeCharacter</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference.property.formatType">formatType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference.property.lineDelimiter">lineDelimiter</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadata">DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadata</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `columnDelimiterInput`<sup>Optional</sup> <a name="columnDelimiterInput" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference.property.columnDelimiterInput"></a>

```java
public java.lang.String getColumnDelimiterInput();
```

- *Type:* java.lang.String

---

##### `columnIndexInput`<sup>Optional</sup> <a name="columnIndexInput" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference.property.columnIndexInput"></a>

```java
public java.lang.Number getColumnIndexInput();
```

- *Type:* java.lang.Number

---

##### `columnNameInput`<sup>Optional</sup> <a name="columnNameInput" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference.property.columnNameInput"></a>

```java
public java.lang.String getColumnNameInput();
```

- *Type:* java.lang.String

---

##### `escapeCharacterInput`<sup>Optional</sup> <a name="escapeCharacterInput" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference.property.escapeCharacterInput"></a>

```java
public java.lang.String getEscapeCharacterInput();
```

- *Type:* java.lang.String

---

##### `formatTypeInput`<sup>Optional</sup> <a name="formatTypeInput" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference.property.formatTypeInput"></a>

```java
public java.lang.String getFormatTypeInput();
```

- *Type:* java.lang.String

---

##### `lineDelimiterInput`<sup>Optional</sup> <a name="lineDelimiterInput" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference.property.lineDelimiterInput"></a>

```java
public java.lang.String getLineDelimiterInput();
```

- *Type:* java.lang.String

---

##### `columnDelimiter`<sup>Required</sup> <a name="columnDelimiter" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference.property.columnDelimiter"></a>

```java
public java.lang.String getColumnDelimiter();
```

- *Type:* java.lang.String

---

##### `columnIndex`<sup>Required</sup> <a name="columnIndex" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference.property.columnIndex"></a>

```java
public java.lang.Number getColumnIndex();
```

- *Type:* java.lang.Number

---

##### `columnName`<sup>Required</sup> <a name="columnName" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference.property.columnName"></a>

```java
public java.lang.String getColumnName();
```

- *Type:* java.lang.String

---

##### `escapeCharacter`<sup>Required</sup> <a name="escapeCharacter" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference.property.escapeCharacter"></a>

```java
public java.lang.String getEscapeCharacter();
```

- *Type:* java.lang.String

---

##### `formatType`<sup>Required</sup> <a name="formatType" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference.property.formatType"></a>

```java
public java.lang.String getFormatType();
```

- *Type:* java.lang.String

---

##### `lineDelimiter`<sup>Required</sup> <a name="lineDelimiter" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference.property.lineDelimiter"></a>

```java
public java.lang.String getLineDelimiter();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference.property.internalValue"></a>

```java
public DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadata getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadata">DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadata</a>

---


### DataLabelingServiceDatasetDatasetSourceDetailsOutputReference <a name="DataLabelingServiceDatasetDatasetSourceDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetSourceDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetSourceDetailsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_labeling_service_dataset.DataLabelingServiceDatasetDatasetSourceDetailsOutputReference;

new DataLabelingServiceDatasetDatasetSourceDetailsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetSourceDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetSourceDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetSourceDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetSourceDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetSourceDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetSourceDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetSourceDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetSourceDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetSourceDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetSourceDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetSourceDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetSourceDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetSourceDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetSourceDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetSourceDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetSourceDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetSourceDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetSourceDetailsOutputReference.resetPrefix">resetPrefix</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetSourceDetailsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetSourceDetailsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetSourceDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetSourceDetailsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetSourceDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetSourceDetailsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetSourceDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetSourceDetailsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetSourceDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetSourceDetailsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetSourceDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetSourceDetailsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetSourceDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetSourceDetailsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetSourceDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetSourceDetailsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetSourceDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetSourceDetailsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetSourceDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetSourceDetailsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetSourceDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetSourceDetailsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetSourceDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetSourceDetailsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPrefix` <a name="resetPrefix" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetSourceDetailsOutputReference.resetPrefix"></a>

```java
public void resetPrefix()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetSourceDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetSourceDetailsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetSourceDetailsOutputReference.property.bucketInput">bucketInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetSourceDetailsOutputReference.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetSourceDetailsOutputReference.property.prefixInput">prefixInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetSourceDetailsOutputReference.property.sourceTypeInput">sourceTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetSourceDetailsOutputReference.property.bucket">bucket</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetSourceDetailsOutputReference.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetSourceDetailsOutputReference.property.prefix">prefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetSourceDetailsOutputReference.property.sourceType">sourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetSourceDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetSourceDetails">DataLabelingServiceDatasetDatasetSourceDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetSourceDetailsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetSourceDetailsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `bucketInput`<sup>Optional</sup> <a name="bucketInput" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetSourceDetailsOutputReference.property.bucketInput"></a>

```java
public java.lang.String getBucketInput();
```

- *Type:* java.lang.String

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetSourceDetailsOutputReference.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `prefixInput`<sup>Optional</sup> <a name="prefixInput" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetSourceDetailsOutputReference.property.prefixInput"></a>

```java
public java.lang.String getPrefixInput();
```

- *Type:* java.lang.String

---

##### `sourceTypeInput`<sup>Optional</sup> <a name="sourceTypeInput" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetSourceDetailsOutputReference.property.sourceTypeInput"></a>

```java
public java.lang.String getSourceTypeInput();
```

- *Type:* java.lang.String

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetSourceDetailsOutputReference.property.bucket"></a>

```java
public java.lang.String getBucket();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetSourceDetailsOutputReference.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetSourceDetailsOutputReference.property.prefix"></a>

```java
public java.lang.String getPrefix();
```

- *Type:* java.lang.String

---

##### `sourceType`<sup>Required</sup> <a name="sourceType" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetSourceDetailsOutputReference.property.sourceType"></a>

```java
public java.lang.String getSourceType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetSourceDetailsOutputReference.property.internalValue"></a>

```java
public DataLabelingServiceDatasetDatasetSourceDetails getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetSourceDetails">DataLabelingServiceDatasetDatasetSourceDetails</a>

---


### DataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormatOutputReference <a name="DataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormatOutputReference" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormatOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormatOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_labeling_service_dataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormatOutputReference;

new DataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormatOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormatOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormatOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormatOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormatOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormatOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormatOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormatOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormatOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormatOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormatOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormatOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormatOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormatOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormatOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormatOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormatOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormatOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormatOutputReference.resetVersion">resetVersion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormatOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormatOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormatOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormatOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormatOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormatOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormatOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormatOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormatOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormatOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormatOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormatOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormatOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormatOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormatOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormatOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormatOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormatOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormatOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormatOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormatOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormatOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormatOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormatOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetVersion` <a name="resetVersion" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormatOutputReference.resetVersion"></a>

```java
public void resetVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormatOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormatOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormatOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormatOutputReference.property.versionInput">versionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormatOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormatOutputReference.property.version">version</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormatOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormat">DataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormat</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormatOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormatOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormatOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormatOutputReference.property.versionInput"></a>

```java
public java.lang.String getVersionInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormatOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `version`<sup>Required</sup> <a name="version" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormatOutputReference.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormatOutputReference.property.internalValue"></a>

```java
public DataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormat getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormat">DataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormat</a>

---


### DataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPathOutputReference <a name="DataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPathOutputReference" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPathOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPathOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_labeling_service_dataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPathOutputReference;

new DataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPathOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPathOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPathOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPathOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPathOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPathOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPathOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPathOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPathOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPathOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPathOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPathOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPathOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPathOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPathOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPathOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPathOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPathOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPathOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPathOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPathOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPathOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPathOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPathOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPathOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPathOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPathOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPathOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPathOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPathOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPathOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPathOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPathOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPathOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPathOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPathOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPathOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPathOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPathOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPathOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPathOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPathOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPathOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPathOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPathOutputReference.property.bucketInput">bucketInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPathOutputReference.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPathOutputReference.property.pathInput">pathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPathOutputReference.property.sourceTypeInput">sourceTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPathOutputReference.property.bucket">bucket</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPathOutputReference.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPathOutputReference.property.path">path</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPathOutputReference.property.sourceType">sourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPathOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPath">DataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPath</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPathOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPathOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `bucketInput`<sup>Optional</sup> <a name="bucketInput" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPathOutputReference.property.bucketInput"></a>

```java
public java.lang.String getBucketInput();
```

- *Type:* java.lang.String

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPathOutputReference.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPathOutputReference.property.pathInput"></a>

```java
public java.lang.String getPathInput();
```

- *Type:* java.lang.String

---

##### `sourceTypeInput`<sup>Optional</sup> <a name="sourceTypeInput" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPathOutputReference.property.sourceTypeInput"></a>

```java
public java.lang.String getSourceTypeInput();
```

- *Type:* java.lang.String

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPathOutputReference.property.bucket"></a>

```java
public java.lang.String getBucket();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPathOutputReference.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPathOutputReference.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

---

##### `sourceType`<sup>Required</sup> <a name="sourceType" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPathOutputReference.property.sourceType"></a>

```java
public java.lang.String getSourceType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPathOutputReference.property.internalValue"></a>

```java
public DataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPath getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPath">DataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPath</a>

---


### DataLabelingServiceDatasetInitialImportDatasetConfigurationOutputReference <a name="DataLabelingServiceDatasetInitialImportDatasetConfigurationOutputReference" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_labeling_service_dataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationOutputReference;

new DataLabelingServiceDatasetInitialImportDatasetConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationOutputReference.putImportFormat">putImportFormat</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationOutputReference.putImportMetadataPath">putImportMetadataPath</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putImportFormat` <a name="putImportFormat" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationOutputReference.putImportFormat"></a>

```java
public void putImportFormat(DataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormat value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationOutputReference.putImportFormat.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormat">DataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormat</a>

---

##### `putImportMetadataPath` <a name="putImportMetadataPath" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationOutputReference.putImportMetadataPath"></a>

```java
public void putImportMetadataPath(DataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPath value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationOutputReference.putImportMetadataPath.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPath">DataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPath</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationOutputReference.property.importFormat">importFormat</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormatOutputReference">DataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormatOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationOutputReference.property.importMetadataPath">importMetadataPath</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPathOutputReference">DataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPathOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationOutputReference.property.importFormatInput">importFormatInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormat">DataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormat</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationOutputReference.property.importMetadataPathInput">importMetadataPathInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPath">DataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPath</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfiguration">DataLabelingServiceDatasetInitialImportDatasetConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `importFormat`<sup>Required</sup> <a name="importFormat" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationOutputReference.property.importFormat"></a>

```java
public DataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormatOutputReference getImportFormat();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormatOutputReference">DataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormatOutputReference</a>

---

##### `importMetadataPath`<sup>Required</sup> <a name="importMetadataPath" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationOutputReference.property.importMetadataPath"></a>

```java
public DataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPathOutputReference getImportMetadataPath();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPathOutputReference">DataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPathOutputReference</a>

---

##### `importFormatInput`<sup>Optional</sup> <a name="importFormatInput" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationOutputReference.property.importFormatInput"></a>

```java
public DataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormat getImportFormatInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormat">DataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormat</a>

---

##### `importMetadataPathInput`<sup>Optional</sup> <a name="importMetadataPathInput" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationOutputReference.property.importMetadataPathInput"></a>

```java
public DataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPath getImportMetadataPathInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPath">DataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPath</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationOutputReference.property.internalValue"></a>

```java
public DataLabelingServiceDatasetInitialImportDatasetConfiguration getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfiguration">DataLabelingServiceDatasetInitialImportDatasetConfiguration</a>

---


### DataLabelingServiceDatasetInitialRecordGenerationConfigurationOutputReference <a name="DataLabelingServiceDatasetInitialRecordGenerationConfigurationOutputReference" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialRecordGenerationConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialRecordGenerationConfigurationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_labeling_service_dataset.DataLabelingServiceDatasetInitialRecordGenerationConfigurationOutputReference;

new DataLabelingServiceDatasetInitialRecordGenerationConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialRecordGenerationConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialRecordGenerationConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialRecordGenerationConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialRecordGenerationConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialRecordGenerationConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialRecordGenerationConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialRecordGenerationConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialRecordGenerationConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialRecordGenerationConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialRecordGenerationConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialRecordGenerationConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialRecordGenerationConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialRecordGenerationConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialRecordGenerationConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialRecordGenerationConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialRecordGenerationConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialRecordGenerationConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialRecordGenerationConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialRecordGenerationConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialRecordGenerationConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialRecordGenerationConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialRecordGenerationConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialRecordGenerationConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialRecordGenerationConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialRecordGenerationConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialRecordGenerationConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialRecordGenerationConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialRecordGenerationConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialRecordGenerationConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialRecordGenerationConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialRecordGenerationConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialRecordGenerationConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialRecordGenerationConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialRecordGenerationConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialRecordGenerationConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialRecordGenerationConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialRecordGenerationConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialRecordGenerationConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialRecordGenerationConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialRecordGenerationConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialRecordGenerationConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialRecordGenerationConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialRecordGenerationConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialRecordGenerationConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialRecordGenerationConfiguration">DataLabelingServiceDatasetInitialRecordGenerationConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialRecordGenerationConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialRecordGenerationConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialRecordGenerationConfigurationOutputReference.property.internalValue"></a>

```java
public DataLabelingServiceDatasetInitialRecordGenerationConfiguration getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialRecordGenerationConfiguration">DataLabelingServiceDatasetInitialRecordGenerationConfiguration</a>

---


### DataLabelingServiceDatasetLabelSetItemsList <a name="DataLabelingServiceDatasetLabelSetItemsList" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetItemsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_labeling_service_dataset.DataLabelingServiceDatasetLabelSetItemsList;

new DataLabelingServiceDatasetLabelSetItemsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetItemsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetItemsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetItemsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetItemsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetItemsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetItemsList.get"></a>

```java
public DataLabelingServiceDatasetLabelSetItemsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetItemsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetItemsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetItemsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetItemsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetItems">DataLabelingServiceDatasetLabelSetItems</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetItemsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetItemsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetItemsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetItems">DataLabelingServiceDatasetLabelSetItems</a>>

---


### DataLabelingServiceDatasetLabelSetItemsOutputReference <a name="DataLabelingServiceDatasetLabelSetItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetItemsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_labeling_service_dataset.DataLabelingServiceDatasetLabelSetItemsOutputReference;

new DataLabelingServiceDatasetLabelSetItemsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetItemsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetItemsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetItemsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetItemsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetItemsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetItemsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetItemsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetItemsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetItemsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetItemsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetItemsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetItemsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetItemsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetItemsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetItemsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetItemsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetItemsOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetItemsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetItemsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetItems">DataLabelingServiceDatasetLabelSetItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetItemsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetItemsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetItemsOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetItemsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetItemsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetItems">DataLabelingServiceDatasetLabelSetItems</a>

---


### DataLabelingServiceDatasetLabelSetOutputReference <a name="DataLabelingServiceDatasetLabelSetOutputReference" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_labeling_service_dataset.DataLabelingServiceDatasetLabelSetOutputReference;

new DataLabelingServiceDatasetLabelSetOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetOutputReference.putItems">putItems</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putItems` <a name="putItems" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetOutputReference.putItems"></a>

```java
public void putItems(IResolvable OR java.util.List<DataLabelingServiceDatasetLabelSetItems> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetOutputReference.putItems.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetItems">DataLabelingServiceDatasetLabelSetItems</a>>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetItemsList">DataLabelingServiceDatasetLabelSetItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetOutputReference.property.itemsInput">itemsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetItems">DataLabelingServiceDatasetLabelSetItems</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSet">DataLabelingServiceDatasetLabelSet</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetOutputReference.property.items"></a>

```java
public DataLabelingServiceDatasetLabelSetItemsList getItems();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetItemsList">DataLabelingServiceDatasetLabelSetItemsList</a>

---

##### `itemsInput`<sup>Optional</sup> <a name="itemsInput" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetOutputReference.property.itemsInput"></a>

```java
public java.lang.Object getItemsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetItems">DataLabelingServiceDatasetLabelSetItems</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetOutputReference.property.internalValue"></a>

```java
public DataLabelingServiceDatasetLabelSet getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSet">DataLabelingServiceDatasetLabelSet</a>

---


### DataLabelingServiceDatasetTimeoutsOutputReference <a name="DataLabelingServiceDatasetTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_labeling_service_dataset.DataLabelingServiceDatasetTimeoutsOutputReference;

new DataLabelingServiceDatasetTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetTimeouts">DataLabelingServiceDatasetTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetTimeouts">DataLabelingServiceDatasetTimeouts</a>

---



