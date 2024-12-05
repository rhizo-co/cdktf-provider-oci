# `dataOciDatabaseVmClusterRecommendedNetwork` Submodule <a name="`dataOciDatabaseVmClusterRecommendedNetwork` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabaseVmClusterRecommendedNetwork <a name="DataOciDatabaseVmClusterRecommendedNetwork" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_recommended_network oci_database_vm_cluster_recommended_network}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_vm_cluster_recommended_network

dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  display_name: str,
  exadata_infrastructure_id: str,
  networks: typing.Union[IResolvable, typing.List[DataOciDatabaseVmClusterRecommendedNetworkNetworks]],
  db_servers: typing.List[str] = None,
  defined_tags: typing.Mapping[str] = None,
  dns: typing.List[str] = None,
  dr_scan_listener_port_tcp: typing.Union[int, float] = None,
  freeform_tags: typing.Mapping[str] = None,
  id: str = None,
  ntp: typing.List[str] = None,
  scan_listener_port_tcp: typing.Union[int, float] = None,
  scan_listener_port_tcp_ssl: typing.Union[int, float] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_recommended_network#compartment_id DataOciDatabaseVmClusterRecommendedNetwork#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_recommended_network#display_name DataOciDatabaseVmClusterRecommendedNetwork#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.Initializer.parameter.exadataInfrastructureId">exadata_infrastructure_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_recommended_network#exadata_infrastructure_id DataOciDatabaseVmClusterRecommendedNetwork#exadata_infrastructure_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.Initializer.parameter.networks">networks</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworks">DataOciDatabaseVmClusterRecommendedNetworkNetworks</a>]]</code> | networks block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.Initializer.parameter.dbServers">db_servers</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_recommended_network#db_servers DataOciDatabaseVmClusterRecommendedNetwork#db_servers}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.Initializer.parameter.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_recommended_network#defined_tags DataOciDatabaseVmClusterRecommendedNetwork#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.Initializer.parameter.dns">dns</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_recommended_network#dns DataOciDatabaseVmClusterRecommendedNetwork#dns}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.Initializer.parameter.drScanListenerPortTcp">dr_scan_listener_port_tcp</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_recommended_network#dr_scan_listener_port_tcp DataOciDatabaseVmClusterRecommendedNetwork#dr_scan_listener_port_tcp}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.Initializer.parameter.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_recommended_network#freeform_tags DataOciDatabaseVmClusterRecommendedNetwork#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_recommended_network#id DataOciDatabaseVmClusterRecommendedNetwork#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.Initializer.parameter.ntp">ntp</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_recommended_network#ntp DataOciDatabaseVmClusterRecommendedNetwork#ntp}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.Initializer.parameter.scanListenerPortTcp">scan_listener_port_tcp</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_recommended_network#scan_listener_port_tcp DataOciDatabaseVmClusterRecommendedNetwork#scan_listener_port_tcp}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.Initializer.parameter.scanListenerPortTcpSsl">scan_listener_port_tcp_ssl</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_recommended_network#scan_listener_port_tcp_ssl DataOciDatabaseVmClusterRecommendedNetwork#scan_listener_port_tcp_ssl}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_recommended_network#compartment_id DataOciDatabaseVmClusterRecommendedNetwork#compartment_id}.

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_recommended_network#display_name DataOciDatabaseVmClusterRecommendedNetwork#display_name}.

---

##### `exadata_infrastructure_id`<sup>Required</sup> <a name="exadata_infrastructure_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.Initializer.parameter.exadataInfrastructureId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_recommended_network#exadata_infrastructure_id DataOciDatabaseVmClusterRecommendedNetwork#exadata_infrastructure_id}.

---

##### `networks`<sup>Required</sup> <a name="networks" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.Initializer.parameter.networks"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworks">DataOciDatabaseVmClusterRecommendedNetworkNetworks</a>]]

networks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_recommended_network#networks DataOciDatabaseVmClusterRecommendedNetwork#networks}

---

##### `db_servers`<sup>Optional</sup> <a name="db_servers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.Initializer.parameter.dbServers"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_recommended_network#db_servers DataOciDatabaseVmClusterRecommendedNetwork#db_servers}.

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.Initializer.parameter.definedTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_recommended_network#defined_tags DataOciDatabaseVmClusterRecommendedNetwork#defined_tags}.

---

##### `dns`<sup>Optional</sup> <a name="dns" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.Initializer.parameter.dns"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_recommended_network#dns DataOciDatabaseVmClusterRecommendedNetwork#dns}.

---

##### `dr_scan_listener_port_tcp`<sup>Optional</sup> <a name="dr_scan_listener_port_tcp" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.Initializer.parameter.drScanListenerPortTcp"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_recommended_network#dr_scan_listener_port_tcp DataOciDatabaseVmClusterRecommendedNetwork#dr_scan_listener_port_tcp}.

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.Initializer.parameter.freeformTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_recommended_network#freeform_tags DataOciDatabaseVmClusterRecommendedNetwork#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_recommended_network#id DataOciDatabaseVmClusterRecommendedNetwork#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ntp`<sup>Optional</sup> <a name="ntp" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.Initializer.parameter.ntp"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_recommended_network#ntp DataOciDatabaseVmClusterRecommendedNetwork#ntp}.

---

##### `scan_listener_port_tcp`<sup>Optional</sup> <a name="scan_listener_port_tcp" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.Initializer.parameter.scanListenerPortTcp"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_recommended_network#scan_listener_port_tcp DataOciDatabaseVmClusterRecommendedNetwork#scan_listener_port_tcp}.

---

##### `scan_listener_port_tcp_ssl`<sup>Optional</sup> <a name="scan_listener_port_tcp_ssl" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.Initializer.parameter.scanListenerPortTcpSsl"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_recommended_network#scan_listener_port_tcp_ssl DataOciDatabaseVmClusterRecommendedNetwork#scan_listener_port_tcp_ssl}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.putNetworks">put_networks</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.resetDbServers">reset_db_servers</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.resetDefinedTags">reset_defined_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.resetDns">reset_dns</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.resetDrScanListenerPortTcp">reset_dr_scan_listener_port_tcp</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.resetFreeformTags">reset_freeform_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.resetNtp">reset_ntp</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.resetScanListenerPortTcp">reset_scan_listener_port_tcp</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.resetScanListenerPortTcpSsl">reset_scan_listener_port_tcp_ssl</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_networks` <a name="put_networks" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.putNetworks"></a>

```python
def put_networks(
  value: typing.Union[IResolvable, typing.List[DataOciDatabaseVmClusterRecommendedNetworkNetworks]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.putNetworks.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworks">DataOciDatabaseVmClusterRecommendedNetworkNetworks</a>]]

---

##### `reset_db_servers` <a name="reset_db_servers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.resetDbServers"></a>

```python
def reset_db_servers() -> None
```

##### `reset_defined_tags` <a name="reset_defined_tags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.resetDefinedTags"></a>

```python
def reset_defined_tags() -> None
```

##### `reset_dns` <a name="reset_dns" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.resetDns"></a>

```python
def reset_dns() -> None
```

##### `reset_dr_scan_listener_port_tcp` <a name="reset_dr_scan_listener_port_tcp" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.resetDrScanListenerPortTcp"></a>

```python
def reset_dr_scan_listener_port_tcp() -> None
```

##### `reset_freeform_tags` <a name="reset_freeform_tags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.resetFreeformTags"></a>

```python
def reset_freeform_tags() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_ntp` <a name="reset_ntp" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.resetNtp"></a>

```python
def reset_ntp() -> None
```

##### `reset_scan_listener_port_tcp` <a name="reset_scan_listener_port_tcp" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.resetScanListenerPortTcp"></a>

```python
def reset_scan_listener_port_tcp() -> None
```

##### `reset_scan_listener_port_tcp_ssl` <a name="reset_scan_listener_port_tcp_ssl" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.resetScanListenerPortTcpSsl"></a>

```python
def reset_scan_listener_port_tcp_ssl() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciDatabaseVmClusterRecommendedNetwork resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_vm_cluster_recommended_network

dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_vm_cluster_recommended_network

dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_vm_cluster_recommended_network

dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_vm_cluster_recommended_network

dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciDatabaseVmClusterRecommendedNetwork resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciDatabaseVmClusterRecommendedNetwork to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciDatabaseVmClusterRecommendedNetwork that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_recommended_network#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabaseVmClusterRecommendedNetwork to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.drScans">dr_scans</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansList">DataOciDatabaseVmClusterRecommendedNetworkDrScansList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.networks">networks</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksList">DataOciDatabaseVmClusterRecommendedNetworkNetworksList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.scans">scans</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansList">DataOciDatabaseVmClusterRecommendedNetworkScansList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.vmNetworks">vm_networks</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksList">DataOciDatabaseVmClusterRecommendedNetworkVmNetworksList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.dbServersInput">db_servers_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.definedTagsInput">defined_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.dnsInput">dns_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.drScanListenerPortTcpInput">dr_scan_listener_port_tcp_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.exadataInfrastructureIdInput">exadata_infrastructure_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.freeformTagsInput">freeform_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.networksInput">networks_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworks">DataOciDatabaseVmClusterRecommendedNetworkNetworks</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.ntpInput">ntp_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.scanListenerPortTcpInput">scan_listener_port_tcp_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.scanListenerPortTcpSslInput">scan_listener_port_tcp_ssl_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.dbServers">db_servers</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.dns">dns</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.drScanListenerPortTcp">dr_scan_listener_port_tcp</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.exadataInfrastructureId">exadata_infrastructure_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.ntp">ntp</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.scanListenerPortTcp">scan_listener_port_tcp</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.scanListenerPortTcpSsl">scan_listener_port_tcp_ssl</a></code> | <code>typing.Union[int, float]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `dr_scans`<sup>Required</sup> <a name="dr_scans" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.drScans"></a>

```python
dr_scans: DataOciDatabaseVmClusterRecommendedNetworkDrScansList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansList">DataOciDatabaseVmClusterRecommendedNetworkDrScansList</a>

---

##### `networks`<sup>Required</sup> <a name="networks" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.networks"></a>

```python
networks: DataOciDatabaseVmClusterRecommendedNetworkNetworksList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksList">DataOciDatabaseVmClusterRecommendedNetworkNetworksList</a>

---

##### `scans`<sup>Required</sup> <a name="scans" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.scans"></a>

```python
scans: DataOciDatabaseVmClusterRecommendedNetworkScansList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansList">DataOciDatabaseVmClusterRecommendedNetworkScansList</a>

---

##### `vm_networks`<sup>Required</sup> <a name="vm_networks" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.vmNetworks"></a>

```python
vm_networks: DataOciDatabaseVmClusterRecommendedNetworkVmNetworksList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksList">DataOciDatabaseVmClusterRecommendedNetworkVmNetworksList</a>

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `db_servers_input`<sup>Optional</sup> <a name="db_servers_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.dbServersInput"></a>

```python
db_servers_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `defined_tags_input`<sup>Optional</sup> <a name="defined_tags_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.definedTagsInput"></a>

```python
defined_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `dns_input`<sup>Optional</sup> <a name="dns_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.dnsInput"></a>

```python
dns_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `dr_scan_listener_port_tcp_input`<sup>Optional</sup> <a name="dr_scan_listener_port_tcp_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.drScanListenerPortTcpInput"></a>

```python
dr_scan_listener_port_tcp_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `exadata_infrastructure_id_input`<sup>Optional</sup> <a name="exadata_infrastructure_id_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.exadataInfrastructureIdInput"></a>

```python
exadata_infrastructure_id_input: str
```

- *Type:* str

---

##### `freeform_tags_input`<sup>Optional</sup> <a name="freeform_tags_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.freeformTagsInput"></a>

```python
freeform_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `networks_input`<sup>Optional</sup> <a name="networks_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.networksInput"></a>

```python
networks_input: typing.Union[IResolvable, typing.List[DataOciDatabaseVmClusterRecommendedNetworkNetworks]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworks">DataOciDatabaseVmClusterRecommendedNetworkNetworks</a>]]

---

##### `ntp_input`<sup>Optional</sup> <a name="ntp_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.ntpInput"></a>

```python
ntp_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `scan_listener_port_tcp_input`<sup>Optional</sup> <a name="scan_listener_port_tcp_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.scanListenerPortTcpInput"></a>

```python
scan_listener_port_tcp_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `scan_listener_port_tcp_ssl_input`<sup>Optional</sup> <a name="scan_listener_port_tcp_ssl_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.scanListenerPortTcpSslInput"></a>

```python
scan_listener_port_tcp_ssl_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `db_servers`<sup>Required</sup> <a name="db_servers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.dbServers"></a>

```python
db_servers: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `dns`<sup>Required</sup> <a name="dns" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.dns"></a>

```python
dns: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `dr_scan_listener_port_tcp`<sup>Required</sup> <a name="dr_scan_listener_port_tcp" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.drScanListenerPortTcp"></a>

```python
dr_scan_listener_port_tcp: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `exadata_infrastructure_id`<sup>Required</sup> <a name="exadata_infrastructure_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.exadataInfrastructureId"></a>

```python
exadata_infrastructure_id: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `ntp`<sup>Required</sup> <a name="ntp" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.ntp"></a>

```python
ntp: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `scan_listener_port_tcp`<sup>Required</sup> <a name="scan_listener_port_tcp" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.scanListenerPortTcp"></a>

```python
scan_listener_port_tcp: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `scan_listener_port_tcp_ssl`<sup>Required</sup> <a name="scan_listener_port_tcp_ssl" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.scanListenerPortTcpSsl"></a>

```python
scan_listener_port_tcp_ssl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabaseVmClusterRecommendedNetworkConfig <a name="DataOciDatabaseVmClusterRecommendedNetworkConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_vm_cluster_recommended_network

dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  display_name: str,
  exadata_infrastructure_id: str,
  networks: typing.Union[IResolvable, typing.List[DataOciDatabaseVmClusterRecommendedNetworkNetworks]],
  db_servers: typing.List[str] = None,
  defined_tags: typing.Mapping[str] = None,
  dns: typing.List[str] = None,
  dr_scan_listener_port_tcp: typing.Union[int, float] = None,
  freeform_tags: typing.Mapping[str] = None,
  id: str = None,
  ntp: typing.List[str] = None,
  scan_listener_port_tcp: typing.Union[int, float] = None,
  scan_listener_port_tcp_ssl: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_recommended_network#compartment_id DataOciDatabaseVmClusterRecommendedNetwork#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_recommended_network#display_name DataOciDatabaseVmClusterRecommendedNetwork#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkConfig.property.exadataInfrastructureId">exadata_infrastructure_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_recommended_network#exadata_infrastructure_id DataOciDatabaseVmClusterRecommendedNetwork#exadata_infrastructure_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkConfig.property.networks">networks</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworks">DataOciDatabaseVmClusterRecommendedNetworkNetworks</a>]]</code> | networks block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkConfig.property.dbServers">db_servers</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_recommended_network#db_servers DataOciDatabaseVmClusterRecommendedNetwork#db_servers}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkConfig.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_recommended_network#defined_tags DataOciDatabaseVmClusterRecommendedNetwork#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkConfig.property.dns">dns</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_recommended_network#dns DataOciDatabaseVmClusterRecommendedNetwork#dns}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkConfig.property.drScanListenerPortTcp">dr_scan_listener_port_tcp</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_recommended_network#dr_scan_listener_port_tcp DataOciDatabaseVmClusterRecommendedNetwork#dr_scan_listener_port_tcp}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkConfig.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_recommended_network#freeform_tags DataOciDatabaseVmClusterRecommendedNetwork#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_recommended_network#id DataOciDatabaseVmClusterRecommendedNetwork#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkConfig.property.ntp">ntp</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_recommended_network#ntp DataOciDatabaseVmClusterRecommendedNetwork#ntp}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkConfig.property.scanListenerPortTcp">scan_listener_port_tcp</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_recommended_network#scan_listener_port_tcp DataOciDatabaseVmClusterRecommendedNetwork#scan_listener_port_tcp}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkConfig.property.scanListenerPortTcpSsl">scan_listener_port_tcp_ssl</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_recommended_network#scan_listener_port_tcp_ssl DataOciDatabaseVmClusterRecommendedNetwork#scan_listener_port_tcp_ssl}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_recommended_network#compartment_id DataOciDatabaseVmClusterRecommendedNetwork#compartment_id}.

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_recommended_network#display_name DataOciDatabaseVmClusterRecommendedNetwork#display_name}.

---

##### `exadata_infrastructure_id`<sup>Required</sup> <a name="exadata_infrastructure_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkConfig.property.exadataInfrastructureId"></a>

```python
exadata_infrastructure_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_recommended_network#exadata_infrastructure_id DataOciDatabaseVmClusterRecommendedNetwork#exadata_infrastructure_id}.

---

##### `networks`<sup>Required</sup> <a name="networks" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkConfig.property.networks"></a>

```python
networks: typing.Union[IResolvable, typing.List[DataOciDatabaseVmClusterRecommendedNetworkNetworks]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworks">DataOciDatabaseVmClusterRecommendedNetworkNetworks</a>]]

networks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_recommended_network#networks DataOciDatabaseVmClusterRecommendedNetwork#networks}

---

##### `db_servers`<sup>Optional</sup> <a name="db_servers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkConfig.property.dbServers"></a>

```python
db_servers: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_recommended_network#db_servers DataOciDatabaseVmClusterRecommendedNetwork#db_servers}.

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkConfig.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_recommended_network#defined_tags DataOciDatabaseVmClusterRecommendedNetwork#defined_tags}.

---

##### `dns`<sup>Optional</sup> <a name="dns" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkConfig.property.dns"></a>

```python
dns: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_recommended_network#dns DataOciDatabaseVmClusterRecommendedNetwork#dns}.

---

##### `dr_scan_listener_port_tcp`<sup>Optional</sup> <a name="dr_scan_listener_port_tcp" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkConfig.property.drScanListenerPortTcp"></a>

```python
dr_scan_listener_port_tcp: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_recommended_network#dr_scan_listener_port_tcp DataOciDatabaseVmClusterRecommendedNetwork#dr_scan_listener_port_tcp}.

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkConfig.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_recommended_network#freeform_tags DataOciDatabaseVmClusterRecommendedNetwork#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_recommended_network#id DataOciDatabaseVmClusterRecommendedNetwork#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ntp`<sup>Optional</sup> <a name="ntp" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkConfig.property.ntp"></a>

```python
ntp: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_recommended_network#ntp DataOciDatabaseVmClusterRecommendedNetwork#ntp}.

---

##### `scan_listener_port_tcp`<sup>Optional</sup> <a name="scan_listener_port_tcp" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkConfig.property.scanListenerPortTcp"></a>

```python
scan_listener_port_tcp: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_recommended_network#scan_listener_port_tcp DataOciDatabaseVmClusterRecommendedNetwork#scan_listener_port_tcp}.

---

##### `scan_listener_port_tcp_ssl`<sup>Optional</sup> <a name="scan_listener_port_tcp_ssl" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkConfig.property.scanListenerPortTcpSsl"></a>

```python
scan_listener_port_tcp_ssl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_recommended_network#scan_listener_port_tcp_ssl DataOciDatabaseVmClusterRecommendedNetwork#scan_listener_port_tcp_ssl}.

---

### DataOciDatabaseVmClusterRecommendedNetworkDrScans <a name="DataOciDatabaseVmClusterRecommendedNetworkDrScans" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScans"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScans.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_vm_cluster_recommended_network

dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScans()
```


### DataOciDatabaseVmClusterRecommendedNetworkNetworks <a name="DataOciDatabaseVmClusterRecommendedNetworkNetworks" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworks"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworks.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_vm_cluster_recommended_network

dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworks(
  cidr: str,
  domain: str,
  gateway: str,
  netmask: str,
  network_type: str,
  prefix: str,
  vlan_id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworks.property.cidr">cidr</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_recommended_network#cidr DataOciDatabaseVmClusterRecommendedNetwork#cidr}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworks.property.domain">domain</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_recommended_network#domain DataOciDatabaseVmClusterRecommendedNetwork#domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworks.property.gateway">gateway</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_recommended_network#gateway DataOciDatabaseVmClusterRecommendedNetwork#gateway}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworks.property.netmask">netmask</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_recommended_network#netmask DataOciDatabaseVmClusterRecommendedNetwork#netmask}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworks.property.networkType">network_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_recommended_network#network_type DataOciDatabaseVmClusterRecommendedNetwork#network_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworks.property.prefix">prefix</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_recommended_network#prefix DataOciDatabaseVmClusterRecommendedNetwork#prefix}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworks.property.vlanId">vlan_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_recommended_network#vlan_id DataOciDatabaseVmClusterRecommendedNetwork#vlan_id}. |

---

##### `cidr`<sup>Required</sup> <a name="cidr" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworks.property.cidr"></a>

```python
cidr: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_recommended_network#cidr DataOciDatabaseVmClusterRecommendedNetwork#cidr}.

---

##### `domain`<sup>Required</sup> <a name="domain" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworks.property.domain"></a>

```python
domain: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_recommended_network#domain DataOciDatabaseVmClusterRecommendedNetwork#domain}.

---

##### `gateway`<sup>Required</sup> <a name="gateway" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworks.property.gateway"></a>

```python
gateway: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_recommended_network#gateway DataOciDatabaseVmClusterRecommendedNetwork#gateway}.

---

##### `netmask`<sup>Required</sup> <a name="netmask" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworks.property.netmask"></a>

```python
netmask: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_recommended_network#netmask DataOciDatabaseVmClusterRecommendedNetwork#netmask}.

---

##### `network_type`<sup>Required</sup> <a name="network_type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworks.property.networkType"></a>

```python
network_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_recommended_network#network_type DataOciDatabaseVmClusterRecommendedNetwork#network_type}.

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworks.property.prefix"></a>

```python
prefix: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_recommended_network#prefix DataOciDatabaseVmClusterRecommendedNetwork#prefix}.

---

##### `vlan_id`<sup>Required</sup> <a name="vlan_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworks.property.vlanId"></a>

```python
vlan_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_recommended_network#vlan_id DataOciDatabaseVmClusterRecommendedNetwork#vlan_id}.

---

### DataOciDatabaseVmClusterRecommendedNetworkScans <a name="DataOciDatabaseVmClusterRecommendedNetworkScans" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScans"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScans.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_vm_cluster_recommended_network

dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScans()
```


### DataOciDatabaseVmClusterRecommendedNetworkVmNetworks <a name="DataOciDatabaseVmClusterRecommendedNetworkVmNetworks" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworks"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworks.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_vm_cluster_recommended_network

dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworks()
```


### DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodes <a name="DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodes" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodes"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodes.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_vm_cluster_recommended_network

dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodes()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDatabaseVmClusterRecommendedNetworkDrScansList <a name="DataOciDatabaseVmClusterRecommendedNetworkDrScansList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_vm_cluster_recommended_network

dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseVmClusterRecommendedNetworkDrScansOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatabaseVmClusterRecommendedNetworkDrScansOutputReference <a name="DataOciDatabaseVmClusterRecommendedNetworkDrScansOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_vm_cluster_recommended_network

dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansOutputReference.property.hostname">hostname</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansOutputReference.property.ips">ips</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansOutputReference.property.scanListenerPortTcp">scan_listener_port_tcp</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScans">DataOciDatabaseVmClusterRecommendedNetworkDrScans</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansOutputReference.property.hostname"></a>

```python
hostname: str
```

- *Type:* str

---

##### `ips`<sup>Required</sup> <a name="ips" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansOutputReference.property.ips"></a>

```python
ips: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `scan_listener_port_tcp`<sup>Required</sup> <a name="scan_listener_port_tcp" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansOutputReference.property.scanListenerPortTcp"></a>

```python
scan_listener_port_tcp: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatabaseVmClusterRecommendedNetworkDrScans
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScans">DataOciDatabaseVmClusterRecommendedNetworkDrScans</a>

---


### DataOciDatabaseVmClusterRecommendedNetworkNetworksList <a name="DataOciDatabaseVmClusterRecommendedNetworkNetworksList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_vm_cluster_recommended_network

dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworks">DataOciDatabaseVmClusterRecommendedNetworkNetworks</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciDatabaseVmClusterRecommendedNetworkNetworks]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworks">DataOciDatabaseVmClusterRecommendedNetworkNetworks</a>]]

---


### DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference <a name="DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_vm_cluster_recommended_network

dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference.property.cidrInput">cidr_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference.property.domainInput">domain_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference.property.gatewayInput">gateway_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference.property.netmaskInput">netmask_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference.property.networkTypeInput">network_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference.property.prefixInput">prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference.property.vlanIdInput">vlan_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference.property.cidr">cidr</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference.property.domain">domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference.property.gateway">gateway</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference.property.netmask">netmask</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference.property.networkType">network_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference.property.prefix">prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference.property.vlanId">vlan_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworks">DataOciDatabaseVmClusterRecommendedNetworkNetworks</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cidr_input`<sup>Optional</sup> <a name="cidr_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference.property.cidrInput"></a>

```python
cidr_input: str
```

- *Type:* str

---

##### `domain_input`<sup>Optional</sup> <a name="domain_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference.property.domainInput"></a>

```python
domain_input: str
```

- *Type:* str

---

##### `gateway_input`<sup>Optional</sup> <a name="gateway_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference.property.gatewayInput"></a>

```python
gateway_input: str
```

- *Type:* str

---

##### `netmask_input`<sup>Optional</sup> <a name="netmask_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference.property.netmaskInput"></a>

```python
netmask_input: str
```

- *Type:* str

---

##### `network_type_input`<sup>Optional</sup> <a name="network_type_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference.property.networkTypeInput"></a>

```python
network_type_input: str
```

- *Type:* str

---

##### `prefix_input`<sup>Optional</sup> <a name="prefix_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference.property.prefixInput"></a>

```python
prefix_input: str
```

- *Type:* str

---

##### `vlan_id_input`<sup>Optional</sup> <a name="vlan_id_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference.property.vlanIdInput"></a>

```python
vlan_id_input: str
```

- *Type:* str

---

##### `cidr`<sup>Required</sup> <a name="cidr" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference.property.cidr"></a>

```python
cidr: str
```

- *Type:* str

---

##### `domain`<sup>Required</sup> <a name="domain" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference.property.domain"></a>

```python
domain: str
```

- *Type:* str

---

##### `gateway`<sup>Required</sup> <a name="gateway" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference.property.gateway"></a>

```python
gateway: str
```

- *Type:* str

---

##### `netmask`<sup>Required</sup> <a name="netmask" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference.property.netmask"></a>

```python
netmask: str
```

- *Type:* str

---

##### `network_type`<sup>Required</sup> <a name="network_type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference.property.networkType"></a>

```python
network_type: str
```

- *Type:* str

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference.property.prefix"></a>

```python
prefix: str
```

- *Type:* str

---

##### `vlan_id`<sup>Required</sup> <a name="vlan_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference.property.vlanId"></a>

```python
vlan_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciDatabaseVmClusterRecommendedNetworkNetworks]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworks">DataOciDatabaseVmClusterRecommendedNetworkNetworks</a>]

---


### DataOciDatabaseVmClusterRecommendedNetworkScansList <a name="DataOciDatabaseVmClusterRecommendedNetworkScansList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_vm_cluster_recommended_network

dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseVmClusterRecommendedNetworkScansOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatabaseVmClusterRecommendedNetworkScansOutputReference <a name="DataOciDatabaseVmClusterRecommendedNetworkScansOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_vm_cluster_recommended_network

dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansOutputReference.property.hostname">hostname</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansOutputReference.property.ips">ips</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansOutputReference.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansOutputReference.property.scanListenerPortTcp">scan_listener_port_tcp</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansOutputReference.property.scanListenerPortTcpSsl">scan_listener_port_tcp_ssl</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScans">DataOciDatabaseVmClusterRecommendedNetworkScans</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansOutputReference.property.hostname"></a>

```python
hostname: str
```

- *Type:* str

---

##### `ips`<sup>Required</sup> <a name="ips" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansOutputReference.property.ips"></a>

```python
ips: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `port`<sup>Required</sup> <a name="port" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansOutputReference.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `scan_listener_port_tcp`<sup>Required</sup> <a name="scan_listener_port_tcp" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansOutputReference.property.scanListenerPortTcp"></a>

```python
scan_listener_port_tcp: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `scan_listener_port_tcp_ssl`<sup>Required</sup> <a name="scan_listener_port_tcp_ssl" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansOutputReference.property.scanListenerPortTcpSsl"></a>

```python
scan_listener_port_tcp_ssl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatabaseVmClusterRecommendedNetworkScans
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScans">DataOciDatabaseVmClusterRecommendedNetworkScans</a>

---


### DataOciDatabaseVmClusterRecommendedNetworkVmNetworksList <a name="DataOciDatabaseVmClusterRecommendedNetworkVmNetworksList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_vm_cluster_recommended_network

dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseVmClusterRecommendedNetworkVmNetworksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesList <a name="DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_vm_cluster_recommended_network

dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesOutputReference <a name="DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_vm_cluster_recommended_network

dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesOutputReference.property.dbServerId">db_server_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesOutputReference.property.hostname">hostname</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesOutputReference.property.ip">ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesOutputReference.property.vip">vip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesOutputReference.property.vipHostname">vip_hostname</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodes">DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodes</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `db_server_id`<sup>Required</sup> <a name="db_server_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesOutputReference.property.dbServerId"></a>

```python
db_server_id: str
```

- *Type:* str

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesOutputReference.property.hostname"></a>

```python
hostname: str
```

- *Type:* str

---

##### `ip`<sup>Required</sup> <a name="ip" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesOutputReference.property.ip"></a>

```python
ip: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `vip`<sup>Required</sup> <a name="vip" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesOutputReference.property.vip"></a>

```python
vip: str
```

- *Type:* str

---

##### `vip_hostname`<sup>Required</sup> <a name="vip_hostname" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesOutputReference.property.vipHostname"></a>

```python
vip_hostname: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodes
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodes">DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodes</a>

---


### DataOciDatabaseVmClusterRecommendedNetworkVmNetworksOutputReference <a name="DataOciDatabaseVmClusterRecommendedNetworkVmNetworksOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_vm_cluster_recommended_network

dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksOutputReference.property.domainName">domain_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksOutputReference.property.gateway">gateway</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksOutputReference.property.netmask">netmask</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksOutputReference.property.networkType">network_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksOutputReference.property.nodes">nodes</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesList">DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksOutputReference.property.vlanId">vlan_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworks">DataOciDatabaseVmClusterRecommendedNetworkVmNetworks</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `domain_name`<sup>Required</sup> <a name="domain_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksOutputReference.property.domainName"></a>

```python
domain_name: str
```

- *Type:* str

---

##### `gateway`<sup>Required</sup> <a name="gateway" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksOutputReference.property.gateway"></a>

```python
gateway: str
```

- *Type:* str

---

##### `netmask`<sup>Required</sup> <a name="netmask" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksOutputReference.property.netmask"></a>

```python
netmask: str
```

- *Type:* str

---

##### `network_type`<sup>Required</sup> <a name="network_type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksOutputReference.property.networkType"></a>

```python
network_type: str
```

- *Type:* str

---

##### `nodes`<sup>Required</sup> <a name="nodes" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksOutputReference.property.nodes"></a>

```python
nodes: DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesList">DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesList</a>

---

##### `vlan_id`<sup>Required</sup> <a name="vlan_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksOutputReference.property.vlanId"></a>

```python
vlan_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatabaseVmClusterRecommendedNetworkVmNetworks
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworks">DataOciDatabaseVmClusterRecommendedNetworkVmNetworks</a>

---



