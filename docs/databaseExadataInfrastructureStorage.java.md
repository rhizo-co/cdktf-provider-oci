# `databaseExadataInfrastructureStorage` Submodule <a name="`databaseExadataInfrastructureStorage` Submodule" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatabaseExadataInfrastructureStorage <a name="DatabaseExadataInfrastructureStorage" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_storage oci_database_exadata_infrastructure_storage}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_exadata_infrastructure_storage.DatabaseExadataInfrastructureStorage;

DatabaseExadataInfrastructureStorage.Builder.create(Construct scope, java.lang.String id)
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
//  .computeCount(java.lang.Number)
//  .contacts(IResolvable)
//  .contacts(java.util.List<DatabaseExadataInfrastructureStorageContacts>)
//  .corporateProxy(java.lang.String)
//  .definedTags(java.util.Map<java.lang.String, java.lang.String>)
//  .exadataInfrastructureId(java.lang.String)
//  .freeformTags(java.util.Map<java.lang.String, java.lang.String>)
//  .id(java.lang.String)
//  .maintenanceWindow(DatabaseExadataInfrastructureStorageMaintenanceWindow)
//  .storageCount(java.lang.Number)
//  .timeouts(DatabaseExadataInfrastructureStorageTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.Initializer.parameter.adminNetworkCidr">adminNetworkCidr</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_storage#admin_network_cidr DatabaseExadataInfrastructureStorage#admin_network_cidr}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.Initializer.parameter.cloudControlPlaneServer1">cloudControlPlaneServer1</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_storage#cloud_control_plane_server1 DatabaseExadataInfrastructureStorage#cloud_control_plane_server1}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.Initializer.parameter.cloudControlPlaneServer2">cloudControlPlaneServer2</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_storage#cloud_control_plane_server2 DatabaseExadataInfrastructureStorage#cloud_control_plane_server2}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.Initializer.parameter.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_storage#compartment_id DatabaseExadataInfrastructureStorage#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_storage#display_name DatabaseExadataInfrastructureStorage#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.Initializer.parameter.dnsServer">dnsServer</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_storage#dns_server DatabaseExadataInfrastructureStorage#dns_server}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.Initializer.parameter.gateway">gateway</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_storage#gateway DatabaseExadataInfrastructureStorage#gateway}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.Initializer.parameter.infiniBandNetworkCidr">infiniBandNetworkCidr</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_storage#infini_band_network_cidr DatabaseExadataInfrastructureStorage#infini_band_network_cidr}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.Initializer.parameter.netmask">netmask</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_storage#netmask DatabaseExadataInfrastructureStorage#netmask}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.Initializer.parameter.ntpServer">ntpServer</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_storage#ntp_server DatabaseExadataInfrastructureStorage#ntp_server}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.Initializer.parameter.shape">shape</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_storage#shape DatabaseExadataInfrastructureStorage#shape}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.Initializer.parameter.timeZone">timeZone</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_storage#time_zone DatabaseExadataInfrastructureStorage#time_zone}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.Initializer.parameter.activationFile">activationFile</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_storage#activation_file DatabaseExadataInfrastructureStorage#activation_file}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.Initializer.parameter.computeCount">computeCount</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_storage#compute_count DatabaseExadataInfrastructureStorage#compute_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.Initializer.parameter.contacts">contacts</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContacts">DatabaseExadataInfrastructureStorageContacts</a>></code> | contacts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.Initializer.parameter.corporateProxy">corporateProxy</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_storage#corporate_proxy DatabaseExadataInfrastructureStorage#corporate_proxy}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.Initializer.parameter.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_storage#defined_tags DatabaseExadataInfrastructureStorage#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.Initializer.parameter.exadataInfrastructureId">exadataInfrastructureId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_storage#exadata_infrastructure_id DatabaseExadataInfrastructureStorage#exadata_infrastructure_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.Initializer.parameter.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_storage#freeform_tags DatabaseExadataInfrastructureStorage#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_storage#id DatabaseExadataInfrastructureStorage#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.Initializer.parameter.maintenanceWindow">maintenanceWindow</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindow">DatabaseExadataInfrastructureStorageMaintenanceWindow</a></code> | maintenance_window block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.Initializer.parameter.storageCount">storageCount</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_storage#storage_count DatabaseExadataInfrastructureStorage#storage_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageTimeouts">DatabaseExadataInfrastructureStorageTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `adminNetworkCidr`<sup>Required</sup> <a name="adminNetworkCidr" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.Initializer.parameter.adminNetworkCidr"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_storage#admin_network_cidr DatabaseExadataInfrastructureStorage#admin_network_cidr}.

---

##### `cloudControlPlaneServer1`<sup>Required</sup> <a name="cloudControlPlaneServer1" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.Initializer.parameter.cloudControlPlaneServer1"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_storage#cloud_control_plane_server1 DatabaseExadataInfrastructureStorage#cloud_control_plane_server1}.

---

##### `cloudControlPlaneServer2`<sup>Required</sup> <a name="cloudControlPlaneServer2" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.Initializer.parameter.cloudControlPlaneServer2"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_storage#cloud_control_plane_server2 DatabaseExadataInfrastructureStorage#cloud_control_plane_server2}.

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.Initializer.parameter.compartmentId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_storage#compartment_id DatabaseExadataInfrastructureStorage#compartment_id}.

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_storage#display_name DatabaseExadataInfrastructureStorage#display_name}.

---

##### `dnsServer`<sup>Required</sup> <a name="dnsServer" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.Initializer.parameter.dnsServer"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_storage#dns_server DatabaseExadataInfrastructureStorage#dns_server}.

---

##### `gateway`<sup>Required</sup> <a name="gateway" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.Initializer.parameter.gateway"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_storage#gateway DatabaseExadataInfrastructureStorage#gateway}.

---

##### `infiniBandNetworkCidr`<sup>Required</sup> <a name="infiniBandNetworkCidr" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.Initializer.parameter.infiniBandNetworkCidr"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_storage#infini_band_network_cidr DatabaseExadataInfrastructureStorage#infini_band_network_cidr}.

---

##### `netmask`<sup>Required</sup> <a name="netmask" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.Initializer.parameter.netmask"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_storage#netmask DatabaseExadataInfrastructureStorage#netmask}.

---

##### `ntpServer`<sup>Required</sup> <a name="ntpServer" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.Initializer.parameter.ntpServer"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_storage#ntp_server DatabaseExadataInfrastructureStorage#ntp_server}.

---

##### `shape`<sup>Required</sup> <a name="shape" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.Initializer.parameter.shape"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_storage#shape DatabaseExadataInfrastructureStorage#shape}.

---

##### `timeZone`<sup>Required</sup> <a name="timeZone" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.Initializer.parameter.timeZone"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_storage#time_zone DatabaseExadataInfrastructureStorage#time_zone}.

---

##### `activationFile`<sup>Optional</sup> <a name="activationFile" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.Initializer.parameter.activationFile"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_storage#activation_file DatabaseExadataInfrastructureStorage#activation_file}.

---

##### `computeCount`<sup>Optional</sup> <a name="computeCount" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.Initializer.parameter.computeCount"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_storage#compute_count DatabaseExadataInfrastructureStorage#compute_count}.

---

##### `contacts`<sup>Optional</sup> <a name="contacts" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.Initializer.parameter.contacts"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContacts">DatabaseExadataInfrastructureStorageContacts</a>>

contacts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_storage#contacts DatabaseExadataInfrastructureStorage#contacts}

---

##### `corporateProxy`<sup>Optional</sup> <a name="corporateProxy" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.Initializer.parameter.corporateProxy"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_storage#corporate_proxy DatabaseExadataInfrastructureStorage#corporate_proxy}.

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.Initializer.parameter.definedTags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_storage#defined_tags DatabaseExadataInfrastructureStorage#defined_tags}.

---

##### `exadataInfrastructureId`<sup>Optional</sup> <a name="exadataInfrastructureId" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.Initializer.parameter.exadataInfrastructureId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_storage#exadata_infrastructure_id DatabaseExadataInfrastructureStorage#exadata_infrastructure_id}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.Initializer.parameter.freeformTags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_storage#freeform_tags DatabaseExadataInfrastructureStorage#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_storage#id DatabaseExadataInfrastructureStorage#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `maintenanceWindow`<sup>Optional</sup> <a name="maintenanceWindow" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.Initializer.parameter.maintenanceWindow"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindow">DatabaseExadataInfrastructureStorageMaintenanceWindow</a>

maintenance_window block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_storage#maintenance_window DatabaseExadataInfrastructureStorage#maintenance_window}

---

##### `storageCount`<sup>Optional</sup> <a name="storageCount" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.Initializer.parameter.storageCount"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_storage#storage_count DatabaseExadataInfrastructureStorage#storage_count}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageTimeouts">DatabaseExadataInfrastructureStorageTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_storage#timeouts DatabaseExadataInfrastructureStorage#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.putContacts">putContacts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.putMaintenanceWindow">putMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.resetActivationFile">resetActivationFile</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.resetComputeCount">resetComputeCount</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.resetContacts">resetContacts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.resetCorporateProxy">resetCorporateProxy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.resetDefinedTags">resetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.resetExadataInfrastructureId">resetExadataInfrastructureId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.resetFreeformTags">resetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.resetMaintenanceWindow">resetMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.resetStorageCount">resetStorageCount</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putContacts` <a name="putContacts" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.putContacts"></a>

```java
public void putContacts(IResolvable OR java.util.List<DatabaseExadataInfrastructureStorageContacts> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.putContacts.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContacts">DatabaseExadataInfrastructureStorageContacts</a>>

---

##### `putMaintenanceWindow` <a name="putMaintenanceWindow" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.putMaintenanceWindow"></a>

```java
public void putMaintenanceWindow(DatabaseExadataInfrastructureStorageMaintenanceWindow value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.putMaintenanceWindow.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindow">DatabaseExadataInfrastructureStorageMaintenanceWindow</a>

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.putTimeouts"></a>

```java
public void putTimeouts(DatabaseExadataInfrastructureStorageTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageTimeouts">DatabaseExadataInfrastructureStorageTimeouts</a>

---

##### `resetActivationFile` <a name="resetActivationFile" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.resetActivationFile"></a>

```java
public void resetActivationFile()
```

##### `resetComputeCount` <a name="resetComputeCount" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.resetComputeCount"></a>

```java
public void resetComputeCount()
```

##### `resetContacts` <a name="resetContacts" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.resetContacts"></a>

```java
public void resetContacts()
```

##### `resetCorporateProxy` <a name="resetCorporateProxy" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.resetCorporateProxy"></a>

```java
public void resetCorporateProxy()
```

##### `resetDefinedTags` <a name="resetDefinedTags" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.resetDefinedTags"></a>

```java
public void resetDefinedTags()
```

##### `resetExadataInfrastructureId` <a name="resetExadataInfrastructureId" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.resetExadataInfrastructureId"></a>

```java
public void resetExadataInfrastructureId()
```

##### `resetFreeformTags` <a name="resetFreeformTags" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.resetFreeformTags"></a>

```java
public void resetFreeformTags()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.resetId"></a>

```java
public void resetId()
```

##### `resetMaintenanceWindow` <a name="resetMaintenanceWindow" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.resetMaintenanceWindow"></a>

```java
public void resetMaintenanceWindow()
```

##### `resetStorageCount` <a name="resetStorageCount" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.resetStorageCount"></a>

```java
public void resetStorageCount()
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DatabaseExadataInfrastructureStorage resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_exadata_infrastructure_storage.DatabaseExadataInfrastructureStorage;

DatabaseExadataInfrastructureStorage.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_exadata_infrastructure_storage.DatabaseExadataInfrastructureStorage;

DatabaseExadataInfrastructureStorage.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_exadata_infrastructure_storage.DatabaseExadataInfrastructureStorage;

DatabaseExadataInfrastructureStorage.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_exadata_infrastructure_storage.DatabaseExadataInfrastructureStorage;

DatabaseExadataInfrastructureStorage.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DatabaseExadataInfrastructureStorage.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DatabaseExadataInfrastructureStorage resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DatabaseExadataInfrastructureStorage to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DatabaseExadataInfrastructureStorage that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_storage#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DatabaseExadataInfrastructureStorage to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.activatedStorageCount">activatedStorageCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.additionalStorageCount">additionalStorageCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.contacts">contacts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContactsList">DatabaseExadataInfrastructureStorageContactsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.cpusEnabled">cpusEnabled</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.csiNumber">csiNumber</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.dataStorageSizeInTbs">dataStorageSizeInTbs</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.dbNodeStorageSizeInGbs">dbNodeStorageSizeInGbs</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.lifecycleDetails">lifecycleDetails</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.maintenanceSloStatus">maintenanceSloStatus</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.maintenanceWindow">maintenanceWindow</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowOutputReference">DatabaseExadataInfrastructureStorageMaintenanceWindowOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.maxCpuCount">maxCpuCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.maxDataStorageInTbs">maxDataStorageInTbs</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.maxDbNodeStorageInGbs">maxDbNodeStorageInGbs</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.maxMemoryInGbs">maxMemoryInGbs</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.memorySizeInGbs">memorySizeInGbs</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.timeCreated">timeCreated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageTimeoutsOutputReference">DatabaseExadataInfrastructureStorageTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.activationFileInput">activationFileInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.adminNetworkCidrInput">adminNetworkCidrInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.cloudControlPlaneServer1Input">cloudControlPlaneServer1Input</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.cloudControlPlaneServer2Input">cloudControlPlaneServer2Input</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.compartmentIdInput">compartmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.computeCountInput">computeCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.contactsInput">contactsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContacts">DatabaseExadataInfrastructureStorageContacts</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.corporateProxyInput">corporateProxyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.definedTagsInput">definedTagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.dnsServerInput">dnsServerInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.exadataInfrastructureIdInput">exadataInfrastructureIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.freeformTagsInput">freeformTagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.gatewayInput">gatewayInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.infiniBandNetworkCidrInput">infiniBandNetworkCidrInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.maintenanceWindowInput">maintenanceWindowInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindow">DatabaseExadataInfrastructureStorageMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.netmaskInput">netmaskInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.ntpServerInput">ntpServerInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.shapeInput">shapeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.storageCountInput">storageCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageTimeouts">DatabaseExadataInfrastructureStorageTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.timeZoneInput">timeZoneInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.activationFile">activationFile</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.adminNetworkCidr">adminNetworkCidr</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.cloudControlPlaneServer1">cloudControlPlaneServer1</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.cloudControlPlaneServer2">cloudControlPlaneServer2</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.computeCount">computeCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.corporateProxy">corporateProxy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.dnsServer">dnsServer</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.exadataInfrastructureId">exadataInfrastructureId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.gateway">gateway</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.infiniBandNetworkCidr">infiniBandNetworkCidr</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.netmask">netmask</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.ntpServer">ntpServer</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.shape">shape</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.storageCount">storageCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.timeZone">timeZone</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `activatedStorageCount`<sup>Required</sup> <a name="activatedStorageCount" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.activatedStorageCount"></a>

```java
public java.lang.Number getActivatedStorageCount();
```

- *Type:* java.lang.Number

---

##### `additionalStorageCount`<sup>Required</sup> <a name="additionalStorageCount" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.additionalStorageCount"></a>

```java
public java.lang.Number getAdditionalStorageCount();
```

- *Type:* java.lang.Number

---

##### `contacts`<sup>Required</sup> <a name="contacts" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.contacts"></a>

```java
public DatabaseExadataInfrastructureStorageContactsList getContacts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContactsList">DatabaseExadataInfrastructureStorageContactsList</a>

---

##### `cpusEnabled`<sup>Required</sup> <a name="cpusEnabled" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.cpusEnabled"></a>

```java
public java.lang.Number getCpusEnabled();
```

- *Type:* java.lang.Number

---

##### `csiNumber`<sup>Required</sup> <a name="csiNumber" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.csiNumber"></a>

```java
public java.lang.String getCsiNumber();
```

- *Type:* java.lang.String

---

##### `dataStorageSizeInTbs`<sup>Required</sup> <a name="dataStorageSizeInTbs" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.dataStorageSizeInTbs"></a>

```java
public java.lang.Number getDataStorageSizeInTbs();
```

- *Type:* java.lang.Number

---

##### `dbNodeStorageSizeInGbs`<sup>Required</sup> <a name="dbNodeStorageSizeInGbs" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.dbNodeStorageSizeInGbs"></a>

```java
public java.lang.Number getDbNodeStorageSizeInGbs();
```

- *Type:* java.lang.Number

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.lifecycleDetails"></a>

```java
public java.lang.String getLifecycleDetails();
```

- *Type:* java.lang.String

---

##### `maintenanceSloStatus`<sup>Required</sup> <a name="maintenanceSloStatus" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.maintenanceSloStatus"></a>

```java
public java.lang.String getMaintenanceSloStatus();
```

- *Type:* java.lang.String

---

##### `maintenanceWindow`<sup>Required</sup> <a name="maintenanceWindow" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.maintenanceWindow"></a>

```java
public DatabaseExadataInfrastructureStorageMaintenanceWindowOutputReference getMaintenanceWindow();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowOutputReference">DatabaseExadataInfrastructureStorageMaintenanceWindowOutputReference</a>

---

##### `maxCpuCount`<sup>Required</sup> <a name="maxCpuCount" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.maxCpuCount"></a>

```java
public java.lang.Number getMaxCpuCount();
```

- *Type:* java.lang.Number

---

##### `maxDataStorageInTbs`<sup>Required</sup> <a name="maxDataStorageInTbs" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.maxDataStorageInTbs"></a>

```java
public java.lang.Number getMaxDataStorageInTbs();
```

- *Type:* java.lang.Number

---

##### `maxDbNodeStorageInGbs`<sup>Required</sup> <a name="maxDbNodeStorageInGbs" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.maxDbNodeStorageInGbs"></a>

```java
public java.lang.Number getMaxDbNodeStorageInGbs();
```

- *Type:* java.lang.Number

---

##### `maxMemoryInGbs`<sup>Required</sup> <a name="maxMemoryInGbs" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.maxMemoryInGbs"></a>

```java
public java.lang.Number getMaxMemoryInGbs();
```

- *Type:* java.lang.Number

---

##### `memorySizeInGbs`<sup>Required</sup> <a name="memorySizeInGbs" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.memorySizeInGbs"></a>

```java
public java.lang.Number getMemorySizeInGbs();
```

- *Type:* java.lang.Number

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.timeCreated"></a>

```java
public java.lang.String getTimeCreated();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.timeouts"></a>

```java
public DatabaseExadataInfrastructureStorageTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageTimeoutsOutputReference">DatabaseExadataInfrastructureStorageTimeoutsOutputReference</a>

---

##### `activationFileInput`<sup>Optional</sup> <a name="activationFileInput" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.activationFileInput"></a>

```java
public java.lang.String getActivationFileInput();
```

- *Type:* java.lang.String

---

##### `adminNetworkCidrInput`<sup>Optional</sup> <a name="adminNetworkCidrInput" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.adminNetworkCidrInput"></a>

```java
public java.lang.String getAdminNetworkCidrInput();
```

- *Type:* java.lang.String

---

##### `cloudControlPlaneServer1Input`<sup>Optional</sup> <a name="cloudControlPlaneServer1Input" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.cloudControlPlaneServer1Input"></a>

```java
public java.lang.String getCloudControlPlaneServer1Input();
```

- *Type:* java.lang.String

---

##### `cloudControlPlaneServer2Input`<sup>Optional</sup> <a name="cloudControlPlaneServer2Input" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.cloudControlPlaneServer2Input"></a>

```java
public java.lang.String getCloudControlPlaneServer2Input();
```

- *Type:* java.lang.String

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.compartmentIdInput"></a>

```java
public java.lang.String getCompartmentIdInput();
```

- *Type:* java.lang.String

---

##### `computeCountInput`<sup>Optional</sup> <a name="computeCountInput" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.computeCountInput"></a>

```java
public java.lang.Number getComputeCountInput();
```

- *Type:* java.lang.Number

---

##### `contactsInput`<sup>Optional</sup> <a name="contactsInput" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.contactsInput"></a>

```java
public java.lang.Object getContactsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContacts">DatabaseExadataInfrastructureStorageContacts</a>>

---

##### `corporateProxyInput`<sup>Optional</sup> <a name="corporateProxyInput" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.corporateProxyInput"></a>

```java
public java.lang.String getCorporateProxyInput();
```

- *Type:* java.lang.String

---

##### `definedTagsInput`<sup>Optional</sup> <a name="definedTagsInput" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.definedTagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `dnsServerInput`<sup>Optional</sup> <a name="dnsServerInput" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.dnsServerInput"></a>

```java
public java.util.List<java.lang.String> getDnsServerInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `exadataInfrastructureIdInput`<sup>Optional</sup> <a name="exadataInfrastructureIdInput" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.exadataInfrastructureIdInput"></a>

```java
public java.lang.String getExadataInfrastructureIdInput();
```

- *Type:* java.lang.String

---

##### `freeformTagsInput`<sup>Optional</sup> <a name="freeformTagsInput" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.freeformTagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `gatewayInput`<sup>Optional</sup> <a name="gatewayInput" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.gatewayInput"></a>

```java
public java.lang.String getGatewayInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `infiniBandNetworkCidrInput`<sup>Optional</sup> <a name="infiniBandNetworkCidrInput" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.infiniBandNetworkCidrInput"></a>

```java
public java.lang.String getInfiniBandNetworkCidrInput();
```

- *Type:* java.lang.String

---

##### `maintenanceWindowInput`<sup>Optional</sup> <a name="maintenanceWindowInput" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.maintenanceWindowInput"></a>

```java
public DatabaseExadataInfrastructureStorageMaintenanceWindow getMaintenanceWindowInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindow">DatabaseExadataInfrastructureStorageMaintenanceWindow</a>

---

##### `netmaskInput`<sup>Optional</sup> <a name="netmaskInput" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.netmaskInput"></a>

```java
public java.lang.String getNetmaskInput();
```

- *Type:* java.lang.String

---

##### `ntpServerInput`<sup>Optional</sup> <a name="ntpServerInput" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.ntpServerInput"></a>

```java
public java.util.List<java.lang.String> getNtpServerInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `shapeInput`<sup>Optional</sup> <a name="shapeInput" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.shapeInput"></a>

```java
public java.lang.String getShapeInput();
```

- *Type:* java.lang.String

---

##### `storageCountInput`<sup>Optional</sup> <a name="storageCountInput" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.storageCountInput"></a>

```java
public java.lang.Number getStorageCountInput();
```

- *Type:* java.lang.Number

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageTimeouts">DatabaseExadataInfrastructureStorageTimeouts</a>

---

##### `timeZoneInput`<sup>Optional</sup> <a name="timeZoneInput" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.timeZoneInput"></a>

```java
public java.lang.String getTimeZoneInput();
```

- *Type:* java.lang.String

---

##### `activationFile`<sup>Required</sup> <a name="activationFile" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.activationFile"></a>

```java
public java.lang.String getActivationFile();
```

- *Type:* java.lang.String

---

##### `adminNetworkCidr`<sup>Required</sup> <a name="adminNetworkCidr" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.adminNetworkCidr"></a>

```java
public java.lang.String getAdminNetworkCidr();
```

- *Type:* java.lang.String

---

##### `cloudControlPlaneServer1`<sup>Required</sup> <a name="cloudControlPlaneServer1" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.cloudControlPlaneServer1"></a>

```java
public java.lang.String getCloudControlPlaneServer1();
```

- *Type:* java.lang.String

---

##### `cloudControlPlaneServer2`<sup>Required</sup> <a name="cloudControlPlaneServer2" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.cloudControlPlaneServer2"></a>

```java
public java.lang.String getCloudControlPlaneServer2();
```

- *Type:* java.lang.String

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `computeCount`<sup>Required</sup> <a name="computeCount" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.computeCount"></a>

```java
public java.lang.Number getComputeCount();
```

- *Type:* java.lang.Number

---

##### `corporateProxy`<sup>Required</sup> <a name="corporateProxy" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.corporateProxy"></a>

```java
public java.lang.String getCorporateProxy();
```

- *Type:* java.lang.String

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.definedTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `dnsServer`<sup>Required</sup> <a name="dnsServer" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.dnsServer"></a>

```java
public java.util.List<java.lang.String> getDnsServer();
```

- *Type:* java.util.List<java.lang.String>

---

##### `exadataInfrastructureId`<sup>Required</sup> <a name="exadataInfrastructureId" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.exadataInfrastructureId"></a>

```java
public java.lang.String getExadataInfrastructureId();
```

- *Type:* java.lang.String

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.freeformTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `gateway`<sup>Required</sup> <a name="gateway" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.gateway"></a>

```java
public java.lang.String getGateway();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `infiniBandNetworkCidr`<sup>Required</sup> <a name="infiniBandNetworkCidr" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.infiniBandNetworkCidr"></a>

```java
public java.lang.String getInfiniBandNetworkCidr();
```

- *Type:* java.lang.String

---

##### `netmask`<sup>Required</sup> <a name="netmask" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.netmask"></a>

```java
public java.lang.String getNetmask();
```

- *Type:* java.lang.String

---

##### `ntpServer`<sup>Required</sup> <a name="ntpServer" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.ntpServer"></a>

```java
public java.util.List<java.lang.String> getNtpServer();
```

- *Type:* java.util.List<java.lang.String>

---

##### `shape`<sup>Required</sup> <a name="shape" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.shape"></a>

```java
public java.lang.String getShape();
```

- *Type:* java.lang.String

---

##### `storageCount`<sup>Required</sup> <a name="storageCount" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.storageCount"></a>

```java
public java.lang.Number getStorageCount();
```

- *Type:* java.lang.Number

---

##### `timeZone`<sup>Required</sup> <a name="timeZone" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.timeZone"></a>

```java
public java.lang.String getTimeZone();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DatabaseExadataInfrastructureStorageConfig <a name="DatabaseExadataInfrastructureStorageConfig" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_exadata_infrastructure_storage.DatabaseExadataInfrastructureStorageConfig;

DatabaseExadataInfrastructureStorageConfig.builder()
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
//  .computeCount(java.lang.Number)
//  .contacts(IResolvable)
//  .contacts(java.util.List<DatabaseExadataInfrastructureStorageContacts>)
//  .corporateProxy(java.lang.String)
//  .definedTags(java.util.Map<java.lang.String, java.lang.String>)
//  .exadataInfrastructureId(java.lang.String)
//  .freeformTags(java.util.Map<java.lang.String, java.lang.String>)
//  .id(java.lang.String)
//  .maintenanceWindow(DatabaseExadataInfrastructureStorageMaintenanceWindow)
//  .storageCount(java.lang.Number)
//  .timeouts(DatabaseExadataInfrastructureStorageTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageConfig.property.adminNetworkCidr">adminNetworkCidr</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_storage#admin_network_cidr DatabaseExadataInfrastructureStorage#admin_network_cidr}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageConfig.property.cloudControlPlaneServer1">cloudControlPlaneServer1</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_storage#cloud_control_plane_server1 DatabaseExadataInfrastructureStorage#cloud_control_plane_server1}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageConfig.property.cloudControlPlaneServer2">cloudControlPlaneServer2</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_storage#cloud_control_plane_server2 DatabaseExadataInfrastructureStorage#cloud_control_plane_server2}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageConfig.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_storage#compartment_id DatabaseExadataInfrastructureStorage#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_storage#display_name DatabaseExadataInfrastructureStorage#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageConfig.property.dnsServer">dnsServer</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_storage#dns_server DatabaseExadataInfrastructureStorage#dns_server}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageConfig.property.gateway">gateway</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_storage#gateway DatabaseExadataInfrastructureStorage#gateway}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageConfig.property.infiniBandNetworkCidr">infiniBandNetworkCidr</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_storage#infini_band_network_cidr DatabaseExadataInfrastructureStorage#infini_band_network_cidr}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageConfig.property.netmask">netmask</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_storage#netmask DatabaseExadataInfrastructureStorage#netmask}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageConfig.property.ntpServer">ntpServer</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_storage#ntp_server DatabaseExadataInfrastructureStorage#ntp_server}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageConfig.property.shape">shape</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_storage#shape DatabaseExadataInfrastructureStorage#shape}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageConfig.property.timeZone">timeZone</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_storage#time_zone DatabaseExadataInfrastructureStorage#time_zone}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageConfig.property.activationFile">activationFile</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_storage#activation_file DatabaseExadataInfrastructureStorage#activation_file}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageConfig.property.computeCount">computeCount</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_storage#compute_count DatabaseExadataInfrastructureStorage#compute_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageConfig.property.contacts">contacts</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContacts">DatabaseExadataInfrastructureStorageContacts</a>></code> | contacts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageConfig.property.corporateProxy">corporateProxy</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_storage#corporate_proxy DatabaseExadataInfrastructureStorage#corporate_proxy}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageConfig.property.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_storage#defined_tags DatabaseExadataInfrastructureStorage#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageConfig.property.exadataInfrastructureId">exadataInfrastructureId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_storage#exadata_infrastructure_id DatabaseExadataInfrastructureStorage#exadata_infrastructure_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageConfig.property.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_storage#freeform_tags DatabaseExadataInfrastructureStorage#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_storage#id DatabaseExadataInfrastructureStorage#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageConfig.property.maintenanceWindow">maintenanceWindow</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindow">DatabaseExadataInfrastructureStorageMaintenanceWindow</a></code> | maintenance_window block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageConfig.property.storageCount">storageCount</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_storage#storage_count DatabaseExadataInfrastructureStorage#storage_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageTimeouts">DatabaseExadataInfrastructureStorageTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `adminNetworkCidr`<sup>Required</sup> <a name="adminNetworkCidr" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageConfig.property.adminNetworkCidr"></a>

```java
public java.lang.String getAdminNetworkCidr();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_storage#admin_network_cidr DatabaseExadataInfrastructureStorage#admin_network_cidr}.

---

##### `cloudControlPlaneServer1`<sup>Required</sup> <a name="cloudControlPlaneServer1" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageConfig.property.cloudControlPlaneServer1"></a>

```java
public java.lang.String getCloudControlPlaneServer1();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_storage#cloud_control_plane_server1 DatabaseExadataInfrastructureStorage#cloud_control_plane_server1}.

---

##### `cloudControlPlaneServer2`<sup>Required</sup> <a name="cloudControlPlaneServer2" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageConfig.property.cloudControlPlaneServer2"></a>

```java
public java.lang.String getCloudControlPlaneServer2();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_storage#cloud_control_plane_server2 DatabaseExadataInfrastructureStorage#cloud_control_plane_server2}.

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageConfig.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_storage#compartment_id DatabaseExadataInfrastructureStorage#compartment_id}.

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_storage#display_name DatabaseExadataInfrastructureStorage#display_name}.

---

##### `dnsServer`<sup>Required</sup> <a name="dnsServer" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageConfig.property.dnsServer"></a>

```java
public java.util.List<java.lang.String> getDnsServer();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_storage#dns_server DatabaseExadataInfrastructureStorage#dns_server}.

---

##### `gateway`<sup>Required</sup> <a name="gateway" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageConfig.property.gateway"></a>

```java
public java.lang.String getGateway();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_storage#gateway DatabaseExadataInfrastructureStorage#gateway}.

---

##### `infiniBandNetworkCidr`<sup>Required</sup> <a name="infiniBandNetworkCidr" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageConfig.property.infiniBandNetworkCidr"></a>

```java
public java.lang.String getInfiniBandNetworkCidr();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_storage#infini_band_network_cidr DatabaseExadataInfrastructureStorage#infini_band_network_cidr}.

---

##### `netmask`<sup>Required</sup> <a name="netmask" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageConfig.property.netmask"></a>

```java
public java.lang.String getNetmask();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_storage#netmask DatabaseExadataInfrastructureStorage#netmask}.

---

##### `ntpServer`<sup>Required</sup> <a name="ntpServer" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageConfig.property.ntpServer"></a>

```java
public java.util.List<java.lang.String> getNtpServer();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_storage#ntp_server DatabaseExadataInfrastructureStorage#ntp_server}.

---

##### `shape`<sup>Required</sup> <a name="shape" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageConfig.property.shape"></a>

```java
public java.lang.String getShape();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_storage#shape DatabaseExadataInfrastructureStorage#shape}.

---

##### `timeZone`<sup>Required</sup> <a name="timeZone" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageConfig.property.timeZone"></a>

```java
public java.lang.String getTimeZone();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_storage#time_zone DatabaseExadataInfrastructureStorage#time_zone}.

---

##### `activationFile`<sup>Optional</sup> <a name="activationFile" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageConfig.property.activationFile"></a>

```java
public java.lang.String getActivationFile();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_storage#activation_file DatabaseExadataInfrastructureStorage#activation_file}.

---

##### `computeCount`<sup>Optional</sup> <a name="computeCount" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageConfig.property.computeCount"></a>

```java
public java.lang.Number getComputeCount();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_storage#compute_count DatabaseExadataInfrastructureStorage#compute_count}.

---

##### `contacts`<sup>Optional</sup> <a name="contacts" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageConfig.property.contacts"></a>

```java
public java.lang.Object getContacts();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContacts">DatabaseExadataInfrastructureStorageContacts</a>>

contacts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_storage#contacts DatabaseExadataInfrastructureStorage#contacts}

---

##### `corporateProxy`<sup>Optional</sup> <a name="corporateProxy" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageConfig.property.corporateProxy"></a>

```java
public java.lang.String getCorporateProxy();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_storage#corporate_proxy DatabaseExadataInfrastructureStorage#corporate_proxy}.

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageConfig.property.definedTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_storage#defined_tags DatabaseExadataInfrastructureStorage#defined_tags}.

---

##### `exadataInfrastructureId`<sup>Optional</sup> <a name="exadataInfrastructureId" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageConfig.property.exadataInfrastructureId"></a>

```java
public java.lang.String getExadataInfrastructureId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_storage#exadata_infrastructure_id DatabaseExadataInfrastructureStorage#exadata_infrastructure_id}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageConfig.property.freeformTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_storage#freeform_tags DatabaseExadataInfrastructureStorage#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_storage#id DatabaseExadataInfrastructureStorage#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `maintenanceWindow`<sup>Optional</sup> <a name="maintenanceWindow" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageConfig.property.maintenanceWindow"></a>

```java
public DatabaseExadataInfrastructureStorageMaintenanceWindow getMaintenanceWindow();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindow">DatabaseExadataInfrastructureStorageMaintenanceWindow</a>

maintenance_window block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_storage#maintenance_window DatabaseExadataInfrastructureStorage#maintenance_window}

---

##### `storageCount`<sup>Optional</sup> <a name="storageCount" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageConfig.property.storageCount"></a>

```java
public java.lang.Number getStorageCount();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_storage#storage_count DatabaseExadataInfrastructureStorage#storage_count}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageConfig.property.timeouts"></a>

```java
public DatabaseExadataInfrastructureStorageTimeouts getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageTimeouts">DatabaseExadataInfrastructureStorageTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_storage#timeouts DatabaseExadataInfrastructureStorage#timeouts}

---

### DatabaseExadataInfrastructureStorageContacts <a name="DatabaseExadataInfrastructureStorageContacts" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContacts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContacts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_exadata_infrastructure_storage.DatabaseExadataInfrastructureStorageContacts;

DatabaseExadataInfrastructureStorageContacts.builder()
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
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContacts.property.email">email</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_storage#email DatabaseExadataInfrastructureStorage#email}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContacts.property.isPrimary">isPrimary</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_storage#is_primary DatabaseExadataInfrastructureStorage#is_primary}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContacts.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_storage#name DatabaseExadataInfrastructureStorage#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContacts.property.isContactMosValidated">isContactMosValidated</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_storage#is_contact_mos_validated DatabaseExadataInfrastructureStorage#is_contact_mos_validated}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContacts.property.phoneNumber">phoneNumber</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_storage#phone_number DatabaseExadataInfrastructureStorage#phone_number}. |

---

##### `email`<sup>Required</sup> <a name="email" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContacts.property.email"></a>

```java
public java.lang.String getEmail();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_storage#email DatabaseExadataInfrastructureStorage#email}.

---

##### `isPrimary`<sup>Required</sup> <a name="isPrimary" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContacts.property.isPrimary"></a>

```java
public java.lang.Object getIsPrimary();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_storage#is_primary DatabaseExadataInfrastructureStorage#is_primary}.

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContacts.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_storage#name DatabaseExadataInfrastructureStorage#name}.

---

##### `isContactMosValidated`<sup>Optional</sup> <a name="isContactMosValidated" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContacts.property.isContactMosValidated"></a>

```java
public java.lang.Object getIsContactMosValidated();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_storage#is_contact_mos_validated DatabaseExadataInfrastructureStorage#is_contact_mos_validated}.

---

##### `phoneNumber`<sup>Optional</sup> <a name="phoneNumber" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContacts.property.phoneNumber"></a>

```java
public java.lang.String getPhoneNumber();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_storage#phone_number DatabaseExadataInfrastructureStorage#phone_number}.

---

### DatabaseExadataInfrastructureStorageMaintenanceWindow <a name="DatabaseExadataInfrastructureStorageMaintenanceWindow" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindow"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindow.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_exadata_infrastructure_storage.DatabaseExadataInfrastructureStorageMaintenanceWindow;

DatabaseExadataInfrastructureStorageMaintenanceWindow.builder()
    .preference(java.lang.String)
//  .daysOfWeek(IResolvable)
//  .daysOfWeek(java.util.List<DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeek>)
//  .hoursOfDay(java.util.List<java.lang.Number>)
//  .leadTimeInWeeks(java.lang.Number)
//  .months(IResolvable)
//  .months(java.util.List<DatabaseExadataInfrastructureStorageMaintenanceWindowMonths>)
//  .weeksOfMonth(java.util.List<java.lang.Number>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindow.property.preference">preference</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_storage#preference DatabaseExadataInfrastructureStorage#preference}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindow.property.daysOfWeek">daysOfWeek</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeek">DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeek</a>></code> | days_of_week block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindow.property.hoursOfDay">hoursOfDay</a></code> | <code>java.util.List<java.lang.Number></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_storage#hours_of_day DatabaseExadataInfrastructureStorage#hours_of_day}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindow.property.leadTimeInWeeks">leadTimeInWeeks</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_storage#lead_time_in_weeks DatabaseExadataInfrastructureStorage#lead_time_in_weeks}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindow.property.months">months</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowMonths">DatabaseExadataInfrastructureStorageMaintenanceWindowMonths</a>></code> | months block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindow.property.weeksOfMonth">weeksOfMonth</a></code> | <code>java.util.List<java.lang.Number></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_storage#weeks_of_month DatabaseExadataInfrastructureStorage#weeks_of_month}. |

---

##### `preference`<sup>Required</sup> <a name="preference" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindow.property.preference"></a>

```java
public java.lang.String getPreference();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_storage#preference DatabaseExadataInfrastructureStorage#preference}.

---

##### `daysOfWeek`<sup>Optional</sup> <a name="daysOfWeek" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindow.property.daysOfWeek"></a>

```java
public java.lang.Object getDaysOfWeek();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeek">DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeek</a>>

days_of_week block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_storage#days_of_week DatabaseExadataInfrastructureStorage#days_of_week}

---

##### `hoursOfDay`<sup>Optional</sup> <a name="hoursOfDay" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindow.property.hoursOfDay"></a>

```java
public java.util.List<java.lang.Number> getHoursOfDay();
```

- *Type:* java.util.List<java.lang.Number>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_storage#hours_of_day DatabaseExadataInfrastructureStorage#hours_of_day}.

---

##### `leadTimeInWeeks`<sup>Optional</sup> <a name="leadTimeInWeeks" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindow.property.leadTimeInWeeks"></a>

```java
public java.lang.Number getLeadTimeInWeeks();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_storage#lead_time_in_weeks DatabaseExadataInfrastructureStorage#lead_time_in_weeks}.

---

##### `months`<sup>Optional</sup> <a name="months" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindow.property.months"></a>

```java
public java.lang.Object getMonths();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowMonths">DatabaseExadataInfrastructureStorageMaintenanceWindowMonths</a>>

months block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_storage#months DatabaseExadataInfrastructureStorage#months}

---

##### `weeksOfMonth`<sup>Optional</sup> <a name="weeksOfMonth" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindow.property.weeksOfMonth"></a>

```java
public java.util.List<java.lang.Number> getWeeksOfMonth();
```

- *Type:* java.util.List<java.lang.Number>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_storage#weeks_of_month DatabaseExadataInfrastructureStorage#weeks_of_month}.

---

### DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeek <a name="DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeek" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeek"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeek.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_exadata_infrastructure_storage.DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeek;

DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeek.builder()
    .name(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeek.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_storage#name DatabaseExadataInfrastructureStorage#name}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeek.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_storage#name DatabaseExadataInfrastructureStorage#name}.

---

### DatabaseExadataInfrastructureStorageMaintenanceWindowMonths <a name="DatabaseExadataInfrastructureStorageMaintenanceWindowMonths" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowMonths"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowMonths.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_exadata_infrastructure_storage.DatabaseExadataInfrastructureStorageMaintenanceWindowMonths;

DatabaseExadataInfrastructureStorageMaintenanceWindowMonths.builder()
    .name(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowMonths.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_storage#name DatabaseExadataInfrastructureStorage#name}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowMonths.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_storage#name DatabaseExadataInfrastructureStorage#name}.

---

### DatabaseExadataInfrastructureStorageTimeouts <a name="DatabaseExadataInfrastructureStorageTimeouts" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_exadata_infrastructure_storage.DatabaseExadataInfrastructureStorageTimeouts;

DatabaseExadataInfrastructureStorageTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_storage#create DatabaseExadataInfrastructureStorage#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_storage#delete DatabaseExadataInfrastructureStorage#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_storage#update DatabaseExadataInfrastructureStorage#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_storage#create DatabaseExadataInfrastructureStorage#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_storage#delete DatabaseExadataInfrastructureStorage#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_storage#update DatabaseExadataInfrastructureStorage#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DatabaseExadataInfrastructureStorageContactsList <a name="DatabaseExadataInfrastructureStorageContactsList" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContactsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContactsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_exadata_infrastructure_storage.DatabaseExadataInfrastructureStorageContactsList;

new DatabaseExadataInfrastructureStorageContactsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContactsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContactsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContactsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContactsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContactsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContactsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContactsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContactsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContactsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContactsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContactsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContactsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContactsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContactsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContactsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContactsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContactsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContactsList.get"></a>

```java
public DatabaseExadataInfrastructureStorageContactsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContactsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContactsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContactsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContactsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContacts">DatabaseExadataInfrastructureStorageContacts</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContactsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContactsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContactsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContacts">DatabaseExadataInfrastructureStorageContacts</a>>

---


### DatabaseExadataInfrastructureStorageContactsOutputReference <a name="DatabaseExadataInfrastructureStorageContactsOutputReference" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContactsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContactsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_exadata_infrastructure_storage.DatabaseExadataInfrastructureStorageContactsOutputReference;

new DatabaseExadataInfrastructureStorageContactsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContactsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContactsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContactsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContactsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContactsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContactsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContactsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContactsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContactsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContactsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContactsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContactsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContactsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContactsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContactsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContactsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContactsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContactsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContactsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContactsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContactsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContactsOutputReference.resetIsContactMosValidated">resetIsContactMosValidated</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContactsOutputReference.resetPhoneNumber">resetPhoneNumber</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContactsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContactsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContactsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContactsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContactsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContactsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContactsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContactsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContactsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContactsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContactsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContactsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContactsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContactsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContactsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContactsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContactsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContactsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContactsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContactsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContactsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContactsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContactsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContactsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIsContactMosValidated` <a name="resetIsContactMosValidated" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContactsOutputReference.resetIsContactMosValidated"></a>

```java
public void resetIsContactMosValidated()
```

##### `resetPhoneNumber` <a name="resetPhoneNumber" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContactsOutputReference.resetPhoneNumber"></a>

```java
public void resetPhoneNumber()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContactsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContactsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContactsOutputReference.property.emailInput">emailInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContactsOutputReference.property.isContactMosValidatedInput">isContactMosValidatedInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContactsOutputReference.property.isPrimaryInput">isPrimaryInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContactsOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContactsOutputReference.property.phoneNumberInput">phoneNumberInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContactsOutputReference.property.email">email</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContactsOutputReference.property.isContactMosValidated">isContactMosValidated</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContactsOutputReference.property.isPrimary">isPrimary</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContactsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContactsOutputReference.property.phoneNumber">phoneNumber</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContactsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContacts">DatabaseExadataInfrastructureStorageContacts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContactsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContactsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `emailInput`<sup>Optional</sup> <a name="emailInput" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContactsOutputReference.property.emailInput"></a>

```java
public java.lang.String getEmailInput();
```

- *Type:* java.lang.String

---

##### `isContactMosValidatedInput`<sup>Optional</sup> <a name="isContactMosValidatedInput" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContactsOutputReference.property.isContactMosValidatedInput"></a>

```java
public java.lang.Object getIsContactMosValidatedInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isPrimaryInput`<sup>Optional</sup> <a name="isPrimaryInput" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContactsOutputReference.property.isPrimaryInput"></a>

```java
public java.lang.Object getIsPrimaryInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContactsOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `phoneNumberInput`<sup>Optional</sup> <a name="phoneNumberInput" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContactsOutputReference.property.phoneNumberInput"></a>

```java
public java.lang.String getPhoneNumberInput();
```

- *Type:* java.lang.String

---

##### `email`<sup>Required</sup> <a name="email" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContactsOutputReference.property.email"></a>

```java
public java.lang.String getEmail();
```

- *Type:* java.lang.String

---

##### `isContactMosValidated`<sup>Required</sup> <a name="isContactMosValidated" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContactsOutputReference.property.isContactMosValidated"></a>

```java
public java.lang.Object getIsContactMosValidated();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isPrimary`<sup>Required</sup> <a name="isPrimary" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContactsOutputReference.property.isPrimary"></a>

```java
public java.lang.Object getIsPrimary();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContactsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `phoneNumber`<sup>Required</sup> <a name="phoneNumber" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContactsOutputReference.property.phoneNumber"></a>

```java
public java.lang.String getPhoneNumber();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContactsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContacts">DatabaseExadataInfrastructureStorageContacts</a>

---


### DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeekList <a name="DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeekList" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeekList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeekList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_exadata_infrastructure_storage.DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeekList;

new DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeekList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeekList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeekList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeekList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeekList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeekList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeekList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeekList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeekList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeekList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeekList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeekList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeekList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeekList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeekList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeekList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeekList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeekList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeekList.get"></a>

```java
public DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeekOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeekList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeekList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeekList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeekList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeek">DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeek</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeekList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeekList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeekList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeek">DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeek</a>>

---


### DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeekOutputReference <a name="DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeekOutputReference" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeekOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeekOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_exadata_infrastructure_storage.DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeekOutputReference;

new DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeekOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeekOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeekOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeekOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeekOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeekOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeekOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeekOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeekOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeekOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeekOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeekOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeekOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeekOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeekOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeekOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeekOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeekOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeekOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeekOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeekOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeekOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeekOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeekOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeekOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeekOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeekOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeekOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeekOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeekOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeekOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeekOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeekOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeekOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeekOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeekOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeekOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeekOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeekOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeekOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeekOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeekOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeekOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeekOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeekOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeekOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeekOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeekOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeekOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeekOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeekOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeek">DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeek</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeekOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeekOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeekOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeekOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeekOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeek">DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeek</a>

---


### DatabaseExadataInfrastructureStorageMaintenanceWindowMonthsList <a name="DatabaseExadataInfrastructureStorageMaintenanceWindowMonthsList" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowMonthsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowMonthsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_exadata_infrastructure_storage.DatabaseExadataInfrastructureStorageMaintenanceWindowMonthsList;

new DatabaseExadataInfrastructureStorageMaintenanceWindowMonthsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowMonthsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowMonthsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowMonthsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowMonthsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowMonthsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowMonthsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowMonthsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowMonthsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowMonthsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowMonthsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowMonthsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowMonthsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowMonthsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowMonthsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowMonthsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowMonthsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowMonthsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowMonthsList.get"></a>

```java
public DatabaseExadataInfrastructureStorageMaintenanceWindowMonthsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowMonthsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowMonthsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowMonthsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowMonthsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowMonths">DatabaseExadataInfrastructureStorageMaintenanceWindowMonths</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowMonthsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowMonthsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowMonthsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowMonths">DatabaseExadataInfrastructureStorageMaintenanceWindowMonths</a>>

---


### DatabaseExadataInfrastructureStorageMaintenanceWindowMonthsOutputReference <a name="DatabaseExadataInfrastructureStorageMaintenanceWindowMonthsOutputReference" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowMonthsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowMonthsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_exadata_infrastructure_storage.DatabaseExadataInfrastructureStorageMaintenanceWindowMonthsOutputReference;

new DatabaseExadataInfrastructureStorageMaintenanceWindowMonthsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowMonthsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowMonthsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowMonthsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowMonthsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowMonthsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowMonthsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowMonthsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowMonthsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowMonthsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowMonthsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowMonthsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowMonthsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowMonthsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowMonthsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowMonthsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowMonthsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowMonthsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowMonthsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowMonthsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowMonthsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowMonthsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowMonthsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowMonthsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowMonthsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowMonthsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowMonthsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowMonthsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowMonthsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowMonthsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowMonthsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowMonthsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowMonthsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowMonthsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowMonthsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowMonthsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowMonthsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowMonthsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowMonthsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowMonthsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowMonthsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowMonthsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowMonthsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowMonthsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowMonthsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowMonthsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowMonthsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowMonthsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowMonthsOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowMonthsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowMonthsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowMonths">DatabaseExadataInfrastructureStorageMaintenanceWindowMonths</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowMonthsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowMonthsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowMonthsOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowMonthsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowMonthsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowMonths">DatabaseExadataInfrastructureStorageMaintenanceWindowMonths</a>

---


### DatabaseExadataInfrastructureStorageMaintenanceWindowOutputReference <a name="DatabaseExadataInfrastructureStorageMaintenanceWindowOutputReference" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_exadata_infrastructure_storage.DatabaseExadataInfrastructureStorageMaintenanceWindowOutputReference;

new DatabaseExadataInfrastructureStorageMaintenanceWindowOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowOutputReference.putDaysOfWeek">putDaysOfWeek</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowOutputReference.putMonths">putMonths</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowOutputReference.resetDaysOfWeek">resetDaysOfWeek</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowOutputReference.resetHoursOfDay">resetHoursOfDay</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowOutputReference.resetLeadTimeInWeeks">resetLeadTimeInWeeks</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowOutputReference.resetMonths">resetMonths</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowOutputReference.resetWeeksOfMonth">resetWeeksOfMonth</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDaysOfWeek` <a name="putDaysOfWeek" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowOutputReference.putDaysOfWeek"></a>

```java
public void putDaysOfWeek(IResolvable OR java.util.List<DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeek> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowOutputReference.putDaysOfWeek.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeek">DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeek</a>>

---

##### `putMonths` <a name="putMonths" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowOutputReference.putMonths"></a>

```java
public void putMonths(IResolvable OR java.util.List<DatabaseExadataInfrastructureStorageMaintenanceWindowMonths> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowOutputReference.putMonths.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowMonths">DatabaseExadataInfrastructureStorageMaintenanceWindowMonths</a>>

---

##### `resetDaysOfWeek` <a name="resetDaysOfWeek" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowOutputReference.resetDaysOfWeek"></a>

```java
public void resetDaysOfWeek()
```

##### `resetHoursOfDay` <a name="resetHoursOfDay" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowOutputReference.resetHoursOfDay"></a>

```java
public void resetHoursOfDay()
```

##### `resetLeadTimeInWeeks` <a name="resetLeadTimeInWeeks" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowOutputReference.resetLeadTimeInWeeks"></a>

```java
public void resetLeadTimeInWeeks()
```

##### `resetMonths` <a name="resetMonths" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowOutputReference.resetMonths"></a>

```java
public void resetMonths()
```

##### `resetWeeksOfMonth` <a name="resetWeeksOfMonth" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowOutputReference.resetWeeksOfMonth"></a>

```java
public void resetWeeksOfMonth()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowOutputReference.property.daysOfWeek">daysOfWeek</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeekList">DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeekList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowOutputReference.property.months">months</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowMonthsList">DatabaseExadataInfrastructureStorageMaintenanceWindowMonthsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowOutputReference.property.daysOfWeekInput">daysOfWeekInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeek">DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeek</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowOutputReference.property.hoursOfDayInput">hoursOfDayInput</a></code> | <code>java.util.List<java.lang.Number></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowOutputReference.property.leadTimeInWeeksInput">leadTimeInWeeksInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowOutputReference.property.monthsInput">monthsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowMonths">DatabaseExadataInfrastructureStorageMaintenanceWindowMonths</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowOutputReference.property.preferenceInput">preferenceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowOutputReference.property.weeksOfMonthInput">weeksOfMonthInput</a></code> | <code>java.util.List<java.lang.Number></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowOutputReference.property.hoursOfDay">hoursOfDay</a></code> | <code>java.util.List<java.lang.Number></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowOutputReference.property.leadTimeInWeeks">leadTimeInWeeks</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowOutputReference.property.preference">preference</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowOutputReference.property.weeksOfMonth">weeksOfMonth</a></code> | <code>java.util.List<java.lang.Number></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindow">DatabaseExadataInfrastructureStorageMaintenanceWindow</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `daysOfWeek`<sup>Required</sup> <a name="daysOfWeek" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowOutputReference.property.daysOfWeek"></a>

```java
public DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeekList getDaysOfWeek();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeekList">DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeekList</a>

---

##### `months`<sup>Required</sup> <a name="months" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowOutputReference.property.months"></a>

```java
public DatabaseExadataInfrastructureStorageMaintenanceWindowMonthsList getMonths();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowMonthsList">DatabaseExadataInfrastructureStorageMaintenanceWindowMonthsList</a>

---

##### `daysOfWeekInput`<sup>Optional</sup> <a name="daysOfWeekInput" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowOutputReference.property.daysOfWeekInput"></a>

```java
public java.lang.Object getDaysOfWeekInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeek">DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeek</a>>

---

##### `hoursOfDayInput`<sup>Optional</sup> <a name="hoursOfDayInput" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowOutputReference.property.hoursOfDayInput"></a>

```java
public java.util.List<java.lang.Number> getHoursOfDayInput();
```

- *Type:* java.util.List<java.lang.Number>

---

##### `leadTimeInWeeksInput`<sup>Optional</sup> <a name="leadTimeInWeeksInput" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowOutputReference.property.leadTimeInWeeksInput"></a>

```java
public java.lang.Number getLeadTimeInWeeksInput();
```

- *Type:* java.lang.Number

---

##### `monthsInput`<sup>Optional</sup> <a name="monthsInput" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowOutputReference.property.monthsInput"></a>

```java
public java.lang.Object getMonthsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowMonths">DatabaseExadataInfrastructureStorageMaintenanceWindowMonths</a>>

---

##### `preferenceInput`<sup>Optional</sup> <a name="preferenceInput" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowOutputReference.property.preferenceInput"></a>

```java
public java.lang.String getPreferenceInput();
```

- *Type:* java.lang.String

---

##### `weeksOfMonthInput`<sup>Optional</sup> <a name="weeksOfMonthInput" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowOutputReference.property.weeksOfMonthInput"></a>

```java
public java.util.List<java.lang.Number> getWeeksOfMonthInput();
```

- *Type:* java.util.List<java.lang.Number>

---

##### `hoursOfDay`<sup>Required</sup> <a name="hoursOfDay" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowOutputReference.property.hoursOfDay"></a>

```java
public java.util.List<java.lang.Number> getHoursOfDay();
```

- *Type:* java.util.List<java.lang.Number>

---

##### `leadTimeInWeeks`<sup>Required</sup> <a name="leadTimeInWeeks" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowOutputReference.property.leadTimeInWeeks"></a>

```java
public java.lang.Number getLeadTimeInWeeks();
```

- *Type:* java.lang.Number

---

##### `preference`<sup>Required</sup> <a name="preference" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowOutputReference.property.preference"></a>

```java
public java.lang.String getPreference();
```

- *Type:* java.lang.String

---

##### `weeksOfMonth`<sup>Required</sup> <a name="weeksOfMonth" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowOutputReference.property.weeksOfMonth"></a>

```java
public java.util.List<java.lang.Number> getWeeksOfMonth();
```

- *Type:* java.util.List<java.lang.Number>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowOutputReference.property.internalValue"></a>

```java
public DatabaseExadataInfrastructureStorageMaintenanceWindow getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindow">DatabaseExadataInfrastructureStorageMaintenanceWindow</a>

---


### DatabaseExadataInfrastructureStorageTimeoutsOutputReference <a name="DatabaseExadataInfrastructureStorageTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_exadata_infrastructure_storage.DatabaseExadataInfrastructureStorageTimeoutsOutputReference;

new DatabaseExadataInfrastructureStorageTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageTimeouts">DatabaseExadataInfrastructureStorageTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageTimeouts">DatabaseExadataInfrastructureStorageTimeouts</a>

---



