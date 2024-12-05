# `databaseExadataInfrastructure` Submodule <a name="`databaseExadataInfrastructure` Submodule" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatabaseExadataInfrastructure <a name="DatabaseExadataInfrastructure" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure oci_database_exadata_infrastructure}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_exadata_infrastructure

databaseExadataInfrastructure.DatabaseExadataInfrastructure(
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
  additional_storage_count: typing.Union[int, float] = None,
  compute_count: typing.Union[int, float] = None,
  contacts: typing.Union[IResolvable, typing.List[DatabaseExadataInfrastructureContacts]] = None,
  corporate_proxy: str = None,
  create_async: typing.Union[bool, IResolvable] = None,
  defined_tags: typing.Mapping[str] = None,
  freeform_tags: typing.Mapping[str] = None,
  id: str = None,
  is_cps_offline_report_enabled: typing.Union[bool, IResolvable] = None,
  is_multi_rack_deployment: typing.Union[bool, IResolvable] = None,
  maintenance_window: DatabaseExadataInfrastructureMaintenanceWindow = None,
  multi_rack_configuration_file: str = None,
  network_bonding_mode_details: DatabaseExadataInfrastructureNetworkBondingModeDetails = None,
  storage_count: typing.Union[int, float] = None,
  timeouts: DatabaseExadataInfrastructureTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.Initializer.parameter.adminNetworkCidr">admin_network_cidr</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#admin_network_cidr DatabaseExadataInfrastructure#admin_network_cidr}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.Initializer.parameter.cloudControlPlaneServer1">cloud_control_plane_server1</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#cloud_control_plane_server1 DatabaseExadataInfrastructure#cloud_control_plane_server1}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.Initializer.parameter.cloudControlPlaneServer2">cloud_control_plane_server2</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#cloud_control_plane_server2 DatabaseExadataInfrastructure#cloud_control_plane_server2}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#compartment_id DatabaseExadataInfrastructure#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#display_name DatabaseExadataInfrastructure#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.Initializer.parameter.dnsServer">dns_server</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#dns_server DatabaseExadataInfrastructure#dns_server}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.Initializer.parameter.gateway">gateway</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#gateway DatabaseExadataInfrastructure#gateway}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.Initializer.parameter.infiniBandNetworkCidr">infini_band_network_cidr</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#infini_band_network_cidr DatabaseExadataInfrastructure#infini_band_network_cidr}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.Initializer.parameter.netmask">netmask</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#netmask DatabaseExadataInfrastructure#netmask}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.Initializer.parameter.ntpServer">ntp_server</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#ntp_server DatabaseExadataInfrastructure#ntp_server}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.Initializer.parameter.shape">shape</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#shape DatabaseExadataInfrastructure#shape}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.Initializer.parameter.timeZone">time_zone</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#time_zone DatabaseExadataInfrastructure#time_zone}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.Initializer.parameter.activationFile">activation_file</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#activation_file DatabaseExadataInfrastructure#activation_file}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.Initializer.parameter.additionalStorageCount">additional_storage_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#additional_storage_count DatabaseExadataInfrastructure#additional_storage_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.Initializer.parameter.computeCount">compute_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#compute_count DatabaseExadataInfrastructure#compute_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.Initializer.parameter.contacts">contacts</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContacts">DatabaseExadataInfrastructureContacts</a>]]</code> | contacts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.Initializer.parameter.corporateProxy">corporate_proxy</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#corporate_proxy DatabaseExadataInfrastructure#corporate_proxy}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.Initializer.parameter.createAsync">create_async</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#create_async DatabaseExadataInfrastructure#create_async}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.Initializer.parameter.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#defined_tags DatabaseExadataInfrastructure#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.Initializer.parameter.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#freeform_tags DatabaseExadataInfrastructure#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#id DatabaseExadataInfrastructure#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.Initializer.parameter.isCpsOfflineReportEnabled">is_cps_offline_report_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#is_cps_offline_report_enabled DatabaseExadataInfrastructure#is_cps_offline_report_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.Initializer.parameter.isMultiRackDeployment">is_multi_rack_deployment</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#is_multi_rack_deployment DatabaseExadataInfrastructure#is_multi_rack_deployment}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.Initializer.parameter.maintenanceWindow">maintenance_window</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindow">DatabaseExadataInfrastructureMaintenanceWindow</a></code> | maintenance_window block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.Initializer.parameter.multiRackConfigurationFile">multi_rack_configuration_file</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#multi_rack_configuration_file DatabaseExadataInfrastructure#multi_rack_configuration_file}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.Initializer.parameter.networkBondingModeDetails">network_bonding_mode_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetails">DatabaseExadataInfrastructureNetworkBondingModeDetails</a></code> | network_bonding_mode_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.Initializer.parameter.storageCount">storage_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#storage_count DatabaseExadataInfrastructure#storage_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeouts">DatabaseExadataInfrastructureTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `admin_network_cidr`<sup>Required</sup> <a name="admin_network_cidr" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.Initializer.parameter.adminNetworkCidr"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#admin_network_cidr DatabaseExadataInfrastructure#admin_network_cidr}.

---

##### `cloud_control_plane_server1`<sup>Required</sup> <a name="cloud_control_plane_server1" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.Initializer.parameter.cloudControlPlaneServer1"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#cloud_control_plane_server1 DatabaseExadataInfrastructure#cloud_control_plane_server1}.

---

##### `cloud_control_plane_server2`<sup>Required</sup> <a name="cloud_control_plane_server2" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.Initializer.parameter.cloudControlPlaneServer2"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#cloud_control_plane_server2 DatabaseExadataInfrastructure#cloud_control_plane_server2}.

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#compartment_id DatabaseExadataInfrastructure#compartment_id}.

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#display_name DatabaseExadataInfrastructure#display_name}.

---

##### `dns_server`<sup>Required</sup> <a name="dns_server" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.Initializer.parameter.dnsServer"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#dns_server DatabaseExadataInfrastructure#dns_server}.

---

##### `gateway`<sup>Required</sup> <a name="gateway" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.Initializer.parameter.gateway"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#gateway DatabaseExadataInfrastructure#gateway}.

---

##### `infini_band_network_cidr`<sup>Required</sup> <a name="infini_band_network_cidr" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.Initializer.parameter.infiniBandNetworkCidr"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#infini_band_network_cidr DatabaseExadataInfrastructure#infini_band_network_cidr}.

---

##### `netmask`<sup>Required</sup> <a name="netmask" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.Initializer.parameter.netmask"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#netmask DatabaseExadataInfrastructure#netmask}.

---

##### `ntp_server`<sup>Required</sup> <a name="ntp_server" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.Initializer.parameter.ntpServer"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#ntp_server DatabaseExadataInfrastructure#ntp_server}.

---

##### `shape`<sup>Required</sup> <a name="shape" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.Initializer.parameter.shape"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#shape DatabaseExadataInfrastructure#shape}.

---

##### `time_zone`<sup>Required</sup> <a name="time_zone" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.Initializer.parameter.timeZone"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#time_zone DatabaseExadataInfrastructure#time_zone}.

---

##### `activation_file`<sup>Optional</sup> <a name="activation_file" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.Initializer.parameter.activationFile"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#activation_file DatabaseExadataInfrastructure#activation_file}.

---

##### `additional_storage_count`<sup>Optional</sup> <a name="additional_storage_count" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.Initializer.parameter.additionalStorageCount"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#additional_storage_count DatabaseExadataInfrastructure#additional_storage_count}.

---

##### `compute_count`<sup>Optional</sup> <a name="compute_count" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.Initializer.parameter.computeCount"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#compute_count DatabaseExadataInfrastructure#compute_count}.

---

##### `contacts`<sup>Optional</sup> <a name="contacts" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.Initializer.parameter.contacts"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContacts">DatabaseExadataInfrastructureContacts</a>]]

contacts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#contacts DatabaseExadataInfrastructure#contacts}

---

##### `corporate_proxy`<sup>Optional</sup> <a name="corporate_proxy" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.Initializer.parameter.corporateProxy"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#corporate_proxy DatabaseExadataInfrastructure#corporate_proxy}.

---

##### `create_async`<sup>Optional</sup> <a name="create_async" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.Initializer.parameter.createAsync"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#create_async DatabaseExadataInfrastructure#create_async}.

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.Initializer.parameter.definedTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#defined_tags DatabaseExadataInfrastructure#defined_tags}.

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.Initializer.parameter.freeformTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#freeform_tags DatabaseExadataInfrastructure#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#id DatabaseExadataInfrastructure#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `is_cps_offline_report_enabled`<sup>Optional</sup> <a name="is_cps_offline_report_enabled" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.Initializer.parameter.isCpsOfflineReportEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#is_cps_offline_report_enabled DatabaseExadataInfrastructure#is_cps_offline_report_enabled}.

---

##### `is_multi_rack_deployment`<sup>Optional</sup> <a name="is_multi_rack_deployment" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.Initializer.parameter.isMultiRackDeployment"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#is_multi_rack_deployment DatabaseExadataInfrastructure#is_multi_rack_deployment}.

---

##### `maintenance_window`<sup>Optional</sup> <a name="maintenance_window" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.Initializer.parameter.maintenanceWindow"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindow">DatabaseExadataInfrastructureMaintenanceWindow</a>

maintenance_window block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#maintenance_window DatabaseExadataInfrastructure#maintenance_window}

---

##### `multi_rack_configuration_file`<sup>Optional</sup> <a name="multi_rack_configuration_file" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.Initializer.parameter.multiRackConfigurationFile"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#multi_rack_configuration_file DatabaseExadataInfrastructure#multi_rack_configuration_file}.

---

##### `network_bonding_mode_details`<sup>Optional</sup> <a name="network_bonding_mode_details" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.Initializer.parameter.networkBondingModeDetails"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetails">DatabaseExadataInfrastructureNetworkBondingModeDetails</a>

network_bonding_mode_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#network_bonding_mode_details DatabaseExadataInfrastructure#network_bonding_mode_details}

---

##### `storage_count`<sup>Optional</sup> <a name="storage_count" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.Initializer.parameter.storageCount"></a>

- *Type:* typing.Union[int, float]

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
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.putContacts">put_contacts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.putMaintenanceWindow">put_maintenance_window</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.putNetworkBondingModeDetails">put_network_bonding_mode_details</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.resetActivationFile">reset_activation_file</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.resetAdditionalStorageCount">reset_additional_storage_count</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.resetComputeCount">reset_compute_count</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.resetContacts">reset_contacts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.resetCorporateProxy">reset_corporate_proxy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.resetCreateAsync">reset_create_async</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.resetDefinedTags">reset_defined_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.resetFreeformTags">reset_freeform_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.resetIsCpsOfflineReportEnabled">reset_is_cps_offline_report_enabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.resetIsMultiRackDeployment">reset_is_multi_rack_deployment</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.resetMaintenanceWindow">reset_maintenance_window</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.resetMultiRackConfigurationFile">reset_multi_rack_configuration_file</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.resetNetworkBondingModeDetails">reset_network_bonding_mode_details</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.resetStorageCount">reset_storage_count</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_contacts` <a name="put_contacts" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.putContacts"></a>

```python
def put_contacts(
  value: typing.Union[IResolvable, typing.List[DatabaseExadataInfrastructureContacts]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.putContacts.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContacts">DatabaseExadataInfrastructureContacts</a>]]

---

##### `put_maintenance_window` <a name="put_maintenance_window" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.putMaintenanceWindow"></a>

```python
def put_maintenance_window(
  custom_action_timeout_in_mins: typing.Union[int, float] = None,
  days_of_week: typing.Union[IResolvable, typing.List[DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeek]] = None,
  hours_of_day: typing.List[typing.Union[int, float]] = None,
  is_custom_action_timeout_enabled: typing.Union[bool, IResolvable] = None,
  is_monthly_patching_enabled: typing.Union[bool, IResolvable] = None,
  lead_time_in_weeks: typing.Union[int, float] = None,
  months: typing.Union[IResolvable, typing.List[DatabaseExadataInfrastructureMaintenanceWindowMonths]] = None,
  patching_mode: str = None,
  preference: str = None,
  skip_ru: typing.Union[IResolvable, typing.List[typing.Union[bool, IResolvable]]] = None,
  weeks_of_month: typing.List[typing.Union[int, float]] = None
) -> None
```

###### `custom_action_timeout_in_mins`<sup>Optional</sup> <a name="custom_action_timeout_in_mins" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.putMaintenanceWindow.parameter.customActionTimeoutInMins"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#custom_action_timeout_in_mins DatabaseExadataInfrastructure#custom_action_timeout_in_mins}.

---

###### `days_of_week`<sup>Optional</sup> <a name="days_of_week" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.putMaintenanceWindow.parameter.daysOfWeek"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeek">DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeek</a>]]

days_of_week block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#days_of_week DatabaseExadataInfrastructure#days_of_week}

---

###### `hours_of_day`<sup>Optional</sup> <a name="hours_of_day" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.putMaintenanceWindow.parameter.hoursOfDay"></a>

- *Type:* typing.List[typing.Union[int, float]]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#hours_of_day DatabaseExadataInfrastructure#hours_of_day}.

---

###### `is_custom_action_timeout_enabled`<sup>Optional</sup> <a name="is_custom_action_timeout_enabled" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.putMaintenanceWindow.parameter.isCustomActionTimeoutEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#is_custom_action_timeout_enabled DatabaseExadataInfrastructure#is_custom_action_timeout_enabled}.

---

###### `is_monthly_patching_enabled`<sup>Optional</sup> <a name="is_monthly_patching_enabled" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.putMaintenanceWindow.parameter.isMonthlyPatchingEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#is_monthly_patching_enabled DatabaseExadataInfrastructure#is_monthly_patching_enabled}.

---

###### `lead_time_in_weeks`<sup>Optional</sup> <a name="lead_time_in_weeks" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.putMaintenanceWindow.parameter.leadTimeInWeeks"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#lead_time_in_weeks DatabaseExadataInfrastructure#lead_time_in_weeks}.

---

###### `months`<sup>Optional</sup> <a name="months" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.putMaintenanceWindow.parameter.months"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonths">DatabaseExadataInfrastructureMaintenanceWindowMonths</a>]]

months block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#months DatabaseExadataInfrastructure#months}

---

###### `patching_mode`<sup>Optional</sup> <a name="patching_mode" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.putMaintenanceWindow.parameter.patchingMode"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#patching_mode DatabaseExadataInfrastructure#patching_mode}.

---

###### `preference`<sup>Optional</sup> <a name="preference" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.putMaintenanceWindow.parameter.preference"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#preference DatabaseExadataInfrastructure#preference}.

---

###### `skip_ru`<sup>Optional</sup> <a name="skip_ru" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.putMaintenanceWindow.parameter.skipRu"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[typing.Union[bool, cdktf.IResolvable]]]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#skip_ru DatabaseExadataInfrastructure#skip_ru}.

---

###### `weeks_of_month`<sup>Optional</sup> <a name="weeks_of_month" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.putMaintenanceWindow.parameter.weeksOfMonth"></a>

- *Type:* typing.List[typing.Union[int, float]]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#weeks_of_month DatabaseExadataInfrastructure#weeks_of_month}.

---

##### `put_network_bonding_mode_details` <a name="put_network_bonding_mode_details" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.putNetworkBondingModeDetails"></a>

```python
def put_network_bonding_mode_details(
  backup_network_bonding_mode: str = None,
  client_network_bonding_mode: str = None,
  dr_network_bonding_mode: str = None
) -> None
```

###### `backup_network_bonding_mode`<sup>Optional</sup> <a name="backup_network_bonding_mode" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.putNetworkBondingModeDetails.parameter.backupNetworkBondingMode"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#backup_network_bonding_mode DatabaseExadataInfrastructure#backup_network_bonding_mode}.

---

###### `client_network_bonding_mode`<sup>Optional</sup> <a name="client_network_bonding_mode" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.putNetworkBondingModeDetails.parameter.clientNetworkBondingMode"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#client_network_bonding_mode DatabaseExadataInfrastructure#client_network_bonding_mode}.

---

###### `dr_network_bonding_mode`<sup>Optional</sup> <a name="dr_network_bonding_mode" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.putNetworkBondingModeDetails.parameter.drNetworkBondingMode"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#dr_network_bonding_mode DatabaseExadataInfrastructure#dr_network_bonding_mode}.

---

##### `put_timeouts` <a name="put_timeouts" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#create DatabaseExadataInfrastructure#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#delete DatabaseExadataInfrastructure#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#update DatabaseExadataInfrastructure#update}.

---

##### `reset_activation_file` <a name="reset_activation_file" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.resetActivationFile"></a>

```python
def reset_activation_file() -> None
```

##### `reset_additional_storage_count` <a name="reset_additional_storage_count" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.resetAdditionalStorageCount"></a>

```python
def reset_additional_storage_count() -> None
```

##### `reset_compute_count` <a name="reset_compute_count" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.resetComputeCount"></a>

```python
def reset_compute_count() -> None
```

##### `reset_contacts` <a name="reset_contacts" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.resetContacts"></a>

```python
def reset_contacts() -> None
```

##### `reset_corporate_proxy` <a name="reset_corporate_proxy" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.resetCorporateProxy"></a>

```python
def reset_corporate_proxy() -> None
```

##### `reset_create_async` <a name="reset_create_async" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.resetCreateAsync"></a>

```python
def reset_create_async() -> None
```

##### `reset_defined_tags` <a name="reset_defined_tags" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.resetDefinedTags"></a>

```python
def reset_defined_tags() -> None
```

##### `reset_freeform_tags` <a name="reset_freeform_tags" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.resetFreeformTags"></a>

```python
def reset_freeform_tags() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_is_cps_offline_report_enabled` <a name="reset_is_cps_offline_report_enabled" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.resetIsCpsOfflineReportEnabled"></a>

```python
def reset_is_cps_offline_report_enabled() -> None
```

##### `reset_is_multi_rack_deployment` <a name="reset_is_multi_rack_deployment" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.resetIsMultiRackDeployment"></a>

```python
def reset_is_multi_rack_deployment() -> None
```

##### `reset_maintenance_window` <a name="reset_maintenance_window" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.resetMaintenanceWindow"></a>

```python
def reset_maintenance_window() -> None
```

##### `reset_multi_rack_configuration_file` <a name="reset_multi_rack_configuration_file" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.resetMultiRackConfigurationFile"></a>

```python
def reset_multi_rack_configuration_file() -> None
```

##### `reset_network_bonding_mode_details` <a name="reset_network_bonding_mode_details" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.resetNetworkBondingModeDetails"></a>

```python
def reset_network_bonding_mode_details() -> None
```

##### `reset_storage_count` <a name="reset_storage_count" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.resetStorageCount"></a>

```python
def reset_storage_count() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DatabaseExadataInfrastructure resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import database_exadata_infrastructure

databaseExadataInfrastructure.DatabaseExadataInfrastructure.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import database_exadata_infrastructure

databaseExadataInfrastructure.DatabaseExadataInfrastructure.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.isTerraformResource"></a>

```python
from rhizo-co_cdktf_provider_oci import database_exadata_infrastructure

databaseExadataInfrastructure.DatabaseExadataInfrastructure.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import database_exadata_infrastructure

databaseExadataInfrastructure.DatabaseExadataInfrastructure.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DatabaseExadataInfrastructure resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DatabaseExadataInfrastructure to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DatabaseExadataInfrastructure that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DatabaseExadataInfrastructure to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.activatedStorageCount">activated_storage_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.additionalComputeCount">additional_compute_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.additionalComputeSystemModel">additional_compute_system_model</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.availabilityDomain">availability_domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.contacts">contacts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsList">DatabaseExadataInfrastructureContactsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.cpusEnabled">cpus_enabled</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.csiNumber">csi_number</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.dataStorageSizeInTbs">data_storage_size_in_tbs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.dbNodeStorageSizeInGbs">db_node_storage_size_in_gbs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.dbServerVersion">db_server_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.definedFileSystemConfigurations">defined_file_system_configurations</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsList">DatabaseExadataInfrastructureDefinedFileSystemConfigurationsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.maintenanceSloStatus">maintenance_slo_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.maintenanceWindow">maintenance_window</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference">DatabaseExadataInfrastructureMaintenanceWindowOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.maxCpuCount">max_cpu_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.maxDataStorageInTbs">max_data_storage_in_tbs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.maxDbNodeStorageInGbs">max_db_node_storage_in_gbs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.maxMemoryInGbs">max_memory_in_gbs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.memorySizeInGbs">memory_size_in_gbs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.monthlyDbServerVersion">monthly_db_server_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.networkBondingModeDetails">network_bonding_mode_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetailsOutputReference">DatabaseExadataInfrastructureNetworkBondingModeDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.rackSerialNumber">rack_serial_number</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.storageServerVersion">storage_server_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeoutsOutputReference">DatabaseExadataInfrastructureTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.activationFileInput">activation_file_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.additionalStorageCountInput">additional_storage_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.adminNetworkCidrInput">admin_network_cidr_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.cloudControlPlaneServer1Input">cloud_control_plane_server1_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.cloudControlPlaneServer2Input">cloud_control_plane_server2_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.computeCountInput">compute_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.contactsInput">contacts_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContacts">DatabaseExadataInfrastructureContacts</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.corporateProxyInput">corporate_proxy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.createAsyncInput">create_async_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.definedTagsInput">defined_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.dnsServerInput">dns_server_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.freeformTagsInput">freeform_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.gatewayInput">gateway_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.infiniBandNetworkCidrInput">infini_band_network_cidr_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.isCpsOfflineReportEnabledInput">is_cps_offline_report_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.isMultiRackDeploymentInput">is_multi_rack_deployment_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.maintenanceWindowInput">maintenance_window_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindow">DatabaseExadataInfrastructureMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.multiRackConfigurationFileInput">multi_rack_configuration_file_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.netmaskInput">netmask_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.networkBondingModeDetailsInput">network_bonding_mode_details_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetails">DatabaseExadataInfrastructureNetworkBondingModeDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.ntpServerInput">ntp_server_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.shapeInput">shape_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.storageCountInput">storage_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeouts">DatabaseExadataInfrastructureTimeouts</a>]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.timeZoneInput">time_zone_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.activationFile">activation_file</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.additionalStorageCount">additional_storage_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.adminNetworkCidr">admin_network_cidr</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.cloudControlPlaneServer1">cloud_control_plane_server1</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.cloudControlPlaneServer2">cloud_control_plane_server2</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.computeCount">compute_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.corporateProxy">corporate_proxy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.createAsync">create_async</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.dnsServer">dns_server</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.gateway">gateway</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.infiniBandNetworkCidr">infini_band_network_cidr</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.isCpsOfflineReportEnabled">is_cps_offline_report_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.isMultiRackDeployment">is_multi_rack_deployment</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.multiRackConfigurationFile">multi_rack_configuration_file</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.netmask">netmask</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.ntpServer">ntp_server</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.shape">shape</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.storageCount">storage_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.timeZone">time_zone</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `activated_storage_count`<sup>Required</sup> <a name="activated_storage_count" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.activatedStorageCount"></a>

```python
activated_storage_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `additional_compute_count`<sup>Required</sup> <a name="additional_compute_count" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.additionalComputeCount"></a>

```python
additional_compute_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `additional_compute_system_model`<sup>Required</sup> <a name="additional_compute_system_model" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.additionalComputeSystemModel"></a>

```python
additional_compute_system_model: str
```

- *Type:* str

---

##### `availability_domain`<sup>Required</sup> <a name="availability_domain" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.availabilityDomain"></a>

```python
availability_domain: str
```

- *Type:* str

---

##### `contacts`<sup>Required</sup> <a name="contacts" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.contacts"></a>

```python
contacts: DatabaseExadataInfrastructureContactsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsList">DatabaseExadataInfrastructureContactsList</a>

---

##### `cpus_enabled`<sup>Required</sup> <a name="cpus_enabled" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.cpusEnabled"></a>

```python
cpus_enabled: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `csi_number`<sup>Required</sup> <a name="csi_number" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.csiNumber"></a>

```python
csi_number: str
```

- *Type:* str

---

##### `data_storage_size_in_tbs`<sup>Required</sup> <a name="data_storage_size_in_tbs" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.dataStorageSizeInTbs"></a>

```python
data_storage_size_in_tbs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `db_node_storage_size_in_gbs`<sup>Required</sup> <a name="db_node_storage_size_in_gbs" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.dbNodeStorageSizeInGbs"></a>

```python
db_node_storage_size_in_gbs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `db_server_version`<sup>Required</sup> <a name="db_server_version" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.dbServerVersion"></a>

```python
db_server_version: str
```

- *Type:* str

---

##### `defined_file_system_configurations`<sup>Required</sup> <a name="defined_file_system_configurations" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.definedFileSystemConfigurations"></a>

```python
defined_file_system_configurations: DatabaseExadataInfrastructureDefinedFileSystemConfigurationsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsList">DatabaseExadataInfrastructureDefinedFileSystemConfigurationsList</a>

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `maintenance_slo_status`<sup>Required</sup> <a name="maintenance_slo_status" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.maintenanceSloStatus"></a>

```python
maintenance_slo_status: str
```

- *Type:* str

---

##### `maintenance_window`<sup>Required</sup> <a name="maintenance_window" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.maintenanceWindow"></a>

```python
maintenance_window: DatabaseExadataInfrastructureMaintenanceWindowOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference">DatabaseExadataInfrastructureMaintenanceWindowOutputReference</a>

---

##### `max_cpu_count`<sup>Required</sup> <a name="max_cpu_count" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.maxCpuCount"></a>

```python
max_cpu_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_data_storage_in_tbs`<sup>Required</sup> <a name="max_data_storage_in_tbs" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.maxDataStorageInTbs"></a>

```python
max_data_storage_in_tbs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_db_node_storage_in_gbs`<sup>Required</sup> <a name="max_db_node_storage_in_gbs" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.maxDbNodeStorageInGbs"></a>

```python
max_db_node_storage_in_gbs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_memory_in_gbs`<sup>Required</sup> <a name="max_memory_in_gbs" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.maxMemoryInGbs"></a>

```python
max_memory_in_gbs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `memory_size_in_gbs`<sup>Required</sup> <a name="memory_size_in_gbs" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.memorySizeInGbs"></a>

```python
memory_size_in_gbs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `monthly_db_server_version`<sup>Required</sup> <a name="monthly_db_server_version" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.monthlyDbServerVersion"></a>

```python
monthly_db_server_version: str
```

- *Type:* str

---

##### `network_bonding_mode_details`<sup>Required</sup> <a name="network_bonding_mode_details" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.networkBondingModeDetails"></a>

```python
network_bonding_mode_details: DatabaseExadataInfrastructureNetworkBondingModeDetailsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetailsOutputReference">DatabaseExadataInfrastructureNetworkBondingModeDetailsOutputReference</a>

---

##### `rack_serial_number`<sup>Required</sup> <a name="rack_serial_number" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.rackSerialNumber"></a>

```python
rack_serial_number: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `storage_server_version`<sup>Required</sup> <a name="storage_server_version" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.storageServerVersion"></a>

```python
storage_server_version: str
```

- *Type:* str

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.timeouts"></a>

```python
timeouts: DatabaseExadataInfrastructureTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeoutsOutputReference">DatabaseExadataInfrastructureTimeoutsOutputReference</a>

---

##### `activation_file_input`<sup>Optional</sup> <a name="activation_file_input" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.activationFileInput"></a>

```python
activation_file_input: str
```

- *Type:* str

---

##### `additional_storage_count_input`<sup>Optional</sup> <a name="additional_storage_count_input" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.additionalStorageCountInput"></a>

```python
additional_storage_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `admin_network_cidr_input`<sup>Optional</sup> <a name="admin_network_cidr_input" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.adminNetworkCidrInput"></a>

```python
admin_network_cidr_input: str
```

- *Type:* str

---

##### `cloud_control_plane_server1_input`<sup>Optional</sup> <a name="cloud_control_plane_server1_input" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.cloudControlPlaneServer1Input"></a>

```python
cloud_control_plane_server1_input: str
```

- *Type:* str

---

##### `cloud_control_plane_server2_input`<sup>Optional</sup> <a name="cloud_control_plane_server2_input" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.cloudControlPlaneServer2Input"></a>

```python
cloud_control_plane_server2_input: str
```

- *Type:* str

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `compute_count_input`<sup>Optional</sup> <a name="compute_count_input" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.computeCountInput"></a>

```python
compute_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `contacts_input`<sup>Optional</sup> <a name="contacts_input" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.contactsInput"></a>

```python
contacts_input: typing.Union[IResolvable, typing.List[DatabaseExadataInfrastructureContacts]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContacts">DatabaseExadataInfrastructureContacts</a>]]

---

##### `corporate_proxy_input`<sup>Optional</sup> <a name="corporate_proxy_input" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.corporateProxyInput"></a>

```python
corporate_proxy_input: str
```

- *Type:* str

---

##### `create_async_input`<sup>Optional</sup> <a name="create_async_input" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.createAsyncInput"></a>

```python
create_async_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `defined_tags_input`<sup>Optional</sup> <a name="defined_tags_input" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.definedTagsInput"></a>

```python
defined_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `dns_server_input`<sup>Optional</sup> <a name="dns_server_input" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.dnsServerInput"></a>

```python
dns_server_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `freeform_tags_input`<sup>Optional</sup> <a name="freeform_tags_input" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.freeformTagsInput"></a>

```python
freeform_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `gateway_input`<sup>Optional</sup> <a name="gateway_input" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.gatewayInput"></a>

```python
gateway_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `infini_band_network_cidr_input`<sup>Optional</sup> <a name="infini_band_network_cidr_input" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.infiniBandNetworkCidrInput"></a>

```python
infini_band_network_cidr_input: str
```

- *Type:* str

---

##### `is_cps_offline_report_enabled_input`<sup>Optional</sup> <a name="is_cps_offline_report_enabled_input" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.isCpsOfflineReportEnabledInput"></a>

```python
is_cps_offline_report_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_multi_rack_deployment_input`<sup>Optional</sup> <a name="is_multi_rack_deployment_input" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.isMultiRackDeploymentInput"></a>

```python
is_multi_rack_deployment_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `maintenance_window_input`<sup>Optional</sup> <a name="maintenance_window_input" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.maintenanceWindowInput"></a>

```python
maintenance_window_input: DatabaseExadataInfrastructureMaintenanceWindow
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindow">DatabaseExadataInfrastructureMaintenanceWindow</a>

---

##### `multi_rack_configuration_file_input`<sup>Optional</sup> <a name="multi_rack_configuration_file_input" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.multiRackConfigurationFileInput"></a>

```python
multi_rack_configuration_file_input: str
```

- *Type:* str

---

##### `netmask_input`<sup>Optional</sup> <a name="netmask_input" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.netmaskInput"></a>

```python
netmask_input: str
```

- *Type:* str

---

##### `network_bonding_mode_details_input`<sup>Optional</sup> <a name="network_bonding_mode_details_input" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.networkBondingModeDetailsInput"></a>

```python
network_bonding_mode_details_input: DatabaseExadataInfrastructureNetworkBondingModeDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetails">DatabaseExadataInfrastructureNetworkBondingModeDetails</a>

---

##### `ntp_server_input`<sup>Optional</sup> <a name="ntp_server_input" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.ntpServerInput"></a>

```python
ntp_server_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `shape_input`<sup>Optional</sup> <a name="shape_input" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.shapeInput"></a>

```python
shape_input: str
```

- *Type:* str

---

##### `storage_count_input`<sup>Optional</sup> <a name="storage_count_input" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.storageCountInput"></a>

```python
storage_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, DatabaseExadataInfrastructureTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeouts">DatabaseExadataInfrastructureTimeouts</a>]

---

##### `time_zone_input`<sup>Optional</sup> <a name="time_zone_input" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.timeZoneInput"></a>

```python
time_zone_input: str
```

- *Type:* str

---

##### `activation_file`<sup>Required</sup> <a name="activation_file" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.activationFile"></a>

```python
activation_file: str
```

- *Type:* str

---

##### `additional_storage_count`<sup>Required</sup> <a name="additional_storage_count" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.additionalStorageCount"></a>

```python
additional_storage_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `admin_network_cidr`<sup>Required</sup> <a name="admin_network_cidr" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.adminNetworkCidr"></a>

```python
admin_network_cidr: str
```

- *Type:* str

---

##### `cloud_control_plane_server1`<sup>Required</sup> <a name="cloud_control_plane_server1" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.cloudControlPlaneServer1"></a>

```python
cloud_control_plane_server1: str
```

- *Type:* str

---

##### `cloud_control_plane_server2`<sup>Required</sup> <a name="cloud_control_plane_server2" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.cloudControlPlaneServer2"></a>

```python
cloud_control_plane_server2: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `compute_count`<sup>Required</sup> <a name="compute_count" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.computeCount"></a>

```python
compute_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `corporate_proxy`<sup>Required</sup> <a name="corporate_proxy" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.corporateProxy"></a>

```python
corporate_proxy: str
```

- *Type:* str

---

##### `create_async`<sup>Required</sup> <a name="create_async" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.createAsync"></a>

```python
create_async: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `dns_server`<sup>Required</sup> <a name="dns_server" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.dnsServer"></a>

```python
dns_server: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `gateway`<sup>Required</sup> <a name="gateway" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.gateway"></a>

```python
gateway: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `infini_band_network_cidr`<sup>Required</sup> <a name="infini_band_network_cidr" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.infiniBandNetworkCidr"></a>

```python
infini_band_network_cidr: str
```

- *Type:* str

---

##### `is_cps_offline_report_enabled`<sup>Required</sup> <a name="is_cps_offline_report_enabled" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.isCpsOfflineReportEnabled"></a>

```python
is_cps_offline_report_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_multi_rack_deployment`<sup>Required</sup> <a name="is_multi_rack_deployment" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.isMultiRackDeployment"></a>

```python
is_multi_rack_deployment: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `multi_rack_configuration_file`<sup>Required</sup> <a name="multi_rack_configuration_file" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.multiRackConfigurationFile"></a>

```python
multi_rack_configuration_file: str
```

- *Type:* str

---

##### `netmask`<sup>Required</sup> <a name="netmask" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.netmask"></a>

```python
netmask: str
```

- *Type:* str

---

##### `ntp_server`<sup>Required</sup> <a name="ntp_server" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.ntpServer"></a>

```python
ntp_server: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `shape`<sup>Required</sup> <a name="shape" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.shape"></a>

```python
shape: str
```

- *Type:* str

---

##### `storage_count`<sup>Required</sup> <a name="storage_count" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.storageCount"></a>

```python
storage_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `time_zone`<sup>Required</sup> <a name="time_zone" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.timeZone"></a>

```python
time_zone: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DatabaseExadataInfrastructureConfig <a name="DatabaseExadataInfrastructureConfig" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_exadata_infrastructure

databaseExadataInfrastructure.DatabaseExadataInfrastructureConfig(
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
  additional_storage_count: typing.Union[int, float] = None,
  compute_count: typing.Union[int, float] = None,
  contacts: typing.Union[IResolvable, typing.List[DatabaseExadataInfrastructureContacts]] = None,
  corporate_proxy: str = None,
  create_async: typing.Union[bool, IResolvable] = None,
  defined_tags: typing.Mapping[str] = None,
  freeform_tags: typing.Mapping[str] = None,
  id: str = None,
  is_cps_offline_report_enabled: typing.Union[bool, IResolvable] = None,
  is_multi_rack_deployment: typing.Union[bool, IResolvable] = None,
  maintenance_window: DatabaseExadataInfrastructureMaintenanceWindow = None,
  multi_rack_configuration_file: str = None,
  network_bonding_mode_details: DatabaseExadataInfrastructureNetworkBondingModeDetails = None,
  storage_count: typing.Union[int, float] = None,
  timeouts: DatabaseExadataInfrastructureTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureConfig.property.adminNetworkCidr">admin_network_cidr</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#admin_network_cidr DatabaseExadataInfrastructure#admin_network_cidr}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureConfig.property.cloudControlPlaneServer1">cloud_control_plane_server1</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#cloud_control_plane_server1 DatabaseExadataInfrastructure#cloud_control_plane_server1}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureConfig.property.cloudControlPlaneServer2">cloud_control_plane_server2</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#cloud_control_plane_server2 DatabaseExadataInfrastructure#cloud_control_plane_server2}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#compartment_id DatabaseExadataInfrastructure#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#display_name DatabaseExadataInfrastructure#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureConfig.property.dnsServer">dns_server</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#dns_server DatabaseExadataInfrastructure#dns_server}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureConfig.property.gateway">gateway</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#gateway DatabaseExadataInfrastructure#gateway}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureConfig.property.infiniBandNetworkCidr">infini_band_network_cidr</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#infini_band_network_cidr DatabaseExadataInfrastructure#infini_band_network_cidr}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureConfig.property.netmask">netmask</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#netmask DatabaseExadataInfrastructure#netmask}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureConfig.property.ntpServer">ntp_server</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#ntp_server DatabaseExadataInfrastructure#ntp_server}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureConfig.property.shape">shape</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#shape DatabaseExadataInfrastructure#shape}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureConfig.property.timeZone">time_zone</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#time_zone DatabaseExadataInfrastructure#time_zone}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureConfig.property.activationFile">activation_file</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#activation_file DatabaseExadataInfrastructure#activation_file}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureConfig.property.additionalStorageCount">additional_storage_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#additional_storage_count DatabaseExadataInfrastructure#additional_storage_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureConfig.property.computeCount">compute_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#compute_count DatabaseExadataInfrastructure#compute_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureConfig.property.contacts">contacts</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContacts">DatabaseExadataInfrastructureContacts</a>]]</code> | contacts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureConfig.property.corporateProxy">corporate_proxy</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#corporate_proxy DatabaseExadataInfrastructure#corporate_proxy}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureConfig.property.createAsync">create_async</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#create_async DatabaseExadataInfrastructure#create_async}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureConfig.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#defined_tags DatabaseExadataInfrastructure#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureConfig.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#freeform_tags DatabaseExadataInfrastructure#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#id DatabaseExadataInfrastructure#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureConfig.property.isCpsOfflineReportEnabled">is_cps_offline_report_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#is_cps_offline_report_enabled DatabaseExadataInfrastructure#is_cps_offline_report_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureConfig.property.isMultiRackDeployment">is_multi_rack_deployment</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#is_multi_rack_deployment DatabaseExadataInfrastructure#is_multi_rack_deployment}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureConfig.property.maintenanceWindow">maintenance_window</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindow">DatabaseExadataInfrastructureMaintenanceWindow</a></code> | maintenance_window block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureConfig.property.multiRackConfigurationFile">multi_rack_configuration_file</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#multi_rack_configuration_file DatabaseExadataInfrastructure#multi_rack_configuration_file}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureConfig.property.networkBondingModeDetails">network_bonding_mode_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetails">DatabaseExadataInfrastructureNetworkBondingModeDetails</a></code> | network_bonding_mode_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureConfig.property.storageCount">storage_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#storage_count DatabaseExadataInfrastructure#storage_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeouts">DatabaseExadataInfrastructureTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `admin_network_cidr`<sup>Required</sup> <a name="admin_network_cidr" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureConfig.property.adminNetworkCidr"></a>

```python
admin_network_cidr: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#admin_network_cidr DatabaseExadataInfrastructure#admin_network_cidr}.

---

##### `cloud_control_plane_server1`<sup>Required</sup> <a name="cloud_control_plane_server1" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureConfig.property.cloudControlPlaneServer1"></a>

```python
cloud_control_plane_server1: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#cloud_control_plane_server1 DatabaseExadataInfrastructure#cloud_control_plane_server1}.

---

##### `cloud_control_plane_server2`<sup>Required</sup> <a name="cloud_control_plane_server2" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureConfig.property.cloudControlPlaneServer2"></a>

```python
cloud_control_plane_server2: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#cloud_control_plane_server2 DatabaseExadataInfrastructure#cloud_control_plane_server2}.

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#compartment_id DatabaseExadataInfrastructure#compartment_id}.

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#display_name DatabaseExadataInfrastructure#display_name}.

---

##### `dns_server`<sup>Required</sup> <a name="dns_server" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureConfig.property.dnsServer"></a>

```python
dns_server: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#dns_server DatabaseExadataInfrastructure#dns_server}.

---

##### `gateway`<sup>Required</sup> <a name="gateway" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureConfig.property.gateway"></a>

```python
gateway: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#gateway DatabaseExadataInfrastructure#gateway}.

---

##### `infini_band_network_cidr`<sup>Required</sup> <a name="infini_band_network_cidr" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureConfig.property.infiniBandNetworkCidr"></a>

```python
infini_band_network_cidr: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#infini_band_network_cidr DatabaseExadataInfrastructure#infini_band_network_cidr}.

---

##### `netmask`<sup>Required</sup> <a name="netmask" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureConfig.property.netmask"></a>

```python
netmask: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#netmask DatabaseExadataInfrastructure#netmask}.

---

##### `ntp_server`<sup>Required</sup> <a name="ntp_server" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureConfig.property.ntpServer"></a>

```python
ntp_server: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#ntp_server DatabaseExadataInfrastructure#ntp_server}.

---

##### `shape`<sup>Required</sup> <a name="shape" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureConfig.property.shape"></a>

```python
shape: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#shape DatabaseExadataInfrastructure#shape}.

---

##### `time_zone`<sup>Required</sup> <a name="time_zone" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureConfig.property.timeZone"></a>

```python
time_zone: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#time_zone DatabaseExadataInfrastructure#time_zone}.

---

##### `activation_file`<sup>Optional</sup> <a name="activation_file" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureConfig.property.activationFile"></a>

```python
activation_file: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#activation_file DatabaseExadataInfrastructure#activation_file}.

---

##### `additional_storage_count`<sup>Optional</sup> <a name="additional_storage_count" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureConfig.property.additionalStorageCount"></a>

```python
additional_storage_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#additional_storage_count DatabaseExadataInfrastructure#additional_storage_count}.

---

##### `compute_count`<sup>Optional</sup> <a name="compute_count" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureConfig.property.computeCount"></a>

```python
compute_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#compute_count DatabaseExadataInfrastructure#compute_count}.

---

##### `contacts`<sup>Optional</sup> <a name="contacts" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureConfig.property.contacts"></a>

```python
contacts: typing.Union[IResolvable, typing.List[DatabaseExadataInfrastructureContacts]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContacts">DatabaseExadataInfrastructureContacts</a>]]

contacts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#contacts DatabaseExadataInfrastructure#contacts}

---

##### `corporate_proxy`<sup>Optional</sup> <a name="corporate_proxy" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureConfig.property.corporateProxy"></a>

```python
corporate_proxy: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#corporate_proxy DatabaseExadataInfrastructure#corporate_proxy}.

---

##### `create_async`<sup>Optional</sup> <a name="create_async" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureConfig.property.createAsync"></a>

```python
create_async: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#create_async DatabaseExadataInfrastructure#create_async}.

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureConfig.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#defined_tags DatabaseExadataInfrastructure#defined_tags}.

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureConfig.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#freeform_tags DatabaseExadataInfrastructure#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#id DatabaseExadataInfrastructure#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `is_cps_offline_report_enabled`<sup>Optional</sup> <a name="is_cps_offline_report_enabled" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureConfig.property.isCpsOfflineReportEnabled"></a>

```python
is_cps_offline_report_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#is_cps_offline_report_enabled DatabaseExadataInfrastructure#is_cps_offline_report_enabled}.

---

##### `is_multi_rack_deployment`<sup>Optional</sup> <a name="is_multi_rack_deployment" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureConfig.property.isMultiRackDeployment"></a>

```python
is_multi_rack_deployment: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#is_multi_rack_deployment DatabaseExadataInfrastructure#is_multi_rack_deployment}.

---

##### `maintenance_window`<sup>Optional</sup> <a name="maintenance_window" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureConfig.property.maintenanceWindow"></a>

```python
maintenance_window: DatabaseExadataInfrastructureMaintenanceWindow
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindow">DatabaseExadataInfrastructureMaintenanceWindow</a>

maintenance_window block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#maintenance_window DatabaseExadataInfrastructure#maintenance_window}

---

##### `multi_rack_configuration_file`<sup>Optional</sup> <a name="multi_rack_configuration_file" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureConfig.property.multiRackConfigurationFile"></a>

```python
multi_rack_configuration_file: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#multi_rack_configuration_file DatabaseExadataInfrastructure#multi_rack_configuration_file}.

---

##### `network_bonding_mode_details`<sup>Optional</sup> <a name="network_bonding_mode_details" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureConfig.property.networkBondingModeDetails"></a>

```python
network_bonding_mode_details: DatabaseExadataInfrastructureNetworkBondingModeDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetails">DatabaseExadataInfrastructureNetworkBondingModeDetails</a>

network_bonding_mode_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#network_bonding_mode_details DatabaseExadataInfrastructure#network_bonding_mode_details}

---

##### `storage_count`<sup>Optional</sup> <a name="storage_count" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureConfig.property.storageCount"></a>

```python
storage_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#storage_count DatabaseExadataInfrastructure#storage_count}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureConfig.property.timeouts"></a>

```python
timeouts: DatabaseExadataInfrastructureTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeouts">DatabaseExadataInfrastructureTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#timeouts DatabaseExadataInfrastructure#timeouts}

---

### DatabaseExadataInfrastructureContacts <a name="DatabaseExadataInfrastructureContacts" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContacts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContacts.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_exadata_infrastructure

databaseExadataInfrastructure.DatabaseExadataInfrastructureContacts(
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
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContacts.property.email">email</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#email DatabaseExadataInfrastructure#email}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContacts.property.isPrimary">is_primary</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#is_primary DatabaseExadataInfrastructure#is_primary}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContacts.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#name DatabaseExadataInfrastructure#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContacts.property.isContactMosValidated">is_contact_mos_validated</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#is_contact_mos_validated DatabaseExadataInfrastructure#is_contact_mos_validated}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContacts.property.phoneNumber">phone_number</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#phone_number DatabaseExadataInfrastructure#phone_number}. |

---

##### `email`<sup>Required</sup> <a name="email" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContacts.property.email"></a>

```python
email: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#email DatabaseExadataInfrastructure#email}.

---

##### `is_primary`<sup>Required</sup> <a name="is_primary" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContacts.property.isPrimary"></a>

```python
is_primary: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#is_primary DatabaseExadataInfrastructure#is_primary}.

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContacts.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#name DatabaseExadataInfrastructure#name}.

---

##### `is_contact_mos_validated`<sup>Optional</sup> <a name="is_contact_mos_validated" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContacts.property.isContactMosValidated"></a>

```python
is_contact_mos_validated: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#is_contact_mos_validated DatabaseExadataInfrastructure#is_contact_mos_validated}.

---

##### `phone_number`<sup>Optional</sup> <a name="phone_number" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContacts.property.phoneNumber"></a>

```python
phone_number: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#phone_number DatabaseExadataInfrastructure#phone_number}.

---

### DatabaseExadataInfrastructureDefinedFileSystemConfigurations <a name="DatabaseExadataInfrastructureDefinedFileSystemConfigurations" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurations"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurations.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_exadata_infrastructure

databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurations()
```


### DatabaseExadataInfrastructureMaintenanceWindow <a name="DatabaseExadataInfrastructureMaintenanceWindow" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindow"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindow.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_exadata_infrastructure

databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindow(
  custom_action_timeout_in_mins: typing.Union[int, float] = None,
  days_of_week: typing.Union[IResolvable, typing.List[DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeek]] = None,
  hours_of_day: typing.List[typing.Union[int, float]] = None,
  is_custom_action_timeout_enabled: typing.Union[bool, IResolvable] = None,
  is_monthly_patching_enabled: typing.Union[bool, IResolvable] = None,
  lead_time_in_weeks: typing.Union[int, float] = None,
  months: typing.Union[IResolvable, typing.List[DatabaseExadataInfrastructureMaintenanceWindowMonths]] = None,
  patching_mode: str = None,
  preference: str = None,
  skip_ru: typing.Union[IResolvable, typing.List[typing.Union[bool, IResolvable]]] = None,
  weeks_of_month: typing.List[typing.Union[int, float]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindow.property.customActionTimeoutInMins">custom_action_timeout_in_mins</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#custom_action_timeout_in_mins DatabaseExadataInfrastructure#custom_action_timeout_in_mins}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindow.property.daysOfWeek">days_of_week</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeek">DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeek</a>]]</code> | days_of_week block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindow.property.hoursOfDay">hours_of_day</a></code> | <code>typing.List[typing.Union[int, float]]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#hours_of_day DatabaseExadataInfrastructure#hours_of_day}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindow.property.isCustomActionTimeoutEnabled">is_custom_action_timeout_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#is_custom_action_timeout_enabled DatabaseExadataInfrastructure#is_custom_action_timeout_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindow.property.isMonthlyPatchingEnabled">is_monthly_patching_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#is_monthly_patching_enabled DatabaseExadataInfrastructure#is_monthly_patching_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindow.property.leadTimeInWeeks">lead_time_in_weeks</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#lead_time_in_weeks DatabaseExadataInfrastructure#lead_time_in_weeks}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindow.property.months">months</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonths">DatabaseExadataInfrastructureMaintenanceWindowMonths</a>]]</code> | months block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindow.property.patchingMode">patching_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#patching_mode DatabaseExadataInfrastructure#patching_mode}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindow.property.preference">preference</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#preference DatabaseExadataInfrastructure#preference}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindow.property.skipRu">skip_ru</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[typing.Union[bool, cdktf.IResolvable]]]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#skip_ru DatabaseExadataInfrastructure#skip_ru}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindow.property.weeksOfMonth">weeks_of_month</a></code> | <code>typing.List[typing.Union[int, float]]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#weeks_of_month DatabaseExadataInfrastructure#weeks_of_month}. |

---

##### `custom_action_timeout_in_mins`<sup>Optional</sup> <a name="custom_action_timeout_in_mins" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindow.property.customActionTimeoutInMins"></a>

```python
custom_action_timeout_in_mins: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#custom_action_timeout_in_mins DatabaseExadataInfrastructure#custom_action_timeout_in_mins}.

---

##### `days_of_week`<sup>Optional</sup> <a name="days_of_week" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindow.property.daysOfWeek"></a>

```python
days_of_week: typing.Union[IResolvable, typing.List[DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeek]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeek">DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeek</a>]]

days_of_week block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#days_of_week DatabaseExadataInfrastructure#days_of_week}

---

##### `hours_of_day`<sup>Optional</sup> <a name="hours_of_day" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindow.property.hoursOfDay"></a>

```python
hours_of_day: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#hours_of_day DatabaseExadataInfrastructure#hours_of_day}.

---

##### `is_custom_action_timeout_enabled`<sup>Optional</sup> <a name="is_custom_action_timeout_enabled" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindow.property.isCustomActionTimeoutEnabled"></a>

```python
is_custom_action_timeout_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#is_custom_action_timeout_enabled DatabaseExadataInfrastructure#is_custom_action_timeout_enabled}.

---

##### `is_monthly_patching_enabled`<sup>Optional</sup> <a name="is_monthly_patching_enabled" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindow.property.isMonthlyPatchingEnabled"></a>

```python
is_monthly_patching_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#is_monthly_patching_enabled DatabaseExadataInfrastructure#is_monthly_patching_enabled}.

---

##### `lead_time_in_weeks`<sup>Optional</sup> <a name="lead_time_in_weeks" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindow.property.leadTimeInWeeks"></a>

```python
lead_time_in_weeks: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#lead_time_in_weeks DatabaseExadataInfrastructure#lead_time_in_weeks}.

---

##### `months`<sup>Optional</sup> <a name="months" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindow.property.months"></a>

```python
months: typing.Union[IResolvable, typing.List[DatabaseExadataInfrastructureMaintenanceWindowMonths]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonths">DatabaseExadataInfrastructureMaintenanceWindowMonths</a>]]

months block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#months DatabaseExadataInfrastructure#months}

---

##### `patching_mode`<sup>Optional</sup> <a name="patching_mode" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindow.property.patchingMode"></a>

```python
patching_mode: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#patching_mode DatabaseExadataInfrastructure#patching_mode}.

---

##### `preference`<sup>Optional</sup> <a name="preference" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindow.property.preference"></a>

```python
preference: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#preference DatabaseExadataInfrastructure#preference}.

---

##### `skip_ru`<sup>Optional</sup> <a name="skip_ru" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindow.property.skipRu"></a>

```python
skip_ru: typing.Union[IResolvable, typing.List[typing.Union[bool, IResolvable]]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[typing.Union[bool, cdktf.IResolvable]]]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#skip_ru DatabaseExadataInfrastructure#skip_ru}.

---

##### `weeks_of_month`<sup>Optional</sup> <a name="weeks_of_month" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindow.property.weeksOfMonth"></a>

```python
weeks_of_month: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#weeks_of_month DatabaseExadataInfrastructure#weeks_of_month}.

---

### DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeek <a name="DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeek" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeek"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeek.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_exadata_infrastructure

databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeek(
  name: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeek.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#name DatabaseExadataInfrastructure#name}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeek.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#name DatabaseExadataInfrastructure#name}.

---

### DatabaseExadataInfrastructureMaintenanceWindowMonths <a name="DatabaseExadataInfrastructureMaintenanceWindowMonths" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonths"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonths.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_exadata_infrastructure

databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonths(
  name: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonths.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#name DatabaseExadataInfrastructure#name}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonths.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#name DatabaseExadataInfrastructure#name}.

---

### DatabaseExadataInfrastructureNetworkBondingModeDetails <a name="DatabaseExadataInfrastructureNetworkBondingModeDetails" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_exadata_infrastructure

databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetails(
  backup_network_bonding_mode: str = None,
  client_network_bonding_mode: str = None,
  dr_network_bonding_mode: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetails.property.backupNetworkBondingMode">backup_network_bonding_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#backup_network_bonding_mode DatabaseExadataInfrastructure#backup_network_bonding_mode}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetails.property.clientNetworkBondingMode">client_network_bonding_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#client_network_bonding_mode DatabaseExadataInfrastructure#client_network_bonding_mode}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetails.property.drNetworkBondingMode">dr_network_bonding_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#dr_network_bonding_mode DatabaseExadataInfrastructure#dr_network_bonding_mode}. |

---

##### `backup_network_bonding_mode`<sup>Optional</sup> <a name="backup_network_bonding_mode" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetails.property.backupNetworkBondingMode"></a>

```python
backup_network_bonding_mode: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#backup_network_bonding_mode DatabaseExadataInfrastructure#backup_network_bonding_mode}.

---

##### `client_network_bonding_mode`<sup>Optional</sup> <a name="client_network_bonding_mode" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetails.property.clientNetworkBondingMode"></a>

```python
client_network_bonding_mode: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#client_network_bonding_mode DatabaseExadataInfrastructure#client_network_bonding_mode}.

---

##### `dr_network_bonding_mode`<sup>Optional</sup> <a name="dr_network_bonding_mode" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetails.property.drNetworkBondingMode"></a>

```python
dr_network_bonding_mode: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#dr_network_bonding_mode DatabaseExadataInfrastructure#dr_network_bonding_mode}.

---

### DatabaseExadataInfrastructureTimeouts <a name="DatabaseExadataInfrastructureTimeouts" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeouts.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_exadata_infrastructure

databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#create DatabaseExadataInfrastructure#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#delete DatabaseExadataInfrastructure#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#update DatabaseExadataInfrastructure#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#create DatabaseExadataInfrastructure#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#delete DatabaseExadataInfrastructure#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#update DatabaseExadataInfrastructure#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DatabaseExadataInfrastructureContactsList <a name="DatabaseExadataInfrastructureContactsList" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_exadata_infrastructure

databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DatabaseExadataInfrastructureContactsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContacts">DatabaseExadataInfrastructureContacts</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DatabaseExadataInfrastructureContacts]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContacts">DatabaseExadataInfrastructureContacts</a>]]

---


### DatabaseExadataInfrastructureContactsOutputReference <a name="DatabaseExadataInfrastructureContactsOutputReference" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_exadata_infrastructure

databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsOutputReference.resetIsContactMosValidated">reset_is_contact_mos_validated</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsOutputReference.resetPhoneNumber">reset_phone_number</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_is_contact_mos_validated` <a name="reset_is_contact_mos_validated" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsOutputReference.resetIsContactMosValidated"></a>

```python
def reset_is_contact_mos_validated() -> None
```

##### `reset_phone_number` <a name="reset_phone_number" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsOutputReference.resetPhoneNumber"></a>

```python
def reset_phone_number() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsOutputReference.property.emailInput">email_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsOutputReference.property.isContactMosValidatedInput">is_contact_mos_validated_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsOutputReference.property.isPrimaryInput">is_primary_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsOutputReference.property.phoneNumberInput">phone_number_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsOutputReference.property.email">email</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsOutputReference.property.isContactMosValidated">is_contact_mos_validated</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsOutputReference.property.isPrimary">is_primary</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsOutputReference.property.phoneNumber">phone_number</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContacts">DatabaseExadataInfrastructureContacts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `email_input`<sup>Optional</sup> <a name="email_input" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsOutputReference.property.emailInput"></a>

```python
email_input: str
```

- *Type:* str

---

##### `is_contact_mos_validated_input`<sup>Optional</sup> <a name="is_contact_mos_validated_input" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsOutputReference.property.isContactMosValidatedInput"></a>

```python
is_contact_mos_validated_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_primary_input`<sup>Optional</sup> <a name="is_primary_input" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsOutputReference.property.isPrimaryInput"></a>

```python
is_primary_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `phone_number_input`<sup>Optional</sup> <a name="phone_number_input" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsOutputReference.property.phoneNumberInput"></a>

```python
phone_number_input: str
```

- *Type:* str

---

##### `email`<sup>Required</sup> <a name="email" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsOutputReference.property.email"></a>

```python
email: str
```

- *Type:* str

---

##### `is_contact_mos_validated`<sup>Required</sup> <a name="is_contact_mos_validated" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsOutputReference.property.isContactMosValidated"></a>

```python
is_contact_mos_validated: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_primary`<sup>Required</sup> <a name="is_primary" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsOutputReference.property.isPrimary"></a>

```python
is_primary: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `phone_number`<sup>Required</sup> <a name="phone_number" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsOutputReference.property.phoneNumber"></a>

```python
phone_number: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DatabaseExadataInfrastructureContacts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContacts">DatabaseExadataInfrastructureContacts</a>]

---


### DatabaseExadataInfrastructureDefinedFileSystemConfigurationsList <a name="DatabaseExadataInfrastructureDefinedFileSystemConfigurationsList" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_exadata_infrastructure

databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DatabaseExadataInfrastructureDefinedFileSystemConfigurationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DatabaseExadataInfrastructureDefinedFileSystemConfigurationsOutputReference <a name="DatabaseExadataInfrastructureDefinedFileSystemConfigurationsOutputReference" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_exadata_infrastructure

databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsOutputReference.property.isBackupPartition">is_backup_partition</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsOutputReference.property.isResizable">is_resizable</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsOutputReference.property.minSizeGb">min_size_gb</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsOutputReference.property.mountPoint">mount_point</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurations">DatabaseExadataInfrastructureDefinedFileSystemConfigurations</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `is_backup_partition`<sup>Required</sup> <a name="is_backup_partition" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsOutputReference.property.isBackupPartition"></a>

```python
is_backup_partition: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_resizable`<sup>Required</sup> <a name="is_resizable" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsOutputReference.property.isResizable"></a>

```python
is_resizable: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `min_size_gb`<sup>Required</sup> <a name="min_size_gb" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsOutputReference.property.minSizeGb"></a>

```python
min_size_gb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `mount_point`<sup>Required</sup> <a name="mount_point" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsOutputReference.property.mountPoint"></a>

```python
mount_point: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsOutputReference.property.internalValue"></a>

```python
internal_value: DatabaseExadataInfrastructureDefinedFileSystemConfigurations
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurations">DatabaseExadataInfrastructureDefinedFileSystemConfigurations</a>

---


### DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekList <a name="DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekList" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_exadata_infrastructure

databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeek">DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeek</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeek]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeek">DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeek</a>]]

---


### DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference <a name="DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_exadata_infrastructure

databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeek">DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeek</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeek]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeek">DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeek</a>]

---


### DatabaseExadataInfrastructureMaintenanceWindowMonthsList <a name="DatabaseExadataInfrastructureMaintenanceWindowMonthsList" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_exadata_infrastructure

databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DatabaseExadataInfrastructureMaintenanceWindowMonthsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonths">DatabaseExadataInfrastructureMaintenanceWindowMonths</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DatabaseExadataInfrastructureMaintenanceWindowMonths]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonths">DatabaseExadataInfrastructureMaintenanceWindowMonths</a>]]

---


### DatabaseExadataInfrastructureMaintenanceWindowMonthsOutputReference <a name="DatabaseExadataInfrastructureMaintenanceWindowMonthsOutputReference" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_exadata_infrastructure

databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonths">DatabaseExadataInfrastructureMaintenanceWindowMonths</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DatabaseExadataInfrastructureMaintenanceWindowMonths]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonths">DatabaseExadataInfrastructureMaintenanceWindowMonths</a>]

---


### DatabaseExadataInfrastructureMaintenanceWindowOutputReference <a name="DatabaseExadataInfrastructureMaintenanceWindowOutputReference" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_exadata_infrastructure

databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.putDaysOfWeek">put_days_of_week</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.putMonths">put_months</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.resetCustomActionTimeoutInMins">reset_custom_action_timeout_in_mins</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.resetDaysOfWeek">reset_days_of_week</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.resetHoursOfDay">reset_hours_of_day</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.resetIsCustomActionTimeoutEnabled">reset_is_custom_action_timeout_enabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.resetIsMonthlyPatchingEnabled">reset_is_monthly_patching_enabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.resetLeadTimeInWeeks">reset_lead_time_in_weeks</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.resetMonths">reset_months</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.resetPatchingMode">reset_patching_mode</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.resetPreference">reset_preference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.resetSkipRu">reset_skip_ru</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.resetWeeksOfMonth">reset_weeks_of_month</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_days_of_week` <a name="put_days_of_week" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.putDaysOfWeek"></a>

```python
def put_days_of_week(
  value: typing.Union[IResolvable, typing.List[DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeek]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.putDaysOfWeek.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeek">DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeek</a>]]

---

##### `put_months` <a name="put_months" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.putMonths"></a>

```python
def put_months(
  value: typing.Union[IResolvable, typing.List[DatabaseExadataInfrastructureMaintenanceWindowMonths]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.putMonths.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonths">DatabaseExadataInfrastructureMaintenanceWindowMonths</a>]]

---

##### `reset_custom_action_timeout_in_mins` <a name="reset_custom_action_timeout_in_mins" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.resetCustomActionTimeoutInMins"></a>

```python
def reset_custom_action_timeout_in_mins() -> None
```

##### `reset_days_of_week` <a name="reset_days_of_week" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.resetDaysOfWeek"></a>

```python
def reset_days_of_week() -> None
```

##### `reset_hours_of_day` <a name="reset_hours_of_day" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.resetHoursOfDay"></a>

```python
def reset_hours_of_day() -> None
```

##### `reset_is_custom_action_timeout_enabled` <a name="reset_is_custom_action_timeout_enabled" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.resetIsCustomActionTimeoutEnabled"></a>

```python
def reset_is_custom_action_timeout_enabled() -> None
```

##### `reset_is_monthly_patching_enabled` <a name="reset_is_monthly_patching_enabled" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.resetIsMonthlyPatchingEnabled"></a>

```python
def reset_is_monthly_patching_enabled() -> None
```

##### `reset_lead_time_in_weeks` <a name="reset_lead_time_in_weeks" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.resetLeadTimeInWeeks"></a>

```python
def reset_lead_time_in_weeks() -> None
```

##### `reset_months` <a name="reset_months" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.resetMonths"></a>

```python
def reset_months() -> None
```

##### `reset_patching_mode` <a name="reset_patching_mode" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.resetPatchingMode"></a>

```python
def reset_patching_mode() -> None
```

##### `reset_preference` <a name="reset_preference" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.resetPreference"></a>

```python
def reset_preference() -> None
```

##### `reset_skip_ru` <a name="reset_skip_ru" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.resetSkipRu"></a>

```python
def reset_skip_ru() -> None
```

##### `reset_weeks_of_month` <a name="reset_weeks_of_month" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.resetWeeksOfMonth"></a>

```python
def reset_weeks_of_month() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.property.daysOfWeek">days_of_week</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekList">DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.property.months">months</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsList">DatabaseExadataInfrastructureMaintenanceWindowMonthsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.property.customActionTimeoutInMinsInput">custom_action_timeout_in_mins_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.property.daysOfWeekInput">days_of_week_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeek">DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeek</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.property.hoursOfDayInput">hours_of_day_input</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.property.isCustomActionTimeoutEnabledInput">is_custom_action_timeout_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.property.isMonthlyPatchingEnabledInput">is_monthly_patching_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.property.leadTimeInWeeksInput">lead_time_in_weeks_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.property.monthsInput">months_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonths">DatabaseExadataInfrastructureMaintenanceWindowMonths</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.property.patchingModeInput">patching_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.property.preferenceInput">preference_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.property.skipRuInput">skip_ru_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[typing.Union[bool, cdktf.IResolvable]]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.property.weeksOfMonthInput">weeks_of_month_input</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.property.customActionTimeoutInMins">custom_action_timeout_in_mins</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.property.hoursOfDay">hours_of_day</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.property.isCustomActionTimeoutEnabled">is_custom_action_timeout_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.property.isMonthlyPatchingEnabled">is_monthly_patching_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.property.leadTimeInWeeks">lead_time_in_weeks</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.property.patchingMode">patching_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.property.preference">preference</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.property.skipRu">skip_ru</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[typing.Union[bool, cdktf.IResolvable]]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.property.weeksOfMonth">weeks_of_month</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindow">DatabaseExadataInfrastructureMaintenanceWindow</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `days_of_week`<sup>Required</sup> <a name="days_of_week" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.property.daysOfWeek"></a>

```python
days_of_week: DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekList">DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekList</a>

---

##### `months`<sup>Required</sup> <a name="months" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.property.months"></a>

```python
months: DatabaseExadataInfrastructureMaintenanceWindowMonthsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsList">DatabaseExadataInfrastructureMaintenanceWindowMonthsList</a>

---

##### `custom_action_timeout_in_mins_input`<sup>Optional</sup> <a name="custom_action_timeout_in_mins_input" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.property.customActionTimeoutInMinsInput"></a>

```python
custom_action_timeout_in_mins_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `days_of_week_input`<sup>Optional</sup> <a name="days_of_week_input" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.property.daysOfWeekInput"></a>

```python
days_of_week_input: typing.Union[IResolvable, typing.List[DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeek]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeek">DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeek</a>]]

---

##### `hours_of_day_input`<sup>Optional</sup> <a name="hours_of_day_input" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.property.hoursOfDayInput"></a>

```python
hours_of_day_input: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `is_custom_action_timeout_enabled_input`<sup>Optional</sup> <a name="is_custom_action_timeout_enabled_input" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.property.isCustomActionTimeoutEnabledInput"></a>

```python
is_custom_action_timeout_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_monthly_patching_enabled_input`<sup>Optional</sup> <a name="is_monthly_patching_enabled_input" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.property.isMonthlyPatchingEnabledInput"></a>

```python
is_monthly_patching_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `lead_time_in_weeks_input`<sup>Optional</sup> <a name="lead_time_in_weeks_input" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.property.leadTimeInWeeksInput"></a>

```python
lead_time_in_weeks_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `months_input`<sup>Optional</sup> <a name="months_input" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.property.monthsInput"></a>

```python
months_input: typing.Union[IResolvable, typing.List[DatabaseExadataInfrastructureMaintenanceWindowMonths]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonths">DatabaseExadataInfrastructureMaintenanceWindowMonths</a>]]

---

##### `patching_mode_input`<sup>Optional</sup> <a name="patching_mode_input" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.property.patchingModeInput"></a>

```python
patching_mode_input: str
```

- *Type:* str

---

##### `preference_input`<sup>Optional</sup> <a name="preference_input" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.property.preferenceInput"></a>

```python
preference_input: str
```

- *Type:* str

---

##### `skip_ru_input`<sup>Optional</sup> <a name="skip_ru_input" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.property.skipRuInput"></a>

```python
skip_ru_input: typing.Union[IResolvable, typing.List[typing.Union[bool, IResolvable]]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[typing.Union[bool, cdktf.IResolvable]]]

---

##### `weeks_of_month_input`<sup>Optional</sup> <a name="weeks_of_month_input" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.property.weeksOfMonthInput"></a>

```python
weeks_of_month_input: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `custom_action_timeout_in_mins`<sup>Required</sup> <a name="custom_action_timeout_in_mins" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.property.customActionTimeoutInMins"></a>

```python
custom_action_timeout_in_mins: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `hours_of_day`<sup>Required</sup> <a name="hours_of_day" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.property.hoursOfDay"></a>

```python
hours_of_day: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `is_custom_action_timeout_enabled`<sup>Required</sup> <a name="is_custom_action_timeout_enabled" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.property.isCustomActionTimeoutEnabled"></a>

```python
is_custom_action_timeout_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_monthly_patching_enabled`<sup>Required</sup> <a name="is_monthly_patching_enabled" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.property.isMonthlyPatchingEnabled"></a>

```python
is_monthly_patching_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `lead_time_in_weeks`<sup>Required</sup> <a name="lead_time_in_weeks" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.property.leadTimeInWeeks"></a>

```python
lead_time_in_weeks: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `patching_mode`<sup>Required</sup> <a name="patching_mode" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.property.patchingMode"></a>

```python
patching_mode: str
```

- *Type:* str

---

##### `preference`<sup>Required</sup> <a name="preference" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.property.preference"></a>

```python
preference: str
```

- *Type:* str

---

##### `skip_ru`<sup>Required</sup> <a name="skip_ru" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.property.skipRu"></a>

```python
skip_ru: typing.Union[IResolvable, typing.List[typing.Union[bool, IResolvable]]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[typing.Union[bool, cdktf.IResolvable]]]

---

##### `weeks_of_month`<sup>Required</sup> <a name="weeks_of_month" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.property.weeksOfMonth"></a>

```python
weeks_of_month: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.property.internalValue"></a>

```python
internal_value: DatabaseExadataInfrastructureMaintenanceWindow
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindow">DatabaseExadataInfrastructureMaintenanceWindow</a>

---


### DatabaseExadataInfrastructureNetworkBondingModeDetailsOutputReference <a name="DatabaseExadataInfrastructureNetworkBondingModeDetailsOutputReference" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_exadata_infrastructure

databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetailsOutputReference.resetBackupNetworkBondingMode">reset_backup_network_bonding_mode</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetailsOutputReference.resetClientNetworkBondingMode">reset_client_network_bonding_mode</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetailsOutputReference.resetDrNetworkBondingMode">reset_dr_network_bonding_mode</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_backup_network_bonding_mode` <a name="reset_backup_network_bonding_mode" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetailsOutputReference.resetBackupNetworkBondingMode"></a>

```python
def reset_backup_network_bonding_mode() -> None
```

##### `reset_client_network_bonding_mode` <a name="reset_client_network_bonding_mode" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetailsOutputReference.resetClientNetworkBondingMode"></a>

```python
def reset_client_network_bonding_mode() -> None
```

##### `reset_dr_network_bonding_mode` <a name="reset_dr_network_bonding_mode" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetailsOutputReference.resetDrNetworkBondingMode"></a>

```python
def reset_dr_network_bonding_mode() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetailsOutputReference.property.backupNetworkBondingModeInput">backup_network_bonding_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetailsOutputReference.property.clientNetworkBondingModeInput">client_network_bonding_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetailsOutputReference.property.drNetworkBondingModeInput">dr_network_bonding_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetailsOutputReference.property.backupNetworkBondingMode">backup_network_bonding_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetailsOutputReference.property.clientNetworkBondingMode">client_network_bonding_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetailsOutputReference.property.drNetworkBondingMode">dr_network_bonding_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetails">DatabaseExadataInfrastructureNetworkBondingModeDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `backup_network_bonding_mode_input`<sup>Optional</sup> <a name="backup_network_bonding_mode_input" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetailsOutputReference.property.backupNetworkBondingModeInput"></a>

```python
backup_network_bonding_mode_input: str
```

- *Type:* str

---

##### `client_network_bonding_mode_input`<sup>Optional</sup> <a name="client_network_bonding_mode_input" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetailsOutputReference.property.clientNetworkBondingModeInput"></a>

```python
client_network_bonding_mode_input: str
```

- *Type:* str

---

##### `dr_network_bonding_mode_input`<sup>Optional</sup> <a name="dr_network_bonding_mode_input" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetailsOutputReference.property.drNetworkBondingModeInput"></a>

```python
dr_network_bonding_mode_input: str
```

- *Type:* str

---

##### `backup_network_bonding_mode`<sup>Required</sup> <a name="backup_network_bonding_mode" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetailsOutputReference.property.backupNetworkBondingMode"></a>

```python
backup_network_bonding_mode: str
```

- *Type:* str

---

##### `client_network_bonding_mode`<sup>Required</sup> <a name="client_network_bonding_mode" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetailsOutputReference.property.clientNetworkBondingMode"></a>

```python
client_network_bonding_mode: str
```

- *Type:* str

---

##### `dr_network_bonding_mode`<sup>Required</sup> <a name="dr_network_bonding_mode" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetailsOutputReference.property.drNetworkBondingMode"></a>

```python
dr_network_bonding_mode: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetailsOutputReference.property.internalValue"></a>

```python
internal_value: DatabaseExadataInfrastructureNetworkBondingModeDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetails">DatabaseExadataInfrastructureNetworkBondingModeDetails</a>

---


### DatabaseExadataInfrastructureTimeoutsOutputReference <a name="DatabaseExadataInfrastructureTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeoutsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_exadata_infrastructure

databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeouts">DatabaseExadataInfrastructureTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DatabaseExadataInfrastructureTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeouts">DatabaseExadataInfrastructureTimeouts</a>]

---



