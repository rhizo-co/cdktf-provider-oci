# `databaseVmClusterNetwork` Submodule <a name="`databaseVmClusterNetwork` Submodule" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatabaseVmClusterNetwork <a name="DatabaseVmClusterNetwork" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_network oci_database_vm_cluster_network}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_vm_cluster_network

databaseVmClusterNetwork.DatabaseVmClusterNetwork(
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
  scans: typing.Union[IResolvable, typing.List[DatabaseVmClusterNetworkScans]],
  vm_networks: typing.Union[IResolvable, typing.List[DatabaseVmClusterNetworkVmNetworks]],
  action: str = None,
  defined_tags: typing.Mapping[str] = None,
  dns: typing.List[str] = None,
  dr_scans: typing.Union[IResolvable, typing.List[DatabaseVmClusterNetworkDrScans]] = None,
  freeform_tags: typing.Mapping[str] = None,
  id: str = None,
  ntp: typing.List[str] = None,
  timeouts: DatabaseVmClusterNetworkTimeouts = None,
  validate_vm_cluster_network: typing.Union[bool, IResolvable] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_network#compartment_id DatabaseVmClusterNetwork#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_network#display_name DatabaseVmClusterNetwork#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.Initializer.parameter.exadataInfrastructureId">exadata_infrastructure_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_network#exadata_infrastructure_id DatabaseVmClusterNetwork#exadata_infrastructure_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.Initializer.parameter.scans">scans</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScans">DatabaseVmClusterNetworkScans</a>]]</code> | scans block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.Initializer.parameter.vmNetworks">vm_networks</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworks">DatabaseVmClusterNetworkVmNetworks</a>]]</code> | vm_networks block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.Initializer.parameter.action">action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_network#action DatabaseVmClusterNetwork#action}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.Initializer.parameter.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_network#defined_tags DatabaseVmClusterNetwork#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.Initializer.parameter.dns">dns</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_network#dns DatabaseVmClusterNetwork#dns}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.Initializer.parameter.drScans">dr_scans</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkDrScans">DatabaseVmClusterNetworkDrScans</a>]]</code> | dr_scans block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.Initializer.parameter.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_network#freeform_tags DatabaseVmClusterNetwork#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_network#id DatabaseVmClusterNetwork#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.Initializer.parameter.ntp">ntp</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_network#ntp DatabaseVmClusterNetwork#ntp}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkTimeouts">DatabaseVmClusterNetworkTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.Initializer.parameter.validateVmClusterNetwork">validate_vm_cluster_network</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_network#validate_vm_cluster_network DatabaseVmClusterNetwork#validate_vm_cluster_network}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_network#compartment_id DatabaseVmClusterNetwork#compartment_id}.

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_network#display_name DatabaseVmClusterNetwork#display_name}.

---

##### `exadata_infrastructure_id`<sup>Required</sup> <a name="exadata_infrastructure_id" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.Initializer.parameter.exadataInfrastructureId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_network#exadata_infrastructure_id DatabaseVmClusterNetwork#exadata_infrastructure_id}.

---

##### `scans`<sup>Required</sup> <a name="scans" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.Initializer.parameter.scans"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScans">DatabaseVmClusterNetworkScans</a>]]

scans block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_network#scans DatabaseVmClusterNetwork#scans}

---

##### `vm_networks`<sup>Required</sup> <a name="vm_networks" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.Initializer.parameter.vmNetworks"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworks">DatabaseVmClusterNetworkVmNetworks</a>]]

vm_networks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_network#vm_networks DatabaseVmClusterNetwork#vm_networks}

---

##### `action`<sup>Optional</sup> <a name="action" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.Initializer.parameter.action"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_network#action DatabaseVmClusterNetwork#action}.

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.Initializer.parameter.definedTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_network#defined_tags DatabaseVmClusterNetwork#defined_tags}.

---

##### `dns`<sup>Optional</sup> <a name="dns" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.Initializer.parameter.dns"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_network#dns DatabaseVmClusterNetwork#dns}.

---

##### `dr_scans`<sup>Optional</sup> <a name="dr_scans" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.Initializer.parameter.drScans"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkDrScans">DatabaseVmClusterNetworkDrScans</a>]]

dr_scans block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_network#dr_scans DatabaseVmClusterNetwork#dr_scans}

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.Initializer.parameter.freeformTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_network#freeform_tags DatabaseVmClusterNetwork#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_network#id DatabaseVmClusterNetwork#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ntp`<sup>Optional</sup> <a name="ntp" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.Initializer.parameter.ntp"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_network#ntp DatabaseVmClusterNetwork#ntp}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkTimeouts">DatabaseVmClusterNetworkTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_network#timeouts DatabaseVmClusterNetwork#timeouts}

---

##### `validate_vm_cluster_network`<sup>Optional</sup> <a name="validate_vm_cluster_network" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.Initializer.parameter.validateVmClusterNetwork"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_network#validate_vm_cluster_network DatabaseVmClusterNetwork#validate_vm_cluster_network}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.putDrScans">put_dr_scans</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.putScans">put_scans</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.putVmNetworks">put_vm_networks</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.resetAction">reset_action</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.resetDefinedTags">reset_defined_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.resetDns">reset_dns</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.resetDrScans">reset_dr_scans</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.resetFreeformTags">reset_freeform_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.resetNtp">reset_ntp</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.resetValidateVmClusterNetwork">reset_validate_vm_cluster_network</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_dr_scans` <a name="put_dr_scans" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.putDrScans"></a>

```python
def put_dr_scans(
  value: typing.Union[IResolvable, typing.List[DatabaseVmClusterNetworkDrScans]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.putDrScans.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkDrScans">DatabaseVmClusterNetworkDrScans</a>]]

---

##### `put_scans` <a name="put_scans" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.putScans"></a>

```python
def put_scans(
  value: typing.Union[IResolvable, typing.List[DatabaseVmClusterNetworkScans]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.putScans.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScans">DatabaseVmClusterNetworkScans</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_network#create DatabaseVmClusterNetwork#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_network#delete DatabaseVmClusterNetwork#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_network#update DatabaseVmClusterNetwork#update}.

---

##### `put_vm_networks` <a name="put_vm_networks" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.putVmNetworks"></a>

```python
def put_vm_networks(
  value: typing.Union[IResolvable, typing.List[DatabaseVmClusterNetworkVmNetworks]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.putVmNetworks.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworks">DatabaseVmClusterNetworkVmNetworks</a>]]

---

##### `reset_action` <a name="reset_action" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.resetAction"></a>

```python
def reset_action() -> None
```

##### `reset_defined_tags` <a name="reset_defined_tags" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.resetDefinedTags"></a>

```python
def reset_defined_tags() -> None
```

##### `reset_dns` <a name="reset_dns" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.resetDns"></a>

```python
def reset_dns() -> None
```

##### `reset_dr_scans` <a name="reset_dr_scans" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.resetDrScans"></a>

```python
def reset_dr_scans() -> None
```

##### `reset_freeform_tags` <a name="reset_freeform_tags" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.resetFreeformTags"></a>

```python
def reset_freeform_tags() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_ntp` <a name="reset_ntp" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.resetNtp"></a>

```python
def reset_ntp() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_validate_vm_cluster_network` <a name="reset_validate_vm_cluster_network" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.resetValidateVmClusterNetwork"></a>

```python
def reset_validate_vm_cluster_network() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DatabaseVmClusterNetwork resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import database_vm_cluster_network

databaseVmClusterNetwork.DatabaseVmClusterNetwork.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import database_vm_cluster_network

databaseVmClusterNetwork.DatabaseVmClusterNetwork.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.isTerraformResource"></a>

```python
from rhizo-co_cdktf_provider_oci import database_vm_cluster_network

databaseVmClusterNetwork.DatabaseVmClusterNetwork.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import database_vm_cluster_network

databaseVmClusterNetwork.DatabaseVmClusterNetwork.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DatabaseVmClusterNetwork resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DatabaseVmClusterNetwork to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DatabaseVmClusterNetwork that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_network#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DatabaseVmClusterNetwork to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.property.drScans">dr_scans</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkDrScansList">DatabaseVmClusterNetworkDrScansList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.property.scans">scans</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScansList">DatabaseVmClusterNetworkScansList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkTimeoutsOutputReference">DatabaseVmClusterNetworkTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.property.vmClusterId">vm_cluster_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.property.vmNetworks">vm_networks</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksList">DatabaseVmClusterNetworkVmNetworksList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.property.actionInput">action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.property.definedTagsInput">defined_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.property.dnsInput">dns_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.property.drScansInput">dr_scans_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkDrScans">DatabaseVmClusterNetworkDrScans</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.property.exadataInfrastructureIdInput">exadata_infrastructure_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.property.freeformTagsInput">freeform_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.property.ntpInput">ntp_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.property.scansInput">scans_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScans">DatabaseVmClusterNetworkScans</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkTimeouts">DatabaseVmClusterNetworkTimeouts</a>]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.property.validateVmClusterNetworkInput">validate_vm_cluster_network_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.property.vmNetworksInput">vm_networks_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworks">DatabaseVmClusterNetworkVmNetworks</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.property.action">action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.property.dns">dns</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.property.exadataInfrastructureId">exadata_infrastructure_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.property.ntp">ntp</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.property.validateVmClusterNetwork">validate_vm_cluster_network</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `dr_scans`<sup>Required</sup> <a name="dr_scans" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.property.drScans"></a>

```python
dr_scans: DatabaseVmClusterNetworkDrScansList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkDrScansList">DatabaseVmClusterNetworkDrScansList</a>

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `scans`<sup>Required</sup> <a name="scans" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.property.scans"></a>

```python
scans: DatabaseVmClusterNetworkScansList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScansList">DatabaseVmClusterNetworkScansList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.property.timeouts"></a>

```python
timeouts: DatabaseVmClusterNetworkTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkTimeoutsOutputReference">DatabaseVmClusterNetworkTimeoutsOutputReference</a>

---

##### `vm_cluster_id`<sup>Required</sup> <a name="vm_cluster_id" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.property.vmClusterId"></a>

```python
vm_cluster_id: str
```

- *Type:* str

---

##### `vm_networks`<sup>Required</sup> <a name="vm_networks" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.property.vmNetworks"></a>

```python
vm_networks: DatabaseVmClusterNetworkVmNetworksList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksList">DatabaseVmClusterNetworkVmNetworksList</a>

---

##### `action_input`<sup>Optional</sup> <a name="action_input" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.property.actionInput"></a>

```python
action_input: str
```

- *Type:* str

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `defined_tags_input`<sup>Optional</sup> <a name="defined_tags_input" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.property.definedTagsInput"></a>

```python
defined_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `dns_input`<sup>Optional</sup> <a name="dns_input" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.property.dnsInput"></a>

```python
dns_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `dr_scans_input`<sup>Optional</sup> <a name="dr_scans_input" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.property.drScansInput"></a>

```python
dr_scans_input: typing.Union[IResolvable, typing.List[DatabaseVmClusterNetworkDrScans]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkDrScans">DatabaseVmClusterNetworkDrScans</a>]]

---

##### `exadata_infrastructure_id_input`<sup>Optional</sup> <a name="exadata_infrastructure_id_input" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.property.exadataInfrastructureIdInput"></a>

```python
exadata_infrastructure_id_input: str
```

- *Type:* str

---

##### `freeform_tags_input`<sup>Optional</sup> <a name="freeform_tags_input" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.property.freeformTagsInput"></a>

```python
freeform_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `ntp_input`<sup>Optional</sup> <a name="ntp_input" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.property.ntpInput"></a>

```python
ntp_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `scans_input`<sup>Optional</sup> <a name="scans_input" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.property.scansInput"></a>

```python
scans_input: typing.Union[IResolvable, typing.List[DatabaseVmClusterNetworkScans]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScans">DatabaseVmClusterNetworkScans</a>]]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, DatabaseVmClusterNetworkTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkTimeouts">DatabaseVmClusterNetworkTimeouts</a>]

---

##### `validate_vm_cluster_network_input`<sup>Optional</sup> <a name="validate_vm_cluster_network_input" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.property.validateVmClusterNetworkInput"></a>

```python
validate_vm_cluster_network_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `vm_networks_input`<sup>Optional</sup> <a name="vm_networks_input" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.property.vmNetworksInput"></a>

```python
vm_networks_input: typing.Union[IResolvable, typing.List[DatabaseVmClusterNetworkVmNetworks]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworks">DatabaseVmClusterNetworkVmNetworks</a>]]

---

##### `action`<sup>Required</sup> <a name="action" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.property.action"></a>

```python
action: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `dns`<sup>Required</sup> <a name="dns" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.property.dns"></a>

```python
dns: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `exadata_infrastructure_id`<sup>Required</sup> <a name="exadata_infrastructure_id" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.property.exadataInfrastructureId"></a>

```python
exadata_infrastructure_id: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `ntp`<sup>Required</sup> <a name="ntp" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.property.ntp"></a>

```python
ntp: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `validate_vm_cluster_network`<sup>Required</sup> <a name="validate_vm_cluster_network" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.property.validateVmClusterNetwork"></a>

```python
validate_vm_cluster_network: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DatabaseVmClusterNetworkConfig <a name="DatabaseVmClusterNetworkConfig" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_vm_cluster_network

databaseVmClusterNetwork.DatabaseVmClusterNetworkConfig(
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
  scans: typing.Union[IResolvable, typing.List[DatabaseVmClusterNetworkScans]],
  vm_networks: typing.Union[IResolvable, typing.List[DatabaseVmClusterNetworkVmNetworks]],
  action: str = None,
  defined_tags: typing.Mapping[str] = None,
  dns: typing.List[str] = None,
  dr_scans: typing.Union[IResolvable, typing.List[DatabaseVmClusterNetworkDrScans]] = None,
  freeform_tags: typing.Mapping[str] = None,
  id: str = None,
  ntp: typing.List[str] = None,
  timeouts: DatabaseVmClusterNetworkTimeouts = None,
  validate_vm_cluster_network: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_network#compartment_id DatabaseVmClusterNetwork#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_network#display_name DatabaseVmClusterNetwork#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkConfig.property.exadataInfrastructureId">exadata_infrastructure_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_network#exadata_infrastructure_id DatabaseVmClusterNetwork#exadata_infrastructure_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkConfig.property.scans">scans</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScans">DatabaseVmClusterNetworkScans</a>]]</code> | scans block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkConfig.property.vmNetworks">vm_networks</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworks">DatabaseVmClusterNetworkVmNetworks</a>]]</code> | vm_networks block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkConfig.property.action">action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_network#action DatabaseVmClusterNetwork#action}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkConfig.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_network#defined_tags DatabaseVmClusterNetwork#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkConfig.property.dns">dns</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_network#dns DatabaseVmClusterNetwork#dns}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkConfig.property.drScans">dr_scans</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkDrScans">DatabaseVmClusterNetworkDrScans</a>]]</code> | dr_scans block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkConfig.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_network#freeform_tags DatabaseVmClusterNetwork#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_network#id DatabaseVmClusterNetwork#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkConfig.property.ntp">ntp</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_network#ntp DatabaseVmClusterNetwork#ntp}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkTimeouts">DatabaseVmClusterNetworkTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkConfig.property.validateVmClusterNetwork">validate_vm_cluster_network</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_network#validate_vm_cluster_network DatabaseVmClusterNetwork#validate_vm_cluster_network}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_network#compartment_id DatabaseVmClusterNetwork#compartment_id}.

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_network#display_name DatabaseVmClusterNetwork#display_name}.

---

##### `exadata_infrastructure_id`<sup>Required</sup> <a name="exadata_infrastructure_id" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkConfig.property.exadataInfrastructureId"></a>

```python
exadata_infrastructure_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_network#exadata_infrastructure_id DatabaseVmClusterNetwork#exadata_infrastructure_id}.

---

##### `scans`<sup>Required</sup> <a name="scans" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkConfig.property.scans"></a>

```python
scans: typing.Union[IResolvable, typing.List[DatabaseVmClusterNetworkScans]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScans">DatabaseVmClusterNetworkScans</a>]]

scans block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_network#scans DatabaseVmClusterNetwork#scans}

---

##### `vm_networks`<sup>Required</sup> <a name="vm_networks" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkConfig.property.vmNetworks"></a>

```python
vm_networks: typing.Union[IResolvable, typing.List[DatabaseVmClusterNetworkVmNetworks]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworks">DatabaseVmClusterNetworkVmNetworks</a>]]

vm_networks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_network#vm_networks DatabaseVmClusterNetwork#vm_networks}

---

##### `action`<sup>Optional</sup> <a name="action" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkConfig.property.action"></a>

```python
action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_network#action DatabaseVmClusterNetwork#action}.

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkConfig.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_network#defined_tags DatabaseVmClusterNetwork#defined_tags}.

---

##### `dns`<sup>Optional</sup> <a name="dns" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkConfig.property.dns"></a>

```python
dns: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_network#dns DatabaseVmClusterNetwork#dns}.

---

##### `dr_scans`<sup>Optional</sup> <a name="dr_scans" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkConfig.property.drScans"></a>

```python
dr_scans: typing.Union[IResolvable, typing.List[DatabaseVmClusterNetworkDrScans]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkDrScans">DatabaseVmClusterNetworkDrScans</a>]]

dr_scans block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_network#dr_scans DatabaseVmClusterNetwork#dr_scans}

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkConfig.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_network#freeform_tags DatabaseVmClusterNetwork#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_network#id DatabaseVmClusterNetwork#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ntp`<sup>Optional</sup> <a name="ntp" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkConfig.property.ntp"></a>

```python
ntp: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_network#ntp DatabaseVmClusterNetwork#ntp}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkConfig.property.timeouts"></a>

```python
timeouts: DatabaseVmClusterNetworkTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkTimeouts">DatabaseVmClusterNetworkTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_network#timeouts DatabaseVmClusterNetwork#timeouts}

---

##### `validate_vm_cluster_network`<sup>Optional</sup> <a name="validate_vm_cluster_network" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkConfig.property.validateVmClusterNetwork"></a>

```python
validate_vm_cluster_network: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_network#validate_vm_cluster_network DatabaseVmClusterNetwork#validate_vm_cluster_network}.

---

### DatabaseVmClusterNetworkDrScans <a name="DatabaseVmClusterNetworkDrScans" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkDrScans"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkDrScans.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_vm_cluster_network

databaseVmClusterNetwork.DatabaseVmClusterNetworkDrScans(
  hostname: str,
  ips: typing.List[str],
  scan_listener_port_tcp: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkDrScans.property.hostname">hostname</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_network#hostname DatabaseVmClusterNetwork#hostname}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkDrScans.property.ips">ips</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_network#ips DatabaseVmClusterNetwork#ips}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkDrScans.property.scanListenerPortTcp">scan_listener_port_tcp</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_network#scan_listener_port_tcp DatabaseVmClusterNetwork#scan_listener_port_tcp}. |

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkDrScans.property.hostname"></a>

```python
hostname: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_network#hostname DatabaseVmClusterNetwork#hostname}.

---

##### `ips`<sup>Required</sup> <a name="ips" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkDrScans.property.ips"></a>

```python
ips: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_network#ips DatabaseVmClusterNetwork#ips}.

---

##### `scan_listener_port_tcp`<sup>Required</sup> <a name="scan_listener_port_tcp" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkDrScans.property.scanListenerPortTcp"></a>

```python
scan_listener_port_tcp: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_network#scan_listener_port_tcp DatabaseVmClusterNetwork#scan_listener_port_tcp}.

---

### DatabaseVmClusterNetworkScans <a name="DatabaseVmClusterNetworkScans" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScans"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScans.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_vm_cluster_network

databaseVmClusterNetwork.DatabaseVmClusterNetworkScans(
  hostname: str,
  ips: typing.List[str],
  port: typing.Union[int, float] = None,
  scan_listener_port_tcp: typing.Union[int, float] = None,
  scan_listener_port_tcp_ssl: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScans.property.hostname">hostname</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_network#hostname DatabaseVmClusterNetwork#hostname}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScans.property.ips">ips</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_network#ips DatabaseVmClusterNetwork#ips}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScans.property.port">port</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_network#port DatabaseVmClusterNetwork#port}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScans.property.scanListenerPortTcp">scan_listener_port_tcp</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_network#scan_listener_port_tcp DatabaseVmClusterNetwork#scan_listener_port_tcp}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScans.property.scanListenerPortTcpSsl">scan_listener_port_tcp_ssl</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_network#scan_listener_port_tcp_ssl DatabaseVmClusterNetwork#scan_listener_port_tcp_ssl}. |

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScans.property.hostname"></a>

```python
hostname: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_network#hostname DatabaseVmClusterNetwork#hostname}.

---

##### `ips`<sup>Required</sup> <a name="ips" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScans.property.ips"></a>

```python
ips: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_network#ips DatabaseVmClusterNetwork#ips}.

---

##### `port`<sup>Optional</sup> <a name="port" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScans.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_network#port DatabaseVmClusterNetwork#port}.

---

##### `scan_listener_port_tcp`<sup>Optional</sup> <a name="scan_listener_port_tcp" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScans.property.scanListenerPortTcp"></a>

```python
scan_listener_port_tcp: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_network#scan_listener_port_tcp DatabaseVmClusterNetwork#scan_listener_port_tcp}.

---

##### `scan_listener_port_tcp_ssl`<sup>Optional</sup> <a name="scan_listener_port_tcp_ssl" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScans.property.scanListenerPortTcpSsl"></a>

```python
scan_listener_port_tcp_ssl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_network#scan_listener_port_tcp_ssl DatabaseVmClusterNetwork#scan_listener_port_tcp_ssl}.

---

### DatabaseVmClusterNetworkTimeouts <a name="DatabaseVmClusterNetworkTimeouts" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkTimeouts.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_vm_cluster_network

databaseVmClusterNetwork.DatabaseVmClusterNetworkTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_network#create DatabaseVmClusterNetwork#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_network#delete DatabaseVmClusterNetwork#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_network#update DatabaseVmClusterNetwork#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_network#create DatabaseVmClusterNetwork#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_network#delete DatabaseVmClusterNetwork#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_network#update DatabaseVmClusterNetwork#update}.

---

### DatabaseVmClusterNetworkVmNetworks <a name="DatabaseVmClusterNetworkVmNetworks" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworks"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworks.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_vm_cluster_network

databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworks(
  network_type: str,
  nodes: typing.Union[IResolvable, typing.List[DatabaseVmClusterNetworkVmNetworksNodes]],
  domain_name: str = None,
  gateway: str = None,
  netmask: str = None,
  vlan_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworks.property.networkType">network_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_network#network_type DatabaseVmClusterNetwork#network_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworks.property.nodes">nodes</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodes">DatabaseVmClusterNetworkVmNetworksNodes</a>]]</code> | nodes block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworks.property.domainName">domain_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_network#domain_name DatabaseVmClusterNetwork#domain_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworks.property.gateway">gateway</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_network#gateway DatabaseVmClusterNetwork#gateway}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworks.property.netmask">netmask</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_network#netmask DatabaseVmClusterNetwork#netmask}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworks.property.vlanId">vlan_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_network#vlan_id DatabaseVmClusterNetwork#vlan_id}. |

---

##### `network_type`<sup>Required</sup> <a name="network_type" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworks.property.networkType"></a>

```python
network_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_network#network_type DatabaseVmClusterNetwork#network_type}.

---

##### `nodes`<sup>Required</sup> <a name="nodes" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworks.property.nodes"></a>

```python
nodes: typing.Union[IResolvable, typing.List[DatabaseVmClusterNetworkVmNetworksNodes]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodes">DatabaseVmClusterNetworkVmNetworksNodes</a>]]

nodes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_network#nodes DatabaseVmClusterNetwork#nodes}

---

##### `domain_name`<sup>Optional</sup> <a name="domain_name" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworks.property.domainName"></a>

```python
domain_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_network#domain_name DatabaseVmClusterNetwork#domain_name}.

---

##### `gateway`<sup>Optional</sup> <a name="gateway" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworks.property.gateway"></a>

```python
gateway: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_network#gateway DatabaseVmClusterNetwork#gateway}.

---

##### `netmask`<sup>Optional</sup> <a name="netmask" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworks.property.netmask"></a>

```python
netmask: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_network#netmask DatabaseVmClusterNetwork#netmask}.

---

##### `vlan_id`<sup>Optional</sup> <a name="vlan_id" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworks.property.vlanId"></a>

```python
vlan_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_network#vlan_id DatabaseVmClusterNetwork#vlan_id}.

---

### DatabaseVmClusterNetworkVmNetworksNodes <a name="DatabaseVmClusterNetworkVmNetworksNodes" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodes"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodes.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_vm_cluster_network

databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodes(
  hostname: str,
  ip: str,
  db_server_id: str = None,
  state: str = None,
  vip: str = None,
  vip_hostname: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodes.property.hostname">hostname</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_network#hostname DatabaseVmClusterNetwork#hostname}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodes.property.ip">ip</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_network#ip DatabaseVmClusterNetwork#ip}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodes.property.dbServerId">db_server_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_network#db_server_id DatabaseVmClusterNetwork#db_server_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodes.property.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_network#state DatabaseVmClusterNetwork#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodes.property.vip">vip</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_network#vip DatabaseVmClusterNetwork#vip}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodes.property.vipHostname">vip_hostname</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_network#vip_hostname DatabaseVmClusterNetwork#vip_hostname}. |

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodes.property.hostname"></a>

```python
hostname: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_network#hostname DatabaseVmClusterNetwork#hostname}.

---

##### `ip`<sup>Required</sup> <a name="ip" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodes.property.ip"></a>

```python
ip: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_network#ip DatabaseVmClusterNetwork#ip}.

---

##### `db_server_id`<sup>Optional</sup> <a name="db_server_id" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodes.property.dbServerId"></a>

```python
db_server_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_network#db_server_id DatabaseVmClusterNetwork#db_server_id}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodes.property.state"></a>

```python
state: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_network#state DatabaseVmClusterNetwork#state}.

---

##### `vip`<sup>Optional</sup> <a name="vip" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodes.property.vip"></a>

```python
vip: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_network#vip DatabaseVmClusterNetwork#vip}.

---

##### `vip_hostname`<sup>Optional</sup> <a name="vip_hostname" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodes.property.vipHostname"></a>

```python
vip_hostname: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_network#vip_hostname DatabaseVmClusterNetwork#vip_hostname}.

---

## Classes <a name="Classes" id="Classes"></a>

### DatabaseVmClusterNetworkDrScansList <a name="DatabaseVmClusterNetworkDrScansList" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkDrScansList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkDrScansList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_vm_cluster_network

databaseVmClusterNetwork.DatabaseVmClusterNetworkDrScansList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkDrScansList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkDrScansList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkDrScansList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkDrScansList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkDrScansList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkDrScansList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkDrScansList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkDrScansList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkDrScansList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkDrScansList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkDrScansList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkDrScansList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkDrScansList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkDrScansList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkDrScansList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkDrScansList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkDrScansList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkDrScansList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DatabaseVmClusterNetworkDrScansOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkDrScansList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkDrScansList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkDrScansList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkDrScansList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkDrScans">DatabaseVmClusterNetworkDrScans</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkDrScansList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkDrScansList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkDrScansList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DatabaseVmClusterNetworkDrScans]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkDrScans">DatabaseVmClusterNetworkDrScans</a>]]

---


### DatabaseVmClusterNetworkDrScansOutputReference <a name="DatabaseVmClusterNetworkDrScansOutputReference" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkDrScansOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkDrScansOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_vm_cluster_network

databaseVmClusterNetwork.DatabaseVmClusterNetworkDrScansOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkDrScansOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkDrScansOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkDrScansOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkDrScansOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkDrScansOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkDrScansOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkDrScansOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkDrScansOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkDrScansOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkDrScansOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkDrScansOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkDrScansOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkDrScansOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkDrScansOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkDrScansOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkDrScansOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkDrScansOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkDrScansOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkDrScansOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkDrScansOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkDrScansOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkDrScansOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkDrScansOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkDrScansOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkDrScansOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkDrScansOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkDrScansOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkDrScansOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkDrScansOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkDrScansOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkDrScansOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkDrScansOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkDrScansOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkDrScansOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkDrScansOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkDrScansOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkDrScansOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkDrScansOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkDrScansOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkDrScansOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkDrScansOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkDrScansOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkDrScansOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkDrScansOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkDrScansOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkDrScansOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkDrScansOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkDrScansOutputReference.property.hostnameInput">hostname_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkDrScansOutputReference.property.ipsInput">ips_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkDrScansOutputReference.property.scanListenerPortTcpInput">scan_listener_port_tcp_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkDrScansOutputReference.property.hostname">hostname</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkDrScansOutputReference.property.ips">ips</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkDrScansOutputReference.property.scanListenerPortTcp">scan_listener_port_tcp</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkDrScansOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkDrScans">DatabaseVmClusterNetworkDrScans</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkDrScansOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkDrScansOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `hostname_input`<sup>Optional</sup> <a name="hostname_input" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkDrScansOutputReference.property.hostnameInput"></a>

```python
hostname_input: str
```

- *Type:* str

---

##### `ips_input`<sup>Optional</sup> <a name="ips_input" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkDrScansOutputReference.property.ipsInput"></a>

```python
ips_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `scan_listener_port_tcp_input`<sup>Optional</sup> <a name="scan_listener_port_tcp_input" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkDrScansOutputReference.property.scanListenerPortTcpInput"></a>

```python
scan_listener_port_tcp_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkDrScansOutputReference.property.hostname"></a>

```python
hostname: str
```

- *Type:* str

---

##### `ips`<sup>Required</sup> <a name="ips" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkDrScansOutputReference.property.ips"></a>

```python
ips: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `scan_listener_port_tcp`<sup>Required</sup> <a name="scan_listener_port_tcp" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkDrScansOutputReference.property.scanListenerPortTcp"></a>

```python
scan_listener_port_tcp: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkDrScansOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DatabaseVmClusterNetworkDrScans]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkDrScans">DatabaseVmClusterNetworkDrScans</a>]

---


### DatabaseVmClusterNetworkScansList <a name="DatabaseVmClusterNetworkScansList" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScansList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScansList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_vm_cluster_network

databaseVmClusterNetwork.DatabaseVmClusterNetworkScansList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScansList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScansList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScansList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScansList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScansList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScansList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScansList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScansList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScansList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScansList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScansList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScansList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScansList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScansList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScansList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScansList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScansList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScansList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DatabaseVmClusterNetworkScansOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScansList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScansList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScansList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScansList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScans">DatabaseVmClusterNetworkScans</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScansList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScansList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScansList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DatabaseVmClusterNetworkScans]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScans">DatabaseVmClusterNetworkScans</a>]]

---


### DatabaseVmClusterNetworkScansOutputReference <a name="DatabaseVmClusterNetworkScansOutputReference" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScansOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScansOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_vm_cluster_network

databaseVmClusterNetwork.DatabaseVmClusterNetworkScansOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScansOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScansOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScansOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScansOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScansOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScansOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScansOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScansOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScansOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScansOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScansOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScansOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScansOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScansOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScansOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScansOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScansOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScansOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScansOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScansOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScansOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScansOutputReference.resetPort">reset_port</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScansOutputReference.resetScanListenerPortTcp">reset_scan_listener_port_tcp</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScansOutputReference.resetScanListenerPortTcpSsl">reset_scan_listener_port_tcp_ssl</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScansOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScansOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScansOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScansOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScansOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScansOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScansOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScansOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScansOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScansOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScansOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScansOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScansOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScansOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScansOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScansOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScansOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScansOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScansOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScansOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScansOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScansOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScansOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScansOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_port` <a name="reset_port" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScansOutputReference.resetPort"></a>

```python
def reset_port() -> None
```

##### `reset_scan_listener_port_tcp` <a name="reset_scan_listener_port_tcp" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScansOutputReference.resetScanListenerPortTcp"></a>

```python
def reset_scan_listener_port_tcp() -> None
```

##### `reset_scan_listener_port_tcp_ssl` <a name="reset_scan_listener_port_tcp_ssl" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScansOutputReference.resetScanListenerPortTcpSsl"></a>

```python
def reset_scan_listener_port_tcp_ssl() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScansOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScansOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScansOutputReference.property.hostnameInput">hostname_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScansOutputReference.property.ipsInput">ips_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScansOutputReference.property.portInput">port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScansOutputReference.property.scanListenerPortTcpInput">scan_listener_port_tcp_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScansOutputReference.property.scanListenerPortTcpSslInput">scan_listener_port_tcp_ssl_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScansOutputReference.property.hostname">hostname</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScansOutputReference.property.ips">ips</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScansOutputReference.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScansOutputReference.property.scanListenerPortTcp">scan_listener_port_tcp</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScansOutputReference.property.scanListenerPortTcpSsl">scan_listener_port_tcp_ssl</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScansOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScans">DatabaseVmClusterNetworkScans</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScansOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScansOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `hostname_input`<sup>Optional</sup> <a name="hostname_input" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScansOutputReference.property.hostnameInput"></a>

```python
hostname_input: str
```

- *Type:* str

---

##### `ips_input`<sup>Optional</sup> <a name="ips_input" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScansOutputReference.property.ipsInput"></a>

```python
ips_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `port_input`<sup>Optional</sup> <a name="port_input" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScansOutputReference.property.portInput"></a>

```python
port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `scan_listener_port_tcp_input`<sup>Optional</sup> <a name="scan_listener_port_tcp_input" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScansOutputReference.property.scanListenerPortTcpInput"></a>

```python
scan_listener_port_tcp_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `scan_listener_port_tcp_ssl_input`<sup>Optional</sup> <a name="scan_listener_port_tcp_ssl_input" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScansOutputReference.property.scanListenerPortTcpSslInput"></a>

```python
scan_listener_port_tcp_ssl_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScansOutputReference.property.hostname"></a>

```python
hostname: str
```

- *Type:* str

---

##### `ips`<sup>Required</sup> <a name="ips" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScansOutputReference.property.ips"></a>

```python
ips: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `port`<sup>Required</sup> <a name="port" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScansOutputReference.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `scan_listener_port_tcp`<sup>Required</sup> <a name="scan_listener_port_tcp" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScansOutputReference.property.scanListenerPortTcp"></a>

```python
scan_listener_port_tcp: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `scan_listener_port_tcp_ssl`<sup>Required</sup> <a name="scan_listener_port_tcp_ssl" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScansOutputReference.property.scanListenerPortTcpSsl"></a>

```python
scan_listener_port_tcp_ssl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScansOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DatabaseVmClusterNetworkScans]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScans">DatabaseVmClusterNetworkScans</a>]

---


### DatabaseVmClusterNetworkTimeoutsOutputReference <a name="DatabaseVmClusterNetworkTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkTimeoutsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_vm_cluster_network

databaseVmClusterNetwork.DatabaseVmClusterNetworkTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkTimeouts">DatabaseVmClusterNetworkTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DatabaseVmClusterNetworkTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkTimeouts">DatabaseVmClusterNetworkTimeouts</a>]

---


### DatabaseVmClusterNetworkVmNetworksList <a name="DatabaseVmClusterNetworkVmNetworksList" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_vm_cluster_network

databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DatabaseVmClusterNetworkVmNetworksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworks">DatabaseVmClusterNetworkVmNetworks</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DatabaseVmClusterNetworkVmNetworks]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworks">DatabaseVmClusterNetworkVmNetworks</a>]]

---


### DatabaseVmClusterNetworkVmNetworksNodesList <a name="DatabaseVmClusterNetworkVmNetworksNodesList" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_vm_cluster_network

databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DatabaseVmClusterNetworkVmNetworksNodesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodes">DatabaseVmClusterNetworkVmNetworksNodes</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DatabaseVmClusterNetworkVmNetworksNodes]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodes">DatabaseVmClusterNetworkVmNetworksNodes</a>]]

---


### DatabaseVmClusterNetworkVmNetworksNodesOutputReference <a name="DatabaseVmClusterNetworkVmNetworksNodesOutputReference" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_vm_cluster_network

databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesOutputReference.resetDbServerId">reset_db_server_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesOutputReference.resetState">reset_state</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesOutputReference.resetVip">reset_vip</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesOutputReference.resetVipHostname">reset_vip_hostname</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_db_server_id` <a name="reset_db_server_id" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesOutputReference.resetDbServerId"></a>

```python
def reset_db_server_id() -> None
```

##### `reset_state` <a name="reset_state" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesOutputReference.resetState"></a>

```python
def reset_state() -> None
```

##### `reset_vip` <a name="reset_vip" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesOutputReference.resetVip"></a>

```python
def reset_vip() -> None
```

##### `reset_vip_hostname` <a name="reset_vip_hostname" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesOutputReference.resetVipHostname"></a>

```python
def reset_vip_hostname() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesOutputReference.property.dbServerIdInput">db_server_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesOutputReference.property.hostnameInput">hostname_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesOutputReference.property.ipInput">ip_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesOutputReference.property.stateInput">state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesOutputReference.property.vipHostnameInput">vip_hostname_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesOutputReference.property.vipInput">vip_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesOutputReference.property.dbServerId">db_server_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesOutputReference.property.hostname">hostname</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesOutputReference.property.ip">ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesOutputReference.property.vip">vip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesOutputReference.property.vipHostname">vip_hostname</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodes">DatabaseVmClusterNetworkVmNetworksNodes</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `db_server_id_input`<sup>Optional</sup> <a name="db_server_id_input" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesOutputReference.property.dbServerIdInput"></a>

```python
db_server_id_input: str
```

- *Type:* str

---

##### `hostname_input`<sup>Optional</sup> <a name="hostname_input" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesOutputReference.property.hostnameInput"></a>

```python
hostname_input: str
```

- *Type:* str

---

##### `ip_input`<sup>Optional</sup> <a name="ip_input" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesOutputReference.property.ipInput"></a>

```python
ip_input: str
```

- *Type:* str

---

##### `state_input`<sup>Optional</sup> <a name="state_input" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesOutputReference.property.stateInput"></a>

```python
state_input: str
```

- *Type:* str

---

##### `vip_hostname_input`<sup>Optional</sup> <a name="vip_hostname_input" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesOutputReference.property.vipHostnameInput"></a>

```python
vip_hostname_input: str
```

- *Type:* str

---

##### `vip_input`<sup>Optional</sup> <a name="vip_input" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesOutputReference.property.vipInput"></a>

```python
vip_input: str
```

- *Type:* str

---

##### `db_server_id`<sup>Required</sup> <a name="db_server_id" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesOutputReference.property.dbServerId"></a>

```python
db_server_id: str
```

- *Type:* str

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesOutputReference.property.hostname"></a>

```python
hostname: str
```

- *Type:* str

---

##### `ip`<sup>Required</sup> <a name="ip" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesOutputReference.property.ip"></a>

```python
ip: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `vip`<sup>Required</sup> <a name="vip" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesOutputReference.property.vip"></a>

```python
vip: str
```

- *Type:* str

---

##### `vip_hostname`<sup>Required</sup> <a name="vip_hostname" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesOutputReference.property.vipHostname"></a>

```python
vip_hostname: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DatabaseVmClusterNetworkVmNetworksNodes]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodes">DatabaseVmClusterNetworkVmNetworksNodes</a>]

---


### DatabaseVmClusterNetworkVmNetworksOutputReference <a name="DatabaseVmClusterNetworkVmNetworksOutputReference" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_vm_cluster_network

databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksOutputReference.putNodes">put_nodes</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksOutputReference.resetDomainName">reset_domain_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksOutputReference.resetGateway">reset_gateway</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksOutputReference.resetNetmask">reset_netmask</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksOutputReference.resetVlanId">reset_vlan_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_nodes` <a name="put_nodes" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksOutputReference.putNodes"></a>

```python
def put_nodes(
  value: typing.Union[IResolvable, typing.List[DatabaseVmClusterNetworkVmNetworksNodes]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksOutputReference.putNodes.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodes">DatabaseVmClusterNetworkVmNetworksNodes</a>]]

---

##### `reset_domain_name` <a name="reset_domain_name" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksOutputReference.resetDomainName"></a>

```python
def reset_domain_name() -> None
```

##### `reset_gateway` <a name="reset_gateway" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksOutputReference.resetGateway"></a>

```python
def reset_gateway() -> None
```

##### `reset_netmask` <a name="reset_netmask" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksOutputReference.resetNetmask"></a>

```python
def reset_netmask() -> None
```

##### `reset_vlan_id` <a name="reset_vlan_id" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksOutputReference.resetVlanId"></a>

```python
def reset_vlan_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksOutputReference.property.nodes">nodes</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesList">DatabaseVmClusterNetworkVmNetworksNodesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksOutputReference.property.domainNameInput">domain_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksOutputReference.property.gatewayInput">gateway_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksOutputReference.property.netmaskInput">netmask_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksOutputReference.property.networkTypeInput">network_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksOutputReference.property.nodesInput">nodes_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodes">DatabaseVmClusterNetworkVmNetworksNodes</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksOutputReference.property.vlanIdInput">vlan_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksOutputReference.property.domainName">domain_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksOutputReference.property.gateway">gateway</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksOutputReference.property.netmask">netmask</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksOutputReference.property.networkType">network_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksOutputReference.property.vlanId">vlan_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworks">DatabaseVmClusterNetworkVmNetworks</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `nodes`<sup>Required</sup> <a name="nodes" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksOutputReference.property.nodes"></a>

```python
nodes: DatabaseVmClusterNetworkVmNetworksNodesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesList">DatabaseVmClusterNetworkVmNetworksNodesList</a>

---

##### `domain_name_input`<sup>Optional</sup> <a name="domain_name_input" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksOutputReference.property.domainNameInput"></a>

```python
domain_name_input: str
```

- *Type:* str

---

##### `gateway_input`<sup>Optional</sup> <a name="gateway_input" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksOutputReference.property.gatewayInput"></a>

```python
gateway_input: str
```

- *Type:* str

---

##### `netmask_input`<sup>Optional</sup> <a name="netmask_input" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksOutputReference.property.netmaskInput"></a>

```python
netmask_input: str
```

- *Type:* str

---

##### `network_type_input`<sup>Optional</sup> <a name="network_type_input" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksOutputReference.property.networkTypeInput"></a>

```python
network_type_input: str
```

- *Type:* str

---

##### `nodes_input`<sup>Optional</sup> <a name="nodes_input" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksOutputReference.property.nodesInput"></a>

```python
nodes_input: typing.Union[IResolvable, typing.List[DatabaseVmClusterNetworkVmNetworksNodes]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodes">DatabaseVmClusterNetworkVmNetworksNodes</a>]]

---

##### `vlan_id_input`<sup>Optional</sup> <a name="vlan_id_input" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksOutputReference.property.vlanIdInput"></a>

```python
vlan_id_input: str
```

- *Type:* str

---

##### `domain_name`<sup>Required</sup> <a name="domain_name" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksOutputReference.property.domainName"></a>

```python
domain_name: str
```

- *Type:* str

---

##### `gateway`<sup>Required</sup> <a name="gateway" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksOutputReference.property.gateway"></a>

```python
gateway: str
```

- *Type:* str

---

##### `netmask`<sup>Required</sup> <a name="netmask" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksOutputReference.property.netmask"></a>

```python
netmask: str
```

- *Type:* str

---

##### `network_type`<sup>Required</sup> <a name="network_type" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksOutputReference.property.networkType"></a>

```python
network_type: str
```

- *Type:* str

---

##### `vlan_id`<sup>Required</sup> <a name="vlan_id" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksOutputReference.property.vlanId"></a>

```python
vlan_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DatabaseVmClusterNetworkVmNetworks]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworks">DatabaseVmClusterNetworkVmNetworks</a>]

---



