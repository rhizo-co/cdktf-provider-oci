# `dataOciJmsFleetInstallationSites` Submodule <a name="`dataOciJmsFleetInstallationSites` Submodule" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciJmsFleetInstallationSites <a name="DataOciJmsFleetInstallationSites" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_installation_sites oci_jms_fleet_installation_sites}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_jms_fleet_installation_sites

dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  fleet_id: str,
  application_id: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciJmsFleetInstallationSitesFilter]] = None,
  id: str = None,
  installation_path: str = None,
  jre_distribution: str = None,
  jre_security_status: str = None,
  jre_vendor: str = None,
  jre_version: str = None,
  managed_instance_id: str = None,
  os_family: typing.List[str] = None,
  path_contains: str = None,
  time_end: str = None,
  time_start: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.Initializer.parameter.fleetId">fleet_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_installation_sites#fleet_id DataOciJmsFleetInstallationSites#fleet_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.Initializer.parameter.applicationId">application_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_installation_sites#application_id DataOciJmsFleetInstallationSites#application_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilter">DataOciJmsFleetInstallationSitesFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_installation_sites#id DataOciJmsFleetInstallationSites#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.Initializer.parameter.installationPath">installation_path</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_installation_sites#installation_path DataOciJmsFleetInstallationSites#installation_path}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.Initializer.parameter.jreDistribution">jre_distribution</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_installation_sites#jre_distribution DataOciJmsFleetInstallationSites#jre_distribution}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.Initializer.parameter.jreSecurityStatus">jre_security_status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_installation_sites#jre_security_status DataOciJmsFleetInstallationSites#jre_security_status}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.Initializer.parameter.jreVendor">jre_vendor</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_installation_sites#jre_vendor DataOciJmsFleetInstallationSites#jre_vendor}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.Initializer.parameter.jreVersion">jre_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_installation_sites#jre_version DataOciJmsFleetInstallationSites#jre_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.Initializer.parameter.managedInstanceId">managed_instance_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_installation_sites#managed_instance_id DataOciJmsFleetInstallationSites#managed_instance_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.Initializer.parameter.osFamily">os_family</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_installation_sites#os_family DataOciJmsFleetInstallationSites#os_family}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.Initializer.parameter.pathContains">path_contains</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_installation_sites#path_contains DataOciJmsFleetInstallationSites#path_contains}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.Initializer.parameter.timeEnd">time_end</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_installation_sites#time_end DataOciJmsFleetInstallationSites#time_end}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.Initializer.parameter.timeStart">time_start</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_installation_sites#time_start DataOciJmsFleetInstallationSites#time_start}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `fleet_id`<sup>Required</sup> <a name="fleet_id" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.Initializer.parameter.fleetId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_installation_sites#fleet_id DataOciJmsFleetInstallationSites#fleet_id}.

---

##### `application_id`<sup>Optional</sup> <a name="application_id" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.Initializer.parameter.applicationId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_installation_sites#application_id DataOciJmsFleetInstallationSites#application_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilter">DataOciJmsFleetInstallationSitesFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_installation_sites#filter DataOciJmsFleetInstallationSites#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_installation_sites#id DataOciJmsFleetInstallationSites#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `installation_path`<sup>Optional</sup> <a name="installation_path" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.Initializer.parameter.installationPath"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_installation_sites#installation_path DataOciJmsFleetInstallationSites#installation_path}.

---

##### `jre_distribution`<sup>Optional</sup> <a name="jre_distribution" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.Initializer.parameter.jreDistribution"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_installation_sites#jre_distribution DataOciJmsFleetInstallationSites#jre_distribution}.

---

##### `jre_security_status`<sup>Optional</sup> <a name="jre_security_status" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.Initializer.parameter.jreSecurityStatus"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_installation_sites#jre_security_status DataOciJmsFleetInstallationSites#jre_security_status}.

---

##### `jre_vendor`<sup>Optional</sup> <a name="jre_vendor" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.Initializer.parameter.jreVendor"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_installation_sites#jre_vendor DataOciJmsFleetInstallationSites#jre_vendor}.

---

##### `jre_version`<sup>Optional</sup> <a name="jre_version" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.Initializer.parameter.jreVersion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_installation_sites#jre_version DataOciJmsFleetInstallationSites#jre_version}.

---

##### `managed_instance_id`<sup>Optional</sup> <a name="managed_instance_id" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.Initializer.parameter.managedInstanceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_installation_sites#managed_instance_id DataOciJmsFleetInstallationSites#managed_instance_id}.

---

##### `os_family`<sup>Optional</sup> <a name="os_family" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.Initializer.parameter.osFamily"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_installation_sites#os_family DataOciJmsFleetInstallationSites#os_family}.

---

##### `path_contains`<sup>Optional</sup> <a name="path_contains" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.Initializer.parameter.pathContains"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_installation_sites#path_contains DataOciJmsFleetInstallationSites#path_contains}.

---

##### `time_end`<sup>Optional</sup> <a name="time_end" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.Initializer.parameter.timeEnd"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_installation_sites#time_end DataOciJmsFleetInstallationSites#time_end}.

---

##### `time_start`<sup>Optional</sup> <a name="time_start" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.Initializer.parameter.timeStart"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_installation_sites#time_start DataOciJmsFleetInstallationSites#time_start}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.resetApplicationId">reset_application_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.resetInstallationPath">reset_installation_path</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.resetJreDistribution">reset_jre_distribution</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.resetJreSecurityStatus">reset_jre_security_status</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.resetJreVendor">reset_jre_vendor</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.resetJreVersion">reset_jre_version</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.resetManagedInstanceId">reset_managed_instance_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.resetOsFamily">reset_os_family</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.resetPathContains">reset_path_contains</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.resetTimeEnd">reset_time_end</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.resetTimeStart">reset_time_start</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciJmsFleetInstallationSitesFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilter">DataOciJmsFleetInstallationSitesFilter</a>]]

---

##### `reset_application_id` <a name="reset_application_id" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.resetApplicationId"></a>

```python
def reset_application_id() -> None
```

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_installation_path` <a name="reset_installation_path" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.resetInstallationPath"></a>

```python
def reset_installation_path() -> None
```

##### `reset_jre_distribution` <a name="reset_jre_distribution" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.resetJreDistribution"></a>

```python
def reset_jre_distribution() -> None
```

##### `reset_jre_security_status` <a name="reset_jre_security_status" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.resetJreSecurityStatus"></a>

```python
def reset_jre_security_status() -> None
```

##### `reset_jre_vendor` <a name="reset_jre_vendor" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.resetJreVendor"></a>

```python
def reset_jre_vendor() -> None
```

##### `reset_jre_version` <a name="reset_jre_version" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.resetJreVersion"></a>

```python
def reset_jre_version() -> None
```

##### `reset_managed_instance_id` <a name="reset_managed_instance_id" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.resetManagedInstanceId"></a>

```python
def reset_managed_instance_id() -> None
```

##### `reset_os_family` <a name="reset_os_family" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.resetOsFamily"></a>

```python
def reset_os_family() -> None
```

##### `reset_path_contains` <a name="reset_path_contains" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.resetPathContains"></a>

```python
def reset_path_contains() -> None
```

##### `reset_time_end` <a name="reset_time_end" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.resetTimeEnd"></a>

```python
def reset_time_end() -> None
```

##### `reset_time_start` <a name="reset_time_start" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.resetTimeStart"></a>

```python
def reset_time_start() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciJmsFleetInstallationSites resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_jms_fleet_installation_sites

dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_jms_fleet_installation_sites

dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_jms_fleet_installation_sites

dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_jms_fleet_installation_sites

dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciJmsFleetInstallationSites resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciJmsFleetInstallationSites to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciJmsFleetInstallationSites that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_installation_sites#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciJmsFleetInstallationSites to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterList">DataOciJmsFleetInstallationSitesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.installationSiteCollection">installation_site_collection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionList">DataOciJmsFleetInstallationSitesInstallationSiteCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.applicationIdInput">application_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilter">DataOciJmsFleetInstallationSitesFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.fleetIdInput">fleet_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.installationPathInput">installation_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.jreDistributionInput">jre_distribution_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.jreSecurityStatusInput">jre_security_status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.jreVendorInput">jre_vendor_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.jreVersionInput">jre_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.managedInstanceIdInput">managed_instance_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.osFamilyInput">os_family_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.pathContainsInput">path_contains_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.timeEndInput">time_end_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.timeStartInput">time_start_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.applicationId">application_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.fleetId">fleet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.installationPath">installation_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.jreDistribution">jre_distribution</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.jreSecurityStatus">jre_security_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.jreVendor">jre_vendor</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.jreVersion">jre_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.managedInstanceId">managed_instance_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.osFamily">os_family</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.pathContains">path_contains</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.timeEnd">time_end</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.timeStart">time_start</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.filter"></a>

```python
filter: DataOciJmsFleetInstallationSitesFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterList">DataOciJmsFleetInstallationSitesFilterList</a>

---

##### `installation_site_collection`<sup>Required</sup> <a name="installation_site_collection" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.installationSiteCollection"></a>

```python
installation_site_collection: DataOciJmsFleetInstallationSitesInstallationSiteCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionList">DataOciJmsFleetInstallationSitesInstallationSiteCollectionList</a>

---

##### `application_id_input`<sup>Optional</sup> <a name="application_id_input" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.applicationIdInput"></a>

```python
application_id_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciJmsFleetInstallationSitesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilter">DataOciJmsFleetInstallationSitesFilter</a>]]

---

##### `fleet_id_input`<sup>Optional</sup> <a name="fleet_id_input" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.fleetIdInput"></a>

```python
fleet_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `installation_path_input`<sup>Optional</sup> <a name="installation_path_input" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.installationPathInput"></a>

```python
installation_path_input: str
```

- *Type:* str

---

##### `jre_distribution_input`<sup>Optional</sup> <a name="jre_distribution_input" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.jreDistributionInput"></a>

```python
jre_distribution_input: str
```

- *Type:* str

---

##### `jre_security_status_input`<sup>Optional</sup> <a name="jre_security_status_input" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.jreSecurityStatusInput"></a>

```python
jre_security_status_input: str
```

- *Type:* str

---

##### `jre_vendor_input`<sup>Optional</sup> <a name="jre_vendor_input" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.jreVendorInput"></a>

```python
jre_vendor_input: str
```

- *Type:* str

---

##### `jre_version_input`<sup>Optional</sup> <a name="jre_version_input" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.jreVersionInput"></a>

```python
jre_version_input: str
```

- *Type:* str

---

##### `managed_instance_id_input`<sup>Optional</sup> <a name="managed_instance_id_input" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.managedInstanceIdInput"></a>

```python
managed_instance_id_input: str
```

- *Type:* str

---

##### `os_family_input`<sup>Optional</sup> <a name="os_family_input" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.osFamilyInput"></a>

```python
os_family_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `path_contains_input`<sup>Optional</sup> <a name="path_contains_input" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.pathContainsInput"></a>

```python
path_contains_input: str
```

- *Type:* str

---

##### `time_end_input`<sup>Optional</sup> <a name="time_end_input" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.timeEndInput"></a>

```python
time_end_input: str
```

- *Type:* str

---

##### `time_start_input`<sup>Optional</sup> <a name="time_start_input" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.timeStartInput"></a>

```python
time_start_input: str
```

- *Type:* str

---

##### `application_id`<sup>Required</sup> <a name="application_id" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.applicationId"></a>

```python
application_id: str
```

- *Type:* str

---

##### `fleet_id`<sup>Required</sup> <a name="fleet_id" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.fleetId"></a>

```python
fleet_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `installation_path`<sup>Required</sup> <a name="installation_path" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.installationPath"></a>

```python
installation_path: str
```

- *Type:* str

---

##### `jre_distribution`<sup>Required</sup> <a name="jre_distribution" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.jreDistribution"></a>

```python
jre_distribution: str
```

- *Type:* str

---

##### `jre_security_status`<sup>Required</sup> <a name="jre_security_status" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.jreSecurityStatus"></a>

```python
jre_security_status: str
```

- *Type:* str

---

##### `jre_vendor`<sup>Required</sup> <a name="jre_vendor" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.jreVendor"></a>

```python
jre_vendor: str
```

- *Type:* str

---

##### `jre_version`<sup>Required</sup> <a name="jre_version" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.jreVersion"></a>

```python
jre_version: str
```

- *Type:* str

---

##### `managed_instance_id`<sup>Required</sup> <a name="managed_instance_id" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.managedInstanceId"></a>

```python
managed_instance_id: str
```

- *Type:* str

---

##### `os_family`<sup>Required</sup> <a name="os_family" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.osFamily"></a>

```python
os_family: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `path_contains`<sup>Required</sup> <a name="path_contains" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.pathContains"></a>

```python
path_contains: str
```

- *Type:* str

---

##### `time_end`<sup>Required</sup> <a name="time_end" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.timeEnd"></a>

```python
time_end: str
```

- *Type:* str

---

##### `time_start`<sup>Required</sup> <a name="time_start" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.timeStart"></a>

```python
time_start: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciJmsFleetInstallationSitesConfig <a name="DataOciJmsFleetInstallationSitesConfig" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_jms_fleet_installation_sites

dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  fleet_id: str,
  application_id: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciJmsFleetInstallationSitesFilter]] = None,
  id: str = None,
  installation_path: str = None,
  jre_distribution: str = None,
  jre_security_status: str = None,
  jre_vendor: str = None,
  jre_version: str = None,
  managed_instance_id: str = None,
  os_family: typing.List[str] = None,
  path_contains: str = None,
  time_end: str = None,
  time_start: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesConfig.property.fleetId">fleet_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_installation_sites#fleet_id DataOciJmsFleetInstallationSites#fleet_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesConfig.property.applicationId">application_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_installation_sites#application_id DataOciJmsFleetInstallationSites#application_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilter">DataOciJmsFleetInstallationSitesFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_installation_sites#id DataOciJmsFleetInstallationSites#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesConfig.property.installationPath">installation_path</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_installation_sites#installation_path DataOciJmsFleetInstallationSites#installation_path}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesConfig.property.jreDistribution">jre_distribution</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_installation_sites#jre_distribution DataOciJmsFleetInstallationSites#jre_distribution}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesConfig.property.jreSecurityStatus">jre_security_status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_installation_sites#jre_security_status DataOciJmsFleetInstallationSites#jre_security_status}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesConfig.property.jreVendor">jre_vendor</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_installation_sites#jre_vendor DataOciJmsFleetInstallationSites#jre_vendor}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesConfig.property.jreVersion">jre_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_installation_sites#jre_version DataOciJmsFleetInstallationSites#jre_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesConfig.property.managedInstanceId">managed_instance_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_installation_sites#managed_instance_id DataOciJmsFleetInstallationSites#managed_instance_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesConfig.property.osFamily">os_family</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_installation_sites#os_family DataOciJmsFleetInstallationSites#os_family}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesConfig.property.pathContains">path_contains</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_installation_sites#path_contains DataOciJmsFleetInstallationSites#path_contains}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesConfig.property.timeEnd">time_end</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_installation_sites#time_end DataOciJmsFleetInstallationSites#time_end}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesConfig.property.timeStart">time_start</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_installation_sites#time_start DataOciJmsFleetInstallationSites#time_start}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `fleet_id`<sup>Required</sup> <a name="fleet_id" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesConfig.property.fleetId"></a>

```python
fleet_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_installation_sites#fleet_id DataOciJmsFleetInstallationSites#fleet_id}.

---

##### `application_id`<sup>Optional</sup> <a name="application_id" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesConfig.property.applicationId"></a>

```python
application_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_installation_sites#application_id DataOciJmsFleetInstallationSites#application_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciJmsFleetInstallationSitesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilter">DataOciJmsFleetInstallationSitesFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_installation_sites#filter DataOciJmsFleetInstallationSites#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_installation_sites#id DataOciJmsFleetInstallationSites#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `installation_path`<sup>Optional</sup> <a name="installation_path" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesConfig.property.installationPath"></a>

```python
installation_path: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_installation_sites#installation_path DataOciJmsFleetInstallationSites#installation_path}.

---

##### `jre_distribution`<sup>Optional</sup> <a name="jre_distribution" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesConfig.property.jreDistribution"></a>

```python
jre_distribution: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_installation_sites#jre_distribution DataOciJmsFleetInstallationSites#jre_distribution}.

---

##### `jre_security_status`<sup>Optional</sup> <a name="jre_security_status" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesConfig.property.jreSecurityStatus"></a>

```python
jre_security_status: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_installation_sites#jre_security_status DataOciJmsFleetInstallationSites#jre_security_status}.

---

##### `jre_vendor`<sup>Optional</sup> <a name="jre_vendor" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesConfig.property.jreVendor"></a>

```python
jre_vendor: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_installation_sites#jre_vendor DataOciJmsFleetInstallationSites#jre_vendor}.

---

##### `jre_version`<sup>Optional</sup> <a name="jre_version" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesConfig.property.jreVersion"></a>

```python
jre_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_installation_sites#jre_version DataOciJmsFleetInstallationSites#jre_version}.

---

##### `managed_instance_id`<sup>Optional</sup> <a name="managed_instance_id" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesConfig.property.managedInstanceId"></a>

```python
managed_instance_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_installation_sites#managed_instance_id DataOciJmsFleetInstallationSites#managed_instance_id}.

---

##### `os_family`<sup>Optional</sup> <a name="os_family" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesConfig.property.osFamily"></a>

```python
os_family: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_installation_sites#os_family DataOciJmsFleetInstallationSites#os_family}.

---

##### `path_contains`<sup>Optional</sup> <a name="path_contains" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesConfig.property.pathContains"></a>

```python
path_contains: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_installation_sites#path_contains DataOciJmsFleetInstallationSites#path_contains}.

---

##### `time_end`<sup>Optional</sup> <a name="time_end" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesConfig.property.timeEnd"></a>

```python
time_end: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_installation_sites#time_end DataOciJmsFleetInstallationSites#time_end}.

---

##### `time_start`<sup>Optional</sup> <a name="time_start" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesConfig.property.timeStart"></a>

```python
time_start: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_installation_sites#time_start DataOciJmsFleetInstallationSites#time_start}.

---

### DataOciJmsFleetInstallationSitesFilter <a name="DataOciJmsFleetInstallationSitesFilter" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_jms_fleet_installation_sites

dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_installation_sites#name DataOciJmsFleetInstallationSites#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_installation_sites#values DataOciJmsFleetInstallationSites#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_installation_sites#regex DataOciJmsFleetInstallationSites#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_installation_sites#name DataOciJmsFleetInstallationSites#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_installation_sites#values DataOciJmsFleetInstallationSites#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_installation_sites#regex DataOciJmsFleetInstallationSites#regex}.

---

### DataOciJmsFleetInstallationSitesInstallationSiteCollection <a name="DataOciJmsFleetInstallationSitesInstallationSiteCollection" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollection.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_jms_fleet_installation_sites

dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollection()
```


### DataOciJmsFleetInstallationSitesInstallationSiteCollectionItems <a name="DataOciJmsFleetInstallationSitesInstallationSiteCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItems.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_jms_fleet_installation_sites

dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItems()
```


### DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItems <a name="DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItems" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItems.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_jms_fleet_installation_sites

dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItems()
```


### DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStruct <a name="DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStruct" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStruct"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStruct.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_jms_fleet_installation_sites

dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStruct()
```


### DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJre <a name="DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJre" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJre"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJre.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_jms_fleet_installation_sites

dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJre()
```


### DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystem <a name="DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystem" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystem"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystem.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_jms_fleet_installation_sites

dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystem()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciJmsFleetInstallationSitesFilterList <a name="DataOciJmsFleetInstallationSitesFilterList" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_jms_fleet_installation_sites

dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciJmsFleetInstallationSitesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilter">DataOciJmsFleetInstallationSitesFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciJmsFleetInstallationSitesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilter">DataOciJmsFleetInstallationSitesFilter</a>]]

---


### DataOciJmsFleetInstallationSitesFilterOutputReference <a name="DataOciJmsFleetInstallationSitesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_jms_fleet_installation_sites

dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilter">DataOciJmsFleetInstallationSitesFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciJmsFleetInstallationSitesFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilter">DataOciJmsFleetInstallationSitesFilter</a>]

---


### DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructList <a name="DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructList" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_jms_fleet_installation_sites

dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructOutputReference <a name="DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructOutputReference" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_jms_fleet_installation_sites

dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructOutputReference.property.operation">operation</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructOutputReference.property.reason">reason</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStruct">DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStruct</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `operation`<sup>Required</sup> <a name="operation" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructOutputReference.property.operation"></a>

```python
operation: str
```

- *Type:* str

---

##### `reason`<sup>Required</sup> <a name="reason" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructOutputReference.property.reason"></a>

```python
reason: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructOutputReference.property.internalValue"></a>

```python
internal_value: DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStruct
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStruct">DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStruct</a>

---


### DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreList <a name="DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreList" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_jms_fleet_installation_sites

dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreOutputReference <a name="DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreOutputReference" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_jms_fleet_installation_sites

dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreOutputReference.property.distribution">distribution</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreOutputReference.property.jreKey">jre_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreOutputReference.property.vendor">vendor</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreOutputReference.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJre">DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJre</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `distribution`<sup>Required</sup> <a name="distribution" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreOutputReference.property.distribution"></a>

```python
distribution: str
```

- *Type:* str

---

##### `jre_key`<sup>Required</sup> <a name="jre_key" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreOutputReference.property.jreKey"></a>

```python
jre_key: str
```

- *Type:* str

---

##### `vendor`<sup>Required</sup> <a name="vendor" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreOutputReference.property.vendor"></a>

```python
vendor: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreOutputReference.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreOutputReference.property.internalValue"></a>

```python
internal_value: DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJre
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJre">DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJre</a>

---


### DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsList <a name="DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsList" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_jms_fleet_installation_sites

dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemList <a name="DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemList" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_jms_fleet_installation_sites

dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemOutputReference <a name="DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemOutputReference" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_jms_fleet_installation_sites

dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemOutputReference.property.architecture">architecture</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemOutputReference.property.family">family</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemOutputReference.property.managedInstanceCount">managed_instance_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemOutputReference.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystem">DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystem</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `architecture`<sup>Required</sup> <a name="architecture" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemOutputReference.property.architecture"></a>

```python
architecture: str
```

- *Type:* str

---

##### `family`<sup>Required</sup> <a name="family" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemOutputReference.property.family"></a>

```python
family: str
```

- *Type:* str

---

##### `managed_instance_count`<sup>Required</sup> <a name="managed_instance_count" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemOutputReference.property.managedInstanceCount"></a>

```python
managed_instance_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemOutputReference.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemOutputReference.property.internalValue"></a>

```python
internal_value: DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystem
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystem">DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystem</a>

---


### DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOutputReference <a name="DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_jms_fleet_installation_sites

dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOutputReference.property.approximateApplicationCount">approximate_application_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOutputReference.property.blocklist">blocklist</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructList">DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOutputReference.property.installationKey">installation_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOutputReference.property.jre">jre</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreList">DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOutputReference.property.managedInstanceId">managed_instance_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOutputReference.property.operatingSystem">operating_system</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemList">DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOutputReference.property.path">path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOutputReference.property.securityStatus">security_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOutputReference.property.timeLastSeen">time_last_seen</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItems">DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItems</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `approximate_application_count`<sup>Required</sup> <a name="approximate_application_count" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOutputReference.property.approximateApplicationCount"></a>

```python
approximate_application_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `blocklist`<sup>Required</sup> <a name="blocklist" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOutputReference.property.blocklist"></a>

```python
blocklist: DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructList">DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructList</a>

---

##### `installation_key`<sup>Required</sup> <a name="installation_key" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOutputReference.property.installationKey"></a>

```python
installation_key: str
```

- *Type:* str

---

##### `jre`<sup>Required</sup> <a name="jre" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOutputReference.property.jre"></a>

```python
jre: DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreList">DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreList</a>

---

##### `managed_instance_id`<sup>Required</sup> <a name="managed_instance_id" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOutputReference.property.managedInstanceId"></a>

```python
managed_instance_id: str
```

- *Type:* str

---

##### `operating_system`<sup>Required</sup> <a name="operating_system" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOutputReference.property.operatingSystem"></a>

```python
operating_system: DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemList">DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemList</a>

---

##### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOutputReference.property.path"></a>

```python
path: str
```

- *Type:* str

---

##### `security_status`<sup>Required</sup> <a name="security_status" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOutputReference.property.securityStatus"></a>

```python
security_status: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `time_last_seen`<sup>Required</sup> <a name="time_last_seen" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOutputReference.property.timeLastSeen"></a>

```python
time_last_seen: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItems">DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItems</a>

---


### DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsList <a name="DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_jms_fleet_installation_sites

dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsOutputReference <a name="DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_jms_fleet_installation_sites

dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsList">DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItems">DataOciJmsFleetInstallationSitesInstallationSiteCollectionItems</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsOutputReference.property.items"></a>

```python
items: DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsList">DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciJmsFleetInstallationSitesInstallationSiteCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItems">DataOciJmsFleetInstallationSitesInstallationSiteCollectionItems</a>

---


### DataOciJmsFleetInstallationSitesInstallationSiteCollectionList <a name="DataOciJmsFleetInstallationSitesInstallationSiteCollectionList" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_jms_fleet_installation_sites

dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciJmsFleetInstallationSitesInstallationSiteCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciJmsFleetInstallationSitesInstallationSiteCollectionOutputReference <a name="DataOciJmsFleetInstallationSitesInstallationSiteCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_jms_fleet_installation_sites

dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsList">DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollection">DataOciJmsFleetInstallationSitesInstallationSiteCollection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionOutputReference.property.items"></a>

```python
items: DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsList">DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionOutputReference.property.internalValue"></a>

```python
internal_value: DataOciJmsFleetInstallationSitesInstallationSiteCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollection">DataOciJmsFleetInstallationSitesInstallationSiteCollection</a>

---



