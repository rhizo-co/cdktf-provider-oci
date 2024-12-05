# `databaseExadataInfrastructure` Submodule <a name="`databaseExadataInfrastructure` Submodule" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatabaseExadataInfrastructure <a name="DatabaseExadataInfrastructure" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure oci_database_exadata_infrastructure}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_exadata_infrastructure.DatabaseExadataInfrastructure;

DatabaseExadataInfrastructure.Builder.create(Construct scope, java.lang.String id)
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
    .adminNetworkCidr(java.lang.String)
    .cloudControlPlaneServer1(java.lang.String)
    .cloudControlPlaneServer2(java.lang.String)
    .compartmentId(java.lang.String)
    .displayName(java.lang.String)
    .dnsServer(java.util.List<java.lang.String>)
    .gateway(java.lang.String)
    .infiniBandNetworkCidr(java.lang.String)
    .netmask(java.lang.String)
    .ntpServer(java.util.List<java.lang.String>)
    .shape(java.lang.String)
    .timeZone(java.lang.String)
//  .activationFile(java.lang.String)
//  .additionalStorageCount(java.lang.Number)
//  .computeCount(java.lang.Number)
//  .contacts(IResolvable)
//  .contacts(java.util.List<DatabaseExadataInfrastructureContacts>)
//  .corporateProxy(java.lang.String)
//  .createAsync(java.lang.Boolean)
//  .createAsync(IResolvable)
//  .definedTags(java.util.Map<java.lang.String, java.lang.String>)
//  .freeformTags(java.util.Map<java.lang.String, java.lang.String>)
//  .id(java.lang.String)
//  .isCpsOfflineReportEnabled(java.lang.Boolean)
//  .isCpsOfflineReportEnabled(IResolvable)
//  .isMultiRackDeployment(java.lang.Boolean)
//  .isMultiRackDeployment(IResolvable)
//  .maintenanceWindow(DatabaseExadataInfrastructureMaintenanceWindow)
//  .multiRackConfigurationFile(java.lang.String)
//  .networkBondingModeDetails(DatabaseExadataInfrastructureNetworkBondingModeDetails)
//  .storageCount(java.lang.Number)
//  .timeouts(DatabaseExadataInfrastructureTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.Initializer.parameter.adminNetworkCidr">adminNetworkCidr</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#admin_network_cidr DatabaseExadataInfrastructure#admin_network_cidr}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.Initializer.parameter.cloudControlPlaneServer1">cloudControlPlaneServer1</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#cloud_control_plane_server1 DatabaseExadataInfrastructure#cloud_control_plane_server1}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.Initializer.parameter.cloudControlPlaneServer2">cloudControlPlaneServer2</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#cloud_control_plane_server2 DatabaseExadataInfrastructure#cloud_control_plane_server2}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.Initializer.parameter.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#compartment_id DatabaseExadataInfrastructure#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#display_name DatabaseExadataInfrastructure#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.Initializer.parameter.dnsServer">dnsServer</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#dns_server DatabaseExadataInfrastructure#dns_server}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.Initializer.parameter.gateway">gateway</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#gateway DatabaseExadataInfrastructure#gateway}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.Initializer.parameter.infiniBandNetworkCidr">infiniBandNetworkCidr</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#infini_band_network_cidr DatabaseExadataInfrastructure#infini_band_network_cidr}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.Initializer.parameter.netmask">netmask</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#netmask DatabaseExadataInfrastructure#netmask}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.Initializer.parameter.ntpServer">ntpServer</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#ntp_server DatabaseExadataInfrastructure#ntp_server}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.Initializer.parameter.shape">shape</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#shape DatabaseExadataInfrastructure#shape}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.Initializer.parameter.timeZone">timeZone</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#time_zone DatabaseExadataInfrastructure#time_zone}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.Initializer.parameter.activationFile">activationFile</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#activation_file DatabaseExadataInfrastructure#activation_file}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.Initializer.parameter.additionalStorageCount">additionalStorageCount</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#additional_storage_count DatabaseExadataInfrastructure#additional_storage_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.Initializer.parameter.computeCount">computeCount</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#compute_count DatabaseExadataInfrastructure#compute_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.Initializer.parameter.contacts">contacts</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContacts">DatabaseExadataInfrastructureContacts</a>></code> | contacts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.Initializer.parameter.corporateProxy">corporateProxy</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#corporate_proxy DatabaseExadataInfrastructure#corporate_proxy}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.Initializer.parameter.createAsync">createAsync</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#create_async DatabaseExadataInfrastructure#create_async}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.Initializer.parameter.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#defined_tags DatabaseExadataInfrastructure#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.Initializer.parameter.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#freeform_tags DatabaseExadataInfrastructure#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#id DatabaseExadataInfrastructure#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.Initializer.parameter.isCpsOfflineReportEnabled">isCpsOfflineReportEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#is_cps_offline_report_enabled DatabaseExadataInfrastructure#is_cps_offline_report_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.Initializer.parameter.isMultiRackDeployment">isMultiRackDeployment</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#is_multi_rack_deployment DatabaseExadataInfrastructure#is_multi_rack_deployment}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.Initializer.parameter.maintenanceWindow">maintenanceWindow</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindow">DatabaseExadataInfrastructureMaintenanceWindow</a></code> | maintenance_window block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.Initializer.parameter.multiRackConfigurationFile">multiRackConfigurationFile</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#multi_rack_configuration_file DatabaseExadataInfrastructure#multi_rack_configuration_file}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.Initializer.parameter.networkBondingModeDetails">networkBondingModeDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetails">DatabaseExadataInfrastructureNetworkBondingModeDetails</a></code> | network_bonding_mode_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.Initializer.parameter.storageCount">storageCount</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#storage_count DatabaseExadataInfrastructure#storage_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeouts">DatabaseExadataInfrastructureTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `adminNetworkCidr`<sup>Required</sup> <a name="adminNetworkCidr" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.Initializer.parameter.adminNetworkCidr"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#admin_network_cidr DatabaseExadataInfrastructure#admin_network_cidr}.

---

##### `cloudControlPlaneServer1`<sup>Required</sup> <a name="cloudControlPlaneServer1" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.Initializer.parameter.cloudControlPlaneServer1"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#cloud_control_plane_server1 DatabaseExadataInfrastructure#cloud_control_plane_server1}.

---

##### `cloudControlPlaneServer2`<sup>Required</sup> <a name="cloudControlPlaneServer2" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.Initializer.parameter.cloudControlPlaneServer2"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#cloud_control_plane_server2 DatabaseExadataInfrastructure#cloud_control_plane_server2}.

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.Initializer.parameter.compartmentId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#compartment_id DatabaseExadataInfrastructure#compartment_id}.

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#display_name DatabaseExadataInfrastructure#display_name}.

---

##### `dnsServer`<sup>Required</sup> <a name="dnsServer" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.Initializer.parameter.dnsServer"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#dns_server DatabaseExadataInfrastructure#dns_server}.

---

##### `gateway`<sup>Required</sup> <a name="gateway" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.Initializer.parameter.gateway"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#gateway DatabaseExadataInfrastructure#gateway}.

---

##### `infiniBandNetworkCidr`<sup>Required</sup> <a name="infiniBandNetworkCidr" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.Initializer.parameter.infiniBandNetworkCidr"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#infini_band_network_cidr DatabaseExadataInfrastructure#infini_band_network_cidr}.

---

##### `netmask`<sup>Required</sup> <a name="netmask" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.Initializer.parameter.netmask"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#netmask DatabaseExadataInfrastructure#netmask}.

---

##### `ntpServer`<sup>Required</sup> <a name="ntpServer" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.Initializer.parameter.ntpServer"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#ntp_server DatabaseExadataInfrastructure#ntp_server}.

---

##### `shape`<sup>Required</sup> <a name="shape" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.Initializer.parameter.shape"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#shape DatabaseExadataInfrastructure#shape}.

---

##### `timeZone`<sup>Required</sup> <a name="timeZone" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.Initializer.parameter.timeZone"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#time_zone DatabaseExadataInfrastructure#time_zone}.

---

##### `activationFile`<sup>Optional</sup> <a name="activationFile" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.Initializer.parameter.activationFile"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#activation_file DatabaseExadataInfrastructure#activation_file}.

---

##### `additionalStorageCount`<sup>Optional</sup> <a name="additionalStorageCount" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.Initializer.parameter.additionalStorageCount"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#additional_storage_count DatabaseExadataInfrastructure#additional_storage_count}.

---

##### `computeCount`<sup>Optional</sup> <a name="computeCount" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.Initializer.parameter.computeCount"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#compute_count DatabaseExadataInfrastructure#compute_count}.

---

##### `contacts`<sup>Optional</sup> <a name="contacts" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.Initializer.parameter.contacts"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContacts">DatabaseExadataInfrastructureContacts</a>>

contacts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#contacts DatabaseExadataInfrastructure#contacts}

---

##### `corporateProxy`<sup>Optional</sup> <a name="corporateProxy" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.Initializer.parameter.corporateProxy"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#corporate_proxy DatabaseExadataInfrastructure#corporate_proxy}.

---

##### `createAsync`<sup>Optional</sup> <a name="createAsync" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.Initializer.parameter.createAsync"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#create_async DatabaseExadataInfrastructure#create_async}.

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.Initializer.parameter.definedTags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#defined_tags DatabaseExadataInfrastructure#defined_tags}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.Initializer.parameter.freeformTags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#freeform_tags DatabaseExadataInfrastructure#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#id DatabaseExadataInfrastructure#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isCpsOfflineReportEnabled`<sup>Optional</sup> <a name="isCpsOfflineReportEnabled" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.Initializer.parameter.isCpsOfflineReportEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#is_cps_offline_report_enabled DatabaseExadataInfrastructure#is_cps_offline_report_enabled}.

---

##### `isMultiRackDeployment`<sup>Optional</sup> <a name="isMultiRackDeployment" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.Initializer.parameter.isMultiRackDeployment"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#is_multi_rack_deployment DatabaseExadataInfrastructure#is_multi_rack_deployment}.

---

##### `maintenanceWindow`<sup>Optional</sup> <a name="maintenanceWindow" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.Initializer.parameter.maintenanceWindow"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindow">DatabaseExadataInfrastructureMaintenanceWindow</a>

maintenance_window block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#maintenance_window DatabaseExadataInfrastructure#maintenance_window}

---

##### `multiRackConfigurationFile`<sup>Optional</sup> <a name="multiRackConfigurationFile" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.Initializer.parameter.multiRackConfigurationFile"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#multi_rack_configuration_file DatabaseExadataInfrastructure#multi_rack_configuration_file}.

---

##### `networkBondingModeDetails`<sup>Optional</sup> <a name="networkBondingModeDetails" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.Initializer.parameter.networkBondingModeDetails"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetails">DatabaseExadataInfrastructureNetworkBondingModeDetails</a>

network_bonding_mode_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#network_bonding_mode_details DatabaseExadataInfrastructure#network_bonding_mode_details}

---

##### `storageCount`<sup>Optional</sup> <a name="storageCount" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.Initializer.parameter.storageCount"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#storage_count DatabaseExadataInfrastructure#storage_count}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeouts">DatabaseExadataInfrastructureTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#timeouts DatabaseExadataInfrastructure#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.putContacts">putContacts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.putMaintenanceWindow">putMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.putNetworkBondingModeDetails">putNetworkBondingModeDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.resetActivationFile">resetActivationFile</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.resetAdditionalStorageCount">resetAdditionalStorageCount</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.resetComputeCount">resetComputeCount</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.resetContacts">resetContacts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.resetCorporateProxy">resetCorporateProxy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.resetCreateAsync">resetCreateAsync</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.resetDefinedTags">resetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.resetFreeformTags">resetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.resetIsCpsOfflineReportEnabled">resetIsCpsOfflineReportEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.resetIsMultiRackDeployment">resetIsMultiRackDeployment</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.resetMaintenanceWindow">resetMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.resetMultiRackConfigurationFile">resetMultiRackConfigurationFile</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.resetNetworkBondingModeDetails">resetNetworkBondingModeDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.resetStorageCount">resetStorageCount</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putContacts` <a name="putContacts" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.putContacts"></a>

```java
public void putContacts(IResolvable OR java.util.List<DatabaseExadataInfrastructureContacts> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.putContacts.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContacts">DatabaseExadataInfrastructureContacts</a>>

---

##### `putMaintenanceWindow` <a name="putMaintenanceWindow" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.putMaintenanceWindow"></a>

```java
public void putMaintenanceWindow(DatabaseExadataInfrastructureMaintenanceWindow value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.putMaintenanceWindow.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindow">DatabaseExadataInfrastructureMaintenanceWindow</a>

---

##### `putNetworkBondingModeDetails` <a name="putNetworkBondingModeDetails" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.putNetworkBondingModeDetails"></a>

```java
public void putNetworkBondingModeDetails(DatabaseExadataInfrastructureNetworkBondingModeDetails value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.putNetworkBondingModeDetails.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetails">DatabaseExadataInfrastructureNetworkBondingModeDetails</a>

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.putTimeouts"></a>

```java
public void putTimeouts(DatabaseExadataInfrastructureTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeouts">DatabaseExadataInfrastructureTimeouts</a>

---

##### `resetActivationFile` <a name="resetActivationFile" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.resetActivationFile"></a>

```java
public void resetActivationFile()
```

##### `resetAdditionalStorageCount` <a name="resetAdditionalStorageCount" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.resetAdditionalStorageCount"></a>

```java
public void resetAdditionalStorageCount()
```

##### `resetComputeCount` <a name="resetComputeCount" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.resetComputeCount"></a>

```java
public void resetComputeCount()
```

##### `resetContacts` <a name="resetContacts" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.resetContacts"></a>

```java
public void resetContacts()
```

##### `resetCorporateProxy` <a name="resetCorporateProxy" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.resetCorporateProxy"></a>

```java
public void resetCorporateProxy()
```

##### `resetCreateAsync` <a name="resetCreateAsync" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.resetCreateAsync"></a>

```java
public void resetCreateAsync()
```

##### `resetDefinedTags` <a name="resetDefinedTags" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.resetDefinedTags"></a>

```java
public void resetDefinedTags()
```

##### `resetFreeformTags` <a name="resetFreeformTags" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.resetFreeformTags"></a>

```java
public void resetFreeformTags()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.resetId"></a>

```java
public void resetId()
```

##### `resetIsCpsOfflineReportEnabled` <a name="resetIsCpsOfflineReportEnabled" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.resetIsCpsOfflineReportEnabled"></a>

```java
public void resetIsCpsOfflineReportEnabled()
```

##### `resetIsMultiRackDeployment` <a name="resetIsMultiRackDeployment" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.resetIsMultiRackDeployment"></a>

```java
public void resetIsMultiRackDeployment()
```

##### `resetMaintenanceWindow` <a name="resetMaintenanceWindow" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.resetMaintenanceWindow"></a>

```java
public void resetMaintenanceWindow()
```

##### `resetMultiRackConfigurationFile` <a name="resetMultiRackConfigurationFile" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.resetMultiRackConfigurationFile"></a>

```java
public void resetMultiRackConfigurationFile()
```

##### `resetNetworkBondingModeDetails` <a name="resetNetworkBondingModeDetails" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.resetNetworkBondingModeDetails"></a>

```java
public void resetNetworkBondingModeDetails()
```

##### `resetStorageCount` <a name="resetStorageCount" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.resetStorageCount"></a>

```java
public void resetStorageCount()
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DatabaseExadataInfrastructure resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_exadata_infrastructure.DatabaseExadataInfrastructure;

DatabaseExadataInfrastructure.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_exadata_infrastructure.DatabaseExadataInfrastructure;

DatabaseExadataInfrastructure.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_exadata_infrastructure.DatabaseExadataInfrastructure;

DatabaseExadataInfrastructure.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_exadata_infrastructure.DatabaseExadataInfrastructure;

DatabaseExadataInfrastructure.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DatabaseExadataInfrastructure.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DatabaseExadataInfrastructure resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DatabaseExadataInfrastructure to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DatabaseExadataInfrastructure that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DatabaseExadataInfrastructure to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.activatedStorageCount">activatedStorageCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.additionalComputeCount">additionalComputeCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.additionalComputeSystemModel">additionalComputeSystemModel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.availabilityDomain">availabilityDomain</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.contacts">contacts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsList">DatabaseExadataInfrastructureContactsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.cpusEnabled">cpusEnabled</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.csiNumber">csiNumber</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.dataStorageSizeInTbs">dataStorageSizeInTbs</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.dbNodeStorageSizeInGbs">dbNodeStorageSizeInGbs</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.dbServerVersion">dbServerVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.definedFileSystemConfigurations">definedFileSystemConfigurations</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsList">DatabaseExadataInfrastructureDefinedFileSystemConfigurationsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.lifecycleDetails">lifecycleDetails</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.maintenanceSloStatus">maintenanceSloStatus</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.maintenanceWindow">maintenanceWindow</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference">DatabaseExadataInfrastructureMaintenanceWindowOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.maxCpuCount">maxCpuCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.maxDataStorageInTbs">maxDataStorageInTbs</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.maxDbNodeStorageInGbs">maxDbNodeStorageInGbs</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.maxMemoryInGbs">maxMemoryInGbs</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.memorySizeInGbs">memorySizeInGbs</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.monthlyDbServerVersion">monthlyDbServerVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.networkBondingModeDetails">networkBondingModeDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetailsOutputReference">DatabaseExadataInfrastructureNetworkBondingModeDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.rackSerialNumber">rackSerialNumber</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.storageServerVersion">storageServerVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.timeCreated">timeCreated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeoutsOutputReference">DatabaseExadataInfrastructureTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.activationFileInput">activationFileInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.additionalStorageCountInput">additionalStorageCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.adminNetworkCidrInput">adminNetworkCidrInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.cloudControlPlaneServer1Input">cloudControlPlaneServer1Input</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.cloudControlPlaneServer2Input">cloudControlPlaneServer2Input</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.compartmentIdInput">compartmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.computeCountInput">computeCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.contactsInput">contactsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContacts">DatabaseExadataInfrastructureContacts</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.corporateProxyInput">corporateProxyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.createAsyncInput">createAsyncInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.definedTagsInput">definedTagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.dnsServerInput">dnsServerInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.freeformTagsInput">freeformTagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.gatewayInput">gatewayInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.infiniBandNetworkCidrInput">infiniBandNetworkCidrInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.isCpsOfflineReportEnabledInput">isCpsOfflineReportEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.isMultiRackDeploymentInput">isMultiRackDeploymentInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.maintenanceWindowInput">maintenanceWindowInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindow">DatabaseExadataInfrastructureMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.multiRackConfigurationFileInput">multiRackConfigurationFileInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.netmaskInput">netmaskInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.networkBondingModeDetailsInput">networkBondingModeDetailsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetails">DatabaseExadataInfrastructureNetworkBondingModeDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.ntpServerInput">ntpServerInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.shapeInput">shapeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.storageCountInput">storageCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeouts">DatabaseExadataInfrastructureTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.timeZoneInput">timeZoneInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.activationFile">activationFile</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.additionalStorageCount">additionalStorageCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.adminNetworkCidr">adminNetworkCidr</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.cloudControlPlaneServer1">cloudControlPlaneServer1</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.cloudControlPlaneServer2">cloudControlPlaneServer2</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.computeCount">computeCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.corporateProxy">corporateProxy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.createAsync">createAsync</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.dnsServer">dnsServer</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.gateway">gateway</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.infiniBandNetworkCidr">infiniBandNetworkCidr</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.isCpsOfflineReportEnabled">isCpsOfflineReportEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.isMultiRackDeployment">isMultiRackDeployment</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.multiRackConfigurationFile">multiRackConfigurationFile</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.netmask">netmask</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.ntpServer">ntpServer</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.shape">shape</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.storageCount">storageCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.timeZone">timeZone</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `activatedStorageCount`<sup>Required</sup> <a name="activatedStorageCount" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.activatedStorageCount"></a>

```java
public java.lang.Number getActivatedStorageCount();
```

- *Type:* java.lang.Number

---

##### `additionalComputeCount`<sup>Required</sup> <a name="additionalComputeCount" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.additionalComputeCount"></a>

```java
public java.lang.Number getAdditionalComputeCount();
```

- *Type:* java.lang.Number

---

##### `additionalComputeSystemModel`<sup>Required</sup> <a name="additionalComputeSystemModel" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.additionalComputeSystemModel"></a>

```java
public java.lang.String getAdditionalComputeSystemModel();
```

- *Type:* java.lang.String

---

##### `availabilityDomain`<sup>Required</sup> <a name="availabilityDomain" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.availabilityDomain"></a>

```java
public java.lang.String getAvailabilityDomain();
```

- *Type:* java.lang.String

---

##### `contacts`<sup>Required</sup> <a name="contacts" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.contacts"></a>

```java
public DatabaseExadataInfrastructureContactsList getContacts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsList">DatabaseExadataInfrastructureContactsList</a>

---

##### `cpusEnabled`<sup>Required</sup> <a name="cpusEnabled" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.cpusEnabled"></a>

```java
public java.lang.Number getCpusEnabled();
```

- *Type:* java.lang.Number

---

##### `csiNumber`<sup>Required</sup> <a name="csiNumber" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.csiNumber"></a>

```java
public java.lang.String getCsiNumber();
```

- *Type:* java.lang.String

---

##### `dataStorageSizeInTbs`<sup>Required</sup> <a name="dataStorageSizeInTbs" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.dataStorageSizeInTbs"></a>

```java
public java.lang.Number getDataStorageSizeInTbs();
```

- *Type:* java.lang.Number

---

##### `dbNodeStorageSizeInGbs`<sup>Required</sup> <a name="dbNodeStorageSizeInGbs" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.dbNodeStorageSizeInGbs"></a>

```java
public java.lang.Number getDbNodeStorageSizeInGbs();
```

- *Type:* java.lang.Number

---

##### `dbServerVersion`<sup>Required</sup> <a name="dbServerVersion" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.dbServerVersion"></a>

```java
public java.lang.String getDbServerVersion();
```

- *Type:* java.lang.String

---

##### `definedFileSystemConfigurations`<sup>Required</sup> <a name="definedFileSystemConfigurations" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.definedFileSystemConfigurations"></a>

```java
public DatabaseExadataInfrastructureDefinedFileSystemConfigurationsList getDefinedFileSystemConfigurations();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsList">DatabaseExadataInfrastructureDefinedFileSystemConfigurationsList</a>

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.lifecycleDetails"></a>

```java
public java.lang.String getLifecycleDetails();
```

- *Type:* java.lang.String

---

##### `maintenanceSloStatus`<sup>Required</sup> <a name="maintenanceSloStatus" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.maintenanceSloStatus"></a>

```java
public java.lang.String getMaintenanceSloStatus();
```

- *Type:* java.lang.String

---

##### `maintenanceWindow`<sup>Required</sup> <a name="maintenanceWindow" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.maintenanceWindow"></a>

```java
public DatabaseExadataInfrastructureMaintenanceWindowOutputReference getMaintenanceWindow();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference">DatabaseExadataInfrastructureMaintenanceWindowOutputReference</a>

---

##### `maxCpuCount`<sup>Required</sup> <a name="maxCpuCount" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.maxCpuCount"></a>

```java
public java.lang.Number getMaxCpuCount();
```

- *Type:* java.lang.Number

---

##### `maxDataStorageInTbs`<sup>Required</sup> <a name="maxDataStorageInTbs" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.maxDataStorageInTbs"></a>

```java
public java.lang.Number getMaxDataStorageInTbs();
```

- *Type:* java.lang.Number

---

##### `maxDbNodeStorageInGbs`<sup>Required</sup> <a name="maxDbNodeStorageInGbs" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.maxDbNodeStorageInGbs"></a>

```java
public java.lang.Number getMaxDbNodeStorageInGbs();
```

- *Type:* java.lang.Number

---

##### `maxMemoryInGbs`<sup>Required</sup> <a name="maxMemoryInGbs" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.maxMemoryInGbs"></a>

```java
public java.lang.Number getMaxMemoryInGbs();
```

- *Type:* java.lang.Number

---

##### `memorySizeInGbs`<sup>Required</sup> <a name="memorySizeInGbs" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.memorySizeInGbs"></a>

```java
public java.lang.Number getMemorySizeInGbs();
```

- *Type:* java.lang.Number

---

##### `monthlyDbServerVersion`<sup>Required</sup> <a name="monthlyDbServerVersion" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.monthlyDbServerVersion"></a>

```java
public java.lang.String getMonthlyDbServerVersion();
```

- *Type:* java.lang.String

---

##### `networkBondingModeDetails`<sup>Required</sup> <a name="networkBondingModeDetails" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.networkBondingModeDetails"></a>

```java
public DatabaseExadataInfrastructureNetworkBondingModeDetailsOutputReference getNetworkBondingModeDetails();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetailsOutputReference">DatabaseExadataInfrastructureNetworkBondingModeDetailsOutputReference</a>

---

##### `rackSerialNumber`<sup>Required</sup> <a name="rackSerialNumber" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.rackSerialNumber"></a>

```java
public java.lang.String getRackSerialNumber();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `storageServerVersion`<sup>Required</sup> <a name="storageServerVersion" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.storageServerVersion"></a>

```java
public java.lang.String getStorageServerVersion();
```

- *Type:* java.lang.String

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.timeCreated"></a>

```java
public java.lang.String getTimeCreated();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.timeouts"></a>

```java
public DatabaseExadataInfrastructureTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeoutsOutputReference">DatabaseExadataInfrastructureTimeoutsOutputReference</a>

---

##### `activationFileInput`<sup>Optional</sup> <a name="activationFileInput" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.activationFileInput"></a>

```java
public java.lang.String getActivationFileInput();
```

- *Type:* java.lang.String

---

##### `additionalStorageCountInput`<sup>Optional</sup> <a name="additionalStorageCountInput" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.additionalStorageCountInput"></a>

```java
public java.lang.Number getAdditionalStorageCountInput();
```

- *Type:* java.lang.Number

---

##### `adminNetworkCidrInput`<sup>Optional</sup> <a name="adminNetworkCidrInput" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.adminNetworkCidrInput"></a>

```java
public java.lang.String getAdminNetworkCidrInput();
```

- *Type:* java.lang.String

---

##### `cloudControlPlaneServer1Input`<sup>Optional</sup> <a name="cloudControlPlaneServer1Input" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.cloudControlPlaneServer1Input"></a>

```java
public java.lang.String getCloudControlPlaneServer1Input();
```

- *Type:* java.lang.String

---

##### `cloudControlPlaneServer2Input`<sup>Optional</sup> <a name="cloudControlPlaneServer2Input" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.cloudControlPlaneServer2Input"></a>

```java
public java.lang.String getCloudControlPlaneServer2Input();
```

- *Type:* java.lang.String

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.compartmentIdInput"></a>

```java
public java.lang.String getCompartmentIdInput();
```

- *Type:* java.lang.String

---

##### `computeCountInput`<sup>Optional</sup> <a name="computeCountInput" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.computeCountInput"></a>

```java
public java.lang.Number getComputeCountInput();
```

- *Type:* java.lang.Number

---

##### `contactsInput`<sup>Optional</sup> <a name="contactsInput" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.contactsInput"></a>

```java
public java.lang.Object getContactsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContacts">DatabaseExadataInfrastructureContacts</a>>

---

##### `corporateProxyInput`<sup>Optional</sup> <a name="corporateProxyInput" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.corporateProxyInput"></a>

```java
public java.lang.String getCorporateProxyInput();
```

- *Type:* java.lang.String

---

##### `createAsyncInput`<sup>Optional</sup> <a name="createAsyncInput" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.createAsyncInput"></a>

```java
public java.lang.Object getCreateAsyncInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `definedTagsInput`<sup>Optional</sup> <a name="definedTagsInput" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.definedTagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `dnsServerInput`<sup>Optional</sup> <a name="dnsServerInput" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.dnsServerInput"></a>

```java
public java.util.List<java.lang.String> getDnsServerInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `freeformTagsInput`<sup>Optional</sup> <a name="freeformTagsInput" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.freeformTagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `gatewayInput`<sup>Optional</sup> <a name="gatewayInput" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.gatewayInput"></a>

```java
public java.lang.String getGatewayInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `infiniBandNetworkCidrInput`<sup>Optional</sup> <a name="infiniBandNetworkCidrInput" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.infiniBandNetworkCidrInput"></a>

```java
public java.lang.String getInfiniBandNetworkCidrInput();
```

- *Type:* java.lang.String

---

##### `isCpsOfflineReportEnabledInput`<sup>Optional</sup> <a name="isCpsOfflineReportEnabledInput" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.isCpsOfflineReportEnabledInput"></a>

```java
public java.lang.Object getIsCpsOfflineReportEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isMultiRackDeploymentInput`<sup>Optional</sup> <a name="isMultiRackDeploymentInput" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.isMultiRackDeploymentInput"></a>

```java
public java.lang.Object getIsMultiRackDeploymentInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `maintenanceWindowInput`<sup>Optional</sup> <a name="maintenanceWindowInput" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.maintenanceWindowInput"></a>

```java
public DatabaseExadataInfrastructureMaintenanceWindow getMaintenanceWindowInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindow">DatabaseExadataInfrastructureMaintenanceWindow</a>

---

##### `multiRackConfigurationFileInput`<sup>Optional</sup> <a name="multiRackConfigurationFileInput" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.multiRackConfigurationFileInput"></a>

```java
public java.lang.String getMultiRackConfigurationFileInput();
```

- *Type:* java.lang.String

---

##### `netmaskInput`<sup>Optional</sup> <a name="netmaskInput" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.netmaskInput"></a>

```java
public java.lang.String getNetmaskInput();
```

- *Type:* java.lang.String

---

##### `networkBondingModeDetailsInput`<sup>Optional</sup> <a name="networkBondingModeDetailsInput" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.networkBondingModeDetailsInput"></a>

```java
public DatabaseExadataInfrastructureNetworkBondingModeDetails getNetworkBondingModeDetailsInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetails">DatabaseExadataInfrastructureNetworkBondingModeDetails</a>

---

##### `ntpServerInput`<sup>Optional</sup> <a name="ntpServerInput" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.ntpServerInput"></a>

```java
public java.util.List<java.lang.String> getNtpServerInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `shapeInput`<sup>Optional</sup> <a name="shapeInput" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.shapeInput"></a>

```java
public java.lang.String getShapeInput();
```

- *Type:* java.lang.String

---

##### `storageCountInput`<sup>Optional</sup> <a name="storageCountInput" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.storageCountInput"></a>

```java
public java.lang.Number getStorageCountInput();
```

- *Type:* java.lang.Number

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeouts">DatabaseExadataInfrastructureTimeouts</a>

---

##### `timeZoneInput`<sup>Optional</sup> <a name="timeZoneInput" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.timeZoneInput"></a>

```java
public java.lang.String getTimeZoneInput();
```

- *Type:* java.lang.String

---

##### `activationFile`<sup>Required</sup> <a name="activationFile" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.activationFile"></a>

```java
public java.lang.String getActivationFile();
```

- *Type:* java.lang.String

---

##### `additionalStorageCount`<sup>Required</sup> <a name="additionalStorageCount" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.additionalStorageCount"></a>

```java
public java.lang.Number getAdditionalStorageCount();
```

- *Type:* java.lang.Number

---

##### `adminNetworkCidr`<sup>Required</sup> <a name="adminNetworkCidr" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.adminNetworkCidr"></a>

```java
public java.lang.String getAdminNetworkCidr();
```

- *Type:* java.lang.String

---

##### `cloudControlPlaneServer1`<sup>Required</sup> <a name="cloudControlPlaneServer1" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.cloudControlPlaneServer1"></a>

```java
public java.lang.String getCloudControlPlaneServer1();
```

- *Type:* java.lang.String

---

##### `cloudControlPlaneServer2`<sup>Required</sup> <a name="cloudControlPlaneServer2" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.cloudControlPlaneServer2"></a>

```java
public java.lang.String getCloudControlPlaneServer2();
```

- *Type:* java.lang.String

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `computeCount`<sup>Required</sup> <a name="computeCount" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.computeCount"></a>

```java
public java.lang.Number getComputeCount();
```

- *Type:* java.lang.Number

---

##### `corporateProxy`<sup>Required</sup> <a name="corporateProxy" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.corporateProxy"></a>

```java
public java.lang.String getCorporateProxy();
```

- *Type:* java.lang.String

---

##### `createAsync`<sup>Required</sup> <a name="createAsync" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.createAsync"></a>

```java
public java.lang.Object getCreateAsync();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.definedTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `dnsServer`<sup>Required</sup> <a name="dnsServer" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.dnsServer"></a>

```java
public java.util.List<java.lang.String> getDnsServer();
```

- *Type:* java.util.List<java.lang.String>

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.freeformTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `gateway`<sup>Required</sup> <a name="gateway" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.gateway"></a>

```java
public java.lang.String getGateway();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `infiniBandNetworkCidr`<sup>Required</sup> <a name="infiniBandNetworkCidr" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.infiniBandNetworkCidr"></a>

```java
public java.lang.String getInfiniBandNetworkCidr();
```

- *Type:* java.lang.String

---

##### `isCpsOfflineReportEnabled`<sup>Required</sup> <a name="isCpsOfflineReportEnabled" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.isCpsOfflineReportEnabled"></a>

```java
public java.lang.Object getIsCpsOfflineReportEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isMultiRackDeployment`<sup>Required</sup> <a name="isMultiRackDeployment" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.isMultiRackDeployment"></a>

```java
public java.lang.Object getIsMultiRackDeployment();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `multiRackConfigurationFile`<sup>Required</sup> <a name="multiRackConfigurationFile" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.multiRackConfigurationFile"></a>

```java
public java.lang.String getMultiRackConfigurationFile();
```

- *Type:* java.lang.String

---

##### `netmask`<sup>Required</sup> <a name="netmask" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.netmask"></a>

```java
public java.lang.String getNetmask();
```

- *Type:* java.lang.String

---

##### `ntpServer`<sup>Required</sup> <a name="ntpServer" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.ntpServer"></a>

```java
public java.util.List<java.lang.String> getNtpServer();
```

- *Type:* java.util.List<java.lang.String>

---

##### `shape`<sup>Required</sup> <a name="shape" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.shape"></a>

```java
public java.lang.String getShape();
```

- *Type:* java.lang.String

---

##### `storageCount`<sup>Required</sup> <a name="storageCount" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.storageCount"></a>

```java
public java.lang.Number getStorageCount();
```

- *Type:* java.lang.Number

---

##### `timeZone`<sup>Required</sup> <a name="timeZone" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.timeZone"></a>

```java
public java.lang.String getTimeZone();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DatabaseExadataInfrastructureConfig <a name="DatabaseExadataInfrastructureConfig" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_exadata_infrastructure.DatabaseExadataInfrastructureConfig;

DatabaseExadataInfrastructureConfig.builder()
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
    .adminNetworkCidr(java.lang.String)
    .cloudControlPlaneServer1(java.lang.String)
    .cloudControlPlaneServer2(java.lang.String)
    .compartmentId(java.lang.String)
    .displayName(java.lang.String)
    .dnsServer(java.util.List<java.lang.String>)
    .gateway(java.lang.String)
    .infiniBandNetworkCidr(java.lang.String)
    .netmask(java.lang.String)
    .ntpServer(java.util.List<java.lang.String>)
    .shape(java.lang.String)
    .timeZone(java.lang.String)
//  .activationFile(java.lang.String)
//  .additionalStorageCount(java.lang.Number)
//  .computeCount(java.lang.Number)
//  .contacts(IResolvable)
//  .contacts(java.util.List<DatabaseExadataInfrastructureContacts>)
//  .corporateProxy(java.lang.String)
//  .createAsync(java.lang.Boolean)
//  .createAsync(IResolvable)
//  .definedTags(java.util.Map<java.lang.String, java.lang.String>)
//  .freeformTags(java.util.Map<java.lang.String, java.lang.String>)
//  .id(java.lang.String)
//  .isCpsOfflineReportEnabled(java.lang.Boolean)
//  .isCpsOfflineReportEnabled(IResolvable)
//  .isMultiRackDeployment(java.lang.Boolean)
//  .isMultiRackDeployment(IResolvable)
//  .maintenanceWindow(DatabaseExadataInfrastructureMaintenanceWindow)
//  .multiRackConfigurationFile(java.lang.String)
//  .networkBondingModeDetails(DatabaseExadataInfrastructureNetworkBondingModeDetails)
//  .storageCount(java.lang.Number)
//  .timeouts(DatabaseExadataInfrastructureTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureConfig.property.adminNetworkCidr">adminNetworkCidr</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#admin_network_cidr DatabaseExadataInfrastructure#admin_network_cidr}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureConfig.property.cloudControlPlaneServer1">cloudControlPlaneServer1</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#cloud_control_plane_server1 DatabaseExadataInfrastructure#cloud_control_plane_server1}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureConfig.property.cloudControlPlaneServer2">cloudControlPlaneServer2</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#cloud_control_plane_server2 DatabaseExadataInfrastructure#cloud_control_plane_server2}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureConfig.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#compartment_id DatabaseExadataInfrastructure#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#display_name DatabaseExadataInfrastructure#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureConfig.property.dnsServer">dnsServer</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#dns_server DatabaseExadataInfrastructure#dns_server}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureConfig.property.gateway">gateway</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#gateway DatabaseExadataInfrastructure#gateway}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureConfig.property.infiniBandNetworkCidr">infiniBandNetworkCidr</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#infini_band_network_cidr DatabaseExadataInfrastructure#infini_band_network_cidr}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureConfig.property.netmask">netmask</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#netmask DatabaseExadataInfrastructure#netmask}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureConfig.property.ntpServer">ntpServer</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#ntp_server DatabaseExadataInfrastructure#ntp_server}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureConfig.property.shape">shape</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#shape DatabaseExadataInfrastructure#shape}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureConfig.property.timeZone">timeZone</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#time_zone DatabaseExadataInfrastructure#time_zone}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureConfig.property.activationFile">activationFile</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#activation_file DatabaseExadataInfrastructure#activation_file}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureConfig.property.additionalStorageCount">additionalStorageCount</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#additional_storage_count DatabaseExadataInfrastructure#additional_storage_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureConfig.property.computeCount">computeCount</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#compute_count DatabaseExadataInfrastructure#compute_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureConfig.property.contacts">contacts</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContacts">DatabaseExadataInfrastructureContacts</a>></code> | contacts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureConfig.property.corporateProxy">corporateProxy</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#corporate_proxy DatabaseExadataInfrastructure#corporate_proxy}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureConfig.property.createAsync">createAsync</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#create_async DatabaseExadataInfrastructure#create_async}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureConfig.property.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#defined_tags DatabaseExadataInfrastructure#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureConfig.property.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#freeform_tags DatabaseExadataInfrastructure#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#id DatabaseExadataInfrastructure#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureConfig.property.isCpsOfflineReportEnabled">isCpsOfflineReportEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#is_cps_offline_report_enabled DatabaseExadataInfrastructure#is_cps_offline_report_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureConfig.property.isMultiRackDeployment">isMultiRackDeployment</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#is_multi_rack_deployment DatabaseExadataInfrastructure#is_multi_rack_deployment}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureConfig.property.maintenanceWindow">maintenanceWindow</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindow">DatabaseExadataInfrastructureMaintenanceWindow</a></code> | maintenance_window block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureConfig.property.multiRackConfigurationFile">multiRackConfigurationFile</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#multi_rack_configuration_file DatabaseExadataInfrastructure#multi_rack_configuration_file}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureConfig.property.networkBondingModeDetails">networkBondingModeDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetails">DatabaseExadataInfrastructureNetworkBondingModeDetails</a></code> | network_bonding_mode_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureConfig.property.storageCount">storageCount</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#storage_count DatabaseExadataInfrastructure#storage_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeouts">DatabaseExadataInfrastructureTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `adminNetworkCidr`<sup>Required</sup> <a name="adminNetworkCidr" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureConfig.property.adminNetworkCidr"></a>

```java
public java.lang.String getAdminNetworkCidr();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#admin_network_cidr DatabaseExadataInfrastructure#admin_network_cidr}.

---

##### `cloudControlPlaneServer1`<sup>Required</sup> <a name="cloudControlPlaneServer1" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureConfig.property.cloudControlPlaneServer1"></a>

```java
public java.lang.String getCloudControlPlaneServer1();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#cloud_control_plane_server1 DatabaseExadataInfrastructure#cloud_control_plane_server1}.

---

##### `cloudControlPlaneServer2`<sup>Required</sup> <a name="cloudControlPlaneServer2" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureConfig.property.cloudControlPlaneServer2"></a>

```java
public java.lang.String getCloudControlPlaneServer2();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#cloud_control_plane_server2 DatabaseExadataInfrastructure#cloud_control_plane_server2}.

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureConfig.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#compartment_id DatabaseExadataInfrastructure#compartment_id}.

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#display_name DatabaseExadataInfrastructure#display_name}.

---

##### `dnsServer`<sup>Required</sup> <a name="dnsServer" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureConfig.property.dnsServer"></a>

```java
public java.util.List<java.lang.String> getDnsServer();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#dns_server DatabaseExadataInfrastructure#dns_server}.

---

##### `gateway`<sup>Required</sup> <a name="gateway" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureConfig.property.gateway"></a>

```java
public java.lang.String getGateway();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#gateway DatabaseExadataInfrastructure#gateway}.

---

##### `infiniBandNetworkCidr`<sup>Required</sup> <a name="infiniBandNetworkCidr" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureConfig.property.infiniBandNetworkCidr"></a>

```java
public java.lang.String getInfiniBandNetworkCidr();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#infini_band_network_cidr DatabaseExadataInfrastructure#infini_band_network_cidr}.

---

##### `netmask`<sup>Required</sup> <a name="netmask" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureConfig.property.netmask"></a>

```java
public java.lang.String getNetmask();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#netmask DatabaseExadataInfrastructure#netmask}.

---

##### `ntpServer`<sup>Required</sup> <a name="ntpServer" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureConfig.property.ntpServer"></a>

```java
public java.util.List<java.lang.String> getNtpServer();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#ntp_server DatabaseExadataInfrastructure#ntp_server}.

---

##### `shape`<sup>Required</sup> <a name="shape" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureConfig.property.shape"></a>

```java
public java.lang.String getShape();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#shape DatabaseExadataInfrastructure#shape}.

---

##### `timeZone`<sup>Required</sup> <a name="timeZone" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureConfig.property.timeZone"></a>

```java
public java.lang.String getTimeZone();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#time_zone DatabaseExadataInfrastructure#time_zone}.

---

##### `activationFile`<sup>Optional</sup> <a name="activationFile" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureConfig.property.activationFile"></a>

```java
public java.lang.String getActivationFile();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#activation_file DatabaseExadataInfrastructure#activation_file}.

---

##### `additionalStorageCount`<sup>Optional</sup> <a name="additionalStorageCount" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureConfig.property.additionalStorageCount"></a>

```java
public java.lang.Number getAdditionalStorageCount();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#additional_storage_count DatabaseExadataInfrastructure#additional_storage_count}.

---

##### `computeCount`<sup>Optional</sup> <a name="computeCount" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureConfig.property.computeCount"></a>

```java
public java.lang.Number getComputeCount();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#compute_count DatabaseExadataInfrastructure#compute_count}.

---

##### `contacts`<sup>Optional</sup> <a name="contacts" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureConfig.property.contacts"></a>

```java
public java.lang.Object getContacts();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContacts">DatabaseExadataInfrastructureContacts</a>>

contacts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#contacts DatabaseExadataInfrastructure#contacts}

---

##### `corporateProxy`<sup>Optional</sup> <a name="corporateProxy" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureConfig.property.corporateProxy"></a>

```java
public java.lang.String getCorporateProxy();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#corporate_proxy DatabaseExadataInfrastructure#corporate_proxy}.

---

##### `createAsync`<sup>Optional</sup> <a name="createAsync" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureConfig.property.createAsync"></a>

```java
public java.lang.Object getCreateAsync();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#create_async DatabaseExadataInfrastructure#create_async}.

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureConfig.property.definedTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#defined_tags DatabaseExadataInfrastructure#defined_tags}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureConfig.property.freeformTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#freeform_tags DatabaseExadataInfrastructure#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#id DatabaseExadataInfrastructure#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isCpsOfflineReportEnabled`<sup>Optional</sup> <a name="isCpsOfflineReportEnabled" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureConfig.property.isCpsOfflineReportEnabled"></a>

```java
public java.lang.Object getIsCpsOfflineReportEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#is_cps_offline_report_enabled DatabaseExadataInfrastructure#is_cps_offline_report_enabled}.

---

##### `isMultiRackDeployment`<sup>Optional</sup> <a name="isMultiRackDeployment" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureConfig.property.isMultiRackDeployment"></a>

```java
public java.lang.Object getIsMultiRackDeployment();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#is_multi_rack_deployment DatabaseExadataInfrastructure#is_multi_rack_deployment}.

---

##### `maintenanceWindow`<sup>Optional</sup> <a name="maintenanceWindow" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureConfig.property.maintenanceWindow"></a>

```java
public DatabaseExadataInfrastructureMaintenanceWindow getMaintenanceWindow();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindow">DatabaseExadataInfrastructureMaintenanceWindow</a>

maintenance_window block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#maintenance_window DatabaseExadataInfrastructure#maintenance_window}

---

##### `multiRackConfigurationFile`<sup>Optional</sup> <a name="multiRackConfigurationFile" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureConfig.property.multiRackConfigurationFile"></a>

```java
public java.lang.String getMultiRackConfigurationFile();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#multi_rack_configuration_file DatabaseExadataInfrastructure#multi_rack_configuration_file}.

---

##### `networkBondingModeDetails`<sup>Optional</sup> <a name="networkBondingModeDetails" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureConfig.property.networkBondingModeDetails"></a>

```java
public DatabaseExadataInfrastructureNetworkBondingModeDetails getNetworkBondingModeDetails();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetails">DatabaseExadataInfrastructureNetworkBondingModeDetails</a>

network_bonding_mode_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#network_bonding_mode_details DatabaseExadataInfrastructure#network_bonding_mode_details}

---

##### `storageCount`<sup>Optional</sup> <a name="storageCount" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureConfig.property.storageCount"></a>

```java
public java.lang.Number getStorageCount();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#storage_count DatabaseExadataInfrastructure#storage_count}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureConfig.property.timeouts"></a>

```java
public DatabaseExadataInfrastructureTimeouts getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeouts">DatabaseExadataInfrastructureTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#timeouts DatabaseExadataInfrastructure#timeouts}

---

### DatabaseExadataInfrastructureContacts <a name="DatabaseExadataInfrastructureContacts" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContacts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContacts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_exadata_infrastructure.DatabaseExadataInfrastructureContacts;

DatabaseExadataInfrastructureContacts.builder()
    .email(java.lang.String)
    .isPrimary(java.lang.Boolean)
    .isPrimary(IResolvable)
    .name(java.lang.String)
//  .isContactMosValidated(java.lang.Boolean)
//  .isContactMosValidated(IResolvable)
//  .phoneNumber(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContacts.property.email">email</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#email DatabaseExadataInfrastructure#email}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContacts.property.isPrimary">isPrimary</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#is_primary DatabaseExadataInfrastructure#is_primary}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContacts.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#name DatabaseExadataInfrastructure#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContacts.property.isContactMosValidated">isContactMosValidated</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#is_contact_mos_validated DatabaseExadataInfrastructure#is_contact_mos_validated}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContacts.property.phoneNumber">phoneNumber</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#phone_number DatabaseExadataInfrastructure#phone_number}. |

---

##### `email`<sup>Required</sup> <a name="email" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContacts.property.email"></a>

```java
public java.lang.String getEmail();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#email DatabaseExadataInfrastructure#email}.

---

##### `isPrimary`<sup>Required</sup> <a name="isPrimary" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContacts.property.isPrimary"></a>

```java
public java.lang.Object getIsPrimary();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#is_primary DatabaseExadataInfrastructure#is_primary}.

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContacts.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#name DatabaseExadataInfrastructure#name}.

---

##### `isContactMosValidated`<sup>Optional</sup> <a name="isContactMosValidated" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContacts.property.isContactMosValidated"></a>

```java
public java.lang.Object getIsContactMosValidated();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#is_contact_mos_validated DatabaseExadataInfrastructure#is_contact_mos_validated}.

---

##### `phoneNumber`<sup>Optional</sup> <a name="phoneNumber" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContacts.property.phoneNumber"></a>

```java
public java.lang.String getPhoneNumber();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#phone_number DatabaseExadataInfrastructure#phone_number}.

---

### DatabaseExadataInfrastructureDefinedFileSystemConfigurations <a name="DatabaseExadataInfrastructureDefinedFileSystemConfigurations" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurations"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurations.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_exadata_infrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurations;

DatabaseExadataInfrastructureDefinedFileSystemConfigurations.builder()
    .build();
```


### DatabaseExadataInfrastructureMaintenanceWindow <a name="DatabaseExadataInfrastructureMaintenanceWindow" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindow"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindow.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_exadata_infrastructure.DatabaseExadataInfrastructureMaintenanceWindow;

DatabaseExadataInfrastructureMaintenanceWindow.builder()
//  .customActionTimeoutInMins(java.lang.Number)
//  .daysOfWeek(IResolvable)
//  .daysOfWeek(java.util.List<DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeek>)
//  .hoursOfDay(java.util.List<java.lang.Number>)
//  .isCustomActionTimeoutEnabled(java.lang.Boolean)
//  .isCustomActionTimeoutEnabled(IResolvable)
//  .isMonthlyPatchingEnabled(java.lang.Boolean)
//  .isMonthlyPatchingEnabled(IResolvable)
//  .leadTimeInWeeks(java.lang.Number)
//  .months(IResolvable)
//  .months(java.util.List<DatabaseExadataInfrastructureMaintenanceWindowMonths>)
//  .patchingMode(java.lang.String)
//  .preference(java.lang.String)
//  .skipRu(IResolvable)
//  .skipRu(java.util.List<java.lang.Boolean)
//  .skipRu(IResolvable>)
//  .weeksOfMonth(java.util.List<java.lang.Number>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindow.property.customActionTimeoutInMins">customActionTimeoutInMins</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#custom_action_timeout_in_mins DatabaseExadataInfrastructure#custom_action_timeout_in_mins}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindow.property.daysOfWeek">daysOfWeek</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeek">DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeek</a>></code> | days_of_week block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindow.property.hoursOfDay">hoursOfDay</a></code> | <code>java.util.List<java.lang.Number></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#hours_of_day DatabaseExadataInfrastructure#hours_of_day}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindow.property.isCustomActionTimeoutEnabled">isCustomActionTimeoutEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#is_custom_action_timeout_enabled DatabaseExadataInfrastructure#is_custom_action_timeout_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindow.property.isMonthlyPatchingEnabled">isMonthlyPatchingEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#is_monthly_patching_enabled DatabaseExadataInfrastructure#is_monthly_patching_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindow.property.leadTimeInWeeks">leadTimeInWeeks</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#lead_time_in_weeks DatabaseExadataInfrastructure#lead_time_in_weeks}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindow.property.months">months</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonths">DatabaseExadataInfrastructureMaintenanceWindowMonths</a>></code> | months block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindow.property.patchingMode">patchingMode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#patching_mode DatabaseExadataInfrastructure#patching_mode}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindow.property.preference">preference</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#preference DatabaseExadataInfrastructure#preference}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindow.property.skipRu">skipRu</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<java.lang.Boolean OR com.hashicorp.cdktf.IResolvable></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#skip_ru DatabaseExadataInfrastructure#skip_ru}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindow.property.weeksOfMonth">weeksOfMonth</a></code> | <code>java.util.List<java.lang.Number></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#weeks_of_month DatabaseExadataInfrastructure#weeks_of_month}. |

---

##### `customActionTimeoutInMins`<sup>Optional</sup> <a name="customActionTimeoutInMins" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindow.property.customActionTimeoutInMins"></a>

```java
public java.lang.Number getCustomActionTimeoutInMins();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#custom_action_timeout_in_mins DatabaseExadataInfrastructure#custom_action_timeout_in_mins}.

---

##### `daysOfWeek`<sup>Optional</sup> <a name="daysOfWeek" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindow.property.daysOfWeek"></a>

```java
public java.lang.Object getDaysOfWeek();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeek">DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeek</a>>

days_of_week block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#days_of_week DatabaseExadataInfrastructure#days_of_week}

---

##### `hoursOfDay`<sup>Optional</sup> <a name="hoursOfDay" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindow.property.hoursOfDay"></a>

```java
public java.util.List<java.lang.Number> getHoursOfDay();
```

- *Type:* java.util.List<java.lang.Number>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#hours_of_day DatabaseExadataInfrastructure#hours_of_day}.

---

##### `isCustomActionTimeoutEnabled`<sup>Optional</sup> <a name="isCustomActionTimeoutEnabled" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindow.property.isCustomActionTimeoutEnabled"></a>

```java
public java.lang.Object getIsCustomActionTimeoutEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#is_custom_action_timeout_enabled DatabaseExadataInfrastructure#is_custom_action_timeout_enabled}.

---

##### `isMonthlyPatchingEnabled`<sup>Optional</sup> <a name="isMonthlyPatchingEnabled" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindow.property.isMonthlyPatchingEnabled"></a>

```java
public java.lang.Object getIsMonthlyPatchingEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#is_monthly_patching_enabled DatabaseExadataInfrastructure#is_monthly_patching_enabled}.

---

##### `leadTimeInWeeks`<sup>Optional</sup> <a name="leadTimeInWeeks" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindow.property.leadTimeInWeeks"></a>

```java
public java.lang.Number getLeadTimeInWeeks();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#lead_time_in_weeks DatabaseExadataInfrastructure#lead_time_in_weeks}.

---

##### `months`<sup>Optional</sup> <a name="months" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindow.property.months"></a>

```java
public java.lang.Object getMonths();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonths">DatabaseExadataInfrastructureMaintenanceWindowMonths</a>>

months block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#months DatabaseExadataInfrastructure#months}

---

##### `patchingMode`<sup>Optional</sup> <a name="patchingMode" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindow.property.patchingMode"></a>

```java
public java.lang.String getPatchingMode();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#patching_mode DatabaseExadataInfrastructure#patching_mode}.

---

##### `preference`<sup>Optional</sup> <a name="preference" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindow.property.preference"></a>

```java
public java.lang.String getPreference();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#preference DatabaseExadataInfrastructure#preference}.

---

##### `skipRu`<sup>Optional</sup> <a name="skipRu" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindow.property.skipRu"></a>

```java
public java.lang.Object getSkipRu();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<java.lang.Boolean OR com.hashicorp.cdktf.IResolvable>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#skip_ru DatabaseExadataInfrastructure#skip_ru}.

---

##### `weeksOfMonth`<sup>Optional</sup> <a name="weeksOfMonth" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindow.property.weeksOfMonth"></a>

```java
public java.util.List<java.lang.Number> getWeeksOfMonth();
```

- *Type:* java.util.List<java.lang.Number>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#weeks_of_month DatabaseExadataInfrastructure#weeks_of_month}.

---

### DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeek <a name="DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeek" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeek"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeek.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_exadata_infrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeek;

DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeek.builder()
    .name(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeek.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#name DatabaseExadataInfrastructure#name}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeek.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#name DatabaseExadataInfrastructure#name}.

---

### DatabaseExadataInfrastructureMaintenanceWindowMonths <a name="DatabaseExadataInfrastructureMaintenanceWindowMonths" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonths"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonths.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_exadata_infrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonths;

DatabaseExadataInfrastructureMaintenanceWindowMonths.builder()
    .name(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonths.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#name DatabaseExadataInfrastructure#name}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonths.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#name DatabaseExadataInfrastructure#name}.

---

### DatabaseExadataInfrastructureNetworkBondingModeDetails <a name="DatabaseExadataInfrastructureNetworkBondingModeDetails" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetails.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_exadata_infrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetails;

DatabaseExadataInfrastructureNetworkBondingModeDetails.builder()
//  .backupNetworkBondingMode(java.lang.String)
//  .clientNetworkBondingMode(java.lang.String)
//  .drNetworkBondingMode(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetails.property.backupNetworkBondingMode">backupNetworkBondingMode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#backup_network_bonding_mode DatabaseExadataInfrastructure#backup_network_bonding_mode}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetails.property.clientNetworkBondingMode">clientNetworkBondingMode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#client_network_bonding_mode DatabaseExadataInfrastructure#client_network_bonding_mode}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetails.property.drNetworkBondingMode">drNetworkBondingMode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#dr_network_bonding_mode DatabaseExadataInfrastructure#dr_network_bonding_mode}. |

---

##### `backupNetworkBondingMode`<sup>Optional</sup> <a name="backupNetworkBondingMode" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetails.property.backupNetworkBondingMode"></a>

```java
public java.lang.String getBackupNetworkBondingMode();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#backup_network_bonding_mode DatabaseExadataInfrastructure#backup_network_bonding_mode}.

---

##### `clientNetworkBondingMode`<sup>Optional</sup> <a name="clientNetworkBondingMode" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetails.property.clientNetworkBondingMode"></a>

```java
public java.lang.String getClientNetworkBondingMode();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#client_network_bonding_mode DatabaseExadataInfrastructure#client_network_bonding_mode}.

---

##### `drNetworkBondingMode`<sup>Optional</sup> <a name="drNetworkBondingMode" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetails.property.drNetworkBondingMode"></a>

```java
public java.lang.String getDrNetworkBondingMode();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#dr_network_bonding_mode DatabaseExadataInfrastructure#dr_network_bonding_mode}.

---

### DatabaseExadataInfrastructureTimeouts <a name="DatabaseExadataInfrastructureTimeouts" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_exadata_infrastructure.DatabaseExadataInfrastructureTimeouts;

DatabaseExadataInfrastructureTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#create DatabaseExadataInfrastructure#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#delete DatabaseExadataInfrastructure#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#update DatabaseExadataInfrastructure#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#create DatabaseExadataInfrastructure#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#delete DatabaseExadataInfrastructure#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#update DatabaseExadataInfrastructure#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DatabaseExadataInfrastructureContactsList <a name="DatabaseExadataInfrastructureContactsList" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_exadata_infrastructure.DatabaseExadataInfrastructureContactsList;

new DatabaseExadataInfrastructureContactsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsList.get"></a>

```java
public DatabaseExadataInfrastructureContactsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContacts">DatabaseExadataInfrastructureContacts</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContacts">DatabaseExadataInfrastructureContacts</a>>

---


### DatabaseExadataInfrastructureContactsOutputReference <a name="DatabaseExadataInfrastructureContactsOutputReference" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_exadata_infrastructure.DatabaseExadataInfrastructureContactsOutputReference;

new DatabaseExadataInfrastructureContactsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsOutputReference.resetIsContactMosValidated">resetIsContactMosValidated</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsOutputReference.resetPhoneNumber">resetPhoneNumber</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIsContactMosValidated` <a name="resetIsContactMosValidated" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsOutputReference.resetIsContactMosValidated"></a>

```java
public void resetIsContactMosValidated()
```

##### `resetPhoneNumber` <a name="resetPhoneNumber" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsOutputReference.resetPhoneNumber"></a>

```java
public void resetPhoneNumber()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsOutputReference.property.emailInput">emailInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsOutputReference.property.isContactMosValidatedInput">isContactMosValidatedInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsOutputReference.property.isPrimaryInput">isPrimaryInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsOutputReference.property.phoneNumberInput">phoneNumberInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsOutputReference.property.email">email</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsOutputReference.property.isContactMosValidated">isContactMosValidated</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsOutputReference.property.isPrimary">isPrimary</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsOutputReference.property.phoneNumber">phoneNumber</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContacts">DatabaseExadataInfrastructureContacts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `emailInput`<sup>Optional</sup> <a name="emailInput" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsOutputReference.property.emailInput"></a>

```java
public java.lang.String getEmailInput();
```

- *Type:* java.lang.String

---

##### `isContactMosValidatedInput`<sup>Optional</sup> <a name="isContactMosValidatedInput" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsOutputReference.property.isContactMosValidatedInput"></a>

```java
public java.lang.Object getIsContactMosValidatedInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isPrimaryInput`<sup>Optional</sup> <a name="isPrimaryInput" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsOutputReference.property.isPrimaryInput"></a>

```java
public java.lang.Object getIsPrimaryInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `phoneNumberInput`<sup>Optional</sup> <a name="phoneNumberInput" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsOutputReference.property.phoneNumberInput"></a>

```java
public java.lang.String getPhoneNumberInput();
```

- *Type:* java.lang.String

---

##### `email`<sup>Required</sup> <a name="email" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsOutputReference.property.email"></a>

```java
public java.lang.String getEmail();
```

- *Type:* java.lang.String

---

##### `isContactMosValidated`<sup>Required</sup> <a name="isContactMosValidated" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsOutputReference.property.isContactMosValidated"></a>

```java
public java.lang.Object getIsContactMosValidated();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isPrimary`<sup>Required</sup> <a name="isPrimary" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsOutputReference.property.isPrimary"></a>

```java
public java.lang.Object getIsPrimary();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `phoneNumber`<sup>Required</sup> <a name="phoneNumber" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsOutputReference.property.phoneNumber"></a>

```java
public java.lang.String getPhoneNumber();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContacts">DatabaseExadataInfrastructureContacts</a>

---


### DatabaseExadataInfrastructureDefinedFileSystemConfigurationsList <a name="DatabaseExadataInfrastructureDefinedFileSystemConfigurationsList" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_exadata_infrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsList;

new DatabaseExadataInfrastructureDefinedFileSystemConfigurationsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsList.get"></a>

```java
public DatabaseExadataInfrastructureDefinedFileSystemConfigurationsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DatabaseExadataInfrastructureDefinedFileSystemConfigurationsOutputReference <a name="DatabaseExadataInfrastructureDefinedFileSystemConfigurationsOutputReference" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_exadata_infrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsOutputReference;

new DatabaseExadataInfrastructureDefinedFileSystemConfigurationsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsOutputReference.property.isBackupPartition">isBackupPartition</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsOutputReference.property.isResizable">isResizable</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsOutputReference.property.minSizeGb">minSizeGb</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsOutputReference.property.mountPoint">mountPoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurations">DatabaseExadataInfrastructureDefinedFileSystemConfigurations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `isBackupPartition`<sup>Required</sup> <a name="isBackupPartition" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsOutputReference.property.isBackupPartition"></a>

```java
public IResolvable getIsBackupPartition();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `isResizable`<sup>Required</sup> <a name="isResizable" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsOutputReference.property.isResizable"></a>

```java
public IResolvable getIsResizable();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `minSizeGb`<sup>Required</sup> <a name="minSizeGb" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsOutputReference.property.minSizeGb"></a>

```java
public java.lang.Number getMinSizeGb();
```

- *Type:* java.lang.Number

---

##### `mountPoint`<sup>Required</sup> <a name="mountPoint" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsOutputReference.property.mountPoint"></a>

```java
public java.lang.String getMountPoint();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsOutputReference.property.internalValue"></a>

```java
public DatabaseExadataInfrastructureDefinedFileSystemConfigurations getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurations">DatabaseExadataInfrastructureDefinedFileSystemConfigurations</a>

---


### DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekList <a name="DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekList" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_exadata_infrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekList;

new DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekList.get"></a>

```java
public DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeek">DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeek</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeek">DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeek</a>>

---


### DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference <a name="DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_exadata_infrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference;

new DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeek">DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeek</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeek">DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeek</a>

---


### DatabaseExadataInfrastructureMaintenanceWindowMonthsList <a name="DatabaseExadataInfrastructureMaintenanceWindowMonthsList" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_exadata_infrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsList;

new DatabaseExadataInfrastructureMaintenanceWindowMonthsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsList.get"></a>

```java
public DatabaseExadataInfrastructureMaintenanceWindowMonthsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonths">DatabaseExadataInfrastructureMaintenanceWindowMonths</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonths">DatabaseExadataInfrastructureMaintenanceWindowMonths</a>>

---


### DatabaseExadataInfrastructureMaintenanceWindowMonthsOutputReference <a name="DatabaseExadataInfrastructureMaintenanceWindowMonthsOutputReference" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_exadata_infrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsOutputReference;

new DatabaseExadataInfrastructureMaintenanceWindowMonthsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonths">DatabaseExadataInfrastructureMaintenanceWindowMonths</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonths">DatabaseExadataInfrastructureMaintenanceWindowMonths</a>

---


### DatabaseExadataInfrastructureMaintenanceWindowOutputReference <a name="DatabaseExadataInfrastructureMaintenanceWindowOutputReference" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_exadata_infrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference;

new DatabaseExadataInfrastructureMaintenanceWindowOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.putDaysOfWeek">putDaysOfWeek</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.putMonths">putMonths</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.resetCustomActionTimeoutInMins">resetCustomActionTimeoutInMins</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.resetDaysOfWeek">resetDaysOfWeek</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.resetHoursOfDay">resetHoursOfDay</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.resetIsCustomActionTimeoutEnabled">resetIsCustomActionTimeoutEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.resetIsMonthlyPatchingEnabled">resetIsMonthlyPatchingEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.resetLeadTimeInWeeks">resetLeadTimeInWeeks</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.resetMonths">resetMonths</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.resetPatchingMode">resetPatchingMode</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.resetPreference">resetPreference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.resetSkipRu">resetSkipRu</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.resetWeeksOfMonth">resetWeeksOfMonth</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDaysOfWeek` <a name="putDaysOfWeek" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.putDaysOfWeek"></a>

```java
public void putDaysOfWeek(IResolvable OR java.util.List<DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeek> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.putDaysOfWeek.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeek">DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeek</a>>

---

##### `putMonths` <a name="putMonths" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.putMonths"></a>

```java
public void putMonths(IResolvable OR java.util.List<DatabaseExadataInfrastructureMaintenanceWindowMonths> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.putMonths.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonths">DatabaseExadataInfrastructureMaintenanceWindowMonths</a>>

---

##### `resetCustomActionTimeoutInMins` <a name="resetCustomActionTimeoutInMins" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.resetCustomActionTimeoutInMins"></a>

```java
public void resetCustomActionTimeoutInMins()
```

##### `resetDaysOfWeek` <a name="resetDaysOfWeek" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.resetDaysOfWeek"></a>

```java
public void resetDaysOfWeek()
```

##### `resetHoursOfDay` <a name="resetHoursOfDay" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.resetHoursOfDay"></a>

```java
public void resetHoursOfDay()
```

##### `resetIsCustomActionTimeoutEnabled` <a name="resetIsCustomActionTimeoutEnabled" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.resetIsCustomActionTimeoutEnabled"></a>

```java
public void resetIsCustomActionTimeoutEnabled()
```

##### `resetIsMonthlyPatchingEnabled` <a name="resetIsMonthlyPatchingEnabled" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.resetIsMonthlyPatchingEnabled"></a>

```java
public void resetIsMonthlyPatchingEnabled()
```

##### `resetLeadTimeInWeeks` <a name="resetLeadTimeInWeeks" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.resetLeadTimeInWeeks"></a>

```java
public void resetLeadTimeInWeeks()
```

##### `resetMonths` <a name="resetMonths" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.resetMonths"></a>

```java
public void resetMonths()
```

##### `resetPatchingMode` <a name="resetPatchingMode" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.resetPatchingMode"></a>

```java
public void resetPatchingMode()
```

##### `resetPreference` <a name="resetPreference" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.resetPreference"></a>

```java
public void resetPreference()
```

##### `resetSkipRu` <a name="resetSkipRu" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.resetSkipRu"></a>

```java
public void resetSkipRu()
```

##### `resetWeeksOfMonth` <a name="resetWeeksOfMonth" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.resetWeeksOfMonth"></a>

```java
public void resetWeeksOfMonth()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.property.daysOfWeek">daysOfWeek</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekList">DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.property.months">months</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsList">DatabaseExadataInfrastructureMaintenanceWindowMonthsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.property.customActionTimeoutInMinsInput">customActionTimeoutInMinsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.property.daysOfWeekInput">daysOfWeekInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeek">DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeek</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.property.hoursOfDayInput">hoursOfDayInput</a></code> | <code>java.util.List<java.lang.Number></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.property.isCustomActionTimeoutEnabledInput">isCustomActionTimeoutEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.property.isMonthlyPatchingEnabledInput">isMonthlyPatchingEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.property.leadTimeInWeeksInput">leadTimeInWeeksInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.property.monthsInput">monthsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonths">DatabaseExadataInfrastructureMaintenanceWindowMonths</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.property.patchingModeInput">patchingModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.property.preferenceInput">preferenceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.property.skipRuInput">skipRuInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<java.lang.Boolean OR com.hashicorp.cdktf.IResolvable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.property.weeksOfMonthInput">weeksOfMonthInput</a></code> | <code>java.util.List<java.lang.Number></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.property.customActionTimeoutInMins">customActionTimeoutInMins</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.property.hoursOfDay">hoursOfDay</a></code> | <code>java.util.List<java.lang.Number></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.property.isCustomActionTimeoutEnabled">isCustomActionTimeoutEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.property.isMonthlyPatchingEnabled">isMonthlyPatchingEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.property.leadTimeInWeeks">leadTimeInWeeks</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.property.patchingMode">patchingMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.property.preference">preference</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.property.skipRu">skipRu</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<java.lang.Boolean OR com.hashicorp.cdktf.IResolvable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.property.weeksOfMonth">weeksOfMonth</a></code> | <code>java.util.List<java.lang.Number></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindow">DatabaseExadataInfrastructureMaintenanceWindow</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `daysOfWeek`<sup>Required</sup> <a name="daysOfWeek" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.property.daysOfWeek"></a>

```java
public DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekList getDaysOfWeek();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekList">DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekList</a>

---

##### `months`<sup>Required</sup> <a name="months" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.property.months"></a>

```java
public DatabaseExadataInfrastructureMaintenanceWindowMonthsList getMonths();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsList">DatabaseExadataInfrastructureMaintenanceWindowMonthsList</a>

---

##### `customActionTimeoutInMinsInput`<sup>Optional</sup> <a name="customActionTimeoutInMinsInput" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.property.customActionTimeoutInMinsInput"></a>

```java
public java.lang.Number getCustomActionTimeoutInMinsInput();
```

- *Type:* java.lang.Number

---

##### `daysOfWeekInput`<sup>Optional</sup> <a name="daysOfWeekInput" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.property.daysOfWeekInput"></a>

```java
public java.lang.Object getDaysOfWeekInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeek">DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeek</a>>

---

##### `hoursOfDayInput`<sup>Optional</sup> <a name="hoursOfDayInput" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.property.hoursOfDayInput"></a>

```java
public java.util.List<java.lang.Number> getHoursOfDayInput();
```

- *Type:* java.util.List<java.lang.Number>

---

##### `isCustomActionTimeoutEnabledInput`<sup>Optional</sup> <a name="isCustomActionTimeoutEnabledInput" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.property.isCustomActionTimeoutEnabledInput"></a>

```java
public java.lang.Object getIsCustomActionTimeoutEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isMonthlyPatchingEnabledInput`<sup>Optional</sup> <a name="isMonthlyPatchingEnabledInput" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.property.isMonthlyPatchingEnabledInput"></a>

```java
public java.lang.Object getIsMonthlyPatchingEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `leadTimeInWeeksInput`<sup>Optional</sup> <a name="leadTimeInWeeksInput" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.property.leadTimeInWeeksInput"></a>

```java
public java.lang.Number getLeadTimeInWeeksInput();
```

- *Type:* java.lang.Number

---

##### `monthsInput`<sup>Optional</sup> <a name="monthsInput" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.property.monthsInput"></a>

```java
public java.lang.Object getMonthsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonths">DatabaseExadataInfrastructureMaintenanceWindowMonths</a>>

---

##### `patchingModeInput`<sup>Optional</sup> <a name="patchingModeInput" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.property.patchingModeInput"></a>

```java
public java.lang.String getPatchingModeInput();
```

- *Type:* java.lang.String

---

##### `preferenceInput`<sup>Optional</sup> <a name="preferenceInput" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.property.preferenceInput"></a>

```java
public java.lang.String getPreferenceInput();
```

- *Type:* java.lang.String

---

##### `skipRuInput`<sup>Optional</sup> <a name="skipRuInput" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.property.skipRuInput"></a>

```java
public java.lang.Object getSkipRuInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<java.lang.Boolean OR com.hashicorp.cdktf.IResolvable>

---

##### `weeksOfMonthInput`<sup>Optional</sup> <a name="weeksOfMonthInput" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.property.weeksOfMonthInput"></a>

```java
public java.util.List<java.lang.Number> getWeeksOfMonthInput();
```

- *Type:* java.util.List<java.lang.Number>

---

##### `customActionTimeoutInMins`<sup>Required</sup> <a name="customActionTimeoutInMins" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.property.customActionTimeoutInMins"></a>

```java
public java.lang.Number getCustomActionTimeoutInMins();
```

- *Type:* java.lang.Number

---

##### `hoursOfDay`<sup>Required</sup> <a name="hoursOfDay" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.property.hoursOfDay"></a>

```java
public java.util.List<java.lang.Number> getHoursOfDay();
```

- *Type:* java.util.List<java.lang.Number>

---

##### `isCustomActionTimeoutEnabled`<sup>Required</sup> <a name="isCustomActionTimeoutEnabled" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.property.isCustomActionTimeoutEnabled"></a>

```java
public java.lang.Object getIsCustomActionTimeoutEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isMonthlyPatchingEnabled`<sup>Required</sup> <a name="isMonthlyPatchingEnabled" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.property.isMonthlyPatchingEnabled"></a>

```java
public java.lang.Object getIsMonthlyPatchingEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `leadTimeInWeeks`<sup>Required</sup> <a name="leadTimeInWeeks" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.property.leadTimeInWeeks"></a>

```java
public java.lang.Number getLeadTimeInWeeks();
```

- *Type:* java.lang.Number

---

##### `patchingMode`<sup>Required</sup> <a name="patchingMode" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.property.patchingMode"></a>

```java
public java.lang.String getPatchingMode();
```

- *Type:* java.lang.String

---

##### `preference`<sup>Required</sup> <a name="preference" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.property.preference"></a>

```java
public java.lang.String getPreference();
```

- *Type:* java.lang.String

---

##### `skipRu`<sup>Required</sup> <a name="skipRu" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.property.skipRu"></a>

```java
public java.lang.Object getSkipRu();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<java.lang.Boolean OR com.hashicorp.cdktf.IResolvable>

---

##### `weeksOfMonth`<sup>Required</sup> <a name="weeksOfMonth" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.property.weeksOfMonth"></a>

```java
public java.util.List<java.lang.Number> getWeeksOfMonth();
```

- *Type:* java.util.List<java.lang.Number>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.property.internalValue"></a>

```java
public DatabaseExadataInfrastructureMaintenanceWindow getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindow">DatabaseExadataInfrastructureMaintenanceWindow</a>

---


### DatabaseExadataInfrastructureNetworkBondingModeDetailsOutputReference <a name="DatabaseExadataInfrastructureNetworkBondingModeDetailsOutputReference" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetailsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_exadata_infrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetailsOutputReference;

new DatabaseExadataInfrastructureNetworkBondingModeDetailsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetailsOutputReference.resetBackupNetworkBondingMode">resetBackupNetworkBondingMode</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetailsOutputReference.resetClientNetworkBondingMode">resetClientNetworkBondingMode</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetailsOutputReference.resetDrNetworkBondingMode">resetDrNetworkBondingMode</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetailsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetailsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetailsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetailsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetailsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetailsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetailsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetailsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetailsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetailsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetailsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetailsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetailsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBackupNetworkBondingMode` <a name="resetBackupNetworkBondingMode" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetailsOutputReference.resetBackupNetworkBondingMode"></a>

```java
public void resetBackupNetworkBondingMode()
```

##### `resetClientNetworkBondingMode` <a name="resetClientNetworkBondingMode" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetailsOutputReference.resetClientNetworkBondingMode"></a>

```java
public void resetClientNetworkBondingMode()
```

##### `resetDrNetworkBondingMode` <a name="resetDrNetworkBondingMode" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetailsOutputReference.resetDrNetworkBondingMode"></a>

```java
public void resetDrNetworkBondingMode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetailsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetailsOutputReference.property.backupNetworkBondingModeInput">backupNetworkBondingModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetailsOutputReference.property.clientNetworkBondingModeInput">clientNetworkBondingModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetailsOutputReference.property.drNetworkBondingModeInput">drNetworkBondingModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetailsOutputReference.property.backupNetworkBondingMode">backupNetworkBondingMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetailsOutputReference.property.clientNetworkBondingMode">clientNetworkBondingMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetailsOutputReference.property.drNetworkBondingMode">drNetworkBondingMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetails">DatabaseExadataInfrastructureNetworkBondingModeDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetailsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetailsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `backupNetworkBondingModeInput`<sup>Optional</sup> <a name="backupNetworkBondingModeInput" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetailsOutputReference.property.backupNetworkBondingModeInput"></a>

```java
public java.lang.String getBackupNetworkBondingModeInput();
```

- *Type:* java.lang.String

---

##### `clientNetworkBondingModeInput`<sup>Optional</sup> <a name="clientNetworkBondingModeInput" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetailsOutputReference.property.clientNetworkBondingModeInput"></a>

```java
public java.lang.String getClientNetworkBondingModeInput();
```

- *Type:* java.lang.String

---

##### `drNetworkBondingModeInput`<sup>Optional</sup> <a name="drNetworkBondingModeInput" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetailsOutputReference.property.drNetworkBondingModeInput"></a>

```java
public java.lang.String getDrNetworkBondingModeInput();
```

- *Type:* java.lang.String

---

##### `backupNetworkBondingMode`<sup>Required</sup> <a name="backupNetworkBondingMode" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetailsOutputReference.property.backupNetworkBondingMode"></a>

```java
public java.lang.String getBackupNetworkBondingMode();
```

- *Type:* java.lang.String

---

##### `clientNetworkBondingMode`<sup>Required</sup> <a name="clientNetworkBondingMode" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetailsOutputReference.property.clientNetworkBondingMode"></a>

```java
public java.lang.String getClientNetworkBondingMode();
```

- *Type:* java.lang.String

---

##### `drNetworkBondingMode`<sup>Required</sup> <a name="drNetworkBondingMode" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetailsOutputReference.property.drNetworkBondingMode"></a>

```java
public java.lang.String getDrNetworkBondingMode();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetailsOutputReference.property.internalValue"></a>

```java
public DatabaseExadataInfrastructureNetworkBondingModeDetails getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetails">DatabaseExadataInfrastructureNetworkBondingModeDetails</a>

---


### DatabaseExadataInfrastructureTimeoutsOutputReference <a name="DatabaseExadataInfrastructureTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_exadata_infrastructure.DatabaseExadataInfrastructureTimeoutsOutputReference;

new DatabaseExadataInfrastructureTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeouts">DatabaseExadataInfrastructureTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeouts">DatabaseExadataInfrastructureTimeouts</a>

---



