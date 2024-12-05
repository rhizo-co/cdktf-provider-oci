# `dataOciJmsFleetInstallationSite` Submodule <a name="`dataOciJmsFleetInstallationSite` Submodule" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciJmsFleetInstallationSite <a name="DataOciJmsFleetInstallationSite" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_installation_site oci_jms_fleet_installation_site}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_jms_fleet_installation_site

dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite(
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
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.Initializer.parameter.fleetId">fleet_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_installation_site#fleet_id DataOciJmsFleetInstallationSite#fleet_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.Initializer.parameter.applicationId">application_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_installation_site#application_id DataOciJmsFleetInstallationSite#application_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_installation_site#id DataOciJmsFleetInstallationSite#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.Initializer.parameter.installationPath">installation_path</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_installation_site#installation_path DataOciJmsFleetInstallationSite#installation_path}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.Initializer.parameter.jreDistribution">jre_distribution</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_installation_site#jre_distribution DataOciJmsFleetInstallationSite#jre_distribution}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.Initializer.parameter.jreSecurityStatus">jre_security_status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_installation_site#jre_security_status DataOciJmsFleetInstallationSite#jre_security_status}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.Initializer.parameter.jreVendor">jre_vendor</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_installation_site#jre_vendor DataOciJmsFleetInstallationSite#jre_vendor}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.Initializer.parameter.jreVersion">jre_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_installation_site#jre_version DataOciJmsFleetInstallationSite#jre_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.Initializer.parameter.managedInstanceId">managed_instance_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_installation_site#managed_instance_id DataOciJmsFleetInstallationSite#managed_instance_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.Initializer.parameter.osFamily">os_family</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_installation_site#os_family DataOciJmsFleetInstallationSite#os_family}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.Initializer.parameter.pathContains">path_contains</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_installation_site#path_contains DataOciJmsFleetInstallationSite#path_contains}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.Initializer.parameter.timeEnd">time_end</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_installation_site#time_end DataOciJmsFleetInstallationSite#time_end}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.Initializer.parameter.timeStart">time_start</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_installation_site#time_start DataOciJmsFleetInstallationSite#time_start}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `fleet_id`<sup>Required</sup> <a name="fleet_id" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.Initializer.parameter.fleetId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_installation_site#fleet_id DataOciJmsFleetInstallationSite#fleet_id}.

---

##### `application_id`<sup>Optional</sup> <a name="application_id" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.Initializer.parameter.applicationId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_installation_site#application_id DataOciJmsFleetInstallationSite#application_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_installation_site#id DataOciJmsFleetInstallationSite#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `installation_path`<sup>Optional</sup> <a name="installation_path" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.Initializer.parameter.installationPath"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_installation_site#installation_path DataOciJmsFleetInstallationSite#installation_path}.

---

##### `jre_distribution`<sup>Optional</sup> <a name="jre_distribution" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.Initializer.parameter.jreDistribution"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_installation_site#jre_distribution DataOciJmsFleetInstallationSite#jre_distribution}.

---

##### `jre_security_status`<sup>Optional</sup> <a name="jre_security_status" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.Initializer.parameter.jreSecurityStatus"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_installation_site#jre_security_status DataOciJmsFleetInstallationSite#jre_security_status}.

---

##### `jre_vendor`<sup>Optional</sup> <a name="jre_vendor" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.Initializer.parameter.jreVendor"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_installation_site#jre_vendor DataOciJmsFleetInstallationSite#jre_vendor}.

---

##### `jre_version`<sup>Optional</sup> <a name="jre_version" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.Initializer.parameter.jreVersion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_installation_site#jre_version DataOciJmsFleetInstallationSite#jre_version}.

---

##### `managed_instance_id`<sup>Optional</sup> <a name="managed_instance_id" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.Initializer.parameter.managedInstanceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_installation_site#managed_instance_id DataOciJmsFleetInstallationSite#managed_instance_id}.

---

##### `os_family`<sup>Optional</sup> <a name="os_family" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.Initializer.parameter.osFamily"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_installation_site#os_family DataOciJmsFleetInstallationSite#os_family}.

---

##### `path_contains`<sup>Optional</sup> <a name="path_contains" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.Initializer.parameter.pathContains"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_installation_site#path_contains DataOciJmsFleetInstallationSite#path_contains}.

---

##### `time_end`<sup>Optional</sup> <a name="time_end" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.Initializer.parameter.timeEnd"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_installation_site#time_end DataOciJmsFleetInstallationSite#time_end}.

---

##### `time_start`<sup>Optional</sup> <a name="time_start" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.Initializer.parameter.timeStart"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_installation_site#time_start DataOciJmsFleetInstallationSite#time_start}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.resetApplicationId">reset_application_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.resetInstallationPath">reset_installation_path</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.resetJreDistribution">reset_jre_distribution</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.resetJreSecurityStatus">reset_jre_security_status</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.resetJreVendor">reset_jre_vendor</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.resetJreVersion">reset_jre_version</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.resetManagedInstanceId">reset_managed_instance_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.resetOsFamily">reset_os_family</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.resetPathContains">reset_path_contains</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.resetTimeEnd">reset_time_end</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.resetTimeStart">reset_time_start</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_application_id` <a name="reset_application_id" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.resetApplicationId"></a>

```python
def reset_application_id() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_installation_path` <a name="reset_installation_path" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.resetInstallationPath"></a>

```python
def reset_installation_path() -> None
```

##### `reset_jre_distribution` <a name="reset_jre_distribution" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.resetJreDistribution"></a>

```python
def reset_jre_distribution() -> None
```

##### `reset_jre_security_status` <a name="reset_jre_security_status" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.resetJreSecurityStatus"></a>

```python
def reset_jre_security_status() -> None
```

##### `reset_jre_vendor` <a name="reset_jre_vendor" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.resetJreVendor"></a>

```python
def reset_jre_vendor() -> None
```

##### `reset_jre_version` <a name="reset_jre_version" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.resetJreVersion"></a>

```python
def reset_jre_version() -> None
```

##### `reset_managed_instance_id` <a name="reset_managed_instance_id" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.resetManagedInstanceId"></a>

```python
def reset_managed_instance_id() -> None
```

##### `reset_os_family` <a name="reset_os_family" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.resetOsFamily"></a>

```python
def reset_os_family() -> None
```

##### `reset_path_contains` <a name="reset_path_contains" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.resetPathContains"></a>

```python
def reset_path_contains() -> None
```

##### `reset_time_end` <a name="reset_time_end" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.resetTimeEnd"></a>

```python
def reset_time_end() -> None
```

##### `reset_time_start` <a name="reset_time_start" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.resetTimeStart"></a>

```python
def reset_time_start() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciJmsFleetInstallationSite resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_jms_fleet_installation_site

dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_jms_fleet_installation_site

dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_jms_fleet_installation_site

dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_jms_fleet_installation_site

dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciJmsFleetInstallationSite resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciJmsFleetInstallationSite to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciJmsFleetInstallationSite that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_installation_site#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciJmsFleetInstallationSite to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsList">DataOciJmsFleetInstallationSiteItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.property.applicationIdInput">application_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.property.fleetIdInput">fleet_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.property.installationPathInput">installation_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.property.jreDistributionInput">jre_distribution_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.property.jreSecurityStatusInput">jre_security_status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.property.jreVendorInput">jre_vendor_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.property.jreVersionInput">jre_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.property.managedInstanceIdInput">managed_instance_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.property.osFamilyInput">os_family_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.property.pathContainsInput">path_contains_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.property.timeEndInput">time_end_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.property.timeStartInput">time_start_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.property.applicationId">application_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.property.fleetId">fleet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.property.installationPath">installation_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.property.jreDistribution">jre_distribution</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.property.jreSecurityStatus">jre_security_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.property.jreVendor">jre_vendor</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.property.jreVersion">jre_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.property.managedInstanceId">managed_instance_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.property.osFamily">os_family</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.property.pathContains">path_contains</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.property.timeEnd">time_end</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.property.timeStart">time_start</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.property.items"></a>

```python
items: DataOciJmsFleetInstallationSiteItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsList">DataOciJmsFleetInstallationSiteItemsList</a>

---

##### `application_id_input`<sup>Optional</sup> <a name="application_id_input" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.property.applicationIdInput"></a>

```python
application_id_input: str
```

- *Type:* str

---

##### `fleet_id_input`<sup>Optional</sup> <a name="fleet_id_input" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.property.fleetIdInput"></a>

```python
fleet_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `installation_path_input`<sup>Optional</sup> <a name="installation_path_input" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.property.installationPathInput"></a>

```python
installation_path_input: str
```

- *Type:* str

---

##### `jre_distribution_input`<sup>Optional</sup> <a name="jre_distribution_input" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.property.jreDistributionInput"></a>

```python
jre_distribution_input: str
```

- *Type:* str

---

##### `jre_security_status_input`<sup>Optional</sup> <a name="jre_security_status_input" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.property.jreSecurityStatusInput"></a>

```python
jre_security_status_input: str
```

- *Type:* str

---

##### `jre_vendor_input`<sup>Optional</sup> <a name="jre_vendor_input" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.property.jreVendorInput"></a>

```python
jre_vendor_input: str
```

- *Type:* str

---

##### `jre_version_input`<sup>Optional</sup> <a name="jre_version_input" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.property.jreVersionInput"></a>

```python
jre_version_input: str
```

- *Type:* str

---

##### `managed_instance_id_input`<sup>Optional</sup> <a name="managed_instance_id_input" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.property.managedInstanceIdInput"></a>

```python
managed_instance_id_input: str
```

- *Type:* str

---

##### `os_family_input`<sup>Optional</sup> <a name="os_family_input" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.property.osFamilyInput"></a>

```python
os_family_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `path_contains_input`<sup>Optional</sup> <a name="path_contains_input" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.property.pathContainsInput"></a>

```python
path_contains_input: str
```

- *Type:* str

---

##### `time_end_input`<sup>Optional</sup> <a name="time_end_input" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.property.timeEndInput"></a>

```python
time_end_input: str
```

- *Type:* str

---

##### `time_start_input`<sup>Optional</sup> <a name="time_start_input" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.property.timeStartInput"></a>

```python
time_start_input: str
```

- *Type:* str

---

##### `application_id`<sup>Required</sup> <a name="application_id" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.property.applicationId"></a>

```python
application_id: str
```

- *Type:* str

---

##### `fleet_id`<sup>Required</sup> <a name="fleet_id" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.property.fleetId"></a>

```python
fleet_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `installation_path`<sup>Required</sup> <a name="installation_path" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.property.installationPath"></a>

```python
installation_path: str
```

- *Type:* str

---

##### `jre_distribution`<sup>Required</sup> <a name="jre_distribution" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.property.jreDistribution"></a>

```python
jre_distribution: str
```

- *Type:* str

---

##### `jre_security_status`<sup>Required</sup> <a name="jre_security_status" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.property.jreSecurityStatus"></a>

```python
jre_security_status: str
```

- *Type:* str

---

##### `jre_vendor`<sup>Required</sup> <a name="jre_vendor" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.property.jreVendor"></a>

```python
jre_vendor: str
```

- *Type:* str

---

##### `jre_version`<sup>Required</sup> <a name="jre_version" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.property.jreVersion"></a>

```python
jre_version: str
```

- *Type:* str

---

##### `managed_instance_id`<sup>Required</sup> <a name="managed_instance_id" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.property.managedInstanceId"></a>

```python
managed_instance_id: str
```

- *Type:* str

---

##### `os_family`<sup>Required</sup> <a name="os_family" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.property.osFamily"></a>

```python
os_family: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `path_contains`<sup>Required</sup> <a name="path_contains" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.property.pathContains"></a>

```python
path_contains: str
```

- *Type:* str

---

##### `time_end`<sup>Required</sup> <a name="time_end" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.property.timeEnd"></a>

```python
time_end: str
```

- *Type:* str

---

##### `time_start`<sup>Required</sup> <a name="time_start" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.property.timeStart"></a>

```python
time_start: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciJmsFleetInstallationSiteConfig <a name="DataOciJmsFleetInstallationSiteConfig" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_jms_fleet_installation_site

dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  fleet_id: str,
  application_id: str = None,
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
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteConfig.property.fleetId">fleet_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_installation_site#fleet_id DataOciJmsFleetInstallationSite#fleet_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteConfig.property.applicationId">application_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_installation_site#application_id DataOciJmsFleetInstallationSite#application_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_installation_site#id DataOciJmsFleetInstallationSite#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteConfig.property.installationPath">installation_path</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_installation_site#installation_path DataOciJmsFleetInstallationSite#installation_path}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteConfig.property.jreDistribution">jre_distribution</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_installation_site#jre_distribution DataOciJmsFleetInstallationSite#jre_distribution}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteConfig.property.jreSecurityStatus">jre_security_status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_installation_site#jre_security_status DataOciJmsFleetInstallationSite#jre_security_status}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteConfig.property.jreVendor">jre_vendor</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_installation_site#jre_vendor DataOciJmsFleetInstallationSite#jre_vendor}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteConfig.property.jreVersion">jre_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_installation_site#jre_version DataOciJmsFleetInstallationSite#jre_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteConfig.property.managedInstanceId">managed_instance_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_installation_site#managed_instance_id DataOciJmsFleetInstallationSite#managed_instance_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteConfig.property.osFamily">os_family</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_installation_site#os_family DataOciJmsFleetInstallationSite#os_family}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteConfig.property.pathContains">path_contains</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_installation_site#path_contains DataOciJmsFleetInstallationSite#path_contains}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteConfig.property.timeEnd">time_end</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_installation_site#time_end DataOciJmsFleetInstallationSite#time_end}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteConfig.property.timeStart">time_start</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_installation_site#time_start DataOciJmsFleetInstallationSite#time_start}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `fleet_id`<sup>Required</sup> <a name="fleet_id" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteConfig.property.fleetId"></a>

```python
fleet_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_installation_site#fleet_id DataOciJmsFleetInstallationSite#fleet_id}.

---

##### `application_id`<sup>Optional</sup> <a name="application_id" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteConfig.property.applicationId"></a>

```python
application_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_installation_site#application_id DataOciJmsFleetInstallationSite#application_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_installation_site#id DataOciJmsFleetInstallationSite#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `installation_path`<sup>Optional</sup> <a name="installation_path" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteConfig.property.installationPath"></a>

```python
installation_path: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_installation_site#installation_path DataOciJmsFleetInstallationSite#installation_path}.

---

##### `jre_distribution`<sup>Optional</sup> <a name="jre_distribution" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteConfig.property.jreDistribution"></a>

```python
jre_distribution: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_installation_site#jre_distribution DataOciJmsFleetInstallationSite#jre_distribution}.

---

##### `jre_security_status`<sup>Optional</sup> <a name="jre_security_status" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteConfig.property.jreSecurityStatus"></a>

```python
jre_security_status: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_installation_site#jre_security_status DataOciJmsFleetInstallationSite#jre_security_status}.

---

##### `jre_vendor`<sup>Optional</sup> <a name="jre_vendor" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteConfig.property.jreVendor"></a>

```python
jre_vendor: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_installation_site#jre_vendor DataOciJmsFleetInstallationSite#jre_vendor}.

---

##### `jre_version`<sup>Optional</sup> <a name="jre_version" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteConfig.property.jreVersion"></a>

```python
jre_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_installation_site#jre_version DataOciJmsFleetInstallationSite#jre_version}.

---

##### `managed_instance_id`<sup>Optional</sup> <a name="managed_instance_id" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteConfig.property.managedInstanceId"></a>

```python
managed_instance_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_installation_site#managed_instance_id DataOciJmsFleetInstallationSite#managed_instance_id}.

---

##### `os_family`<sup>Optional</sup> <a name="os_family" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteConfig.property.osFamily"></a>

```python
os_family: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_installation_site#os_family DataOciJmsFleetInstallationSite#os_family}.

---

##### `path_contains`<sup>Optional</sup> <a name="path_contains" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteConfig.property.pathContains"></a>

```python
path_contains: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_installation_site#path_contains DataOciJmsFleetInstallationSite#path_contains}.

---

##### `time_end`<sup>Optional</sup> <a name="time_end" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteConfig.property.timeEnd"></a>

```python
time_end: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_installation_site#time_end DataOciJmsFleetInstallationSite#time_end}.

---

##### `time_start`<sup>Optional</sup> <a name="time_start" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteConfig.property.timeStart"></a>

```python
time_start: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_installation_site#time_start DataOciJmsFleetInstallationSite#time_start}.

---

### DataOciJmsFleetInstallationSiteItems <a name="DataOciJmsFleetInstallationSiteItems" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItems.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_jms_fleet_installation_site

dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItems()
```


### DataOciJmsFleetInstallationSiteItemsBlocklistStruct <a name="DataOciJmsFleetInstallationSiteItemsBlocklistStruct" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsBlocklistStruct"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsBlocklistStruct.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_jms_fleet_installation_site

dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsBlocklistStruct()
```


### DataOciJmsFleetInstallationSiteItemsJre <a name="DataOciJmsFleetInstallationSiteItemsJre" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsJre"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsJre.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_jms_fleet_installation_site

dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsJre()
```


### DataOciJmsFleetInstallationSiteItemsOperatingSystem <a name="DataOciJmsFleetInstallationSiteItemsOperatingSystem" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOperatingSystem"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOperatingSystem.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_jms_fleet_installation_site

dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOperatingSystem()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciJmsFleetInstallationSiteItemsBlocklistStructList <a name="DataOciJmsFleetInstallationSiteItemsBlocklistStructList" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsBlocklistStructList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsBlocklistStructList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_jms_fleet_installation_site

dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsBlocklistStructList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsBlocklistStructList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsBlocklistStructList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsBlocklistStructList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsBlocklistStructList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsBlocklistStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsBlocklistStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsBlocklistStructList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsBlocklistStructList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsBlocklistStructList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsBlocklistStructList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsBlocklistStructList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsBlocklistStructList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsBlocklistStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsBlocklistStructList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsBlocklistStructList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsBlocklistStructList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsBlocklistStructList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsBlocklistStructList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciJmsFleetInstallationSiteItemsBlocklistStructOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsBlocklistStructList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsBlocklistStructList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsBlocklistStructList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsBlocklistStructList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsBlocklistStructList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciJmsFleetInstallationSiteItemsBlocklistStructOutputReference <a name="DataOciJmsFleetInstallationSiteItemsBlocklistStructOutputReference" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsBlocklistStructOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsBlocklistStructOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_jms_fleet_installation_site

dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsBlocklistStructOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsBlocklistStructOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsBlocklistStructOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsBlocklistStructOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsBlocklistStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsBlocklistStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsBlocklistStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsBlocklistStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsBlocklistStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsBlocklistStructOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsBlocklistStructOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsBlocklistStructOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsBlocklistStructOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsBlocklistStructOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsBlocklistStructOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsBlocklistStructOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsBlocklistStructOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsBlocklistStructOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsBlocklistStructOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsBlocklistStructOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsBlocklistStructOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsBlocklistStructOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsBlocklistStructOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsBlocklistStructOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsBlocklistStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsBlocklistStructOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsBlocklistStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsBlocklistStructOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsBlocklistStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsBlocklistStructOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsBlocklistStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsBlocklistStructOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsBlocklistStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsBlocklistStructOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsBlocklistStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsBlocklistStructOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsBlocklistStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsBlocklistStructOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsBlocklistStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsBlocklistStructOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsBlocklistStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsBlocklistStructOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsBlocklistStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsBlocklistStructOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsBlocklistStructOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsBlocklistStructOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsBlocklistStructOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsBlocklistStructOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsBlocklistStructOutputReference.property.operation">operation</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsBlocklistStructOutputReference.property.reason">reason</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsBlocklistStructOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsBlocklistStruct">DataOciJmsFleetInstallationSiteItemsBlocklistStruct</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsBlocklistStructOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsBlocklistStructOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `operation`<sup>Required</sup> <a name="operation" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsBlocklistStructOutputReference.property.operation"></a>

```python
operation: str
```

- *Type:* str

---

##### `reason`<sup>Required</sup> <a name="reason" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsBlocklistStructOutputReference.property.reason"></a>

```python
reason: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsBlocklistStructOutputReference.property.internalValue"></a>

```python
internal_value: DataOciJmsFleetInstallationSiteItemsBlocklistStruct
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsBlocklistStruct">DataOciJmsFleetInstallationSiteItemsBlocklistStruct</a>

---


### DataOciJmsFleetInstallationSiteItemsJreList <a name="DataOciJmsFleetInstallationSiteItemsJreList" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsJreList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsJreList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_jms_fleet_installation_site

dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsJreList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsJreList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsJreList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsJreList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsJreList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsJreList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsJreList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsJreList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsJreList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsJreList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsJreList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsJreList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsJreList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsJreList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsJreList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsJreList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsJreList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsJreList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsJreList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciJmsFleetInstallationSiteItemsJreOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsJreList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsJreList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsJreList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsJreList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsJreList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciJmsFleetInstallationSiteItemsJreOutputReference <a name="DataOciJmsFleetInstallationSiteItemsJreOutputReference" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsJreOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsJreOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_jms_fleet_installation_site

dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsJreOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsJreOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsJreOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsJreOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsJreOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsJreOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsJreOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsJreOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsJreOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsJreOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsJreOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsJreOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsJreOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsJreOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsJreOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsJreOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsJreOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsJreOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsJreOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsJreOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsJreOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsJreOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsJreOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsJreOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsJreOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsJreOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsJreOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsJreOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsJreOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsJreOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsJreOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsJreOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsJreOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsJreOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsJreOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsJreOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsJreOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsJreOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsJreOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsJreOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsJreOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsJreOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsJreOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsJreOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsJreOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsJreOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsJreOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsJreOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsJreOutputReference.property.distribution">distribution</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsJreOutputReference.property.jreKey">jre_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsJreOutputReference.property.vendor">vendor</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsJreOutputReference.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsJreOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsJre">DataOciJmsFleetInstallationSiteItemsJre</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsJreOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsJreOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `distribution`<sup>Required</sup> <a name="distribution" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsJreOutputReference.property.distribution"></a>

```python
distribution: str
```

- *Type:* str

---

##### `jre_key`<sup>Required</sup> <a name="jre_key" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsJreOutputReference.property.jreKey"></a>

```python
jre_key: str
```

- *Type:* str

---

##### `vendor`<sup>Required</sup> <a name="vendor" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsJreOutputReference.property.vendor"></a>

```python
vendor: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsJreOutputReference.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsJreOutputReference.property.internalValue"></a>

```python
internal_value: DataOciJmsFleetInstallationSiteItemsJre
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsJre">DataOciJmsFleetInstallationSiteItemsJre</a>

---


### DataOciJmsFleetInstallationSiteItemsList <a name="DataOciJmsFleetInstallationSiteItemsList" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_jms_fleet_installation_site

dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciJmsFleetInstallationSiteItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciJmsFleetInstallationSiteItemsOperatingSystemList <a name="DataOciJmsFleetInstallationSiteItemsOperatingSystemList" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOperatingSystemList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOperatingSystemList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_jms_fleet_installation_site

dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOperatingSystemList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOperatingSystemList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOperatingSystemList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOperatingSystemList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOperatingSystemList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOperatingSystemList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOperatingSystemList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOperatingSystemList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOperatingSystemList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOperatingSystemList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOperatingSystemList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOperatingSystemList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOperatingSystemList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOperatingSystemList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOperatingSystemList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOperatingSystemList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOperatingSystemList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOperatingSystemList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOperatingSystemList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciJmsFleetInstallationSiteItemsOperatingSystemOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOperatingSystemList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOperatingSystemList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOperatingSystemList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOperatingSystemList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOperatingSystemList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciJmsFleetInstallationSiteItemsOperatingSystemOutputReference <a name="DataOciJmsFleetInstallationSiteItemsOperatingSystemOutputReference" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOperatingSystemOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOperatingSystemOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_jms_fleet_installation_site

dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOperatingSystemOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOperatingSystemOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOperatingSystemOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOperatingSystemOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOperatingSystemOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOperatingSystemOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOperatingSystemOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOperatingSystemOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOperatingSystemOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOperatingSystemOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOperatingSystemOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOperatingSystemOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOperatingSystemOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOperatingSystemOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOperatingSystemOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOperatingSystemOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOperatingSystemOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOperatingSystemOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOperatingSystemOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOperatingSystemOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOperatingSystemOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOperatingSystemOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOperatingSystemOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOperatingSystemOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOperatingSystemOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOperatingSystemOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOperatingSystemOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOperatingSystemOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOperatingSystemOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOperatingSystemOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOperatingSystemOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOperatingSystemOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOperatingSystemOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOperatingSystemOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOperatingSystemOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOperatingSystemOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOperatingSystemOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOperatingSystemOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOperatingSystemOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOperatingSystemOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOperatingSystemOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOperatingSystemOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOperatingSystemOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOperatingSystemOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOperatingSystemOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOperatingSystemOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOperatingSystemOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOperatingSystemOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOperatingSystemOutputReference.property.architecture">architecture</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOperatingSystemOutputReference.property.family">family</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOperatingSystemOutputReference.property.managedInstanceCount">managed_instance_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOperatingSystemOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOperatingSystemOutputReference.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOperatingSystemOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOperatingSystem">DataOciJmsFleetInstallationSiteItemsOperatingSystem</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOperatingSystemOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOperatingSystemOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `architecture`<sup>Required</sup> <a name="architecture" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOperatingSystemOutputReference.property.architecture"></a>

```python
architecture: str
```

- *Type:* str

---

##### `family`<sup>Required</sup> <a name="family" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOperatingSystemOutputReference.property.family"></a>

```python
family: str
```

- *Type:* str

---

##### `managed_instance_count`<sup>Required</sup> <a name="managed_instance_count" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOperatingSystemOutputReference.property.managedInstanceCount"></a>

```python
managed_instance_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOperatingSystemOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOperatingSystemOutputReference.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOperatingSystemOutputReference.property.internalValue"></a>

```python
internal_value: DataOciJmsFleetInstallationSiteItemsOperatingSystem
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOperatingSystem">DataOciJmsFleetInstallationSiteItemsOperatingSystem</a>

---


### DataOciJmsFleetInstallationSiteItemsOutputReference <a name="DataOciJmsFleetInstallationSiteItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_jms_fleet_installation_site

dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOutputReference.property.approximateApplicationCount">approximate_application_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOutputReference.property.blocklist">blocklist</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsBlocklistStructList">DataOciJmsFleetInstallationSiteItemsBlocklistStructList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOutputReference.property.installationKey">installation_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOutputReference.property.jre">jre</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsJreList">DataOciJmsFleetInstallationSiteItemsJreList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOutputReference.property.managedInstanceId">managed_instance_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOutputReference.property.operatingSystem">operating_system</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOperatingSystemList">DataOciJmsFleetInstallationSiteItemsOperatingSystemList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOutputReference.property.path">path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOutputReference.property.securityStatus">security_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOutputReference.property.timeLastSeen">time_last_seen</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItems">DataOciJmsFleetInstallationSiteItems</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `approximate_application_count`<sup>Required</sup> <a name="approximate_application_count" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOutputReference.property.approximateApplicationCount"></a>

```python
approximate_application_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `blocklist`<sup>Required</sup> <a name="blocklist" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOutputReference.property.blocklist"></a>

```python
blocklist: DataOciJmsFleetInstallationSiteItemsBlocklistStructList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsBlocklistStructList">DataOciJmsFleetInstallationSiteItemsBlocklistStructList</a>

---

##### `installation_key`<sup>Required</sup> <a name="installation_key" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOutputReference.property.installationKey"></a>

```python
installation_key: str
```

- *Type:* str

---

##### `jre`<sup>Required</sup> <a name="jre" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOutputReference.property.jre"></a>

```python
jre: DataOciJmsFleetInstallationSiteItemsJreList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsJreList">DataOciJmsFleetInstallationSiteItemsJreList</a>

---

##### `managed_instance_id`<sup>Required</sup> <a name="managed_instance_id" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOutputReference.property.managedInstanceId"></a>

```python
managed_instance_id: str
```

- *Type:* str

---

##### `operating_system`<sup>Required</sup> <a name="operating_system" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOutputReference.property.operatingSystem"></a>

```python
operating_system: DataOciJmsFleetInstallationSiteItemsOperatingSystemList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOperatingSystemList">DataOciJmsFleetInstallationSiteItemsOperatingSystemList</a>

---

##### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOutputReference.property.path"></a>

```python
path: str
```

- *Type:* str

---

##### `security_status`<sup>Required</sup> <a name="security_status" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOutputReference.property.securityStatus"></a>

```python
security_status: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `time_last_seen`<sup>Required</sup> <a name="time_last_seen" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOutputReference.property.timeLastSeen"></a>

```python
time_last_seen: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciJmsFleetInstallationSiteItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItems">DataOciJmsFleetInstallationSiteItems</a>

---



