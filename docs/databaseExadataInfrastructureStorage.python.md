# `databaseExadataInfrastructureStorage` Submodule <a name="`databaseExadataInfrastructureStorage` Submodule" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatabaseExadataInfrastructureStorage <a name="DatabaseExadataInfrastructureStorage" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_storage oci_database_exadata_infrastructure_storage}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_exadata_infrastructure_storage

databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  admin_network_cidr: str,
  cloud_control_plane_server1: str,
  cloud_control_plane_server2: str,
  compartment_id: str,
  display_name: str,
  dns_server: typing.List[str],
  gateway: str,
  infini_band_network_cidr: str,
  netmask: str,
  ntp_server: typing.List[str],
  shape: str,
  time_zone: str,
  activation_file: str = None,
  compute_count: typing.Union[int, float] = None,
  contacts: typing.Union[IResolvable, typing.List[DatabaseExadataInfrastructureStorageContacts]] = None,
  corporate_proxy: str = None,
  defined_tags: typing.Mapping[str] = None,
  exadata_infrastructure_id: str = None,
  freeform_tags: typing.Mapping[str] = None,
  id: str = None,
  maintenance_window: DatabaseExadataInfrastructureStorageMaintenanceWindow = None,
  storage_count: typing.Union[int, float] = None,
  timeouts: DatabaseExadataInfrastructureStorageTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.Initializer.parameter.adminNetworkCidr">admin_network_cidr</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_storage#admin_network_cidr DatabaseExadataInfrastructureStorage#admin_network_cidr}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.Initializer.parameter.cloudControlPlaneServer1">cloud_control_plane_server1</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_storage#cloud_control_plane_server1 DatabaseExadataInfrastructureStorage#cloud_control_plane_server1}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.Initializer.parameter.cloudControlPlaneServer2">cloud_control_plane_server2</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_storage#cloud_control_plane_server2 DatabaseExadataInfrastructureStorage#cloud_control_plane_server2}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_storage#compartment_id DatabaseExadataInfrastructureStorage#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_storage#display_name DatabaseExadataInfrastructureStorage#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.Initializer.parameter.dnsServer">dns_server</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_storage#dns_server DatabaseExadataInfrastructureStorage#dns_server}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.Initializer.parameter.gateway">gateway</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_storage#gateway DatabaseExadataInfrastructureStorage#gateway}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.Initializer.parameter.infiniBandNetworkCidr">infini_band_network_cidr</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_storage#infini_band_network_cidr DatabaseExadataInfrastructureStorage#infini_band_network_cidr}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.Initializer.parameter.netmask">netmask</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_storage#netmask DatabaseExadataInfrastructureStorage#netmask}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.Initializer.parameter.ntpServer">ntp_server</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_storage#ntp_server DatabaseExadataInfrastructureStorage#ntp_server}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.Initializer.parameter.shape">shape</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_storage#shape DatabaseExadataInfrastructureStorage#shape}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.Initializer.parameter.timeZone">time_zone</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_storage#time_zone DatabaseExadataInfrastructureStorage#time_zone}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.Initializer.parameter.activationFile">activation_file</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_storage#activation_file DatabaseExadataInfrastructureStorage#activation_file}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.Initializer.parameter.computeCount">compute_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_storage#compute_count DatabaseExadataInfrastructureStorage#compute_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.Initializer.parameter.contacts">contacts</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContacts">DatabaseExadataInfrastructureStorageContacts</a>]]</code> | contacts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.Initializer.parameter.corporateProxy">corporate_proxy</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_storage#corporate_proxy DatabaseExadataInfrastructureStorage#corporate_proxy}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.Initializer.parameter.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_storage#defined_tags DatabaseExadataInfrastructureStorage#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.Initializer.parameter.exadataInfrastructureId">exadata_infrastructure_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_storage#exadata_infrastructure_id DatabaseExadataInfrastructureStorage#exadata_infrastructure_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.Initializer.parameter.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_storage#freeform_tags DatabaseExadataInfrastructureStorage#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_storage#id DatabaseExadataInfrastructureStorage#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.Initializer.parameter.maintenanceWindow">maintenance_window</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindow">DatabaseExadataInfrastructureStorageMaintenanceWindow</a></code> | maintenance_window block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.Initializer.parameter.storageCount">storage_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_storage#storage_count DatabaseExadataInfrastructureStorage#storage_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageTimeouts">DatabaseExadataInfrastructureStorageTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `admin_network_cidr`<sup>Required</sup> <a name="admin_network_cidr" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.Initializer.parameter.adminNetworkCidr"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_storage#admin_network_cidr DatabaseExadataInfrastructureStorage#admin_network_cidr}.

---

##### `cloud_control_plane_server1`<sup>Required</sup> <a name="cloud_control_plane_server1" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.Initializer.parameter.cloudControlPlaneServer1"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_storage#cloud_control_plane_server1 DatabaseExadataInfrastructureStorage#cloud_control_plane_server1}.

---

##### `cloud_control_plane_server2`<sup>Required</sup> <a name="cloud_control_plane_server2" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.Initializer.parameter.cloudControlPlaneServer2"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_storage#cloud_control_plane_server2 DatabaseExadataInfrastructureStorage#cloud_control_plane_server2}.

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_storage#compartment_id DatabaseExadataInfrastructureStorage#compartment_id}.

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_storage#display_name DatabaseExadataInfrastructureStorage#display_name}.

---

##### `dns_server`<sup>Required</sup> <a name="dns_server" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.Initializer.parameter.dnsServer"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_storage#dns_server DatabaseExadataInfrastructureStorage#dns_server}.

---

##### `gateway`<sup>Required</sup> <a name="gateway" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.Initializer.parameter.gateway"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_storage#gateway DatabaseExadataInfrastructureStorage#gateway}.

---

##### `infini_band_network_cidr`<sup>Required</sup> <a name="infini_band_network_cidr" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.Initializer.parameter.infiniBandNetworkCidr"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_storage#infini_band_network_cidr DatabaseExadataInfrastructureStorage#infini_band_network_cidr}.

---

##### `netmask`<sup>Required</sup> <a name="netmask" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.Initializer.parameter.netmask"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_storage#netmask DatabaseExadataInfrastructureStorage#netmask}.

---

##### `ntp_server`<sup>Required</sup> <a name="ntp_server" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.Initializer.parameter.ntpServer"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_storage#ntp_server DatabaseExadataInfrastructureStorage#ntp_server}.

---

##### `shape`<sup>Required</sup> <a name="shape" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.Initializer.parameter.shape"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_storage#shape DatabaseExadataInfrastructureStorage#shape}.

---

##### `time_zone`<sup>Required</sup> <a name="time_zone" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.Initializer.parameter.timeZone"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_storage#time_zone DatabaseExadataInfrastructureStorage#time_zone}.

---

##### `activation_file`<sup>Optional</sup> <a name="activation_file" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.Initializer.parameter.activationFile"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_storage#activation_file DatabaseExadataInfrastructureStorage#activation_file}.

---

##### `compute_count`<sup>Optional</sup> <a name="compute_count" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.Initializer.parameter.computeCount"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_storage#compute_count DatabaseExadataInfrastructureStorage#compute_count}.

---

##### `contacts`<sup>Optional</sup> <a name="contacts" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.Initializer.parameter.contacts"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContacts">DatabaseExadataInfrastructureStorageContacts</a>]]

contacts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_storage#contacts DatabaseExadataInfrastructureStorage#contacts}

---

##### `corporate_proxy`<sup>Optional</sup> <a name="corporate_proxy" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.Initializer.parameter.corporateProxy"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_storage#corporate_proxy DatabaseExadataInfrastructureStorage#corporate_proxy}.

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.Initializer.parameter.definedTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_storage#defined_tags DatabaseExadataInfrastructureStorage#defined_tags}.

---

##### `exadata_infrastructure_id`<sup>Optional</sup> <a name="exadata_infrastructure_id" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.Initializer.parameter.exadataInfrastructureId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_storage#exadata_infrastructure_id DatabaseExadataInfrastructureStorage#exadata_infrastructure_id}.

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.Initializer.parameter.freeformTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_storage#freeform_tags DatabaseExadataInfrastructureStorage#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_storage#id DatabaseExadataInfrastructureStorage#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `maintenance_window`<sup>Optional</sup> <a name="maintenance_window" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.Initializer.parameter.maintenanceWindow"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindow">DatabaseExadataInfrastructureStorageMaintenanceWindow</a>

maintenance_window block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_storage#maintenance_window DatabaseExadataInfrastructureStorage#maintenance_window}

---

##### `storage_count`<sup>Optional</sup> <a name="storage_count" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.Initializer.parameter.storageCount"></a>

- *Type:* typing.Union[int, float]

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
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.putContacts">put_contacts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.putMaintenanceWindow">put_maintenance_window</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.resetActivationFile">reset_activation_file</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.resetComputeCount">reset_compute_count</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.resetContacts">reset_contacts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.resetCorporateProxy">reset_corporate_proxy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.resetDefinedTags">reset_defined_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.resetExadataInfrastructureId">reset_exadata_infrastructure_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.resetFreeformTags">reset_freeform_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.resetMaintenanceWindow">reset_maintenance_window</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.resetStorageCount">reset_storage_count</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_contacts` <a name="put_contacts" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.putContacts"></a>

```python
def put_contacts(
  value: typing.Union[IResolvable, typing.List[DatabaseExadataInfrastructureStorageContacts]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.putContacts.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContacts">DatabaseExadataInfrastructureStorageContacts</a>]]

---

##### `put_maintenance_window` <a name="put_maintenance_window" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.putMaintenanceWindow"></a>

```python
def put_maintenance_window(
  preference: str,
  days_of_week: typing.Union[IResolvable, typing.List[DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeek]] = None,
  hours_of_day: typing.List[typing.Union[int, float]] = None,
  lead_time_in_weeks: typing.Union[int, float] = None,
  months: typing.Union[IResolvable, typing.List[DatabaseExadataInfrastructureStorageMaintenanceWindowMonths]] = None,
  weeks_of_month: typing.List[typing.Union[int, float]] = None
) -> None
```

###### `preference`<sup>Required</sup> <a name="preference" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.putMaintenanceWindow.parameter.preference"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_storage#preference DatabaseExadataInfrastructureStorage#preference}.

---

###### `days_of_week`<sup>Optional</sup> <a name="days_of_week" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.putMaintenanceWindow.parameter.daysOfWeek"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeek">DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeek</a>]]

days_of_week block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_storage#days_of_week DatabaseExadataInfrastructureStorage#days_of_week}

---

###### `hours_of_day`<sup>Optional</sup> <a name="hours_of_day" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.putMaintenanceWindow.parameter.hoursOfDay"></a>

- *Type:* typing.List[typing.Union[int, float]]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_storage#hours_of_day DatabaseExadataInfrastructureStorage#hours_of_day}.

---

###### `lead_time_in_weeks`<sup>Optional</sup> <a name="lead_time_in_weeks" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.putMaintenanceWindow.parameter.leadTimeInWeeks"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_storage#lead_time_in_weeks DatabaseExadataInfrastructureStorage#lead_time_in_weeks}.

---

###### `months`<sup>Optional</sup> <a name="months" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.putMaintenanceWindow.parameter.months"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowMonths">DatabaseExadataInfrastructureStorageMaintenanceWindowMonths</a>]]

months block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_storage#months DatabaseExadataInfrastructureStorage#months}

---

###### `weeks_of_month`<sup>Optional</sup> <a name="weeks_of_month" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.putMaintenanceWindow.parameter.weeksOfMonth"></a>

- *Type:* typing.List[typing.Union[int, float]]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_storage#weeks_of_month DatabaseExadataInfrastructureStorage#weeks_of_month}.

---

##### `put_timeouts` <a name="put_timeouts" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_storage#create DatabaseExadataInfrastructureStorage#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_storage#delete DatabaseExadataInfrastructureStorage#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_storage#update DatabaseExadataInfrastructureStorage#update}.

---

##### `reset_activation_file` <a name="reset_activation_file" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.resetActivationFile"></a>

```python
def reset_activation_file() -> None
```

##### `reset_compute_count` <a name="reset_compute_count" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.resetComputeCount"></a>

```python
def reset_compute_count() -> None
```

##### `reset_contacts` <a name="reset_contacts" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.resetContacts"></a>

```python
def reset_contacts() -> None
```

##### `reset_corporate_proxy` <a name="reset_corporate_proxy" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.resetCorporateProxy"></a>

```python
def reset_corporate_proxy() -> None
```

##### `reset_defined_tags` <a name="reset_defined_tags" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.resetDefinedTags"></a>

```python
def reset_defined_tags() -> None
```

##### `reset_exadata_infrastructure_id` <a name="reset_exadata_infrastructure_id" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.resetExadataInfrastructureId"></a>

```python
def reset_exadata_infrastructure_id() -> None
```

##### `reset_freeform_tags` <a name="reset_freeform_tags" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.resetFreeformTags"></a>

```python
def reset_freeform_tags() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_maintenance_window` <a name="reset_maintenance_window" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.resetMaintenanceWindow"></a>

```python
def reset_maintenance_window() -> None
```

##### `reset_storage_count` <a name="reset_storage_count" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.resetStorageCount"></a>

```python
def reset_storage_count() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DatabaseExadataInfrastructureStorage resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import database_exadata_infrastructure_storage

databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.is_construct(
  x: typing.Any
)
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

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import database_exadata_infrastructure_storage

databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.isTerraformResource"></a>

```python
from rhizo-co_cdktf_provider_oci import database_exadata_infrastructure_storage

databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import database_exadata_infrastructure_storage

databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DatabaseExadataInfrastructureStorage resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DatabaseExadataInfrastructureStorage to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DatabaseExadataInfrastructureStorage that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_storage#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DatabaseExadataInfrastructureStorage to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.activatedStorageCount">activated_storage_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.additionalStorageCount">additional_storage_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.contacts">contacts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContactsList">DatabaseExadataInfrastructureStorageContactsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.cpusEnabled">cpus_enabled</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.csiNumber">csi_number</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.dataStorageSizeInTbs">data_storage_size_in_tbs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.dbNodeStorageSizeInGbs">db_node_storage_size_in_gbs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.maintenanceSloStatus">maintenance_slo_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.maintenanceWindow">maintenance_window</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowOutputReference">DatabaseExadataInfrastructureStorageMaintenanceWindowOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.maxCpuCount">max_cpu_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.maxDataStorageInTbs">max_data_storage_in_tbs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.maxDbNodeStorageInGbs">max_db_node_storage_in_gbs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.maxMemoryInGbs">max_memory_in_gbs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.memorySizeInGbs">memory_size_in_gbs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageTimeoutsOutputReference">DatabaseExadataInfrastructureStorageTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.activationFileInput">activation_file_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.adminNetworkCidrInput">admin_network_cidr_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.cloudControlPlaneServer1Input">cloud_control_plane_server1_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.cloudControlPlaneServer2Input">cloud_control_plane_server2_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.computeCountInput">compute_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.contactsInput">contacts_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContacts">DatabaseExadataInfrastructureStorageContacts</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.corporateProxyInput">corporate_proxy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.definedTagsInput">defined_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.dnsServerInput">dns_server_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.exadataInfrastructureIdInput">exadata_infrastructure_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.freeformTagsInput">freeform_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.gatewayInput">gateway_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.infiniBandNetworkCidrInput">infini_band_network_cidr_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.maintenanceWindowInput">maintenance_window_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindow">DatabaseExadataInfrastructureStorageMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.netmaskInput">netmask_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.ntpServerInput">ntp_server_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.shapeInput">shape_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.storageCountInput">storage_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageTimeouts">DatabaseExadataInfrastructureStorageTimeouts</a>]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.timeZoneInput">time_zone_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.activationFile">activation_file</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.adminNetworkCidr">admin_network_cidr</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.cloudControlPlaneServer1">cloud_control_plane_server1</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.cloudControlPlaneServer2">cloud_control_plane_server2</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.computeCount">compute_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.corporateProxy">corporate_proxy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.dnsServer">dns_server</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.exadataInfrastructureId">exadata_infrastructure_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.gateway">gateway</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.infiniBandNetworkCidr">infini_band_network_cidr</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.netmask">netmask</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.ntpServer">ntp_server</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.shape">shape</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.storageCount">storage_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.timeZone">time_zone</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `activated_storage_count`<sup>Required</sup> <a name="activated_storage_count" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.activatedStorageCount"></a>

```python
activated_storage_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `additional_storage_count`<sup>Required</sup> <a name="additional_storage_count" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.additionalStorageCount"></a>

```python
additional_storage_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `contacts`<sup>Required</sup> <a name="contacts" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.contacts"></a>

```python
contacts: DatabaseExadataInfrastructureStorageContactsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContactsList">DatabaseExadataInfrastructureStorageContactsList</a>

---

##### `cpus_enabled`<sup>Required</sup> <a name="cpus_enabled" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.cpusEnabled"></a>

```python
cpus_enabled: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `csi_number`<sup>Required</sup> <a name="csi_number" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.csiNumber"></a>

```python
csi_number: str
```

- *Type:* str

---

##### `data_storage_size_in_tbs`<sup>Required</sup> <a name="data_storage_size_in_tbs" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.dataStorageSizeInTbs"></a>

```python
data_storage_size_in_tbs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `db_node_storage_size_in_gbs`<sup>Required</sup> <a name="db_node_storage_size_in_gbs" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.dbNodeStorageSizeInGbs"></a>

```python
db_node_storage_size_in_gbs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `maintenance_slo_status`<sup>Required</sup> <a name="maintenance_slo_status" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.maintenanceSloStatus"></a>

```python
maintenance_slo_status: str
```

- *Type:* str

---

##### `maintenance_window`<sup>Required</sup> <a name="maintenance_window" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.maintenanceWindow"></a>

```python
maintenance_window: DatabaseExadataInfrastructureStorageMaintenanceWindowOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowOutputReference">DatabaseExadataInfrastructureStorageMaintenanceWindowOutputReference</a>

---

##### `max_cpu_count`<sup>Required</sup> <a name="max_cpu_count" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.maxCpuCount"></a>

```python
max_cpu_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_data_storage_in_tbs`<sup>Required</sup> <a name="max_data_storage_in_tbs" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.maxDataStorageInTbs"></a>

```python
max_data_storage_in_tbs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_db_node_storage_in_gbs`<sup>Required</sup> <a name="max_db_node_storage_in_gbs" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.maxDbNodeStorageInGbs"></a>

```python
max_db_node_storage_in_gbs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_memory_in_gbs`<sup>Required</sup> <a name="max_memory_in_gbs" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.maxMemoryInGbs"></a>

```python
max_memory_in_gbs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `memory_size_in_gbs`<sup>Required</sup> <a name="memory_size_in_gbs" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.memorySizeInGbs"></a>

```python
memory_size_in_gbs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.timeouts"></a>

```python
timeouts: DatabaseExadataInfrastructureStorageTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageTimeoutsOutputReference">DatabaseExadataInfrastructureStorageTimeoutsOutputReference</a>

---

##### `activation_file_input`<sup>Optional</sup> <a name="activation_file_input" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.activationFileInput"></a>

```python
activation_file_input: str
```

- *Type:* str

---

##### `admin_network_cidr_input`<sup>Optional</sup> <a name="admin_network_cidr_input" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.adminNetworkCidrInput"></a>

```python
admin_network_cidr_input: str
```

- *Type:* str

---

##### `cloud_control_plane_server1_input`<sup>Optional</sup> <a name="cloud_control_plane_server1_input" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.cloudControlPlaneServer1Input"></a>

```python
cloud_control_plane_server1_input: str
```

- *Type:* str

---

##### `cloud_control_plane_server2_input`<sup>Optional</sup> <a name="cloud_control_plane_server2_input" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.cloudControlPlaneServer2Input"></a>

```python
cloud_control_plane_server2_input: str
```

- *Type:* str

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `compute_count_input`<sup>Optional</sup> <a name="compute_count_input" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.computeCountInput"></a>

```python
compute_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `contacts_input`<sup>Optional</sup> <a name="contacts_input" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.contactsInput"></a>

```python
contacts_input: typing.Union[IResolvable, typing.List[DatabaseExadataInfrastructureStorageContacts]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContacts">DatabaseExadataInfrastructureStorageContacts</a>]]

---

##### `corporate_proxy_input`<sup>Optional</sup> <a name="corporate_proxy_input" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.corporateProxyInput"></a>

```python
corporate_proxy_input: str
```

- *Type:* str

---

##### `defined_tags_input`<sup>Optional</sup> <a name="defined_tags_input" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.definedTagsInput"></a>

```python
defined_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `dns_server_input`<sup>Optional</sup> <a name="dns_server_input" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.dnsServerInput"></a>

```python
dns_server_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `exadata_infrastructure_id_input`<sup>Optional</sup> <a name="exadata_infrastructure_id_input" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.exadataInfrastructureIdInput"></a>

```python
exadata_infrastructure_id_input: str
```

- *Type:* str

---

##### `freeform_tags_input`<sup>Optional</sup> <a name="freeform_tags_input" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.freeformTagsInput"></a>

```python
freeform_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `gateway_input`<sup>Optional</sup> <a name="gateway_input" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.gatewayInput"></a>

```python
gateway_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `infini_band_network_cidr_input`<sup>Optional</sup> <a name="infini_band_network_cidr_input" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.infiniBandNetworkCidrInput"></a>

```python
infini_band_network_cidr_input: str
```

- *Type:* str

---

##### `maintenance_window_input`<sup>Optional</sup> <a name="maintenance_window_input" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.maintenanceWindowInput"></a>

```python
maintenance_window_input: DatabaseExadataInfrastructureStorageMaintenanceWindow
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindow">DatabaseExadataInfrastructureStorageMaintenanceWindow</a>

---

##### `netmask_input`<sup>Optional</sup> <a name="netmask_input" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.netmaskInput"></a>

```python
netmask_input: str
```

- *Type:* str

---

##### `ntp_server_input`<sup>Optional</sup> <a name="ntp_server_input" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.ntpServerInput"></a>

```python
ntp_server_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `shape_input`<sup>Optional</sup> <a name="shape_input" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.shapeInput"></a>

```python
shape_input: str
```

- *Type:* str

---

##### `storage_count_input`<sup>Optional</sup> <a name="storage_count_input" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.storageCountInput"></a>

```python
storage_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, DatabaseExadataInfrastructureStorageTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageTimeouts">DatabaseExadataInfrastructureStorageTimeouts</a>]

---

##### `time_zone_input`<sup>Optional</sup> <a name="time_zone_input" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.timeZoneInput"></a>

```python
time_zone_input: str
```

- *Type:* str

---

##### `activation_file`<sup>Required</sup> <a name="activation_file" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.activationFile"></a>

```python
activation_file: str
```

- *Type:* str

---

##### `admin_network_cidr`<sup>Required</sup> <a name="admin_network_cidr" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.adminNetworkCidr"></a>

```python
admin_network_cidr: str
```

- *Type:* str

---

##### `cloud_control_plane_server1`<sup>Required</sup> <a name="cloud_control_plane_server1" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.cloudControlPlaneServer1"></a>

```python
cloud_control_plane_server1: str
```

- *Type:* str

---

##### `cloud_control_plane_server2`<sup>Required</sup> <a name="cloud_control_plane_server2" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.cloudControlPlaneServer2"></a>

```python
cloud_control_plane_server2: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `compute_count`<sup>Required</sup> <a name="compute_count" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.computeCount"></a>

```python
compute_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `corporate_proxy`<sup>Required</sup> <a name="corporate_proxy" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.corporateProxy"></a>

```python
corporate_proxy: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `dns_server`<sup>Required</sup> <a name="dns_server" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.dnsServer"></a>

```python
dns_server: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `exadata_infrastructure_id`<sup>Required</sup> <a name="exadata_infrastructure_id" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.exadataInfrastructureId"></a>

```python
exadata_infrastructure_id: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `gateway`<sup>Required</sup> <a name="gateway" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.gateway"></a>

```python
gateway: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `infini_band_network_cidr`<sup>Required</sup> <a name="infini_band_network_cidr" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.infiniBandNetworkCidr"></a>

```python
infini_band_network_cidr: str
```

- *Type:* str

---

##### `netmask`<sup>Required</sup> <a name="netmask" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.netmask"></a>

```python
netmask: str
```

- *Type:* str

---

##### `ntp_server`<sup>Required</sup> <a name="ntp_server" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.ntpServer"></a>

```python
ntp_server: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `shape`<sup>Required</sup> <a name="shape" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.shape"></a>

```python
shape: str
```

- *Type:* str

---

##### `storage_count`<sup>Required</sup> <a name="storage_count" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.storageCount"></a>

```python
storage_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `time_zone`<sup>Required</sup> <a name="time_zone" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.timeZone"></a>

```python
time_zone: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorage.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DatabaseExadataInfrastructureStorageConfig <a name="DatabaseExadataInfrastructureStorageConfig" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_exadata_infrastructure_storage

databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  admin_network_cidr: str,
  cloud_control_plane_server1: str,
  cloud_control_plane_server2: str,
  compartment_id: str,
  display_name: str,
  dns_server: typing.List[str],
  gateway: str,
  infini_band_network_cidr: str,
  netmask: str,
  ntp_server: typing.List[str],
  shape: str,
  time_zone: str,
  activation_file: str = None,
  compute_count: typing.Union[int, float] = None,
  contacts: typing.Union[IResolvable, typing.List[DatabaseExadataInfrastructureStorageContacts]] = None,
  corporate_proxy: str = None,
  defined_tags: typing.Mapping[str] = None,
  exadata_infrastructure_id: str = None,
  freeform_tags: typing.Mapping[str] = None,
  id: str = None,
  maintenance_window: DatabaseExadataInfrastructureStorageMaintenanceWindow = None,
  storage_count: typing.Union[int, float] = None,
  timeouts: DatabaseExadataInfrastructureStorageTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageConfig.property.adminNetworkCidr">admin_network_cidr</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_storage#admin_network_cidr DatabaseExadataInfrastructureStorage#admin_network_cidr}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageConfig.property.cloudControlPlaneServer1">cloud_control_plane_server1</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_storage#cloud_control_plane_server1 DatabaseExadataInfrastructureStorage#cloud_control_plane_server1}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageConfig.property.cloudControlPlaneServer2">cloud_control_plane_server2</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_storage#cloud_control_plane_server2 DatabaseExadataInfrastructureStorage#cloud_control_plane_server2}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_storage#compartment_id DatabaseExadataInfrastructureStorage#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_storage#display_name DatabaseExadataInfrastructureStorage#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageConfig.property.dnsServer">dns_server</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_storage#dns_server DatabaseExadataInfrastructureStorage#dns_server}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageConfig.property.gateway">gateway</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_storage#gateway DatabaseExadataInfrastructureStorage#gateway}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageConfig.property.infiniBandNetworkCidr">infini_band_network_cidr</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_storage#infini_band_network_cidr DatabaseExadataInfrastructureStorage#infini_band_network_cidr}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageConfig.property.netmask">netmask</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_storage#netmask DatabaseExadataInfrastructureStorage#netmask}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageConfig.property.ntpServer">ntp_server</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_storage#ntp_server DatabaseExadataInfrastructureStorage#ntp_server}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageConfig.property.shape">shape</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_storage#shape DatabaseExadataInfrastructureStorage#shape}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageConfig.property.timeZone">time_zone</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_storage#time_zone DatabaseExadataInfrastructureStorage#time_zone}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageConfig.property.activationFile">activation_file</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_storage#activation_file DatabaseExadataInfrastructureStorage#activation_file}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageConfig.property.computeCount">compute_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_storage#compute_count DatabaseExadataInfrastructureStorage#compute_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageConfig.property.contacts">contacts</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContacts">DatabaseExadataInfrastructureStorageContacts</a>]]</code> | contacts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageConfig.property.corporateProxy">corporate_proxy</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_storage#corporate_proxy DatabaseExadataInfrastructureStorage#corporate_proxy}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageConfig.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_storage#defined_tags DatabaseExadataInfrastructureStorage#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageConfig.property.exadataInfrastructureId">exadata_infrastructure_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_storage#exadata_infrastructure_id DatabaseExadataInfrastructureStorage#exadata_infrastructure_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageConfig.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_storage#freeform_tags DatabaseExadataInfrastructureStorage#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_storage#id DatabaseExadataInfrastructureStorage#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageConfig.property.maintenanceWindow">maintenance_window</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindow">DatabaseExadataInfrastructureStorageMaintenanceWindow</a></code> | maintenance_window block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageConfig.property.storageCount">storage_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_storage#storage_count DatabaseExadataInfrastructureStorage#storage_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageTimeouts">DatabaseExadataInfrastructureStorageTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `admin_network_cidr`<sup>Required</sup> <a name="admin_network_cidr" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageConfig.property.adminNetworkCidr"></a>

```python
admin_network_cidr: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_storage#admin_network_cidr DatabaseExadataInfrastructureStorage#admin_network_cidr}.

---

##### `cloud_control_plane_server1`<sup>Required</sup> <a name="cloud_control_plane_server1" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageConfig.property.cloudControlPlaneServer1"></a>

```python
cloud_control_plane_server1: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_storage#cloud_control_plane_server1 DatabaseExadataInfrastructureStorage#cloud_control_plane_server1}.

---

##### `cloud_control_plane_server2`<sup>Required</sup> <a name="cloud_control_plane_server2" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageConfig.property.cloudControlPlaneServer2"></a>

```python
cloud_control_plane_server2: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_storage#cloud_control_plane_server2 DatabaseExadataInfrastructureStorage#cloud_control_plane_server2}.

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_storage#compartment_id DatabaseExadataInfrastructureStorage#compartment_id}.

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_storage#display_name DatabaseExadataInfrastructureStorage#display_name}.

---

##### `dns_server`<sup>Required</sup> <a name="dns_server" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageConfig.property.dnsServer"></a>

```python
dns_server: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_storage#dns_server DatabaseExadataInfrastructureStorage#dns_server}.

---

##### `gateway`<sup>Required</sup> <a name="gateway" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageConfig.property.gateway"></a>

```python
gateway: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_storage#gateway DatabaseExadataInfrastructureStorage#gateway}.

---

##### `infini_band_network_cidr`<sup>Required</sup> <a name="infini_band_network_cidr" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageConfig.property.infiniBandNetworkCidr"></a>

```python
infini_band_network_cidr: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_storage#infini_band_network_cidr DatabaseExadataInfrastructureStorage#infini_band_network_cidr}.

---

##### `netmask`<sup>Required</sup> <a name="netmask" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageConfig.property.netmask"></a>

```python
netmask: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_storage#netmask DatabaseExadataInfrastructureStorage#netmask}.

---

##### `ntp_server`<sup>Required</sup> <a name="ntp_server" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageConfig.property.ntpServer"></a>

```python
ntp_server: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_storage#ntp_server DatabaseExadataInfrastructureStorage#ntp_server}.

---

##### `shape`<sup>Required</sup> <a name="shape" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageConfig.property.shape"></a>

```python
shape: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_storage#shape DatabaseExadataInfrastructureStorage#shape}.

---

##### `time_zone`<sup>Required</sup> <a name="time_zone" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageConfig.property.timeZone"></a>

```python
time_zone: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_storage#time_zone DatabaseExadataInfrastructureStorage#time_zone}.

---

##### `activation_file`<sup>Optional</sup> <a name="activation_file" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageConfig.property.activationFile"></a>

```python
activation_file: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_storage#activation_file DatabaseExadataInfrastructureStorage#activation_file}.

---

##### `compute_count`<sup>Optional</sup> <a name="compute_count" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageConfig.property.computeCount"></a>

```python
compute_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_storage#compute_count DatabaseExadataInfrastructureStorage#compute_count}.

---

##### `contacts`<sup>Optional</sup> <a name="contacts" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageConfig.property.contacts"></a>

```python
contacts: typing.Union[IResolvable, typing.List[DatabaseExadataInfrastructureStorageContacts]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContacts">DatabaseExadataInfrastructureStorageContacts</a>]]

contacts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_storage#contacts DatabaseExadataInfrastructureStorage#contacts}

---

##### `corporate_proxy`<sup>Optional</sup> <a name="corporate_proxy" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageConfig.property.corporateProxy"></a>

```python
corporate_proxy: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_storage#corporate_proxy DatabaseExadataInfrastructureStorage#corporate_proxy}.

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageConfig.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_storage#defined_tags DatabaseExadataInfrastructureStorage#defined_tags}.

---

##### `exadata_infrastructure_id`<sup>Optional</sup> <a name="exadata_infrastructure_id" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageConfig.property.exadataInfrastructureId"></a>

```python
exadata_infrastructure_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_storage#exadata_infrastructure_id DatabaseExadataInfrastructureStorage#exadata_infrastructure_id}.

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageConfig.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_storage#freeform_tags DatabaseExadataInfrastructureStorage#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_storage#id DatabaseExadataInfrastructureStorage#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `maintenance_window`<sup>Optional</sup> <a name="maintenance_window" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageConfig.property.maintenanceWindow"></a>

```python
maintenance_window: DatabaseExadataInfrastructureStorageMaintenanceWindow
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindow">DatabaseExadataInfrastructureStorageMaintenanceWindow</a>

maintenance_window block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_storage#maintenance_window DatabaseExadataInfrastructureStorage#maintenance_window}

---

##### `storage_count`<sup>Optional</sup> <a name="storage_count" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageConfig.property.storageCount"></a>

```python
storage_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_storage#storage_count DatabaseExadataInfrastructureStorage#storage_count}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageConfig.property.timeouts"></a>

```python
timeouts: DatabaseExadataInfrastructureStorageTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageTimeouts">DatabaseExadataInfrastructureStorageTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_storage#timeouts DatabaseExadataInfrastructureStorage#timeouts}

---

### DatabaseExadataInfrastructureStorageContacts <a name="DatabaseExadataInfrastructureStorageContacts" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContacts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContacts.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_exadata_infrastructure_storage

databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContacts(
  email: str,
  is_primary: typing.Union[bool, IResolvable],
  name: str,
  is_contact_mos_validated: typing.Union[bool, IResolvable] = None,
  phone_number: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContacts.property.email">email</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_storage#email DatabaseExadataInfrastructureStorage#email}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContacts.property.isPrimary">is_primary</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_storage#is_primary DatabaseExadataInfrastructureStorage#is_primary}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContacts.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_storage#name DatabaseExadataInfrastructureStorage#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContacts.property.isContactMosValidated">is_contact_mos_validated</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_storage#is_contact_mos_validated DatabaseExadataInfrastructureStorage#is_contact_mos_validated}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContacts.property.phoneNumber">phone_number</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_storage#phone_number DatabaseExadataInfrastructureStorage#phone_number}. |

---

##### `email`<sup>Required</sup> <a name="email" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContacts.property.email"></a>

```python
email: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_storage#email DatabaseExadataInfrastructureStorage#email}.

---

##### `is_primary`<sup>Required</sup> <a name="is_primary" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContacts.property.isPrimary"></a>

```python
is_primary: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_storage#is_primary DatabaseExadataInfrastructureStorage#is_primary}.

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContacts.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_storage#name DatabaseExadataInfrastructureStorage#name}.

---

##### `is_contact_mos_validated`<sup>Optional</sup> <a name="is_contact_mos_validated" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContacts.property.isContactMosValidated"></a>

```python
is_contact_mos_validated: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_storage#is_contact_mos_validated DatabaseExadataInfrastructureStorage#is_contact_mos_validated}.

---

##### `phone_number`<sup>Optional</sup> <a name="phone_number" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContacts.property.phoneNumber"></a>

```python
phone_number: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_storage#phone_number DatabaseExadataInfrastructureStorage#phone_number}.

---

### DatabaseExadataInfrastructureStorageMaintenanceWindow <a name="DatabaseExadataInfrastructureStorageMaintenanceWindow" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindow"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindow.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_exadata_infrastructure_storage

databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindow(
  preference: str,
  days_of_week: typing.Union[IResolvable, typing.List[DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeek]] = None,
  hours_of_day: typing.List[typing.Union[int, float]] = None,
  lead_time_in_weeks: typing.Union[int, float] = None,
  months: typing.Union[IResolvable, typing.List[DatabaseExadataInfrastructureStorageMaintenanceWindowMonths]] = None,
  weeks_of_month: typing.List[typing.Union[int, float]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindow.property.preference">preference</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_storage#preference DatabaseExadataInfrastructureStorage#preference}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindow.property.daysOfWeek">days_of_week</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeek">DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeek</a>]]</code> | days_of_week block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindow.property.hoursOfDay">hours_of_day</a></code> | <code>typing.List[typing.Union[int, float]]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_storage#hours_of_day DatabaseExadataInfrastructureStorage#hours_of_day}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindow.property.leadTimeInWeeks">lead_time_in_weeks</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_storage#lead_time_in_weeks DatabaseExadataInfrastructureStorage#lead_time_in_weeks}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindow.property.months">months</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowMonths">DatabaseExadataInfrastructureStorageMaintenanceWindowMonths</a>]]</code> | months block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindow.property.weeksOfMonth">weeks_of_month</a></code> | <code>typing.List[typing.Union[int, float]]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_storage#weeks_of_month DatabaseExadataInfrastructureStorage#weeks_of_month}. |

---

##### `preference`<sup>Required</sup> <a name="preference" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindow.property.preference"></a>

```python
preference: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_storage#preference DatabaseExadataInfrastructureStorage#preference}.

---

##### `days_of_week`<sup>Optional</sup> <a name="days_of_week" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindow.property.daysOfWeek"></a>

```python
days_of_week: typing.Union[IResolvable, typing.List[DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeek]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeek">DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeek</a>]]

days_of_week block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_storage#days_of_week DatabaseExadataInfrastructureStorage#days_of_week}

---

##### `hours_of_day`<sup>Optional</sup> <a name="hours_of_day" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindow.property.hoursOfDay"></a>

```python
hours_of_day: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_storage#hours_of_day DatabaseExadataInfrastructureStorage#hours_of_day}.

---

##### `lead_time_in_weeks`<sup>Optional</sup> <a name="lead_time_in_weeks" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindow.property.leadTimeInWeeks"></a>

```python
lead_time_in_weeks: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_storage#lead_time_in_weeks DatabaseExadataInfrastructureStorage#lead_time_in_weeks}.

---

##### `months`<sup>Optional</sup> <a name="months" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindow.property.months"></a>

```python
months: typing.Union[IResolvable, typing.List[DatabaseExadataInfrastructureStorageMaintenanceWindowMonths]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowMonths">DatabaseExadataInfrastructureStorageMaintenanceWindowMonths</a>]]

months block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_storage#months DatabaseExadataInfrastructureStorage#months}

---

##### `weeks_of_month`<sup>Optional</sup> <a name="weeks_of_month" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindow.property.weeksOfMonth"></a>

```python
weeks_of_month: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_storage#weeks_of_month DatabaseExadataInfrastructureStorage#weeks_of_month}.

---

### DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeek <a name="DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeek" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeek"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeek.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_exadata_infrastructure_storage

databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeek(
  name: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeek.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_storage#name DatabaseExadataInfrastructureStorage#name}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeek.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_storage#name DatabaseExadataInfrastructureStorage#name}.

---

### DatabaseExadataInfrastructureStorageMaintenanceWindowMonths <a name="DatabaseExadataInfrastructureStorageMaintenanceWindowMonths" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowMonths"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowMonths.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_exadata_infrastructure_storage

databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowMonths(
  name: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowMonths.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_storage#name DatabaseExadataInfrastructureStorage#name}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowMonths.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_storage#name DatabaseExadataInfrastructureStorage#name}.

---

### DatabaseExadataInfrastructureStorageTimeouts <a name="DatabaseExadataInfrastructureStorageTimeouts" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageTimeouts.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_exadata_infrastructure_storage

databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_storage#create DatabaseExadataInfrastructureStorage#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_storage#delete DatabaseExadataInfrastructureStorage#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_storage#update DatabaseExadataInfrastructureStorage#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_storage#create DatabaseExadataInfrastructureStorage#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_storage#delete DatabaseExadataInfrastructureStorage#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_storage#update DatabaseExadataInfrastructureStorage#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DatabaseExadataInfrastructureStorageContactsList <a name="DatabaseExadataInfrastructureStorageContactsList" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContactsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContactsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_exadata_infrastructure_storage

databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContactsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContactsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContactsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContactsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContactsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContactsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContactsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContactsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContactsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContactsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContactsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContactsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContactsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContactsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContactsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContactsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContactsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContactsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContactsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DatabaseExadataInfrastructureStorageContactsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContactsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContactsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContactsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContactsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContacts">DatabaseExadataInfrastructureStorageContacts</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContactsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContactsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContactsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DatabaseExadataInfrastructureStorageContacts]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContacts">DatabaseExadataInfrastructureStorageContacts</a>]]

---


### DatabaseExadataInfrastructureStorageContactsOutputReference <a name="DatabaseExadataInfrastructureStorageContactsOutputReference" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContactsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContactsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_exadata_infrastructure_storage

databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContactsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContactsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContactsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContactsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContactsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContactsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContactsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContactsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContactsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContactsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContactsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContactsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContactsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContactsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContactsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContactsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContactsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContactsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContactsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContactsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContactsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContactsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContactsOutputReference.resetIsContactMosValidated">reset_is_contact_mos_validated</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContactsOutputReference.resetPhoneNumber">reset_phone_number</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContactsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContactsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContactsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContactsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContactsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContactsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContactsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContactsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContactsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContactsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContactsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContactsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContactsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContactsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContactsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContactsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContactsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContactsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContactsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContactsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContactsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContactsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContactsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContactsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_is_contact_mos_validated` <a name="reset_is_contact_mos_validated" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContactsOutputReference.resetIsContactMosValidated"></a>

```python
def reset_is_contact_mos_validated() -> None
```

##### `reset_phone_number` <a name="reset_phone_number" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContactsOutputReference.resetPhoneNumber"></a>

```python
def reset_phone_number() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContactsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContactsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContactsOutputReference.property.emailInput">email_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContactsOutputReference.property.isContactMosValidatedInput">is_contact_mos_validated_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContactsOutputReference.property.isPrimaryInput">is_primary_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContactsOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContactsOutputReference.property.phoneNumberInput">phone_number_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContactsOutputReference.property.email">email</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContactsOutputReference.property.isContactMosValidated">is_contact_mos_validated</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContactsOutputReference.property.isPrimary">is_primary</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContactsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContactsOutputReference.property.phoneNumber">phone_number</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContactsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContacts">DatabaseExadataInfrastructureStorageContacts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContactsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContactsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `email_input`<sup>Optional</sup> <a name="email_input" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContactsOutputReference.property.emailInput"></a>

```python
email_input: str
```

- *Type:* str

---

##### `is_contact_mos_validated_input`<sup>Optional</sup> <a name="is_contact_mos_validated_input" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContactsOutputReference.property.isContactMosValidatedInput"></a>

```python
is_contact_mos_validated_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_primary_input`<sup>Optional</sup> <a name="is_primary_input" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContactsOutputReference.property.isPrimaryInput"></a>

```python
is_primary_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContactsOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `phone_number_input`<sup>Optional</sup> <a name="phone_number_input" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContactsOutputReference.property.phoneNumberInput"></a>

```python
phone_number_input: str
```

- *Type:* str

---

##### `email`<sup>Required</sup> <a name="email" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContactsOutputReference.property.email"></a>

```python
email: str
```

- *Type:* str

---

##### `is_contact_mos_validated`<sup>Required</sup> <a name="is_contact_mos_validated" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContactsOutputReference.property.isContactMosValidated"></a>

```python
is_contact_mos_validated: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_primary`<sup>Required</sup> <a name="is_primary" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContactsOutputReference.property.isPrimary"></a>

```python
is_primary: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContactsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `phone_number`<sup>Required</sup> <a name="phone_number" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContactsOutputReference.property.phoneNumber"></a>

```python
phone_number: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContactsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DatabaseExadataInfrastructureStorageContacts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageContacts">DatabaseExadataInfrastructureStorageContacts</a>]

---


### DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeekList <a name="DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeekList" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeekList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeekList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_exadata_infrastructure_storage

databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeekList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeekList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeekList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeekList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeekList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeekList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeekList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeekList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeekList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeekList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeekList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeekList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeekList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeekList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeekList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeekList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeekList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeekList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeekList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeekOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeekList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeekList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeekList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeekList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeek">DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeek</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeekList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeekList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeekList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeek]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeek">DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeek</a>]]

---


### DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeekOutputReference <a name="DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeekOutputReference" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeekOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeekOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_exadata_infrastructure_storage

databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeekOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeekOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeekOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeekOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeekOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeekOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeekOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeekOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeekOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeekOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeekOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeekOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeekOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeekOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeekOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeekOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeekOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeekOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeekOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeekOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeekOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeekOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeekOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeekOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeekOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeekOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeekOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeekOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeekOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeekOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeekOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeekOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeekOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeekOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeekOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeekOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeekOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeekOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeekOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeekOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeekOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeekOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeekOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeekOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeekOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeekOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeekOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeekOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeekOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeekOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeekOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeek">DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeek</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeekOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeekOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeekOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeekOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeekOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeek]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeek">DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeek</a>]

---


### DatabaseExadataInfrastructureStorageMaintenanceWindowMonthsList <a name="DatabaseExadataInfrastructureStorageMaintenanceWindowMonthsList" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowMonthsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowMonthsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_exadata_infrastructure_storage

databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowMonthsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowMonthsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowMonthsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowMonthsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowMonthsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowMonthsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowMonthsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowMonthsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowMonthsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowMonthsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowMonthsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowMonthsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowMonthsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowMonthsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowMonthsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowMonthsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowMonthsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowMonthsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowMonthsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DatabaseExadataInfrastructureStorageMaintenanceWindowMonthsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowMonthsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowMonthsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowMonthsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowMonthsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowMonths">DatabaseExadataInfrastructureStorageMaintenanceWindowMonths</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowMonthsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowMonthsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowMonthsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DatabaseExadataInfrastructureStorageMaintenanceWindowMonths]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowMonths">DatabaseExadataInfrastructureStorageMaintenanceWindowMonths</a>]]

---


### DatabaseExadataInfrastructureStorageMaintenanceWindowMonthsOutputReference <a name="DatabaseExadataInfrastructureStorageMaintenanceWindowMonthsOutputReference" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowMonthsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowMonthsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_exadata_infrastructure_storage

databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowMonthsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowMonthsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowMonthsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowMonthsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowMonthsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowMonthsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowMonthsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowMonthsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowMonthsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowMonthsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowMonthsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowMonthsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowMonthsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowMonthsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowMonthsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowMonthsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowMonthsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowMonthsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowMonthsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowMonthsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowMonthsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowMonthsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowMonthsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowMonthsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowMonthsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowMonthsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowMonthsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowMonthsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowMonthsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowMonthsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowMonthsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowMonthsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowMonthsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowMonthsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowMonthsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowMonthsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowMonthsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowMonthsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowMonthsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowMonthsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowMonthsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowMonthsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowMonthsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowMonthsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowMonthsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowMonthsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowMonthsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowMonthsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowMonthsOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowMonthsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowMonthsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowMonths">DatabaseExadataInfrastructureStorageMaintenanceWindowMonths</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowMonthsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowMonthsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowMonthsOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowMonthsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowMonthsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DatabaseExadataInfrastructureStorageMaintenanceWindowMonths]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowMonths">DatabaseExadataInfrastructureStorageMaintenanceWindowMonths</a>]

---


### DatabaseExadataInfrastructureStorageMaintenanceWindowOutputReference <a name="DatabaseExadataInfrastructureStorageMaintenanceWindowOutputReference" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_exadata_infrastructure_storage

databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowOutputReference.putDaysOfWeek">put_days_of_week</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowOutputReference.putMonths">put_months</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowOutputReference.resetDaysOfWeek">reset_days_of_week</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowOutputReference.resetHoursOfDay">reset_hours_of_day</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowOutputReference.resetLeadTimeInWeeks">reset_lead_time_in_weeks</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowOutputReference.resetMonths">reset_months</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowOutputReference.resetWeeksOfMonth">reset_weeks_of_month</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_days_of_week` <a name="put_days_of_week" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowOutputReference.putDaysOfWeek"></a>

```python
def put_days_of_week(
  value: typing.Union[IResolvable, typing.List[DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeek]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowOutputReference.putDaysOfWeek.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeek">DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeek</a>]]

---

##### `put_months` <a name="put_months" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowOutputReference.putMonths"></a>

```python
def put_months(
  value: typing.Union[IResolvable, typing.List[DatabaseExadataInfrastructureStorageMaintenanceWindowMonths]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowOutputReference.putMonths.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowMonths">DatabaseExadataInfrastructureStorageMaintenanceWindowMonths</a>]]

---

##### `reset_days_of_week` <a name="reset_days_of_week" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowOutputReference.resetDaysOfWeek"></a>

```python
def reset_days_of_week() -> None
```

##### `reset_hours_of_day` <a name="reset_hours_of_day" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowOutputReference.resetHoursOfDay"></a>

```python
def reset_hours_of_day() -> None
```

##### `reset_lead_time_in_weeks` <a name="reset_lead_time_in_weeks" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowOutputReference.resetLeadTimeInWeeks"></a>

```python
def reset_lead_time_in_weeks() -> None
```

##### `reset_months` <a name="reset_months" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowOutputReference.resetMonths"></a>

```python
def reset_months() -> None
```

##### `reset_weeks_of_month` <a name="reset_weeks_of_month" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowOutputReference.resetWeeksOfMonth"></a>

```python
def reset_weeks_of_month() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowOutputReference.property.daysOfWeek">days_of_week</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeekList">DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeekList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowOutputReference.property.months">months</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowMonthsList">DatabaseExadataInfrastructureStorageMaintenanceWindowMonthsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowOutputReference.property.daysOfWeekInput">days_of_week_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeek">DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeek</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowOutputReference.property.hoursOfDayInput">hours_of_day_input</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowOutputReference.property.leadTimeInWeeksInput">lead_time_in_weeks_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowOutputReference.property.monthsInput">months_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowMonths">DatabaseExadataInfrastructureStorageMaintenanceWindowMonths</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowOutputReference.property.preferenceInput">preference_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowOutputReference.property.weeksOfMonthInput">weeks_of_month_input</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowOutputReference.property.hoursOfDay">hours_of_day</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowOutputReference.property.leadTimeInWeeks">lead_time_in_weeks</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowOutputReference.property.preference">preference</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowOutputReference.property.weeksOfMonth">weeks_of_month</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindow">DatabaseExadataInfrastructureStorageMaintenanceWindow</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `days_of_week`<sup>Required</sup> <a name="days_of_week" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowOutputReference.property.daysOfWeek"></a>

```python
days_of_week: DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeekList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeekList">DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeekList</a>

---

##### `months`<sup>Required</sup> <a name="months" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowOutputReference.property.months"></a>

```python
months: DatabaseExadataInfrastructureStorageMaintenanceWindowMonthsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowMonthsList">DatabaseExadataInfrastructureStorageMaintenanceWindowMonthsList</a>

---

##### `days_of_week_input`<sup>Optional</sup> <a name="days_of_week_input" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowOutputReference.property.daysOfWeekInput"></a>

```python
days_of_week_input: typing.Union[IResolvable, typing.List[DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeek]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeek">DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeek</a>]]

---

##### `hours_of_day_input`<sup>Optional</sup> <a name="hours_of_day_input" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowOutputReference.property.hoursOfDayInput"></a>

```python
hours_of_day_input: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `lead_time_in_weeks_input`<sup>Optional</sup> <a name="lead_time_in_weeks_input" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowOutputReference.property.leadTimeInWeeksInput"></a>

```python
lead_time_in_weeks_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `months_input`<sup>Optional</sup> <a name="months_input" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowOutputReference.property.monthsInput"></a>

```python
months_input: typing.Union[IResolvable, typing.List[DatabaseExadataInfrastructureStorageMaintenanceWindowMonths]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowMonths">DatabaseExadataInfrastructureStorageMaintenanceWindowMonths</a>]]

---

##### `preference_input`<sup>Optional</sup> <a name="preference_input" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowOutputReference.property.preferenceInput"></a>

```python
preference_input: str
```

- *Type:* str

---

##### `weeks_of_month_input`<sup>Optional</sup> <a name="weeks_of_month_input" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowOutputReference.property.weeksOfMonthInput"></a>

```python
weeks_of_month_input: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `hours_of_day`<sup>Required</sup> <a name="hours_of_day" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowOutputReference.property.hoursOfDay"></a>

```python
hours_of_day: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `lead_time_in_weeks`<sup>Required</sup> <a name="lead_time_in_weeks" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowOutputReference.property.leadTimeInWeeks"></a>

```python
lead_time_in_weeks: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `preference`<sup>Required</sup> <a name="preference" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowOutputReference.property.preference"></a>

```python
preference: str
```

- *Type:* str

---

##### `weeks_of_month`<sup>Required</sup> <a name="weeks_of_month" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowOutputReference.property.weeksOfMonth"></a>

```python
weeks_of_month: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindowOutputReference.property.internalValue"></a>

```python
internal_value: DatabaseExadataInfrastructureStorageMaintenanceWindow
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageMaintenanceWindow">DatabaseExadataInfrastructureStorageMaintenanceWindow</a>

---


### DatabaseExadataInfrastructureStorageTimeoutsOutputReference <a name="DatabaseExadataInfrastructureStorageTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageTimeoutsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_exadata_infrastructure_storage

databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageTimeouts">DatabaseExadataInfrastructureStorageTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DatabaseExadataInfrastructureStorageTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureStorage.DatabaseExadataInfrastructureStorageTimeouts">DatabaseExadataInfrastructureStorageTimeouts</a>]

---



