# `dataOciApmSyntheticsMonitors` Submodule <a name="`dataOciApmSyntheticsMonitors` Submodule" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciApmSyntheticsMonitors <a name="DataOciApmSyntheticsMonitors" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_monitors oci_apm_synthetics_monitors}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apm_synthetics_monitors

dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  apm_domain_id: str,
  display_name: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciApmSyntheticsMonitorsFilter]] = None,
  id: str = None,
  is_maintenance_window_active: typing.Union[bool, IResolvable] = None,
  is_maintenance_window_set: typing.Union[bool, IResolvable] = None,
  monitor_type: str = None,
  script_id: str = None,
  status: str = None,
  vantage_point: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.Initializer.parameter.apmDomainId">apm_domain_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_monitors#apm_domain_id DataOciApmSyntheticsMonitors#apm_domain_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_monitors#display_name DataOciApmSyntheticsMonitors#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilter">DataOciApmSyntheticsMonitorsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_monitors#id DataOciApmSyntheticsMonitors#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.Initializer.parameter.isMaintenanceWindowActive">is_maintenance_window_active</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_monitors#is_maintenance_window_active DataOciApmSyntheticsMonitors#is_maintenance_window_active}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.Initializer.parameter.isMaintenanceWindowSet">is_maintenance_window_set</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_monitors#is_maintenance_window_set DataOciApmSyntheticsMonitors#is_maintenance_window_set}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.Initializer.parameter.monitorType">monitor_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_monitors#monitor_type DataOciApmSyntheticsMonitors#monitor_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.Initializer.parameter.scriptId">script_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_monitors#script_id DataOciApmSyntheticsMonitors#script_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.Initializer.parameter.status">status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_monitors#status DataOciApmSyntheticsMonitors#status}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.Initializer.parameter.vantagePoint">vantage_point</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_monitors#vantage_point DataOciApmSyntheticsMonitors#vantage_point}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `apm_domain_id`<sup>Required</sup> <a name="apm_domain_id" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.Initializer.parameter.apmDomainId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_monitors#apm_domain_id DataOciApmSyntheticsMonitors#apm_domain_id}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_monitors#display_name DataOciApmSyntheticsMonitors#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilter">DataOciApmSyntheticsMonitorsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_monitors#filter DataOciApmSyntheticsMonitors#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_monitors#id DataOciApmSyntheticsMonitors#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `is_maintenance_window_active`<sup>Optional</sup> <a name="is_maintenance_window_active" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.Initializer.parameter.isMaintenanceWindowActive"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_monitors#is_maintenance_window_active DataOciApmSyntheticsMonitors#is_maintenance_window_active}.

---

##### `is_maintenance_window_set`<sup>Optional</sup> <a name="is_maintenance_window_set" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.Initializer.parameter.isMaintenanceWindowSet"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_monitors#is_maintenance_window_set DataOciApmSyntheticsMonitors#is_maintenance_window_set}.

---

##### `monitor_type`<sup>Optional</sup> <a name="monitor_type" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.Initializer.parameter.monitorType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_monitors#monitor_type DataOciApmSyntheticsMonitors#monitor_type}.

---

##### `script_id`<sup>Optional</sup> <a name="script_id" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.Initializer.parameter.scriptId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_monitors#script_id DataOciApmSyntheticsMonitors#script_id}.

---

##### `status`<sup>Optional</sup> <a name="status" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.Initializer.parameter.status"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_monitors#status DataOciApmSyntheticsMonitors#status}.

---

##### `vantage_point`<sup>Optional</sup> <a name="vantage_point" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.Initializer.parameter.vantagePoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_monitors#vantage_point DataOciApmSyntheticsMonitors#vantage_point}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.resetIsMaintenanceWindowActive">reset_is_maintenance_window_active</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.resetIsMaintenanceWindowSet">reset_is_maintenance_window_set</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.resetMonitorType">reset_monitor_type</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.resetScriptId">reset_script_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.resetStatus">reset_status</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.resetVantagePoint">reset_vantage_point</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciApmSyntheticsMonitorsFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilter">DataOciApmSyntheticsMonitorsFilter</a>]]

---

##### `reset_display_name` <a name="reset_display_name" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_is_maintenance_window_active` <a name="reset_is_maintenance_window_active" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.resetIsMaintenanceWindowActive"></a>

```python
def reset_is_maintenance_window_active() -> None
```

##### `reset_is_maintenance_window_set` <a name="reset_is_maintenance_window_set" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.resetIsMaintenanceWindowSet"></a>

```python
def reset_is_maintenance_window_set() -> None
```

##### `reset_monitor_type` <a name="reset_monitor_type" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.resetMonitorType"></a>

```python
def reset_monitor_type() -> None
```

##### `reset_script_id` <a name="reset_script_id" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.resetScriptId"></a>

```python
def reset_script_id() -> None
```

##### `reset_status` <a name="reset_status" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.resetStatus"></a>

```python
def reset_status() -> None
```

##### `reset_vantage_point` <a name="reset_vantage_point" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.resetVantagePoint"></a>

```python
def reset_vantage_point() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciApmSyntheticsMonitors resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apm_synthetics_monitors

dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apm_synthetics_monitors

dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apm_synthetics_monitors

dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apm_synthetics_monitors

dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciApmSyntheticsMonitors resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciApmSyntheticsMonitors to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciApmSyntheticsMonitors that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_monitors#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciApmSyntheticsMonitors to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilterList">DataOciApmSyntheticsMonitorsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.property.monitorCollection">monitor_collection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionList">DataOciApmSyntheticsMonitorsMonitorCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.property.apmDomainIdInput">apm_domain_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilter">DataOciApmSyntheticsMonitorsFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.property.isMaintenanceWindowActiveInput">is_maintenance_window_active_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.property.isMaintenanceWindowSetInput">is_maintenance_window_set_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.property.monitorTypeInput">monitor_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.property.scriptIdInput">script_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.property.statusInput">status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.property.vantagePointInput">vantage_point_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.property.apmDomainId">apm_domain_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.property.isMaintenanceWindowActive">is_maintenance_window_active</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.property.isMaintenanceWindowSet">is_maintenance_window_set</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.property.monitorType">monitor_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.property.scriptId">script_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.property.vantagePoint">vantage_point</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.property.filter"></a>

```python
filter: DataOciApmSyntheticsMonitorsFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilterList">DataOciApmSyntheticsMonitorsFilterList</a>

---

##### `monitor_collection`<sup>Required</sup> <a name="monitor_collection" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.property.monitorCollection"></a>

```python
monitor_collection: DataOciApmSyntheticsMonitorsMonitorCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionList">DataOciApmSyntheticsMonitorsMonitorCollectionList</a>

---

##### `apm_domain_id_input`<sup>Optional</sup> <a name="apm_domain_id_input" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.property.apmDomainIdInput"></a>

```python
apm_domain_id_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciApmSyntheticsMonitorsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilter">DataOciApmSyntheticsMonitorsFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `is_maintenance_window_active_input`<sup>Optional</sup> <a name="is_maintenance_window_active_input" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.property.isMaintenanceWindowActiveInput"></a>

```python
is_maintenance_window_active_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_maintenance_window_set_input`<sup>Optional</sup> <a name="is_maintenance_window_set_input" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.property.isMaintenanceWindowSetInput"></a>

```python
is_maintenance_window_set_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `monitor_type_input`<sup>Optional</sup> <a name="monitor_type_input" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.property.monitorTypeInput"></a>

```python
monitor_type_input: str
```

- *Type:* str

---

##### `script_id_input`<sup>Optional</sup> <a name="script_id_input" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.property.scriptIdInput"></a>

```python
script_id_input: str
```

- *Type:* str

---

##### `status_input`<sup>Optional</sup> <a name="status_input" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.property.statusInput"></a>

```python
status_input: str
```

- *Type:* str

---

##### `vantage_point_input`<sup>Optional</sup> <a name="vantage_point_input" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.property.vantagePointInput"></a>

```python
vantage_point_input: str
```

- *Type:* str

---

##### `apm_domain_id`<sup>Required</sup> <a name="apm_domain_id" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.property.apmDomainId"></a>

```python
apm_domain_id: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `is_maintenance_window_active`<sup>Required</sup> <a name="is_maintenance_window_active" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.property.isMaintenanceWindowActive"></a>

```python
is_maintenance_window_active: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_maintenance_window_set`<sup>Required</sup> <a name="is_maintenance_window_set" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.property.isMaintenanceWindowSet"></a>

```python
is_maintenance_window_set: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `monitor_type`<sup>Required</sup> <a name="monitor_type" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.property.monitorType"></a>

```python
monitor_type: str
```

- *Type:* str

---

##### `script_id`<sup>Required</sup> <a name="script_id" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.property.scriptId"></a>

```python
script_id: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `vantage_point`<sup>Required</sup> <a name="vantage_point" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.property.vantagePoint"></a>

```python
vantage_point: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciApmSyntheticsMonitorsConfig <a name="DataOciApmSyntheticsMonitorsConfig" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apm_synthetics_monitors

dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  apm_domain_id: str,
  display_name: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciApmSyntheticsMonitorsFilter]] = None,
  id: str = None,
  is_maintenance_window_active: typing.Union[bool, IResolvable] = None,
  is_maintenance_window_set: typing.Union[bool, IResolvable] = None,
  monitor_type: str = None,
  script_id: str = None,
  status: str = None,
  vantage_point: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsConfig.property.apmDomainId">apm_domain_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_monitors#apm_domain_id DataOciApmSyntheticsMonitors#apm_domain_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_monitors#display_name DataOciApmSyntheticsMonitors#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilter">DataOciApmSyntheticsMonitorsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_monitors#id DataOciApmSyntheticsMonitors#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsConfig.property.isMaintenanceWindowActive">is_maintenance_window_active</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_monitors#is_maintenance_window_active DataOciApmSyntheticsMonitors#is_maintenance_window_active}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsConfig.property.isMaintenanceWindowSet">is_maintenance_window_set</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_monitors#is_maintenance_window_set DataOciApmSyntheticsMonitors#is_maintenance_window_set}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsConfig.property.monitorType">monitor_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_monitors#monitor_type DataOciApmSyntheticsMonitors#monitor_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsConfig.property.scriptId">script_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_monitors#script_id DataOciApmSyntheticsMonitors#script_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsConfig.property.status">status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_monitors#status DataOciApmSyntheticsMonitors#status}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsConfig.property.vantagePoint">vantage_point</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_monitors#vantage_point DataOciApmSyntheticsMonitors#vantage_point}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `apm_domain_id`<sup>Required</sup> <a name="apm_domain_id" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsConfig.property.apmDomainId"></a>

```python
apm_domain_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_monitors#apm_domain_id DataOciApmSyntheticsMonitors#apm_domain_id}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_monitors#display_name DataOciApmSyntheticsMonitors#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciApmSyntheticsMonitorsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilter">DataOciApmSyntheticsMonitorsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_monitors#filter DataOciApmSyntheticsMonitors#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_monitors#id DataOciApmSyntheticsMonitors#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `is_maintenance_window_active`<sup>Optional</sup> <a name="is_maintenance_window_active" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsConfig.property.isMaintenanceWindowActive"></a>

```python
is_maintenance_window_active: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_monitors#is_maintenance_window_active DataOciApmSyntheticsMonitors#is_maintenance_window_active}.

---

##### `is_maintenance_window_set`<sup>Optional</sup> <a name="is_maintenance_window_set" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsConfig.property.isMaintenanceWindowSet"></a>

```python
is_maintenance_window_set: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_monitors#is_maintenance_window_set DataOciApmSyntheticsMonitors#is_maintenance_window_set}.

---

##### `monitor_type`<sup>Optional</sup> <a name="monitor_type" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsConfig.property.monitorType"></a>

```python
monitor_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_monitors#monitor_type DataOciApmSyntheticsMonitors#monitor_type}.

---

##### `script_id`<sup>Optional</sup> <a name="script_id" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsConfig.property.scriptId"></a>

```python
script_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_monitors#script_id DataOciApmSyntheticsMonitors#script_id}.

---

##### `status`<sup>Optional</sup> <a name="status" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsConfig.property.status"></a>

```python
status: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_monitors#status DataOciApmSyntheticsMonitors#status}.

---

##### `vantage_point`<sup>Optional</sup> <a name="vantage_point" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsConfig.property.vantagePoint"></a>

```python
vantage_point: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_monitors#vantage_point DataOciApmSyntheticsMonitors#vantage_point}.

---

### DataOciApmSyntheticsMonitorsFilter <a name="DataOciApmSyntheticsMonitorsFilter" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apm_synthetics_monitors

dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_monitors#name DataOciApmSyntheticsMonitors#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_monitors#values DataOciApmSyntheticsMonitors#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_monitors#regex DataOciApmSyntheticsMonitors#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_monitors#name DataOciApmSyntheticsMonitors#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_monitors#values DataOciApmSyntheticsMonitors#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_monitors#regex DataOciApmSyntheticsMonitors#regex}.

---

### DataOciApmSyntheticsMonitorsMonitorCollection <a name="DataOciApmSyntheticsMonitorsMonitorCollection" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollection.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apm_synthetics_monitors

dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollection()
```


### DataOciApmSyntheticsMonitorsMonitorCollectionItems <a name="DataOciApmSyntheticsMonitorsMonitorCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItems.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apm_synthetics_monitors

dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItems()
```


### DataOciApmSyntheticsMonitorsMonitorCollectionItemsAvailabilityConfiguration <a name="DataOciApmSyntheticsMonitorsMonitorCollectionItemsAvailabilityConfiguration" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsAvailabilityConfiguration"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsAvailabilityConfiguration.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apm_synthetics_monitors

dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsAvailabilityConfiguration()
```


### DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfiguration <a name="DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfiguration" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfiguration"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfiguration.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apm_synthetics_monitors

dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfiguration()
```


### DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetails <a name="DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetails" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apm_synthetics_monitors

dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetails()
```


### DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsClientCertificate <a name="DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsClientCertificate" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsClientCertificate"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsClientCertificate.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apm_synthetics_monitors

dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsClientCertificate()
```


### DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsPrivateKey <a name="DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsPrivateKey" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsPrivateKey"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsPrivateKey.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apm_synthetics_monitors

dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsPrivateKey()
```


### DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetails <a name="DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetails" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apm_synthetics_monitors

dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetails()
```


### DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsPassword <a name="DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsPassword" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsPassword"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsPassword.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apm_synthetics_monitors

dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsPassword()
```


### DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseWalletDetails <a name="DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseWalletDetails" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseWalletDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseWalletDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apm_synthetics_monitors

dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseWalletDetails()
```


### DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDnsConfiguration <a name="DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDnsConfiguration" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDnsConfiguration"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDnsConfiguration.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apm_synthetics_monitors

dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDnsConfiguration()
```


### DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetails <a name="DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetails" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apm_synthetics_monitors

dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetails()
```


### DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsPassword <a name="DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsPassword" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsPassword"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsPassword.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apm_synthetics_monitors

dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsPassword()
```


### DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfiguration <a name="DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfiguration" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfiguration"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfiguration.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apm_synthetics_monitors

dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfiguration()
```


### DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetails <a name="DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetails" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apm_synthetics_monitors

dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetails()
```


### DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsAuthHeaders <a name="DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsAuthHeaders" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsAuthHeaders"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsAuthHeaders.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apm_synthetics_monitors

dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsAuthHeaders()
```


### DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestHeaders <a name="DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestHeaders" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestHeaders"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestHeaders.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apm_synthetics_monitors

dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestHeaders()
```


### DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestQueryParams <a name="DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestQueryParams" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestQueryParams"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestQueryParams.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apm_synthetics_monitors

dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestQueryParams()
```


### DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationVerifyTexts <a name="DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationVerifyTexts" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationVerifyTexts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationVerifyTexts.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apm_synthetics_monitors

dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationVerifyTexts()
```


### DataOciApmSyntheticsMonitorsMonitorCollectionItemsMaintenanceWindowSchedule <a name="DataOciApmSyntheticsMonitorsMonitorCollectionItemsMaintenanceWindowSchedule" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsMaintenanceWindowSchedule"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsMaintenanceWindowSchedule.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apm_synthetics_monitors

dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsMaintenanceWindowSchedule()
```


### DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParameters <a name="DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParameters" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParameters"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParameters.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apm_synthetics_monitors

dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParameters()
```


### DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersMonitorScriptParameter <a name="DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersMonitorScriptParameter" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersMonitorScriptParameter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersMonitorScriptParameter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apm_synthetics_monitors

dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersMonitorScriptParameter()
```


### DataOciApmSyntheticsMonitorsMonitorCollectionItemsVantagePoints <a name="DataOciApmSyntheticsMonitorsMonitorCollectionItemsVantagePoints" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsVantagePoints"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsVantagePoints.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apm_synthetics_monitors

dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsVantagePoints()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciApmSyntheticsMonitorsFilterList <a name="DataOciApmSyntheticsMonitorsFilterList" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apm_synthetics_monitors

dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciApmSyntheticsMonitorsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilter">DataOciApmSyntheticsMonitorsFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciApmSyntheticsMonitorsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilter">DataOciApmSyntheticsMonitorsFilter</a>]]

---


### DataOciApmSyntheticsMonitorsFilterOutputReference <a name="DataOciApmSyntheticsMonitorsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apm_synthetics_monitors

dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilter">DataOciApmSyntheticsMonitorsFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciApmSyntheticsMonitorsFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilter">DataOciApmSyntheticsMonitorsFilter</a>]

---


### DataOciApmSyntheticsMonitorsMonitorCollectionItemsAvailabilityConfigurationList <a name="DataOciApmSyntheticsMonitorsMonitorCollectionItemsAvailabilityConfigurationList" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsAvailabilityConfigurationList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsAvailabilityConfigurationList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apm_synthetics_monitors

dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsAvailabilityConfigurationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsAvailabilityConfigurationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsAvailabilityConfigurationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsAvailabilityConfigurationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsAvailabilityConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsAvailabilityConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsAvailabilityConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsAvailabilityConfigurationList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsAvailabilityConfigurationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsAvailabilityConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsAvailabilityConfigurationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsAvailabilityConfigurationList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsAvailabilityConfigurationList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsAvailabilityConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsAvailabilityConfigurationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsAvailabilityConfigurationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsAvailabilityConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsAvailabilityConfigurationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsAvailabilityConfigurationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciApmSyntheticsMonitorsMonitorCollectionItemsAvailabilityConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsAvailabilityConfigurationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsAvailabilityConfigurationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsAvailabilityConfigurationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsAvailabilityConfigurationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsAvailabilityConfigurationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciApmSyntheticsMonitorsMonitorCollectionItemsAvailabilityConfigurationOutputReference <a name="DataOciApmSyntheticsMonitorsMonitorCollectionItemsAvailabilityConfigurationOutputReference" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsAvailabilityConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsAvailabilityConfigurationOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apm_synthetics_monitors

dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsAvailabilityConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsAvailabilityConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsAvailabilityConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsAvailabilityConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsAvailabilityConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsAvailabilityConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsAvailabilityConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsAvailabilityConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsAvailabilityConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsAvailabilityConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsAvailabilityConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsAvailabilityConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsAvailabilityConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsAvailabilityConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsAvailabilityConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsAvailabilityConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsAvailabilityConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsAvailabilityConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsAvailabilityConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsAvailabilityConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsAvailabilityConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsAvailabilityConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsAvailabilityConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsAvailabilityConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsAvailabilityConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsAvailabilityConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsAvailabilityConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsAvailabilityConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsAvailabilityConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsAvailabilityConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsAvailabilityConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsAvailabilityConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsAvailabilityConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsAvailabilityConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsAvailabilityConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsAvailabilityConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsAvailabilityConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsAvailabilityConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsAvailabilityConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsAvailabilityConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsAvailabilityConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsAvailabilityConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsAvailabilityConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsAvailabilityConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsAvailabilityConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsAvailabilityConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsAvailabilityConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsAvailabilityConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsAvailabilityConfigurationOutputReference.property.maxAllowedFailuresPerInterval">max_allowed_failures_per_interval</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsAvailabilityConfigurationOutputReference.property.minAllowedRunsPerInterval">min_allowed_runs_per_interval</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsAvailabilityConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsAvailabilityConfiguration">DataOciApmSyntheticsMonitorsMonitorCollectionItemsAvailabilityConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsAvailabilityConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsAvailabilityConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `max_allowed_failures_per_interval`<sup>Required</sup> <a name="max_allowed_failures_per_interval" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsAvailabilityConfigurationOutputReference.property.maxAllowedFailuresPerInterval"></a>

```python
max_allowed_failures_per_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_allowed_runs_per_interval`<sup>Required</sup> <a name="min_allowed_runs_per_interval" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsAvailabilityConfigurationOutputReference.property.minAllowedRunsPerInterval"></a>

```python
min_allowed_runs_per_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsAvailabilityConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataOciApmSyntheticsMonitorsMonitorCollectionItemsAvailabilityConfiguration
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsAvailabilityConfiguration">DataOciApmSyntheticsMonitorsMonitorCollectionItemsAvailabilityConfiguration</a>

---


### DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsClientCertificateList <a name="DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsClientCertificateList" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsClientCertificateList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsClientCertificateList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apm_synthetics_monitors

dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsClientCertificateList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsClientCertificateList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsClientCertificateList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsClientCertificateList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsClientCertificateList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsClientCertificateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsClientCertificateList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsClientCertificateList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsClientCertificateList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsClientCertificateList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsClientCertificateList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsClientCertificateList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsClientCertificateList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsClientCertificateList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsClientCertificateList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsClientCertificateList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsClientCertificateList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsClientCertificateList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsClientCertificateList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsClientCertificateOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsClientCertificateList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsClientCertificateList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsClientCertificateList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsClientCertificateList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsClientCertificateList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsClientCertificateOutputReference <a name="DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsClientCertificateOutputReference" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsClientCertificateOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsClientCertificateOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apm_synthetics_monitors

dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsClientCertificateOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsClientCertificateOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsClientCertificateOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsClientCertificateOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsClientCertificateOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsClientCertificateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsClientCertificateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsClientCertificateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsClientCertificateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsClientCertificateOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsClientCertificateOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsClientCertificateOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsClientCertificateOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsClientCertificateOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsClientCertificateOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsClientCertificateOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsClientCertificateOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsClientCertificateOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsClientCertificateOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsClientCertificateOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsClientCertificateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsClientCertificateOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsClientCertificateOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsClientCertificateOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsClientCertificateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsClientCertificateOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsClientCertificateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsClientCertificateOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsClientCertificateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsClientCertificateOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsClientCertificateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsClientCertificateOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsClientCertificateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsClientCertificateOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsClientCertificateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsClientCertificateOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsClientCertificateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsClientCertificateOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsClientCertificateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsClientCertificateOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsClientCertificateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsClientCertificateOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsClientCertificateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsClientCertificateOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsClientCertificateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsClientCertificateOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsClientCertificateOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsClientCertificateOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsClientCertificateOutputReference.property.content">content</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsClientCertificateOutputReference.property.fileName">file_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsClientCertificateOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsClientCertificate">DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsClientCertificate</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsClientCertificateOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsClientCertificateOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `content`<sup>Required</sup> <a name="content" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsClientCertificateOutputReference.property.content"></a>

```python
content: str
```

- *Type:* str

---

##### `file_name`<sup>Required</sup> <a name="file_name" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsClientCertificateOutputReference.property.fileName"></a>

```python
file_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsClientCertificateOutputReference.property.internalValue"></a>

```python
internal_value: DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsClientCertificate
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsClientCertificate">DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsClientCertificate</a>

---


### DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsList <a name="DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsList" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apm_synthetics_monitors

dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsOutputReference <a name="DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apm_synthetics_monitors

dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsOutputReference.property.clientCertificate">client_certificate</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsClientCertificateList">DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsClientCertificateList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsOutputReference.property.privateKey">private_key</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsPrivateKeyList">DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsPrivateKeyList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetails">DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `client_certificate`<sup>Required</sup> <a name="client_certificate" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsOutputReference.property.clientCertificate"></a>

```python
client_certificate: DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsClientCertificateList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsClientCertificateList">DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsClientCertificateList</a>

---

##### `private_key`<sup>Required</sup> <a name="private_key" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsOutputReference.property.privateKey"></a>

```python
private_key: DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsPrivateKeyList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsPrivateKeyList">DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsPrivateKeyList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetails">DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetails</a>

---


### DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsPrivateKeyList <a name="DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsPrivateKeyList" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsPrivateKeyList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsPrivateKeyList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apm_synthetics_monitors

dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsPrivateKeyList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsPrivateKeyList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsPrivateKeyList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsPrivateKeyList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsPrivateKeyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsPrivateKeyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsPrivateKeyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsPrivateKeyList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsPrivateKeyList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsPrivateKeyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsPrivateKeyList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsPrivateKeyList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsPrivateKeyList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsPrivateKeyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsPrivateKeyList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsPrivateKeyList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsPrivateKeyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsPrivateKeyList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsPrivateKeyList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsPrivateKeyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsPrivateKeyList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsPrivateKeyList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsPrivateKeyList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsPrivateKeyList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsPrivateKeyList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsPrivateKeyOutputReference <a name="DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsPrivateKeyOutputReference" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsPrivateKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsPrivateKeyOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apm_synthetics_monitors

dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsPrivateKeyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsPrivateKeyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsPrivateKeyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsPrivateKeyOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsPrivateKeyOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsPrivateKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsPrivateKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsPrivateKeyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsPrivateKeyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsPrivateKeyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsPrivateKeyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsPrivateKeyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsPrivateKeyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsPrivateKeyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsPrivateKeyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsPrivateKeyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsPrivateKeyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsPrivateKeyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsPrivateKeyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsPrivateKeyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsPrivateKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsPrivateKeyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsPrivateKeyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsPrivateKeyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsPrivateKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsPrivateKeyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsPrivateKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsPrivateKeyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsPrivateKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsPrivateKeyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsPrivateKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsPrivateKeyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsPrivateKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsPrivateKeyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsPrivateKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsPrivateKeyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsPrivateKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsPrivateKeyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsPrivateKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsPrivateKeyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsPrivateKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsPrivateKeyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsPrivateKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsPrivateKeyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsPrivateKeyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsPrivateKeyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsPrivateKeyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsPrivateKeyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsPrivateKeyOutputReference.property.content">content</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsPrivateKeyOutputReference.property.fileName">file_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsPrivateKeyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsPrivateKey">DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsPrivateKey</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsPrivateKeyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsPrivateKeyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `content`<sup>Required</sup> <a name="content" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsPrivateKeyOutputReference.property.content"></a>

```python
content: str
```

- *Type:* str

---

##### `file_name`<sup>Required</sup> <a name="file_name" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsPrivateKeyOutputReference.property.fileName"></a>

```python
file_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsPrivateKeyOutputReference.property.internalValue"></a>

```python
internal_value: DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsPrivateKey
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsPrivateKey">DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsPrivateKey</a>

---


### DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsList <a name="DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsList" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apm_synthetics_monitors

dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsOutputReference <a name="DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apm_synthetics_monitors

dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsOutputReference.property.password">password</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsPasswordList">DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsPasswordList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsOutputReference.property.username">username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetails">DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `password`<sup>Required</sup> <a name="password" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsOutputReference.property.password"></a>

```python
password: DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsPasswordList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsPasswordList">DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsPasswordList</a>

---

##### `username`<sup>Required</sup> <a name="username" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsOutputReference.property.username"></a>

```python
username: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetails">DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetails</a>

---


### DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsPasswordList <a name="DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsPasswordList" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsPasswordList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsPasswordList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apm_synthetics_monitors

dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsPasswordList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsPasswordList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsPasswordList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsPasswordList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsPasswordList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsPasswordList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsPasswordList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsPasswordList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsPasswordList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsPasswordList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsPasswordList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsPasswordList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsPasswordList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsPasswordList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsPasswordList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsPasswordList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsPasswordList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsPasswordList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsPasswordList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsPasswordOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsPasswordList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsPasswordList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsPasswordList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsPasswordList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsPasswordList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsPasswordOutputReference <a name="DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsPasswordOutputReference" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsPasswordOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apm_synthetics_monitors

dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsPasswordOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.property.password">password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.property.passwordType">password_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.property.vaultSecretId">vault_secret_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsPassword">DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsPassword</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `password`<sup>Required</sup> <a name="password" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.property.password"></a>

```python
password: str
```

- *Type:* str

---

##### `password_type`<sup>Required</sup> <a name="password_type" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.property.passwordType"></a>

```python
password_type: str
```

- *Type:* str

---

##### `vault_secret_id`<sup>Required</sup> <a name="vault_secret_id" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.property.vaultSecretId"></a>

```python
vault_secret_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.property.internalValue"></a>

```python
internal_value: DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsPassword
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsPassword">DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsPassword</a>

---


### DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseWalletDetailsList <a name="DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseWalletDetailsList" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseWalletDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseWalletDetailsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apm_synthetics_monitors

dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseWalletDetailsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseWalletDetailsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseWalletDetailsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseWalletDetailsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseWalletDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseWalletDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseWalletDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseWalletDetailsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseWalletDetailsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseWalletDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseWalletDetailsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseWalletDetailsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseWalletDetailsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseWalletDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseWalletDetailsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseWalletDetailsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseWalletDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseWalletDetailsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseWalletDetailsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseWalletDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseWalletDetailsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseWalletDetailsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseWalletDetailsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseWalletDetailsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseWalletDetailsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseWalletDetailsOutputReference <a name="DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseWalletDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseWalletDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseWalletDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apm_synthetics_monitors

dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseWalletDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseWalletDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseWalletDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseWalletDetailsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseWalletDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseWalletDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseWalletDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseWalletDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseWalletDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseWalletDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseWalletDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseWalletDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseWalletDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseWalletDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseWalletDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseWalletDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseWalletDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseWalletDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseWalletDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseWalletDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseWalletDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseWalletDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseWalletDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseWalletDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseWalletDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseWalletDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseWalletDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseWalletDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseWalletDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseWalletDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseWalletDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseWalletDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseWalletDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseWalletDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseWalletDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseWalletDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseWalletDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseWalletDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseWalletDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseWalletDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseWalletDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseWalletDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseWalletDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseWalletDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseWalletDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseWalletDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseWalletDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseWalletDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseWalletDetailsOutputReference.property.databaseWallet">database_wallet</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseWalletDetailsOutputReference.property.serviceName">service_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseWalletDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseWalletDetails">DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseWalletDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseWalletDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseWalletDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `database_wallet`<sup>Required</sup> <a name="database_wallet" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseWalletDetailsOutputReference.property.databaseWallet"></a>

```python
database_wallet: str
```

- *Type:* str

---

##### `service_name`<sup>Required</sup> <a name="service_name" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseWalletDetailsOutputReference.property.serviceName"></a>

```python
service_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseWalletDetailsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseWalletDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseWalletDetails">DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseWalletDetails</a>

---


### DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDnsConfigurationList <a name="DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDnsConfigurationList" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDnsConfigurationList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDnsConfigurationList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apm_synthetics_monitors

dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDnsConfigurationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDnsConfigurationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDnsConfigurationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDnsConfigurationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDnsConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDnsConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDnsConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDnsConfigurationList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDnsConfigurationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDnsConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDnsConfigurationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDnsConfigurationList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDnsConfigurationList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDnsConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDnsConfigurationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDnsConfigurationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDnsConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDnsConfigurationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDnsConfigurationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDnsConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDnsConfigurationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDnsConfigurationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDnsConfigurationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDnsConfigurationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDnsConfigurationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDnsConfigurationOutputReference <a name="DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDnsConfigurationOutputReference" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDnsConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDnsConfigurationOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apm_synthetics_monitors

dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDnsConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDnsConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDnsConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDnsConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDnsConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDnsConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDnsConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDnsConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDnsConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDnsConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDnsConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDnsConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDnsConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDnsConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDnsConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDnsConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDnsConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDnsConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDnsConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDnsConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDnsConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDnsConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDnsConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDnsConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDnsConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDnsConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDnsConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDnsConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDnsConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDnsConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDnsConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDnsConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDnsConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDnsConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDnsConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDnsConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDnsConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDnsConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDnsConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDnsConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDnsConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDnsConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDnsConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDnsConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDnsConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDnsConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDnsConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDnsConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDnsConfigurationOutputReference.property.isOverrideDns">is_override_dns</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDnsConfigurationOutputReference.property.overrideDnsIp">override_dns_ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDnsConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDnsConfiguration">DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDnsConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDnsConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDnsConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `is_override_dns`<sup>Required</sup> <a name="is_override_dns" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDnsConfigurationOutputReference.property.isOverrideDns"></a>

```python
is_override_dns: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `override_dns_ip`<sup>Required</sup> <a name="override_dns_ip" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDnsConfigurationOutputReference.property.overrideDnsIp"></a>

```python
override_dns_ip: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDnsConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDnsConfiguration
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDnsConfiguration">DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDnsConfiguration</a>

---


### DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsList <a name="DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsList" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apm_synthetics_monitors

dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsOutputReference <a name="DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apm_synthetics_monitors

dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsOutputReference.property.password">password</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsPasswordList">DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsPasswordList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsOutputReference.property.username">username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetails">DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `password`<sup>Required</sup> <a name="password" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsOutputReference.property.password"></a>

```python
password: DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsPasswordList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsPasswordList">DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsPasswordList</a>

---

##### `username`<sup>Required</sup> <a name="username" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsOutputReference.property.username"></a>

```python
username: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetails">DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetails</a>

---


### DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsPasswordList <a name="DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsPasswordList" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsPasswordList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsPasswordList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apm_synthetics_monitors

dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsPasswordList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsPasswordList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsPasswordList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsPasswordList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsPasswordList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsPasswordList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsPasswordList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsPasswordList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsPasswordList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsPasswordList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsPasswordList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsPasswordList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsPasswordList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsPasswordList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsPasswordList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsPasswordList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsPasswordList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsPasswordList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsPasswordList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsPasswordList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsPasswordList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsPasswordList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsPasswordList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsPasswordList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference <a name="DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apm_synthetics_monitors

dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.property.password">password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.property.passwordType">password_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.property.vaultSecretId">vault_secret_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsPassword">DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsPassword</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `password`<sup>Required</sup> <a name="password" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.property.password"></a>

```python
password: str
```

- *Type:* str

---

##### `password_type`<sup>Required</sup> <a name="password_type" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.property.passwordType"></a>

```python
password_type: str
```

- *Type:* str

---

##### `vault_secret_id`<sup>Required</sup> <a name="vault_secret_id" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.property.vaultSecretId"></a>

```python
vault_secret_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.property.internalValue"></a>

```python
internal_value: DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsPassword
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsPassword">DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsPassword</a>

---


### DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationList <a name="DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationList" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apm_synthetics_monitors

dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfigurationList <a name="DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfigurationList" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfigurationList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfigurationList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apm_synthetics_monitors

dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfigurationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfigurationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfigurationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfigurationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfigurationList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfigurationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfigurationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfigurationList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfigurationList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfigurationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfigurationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfigurationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfigurationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfigurationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfigurationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfigurationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfigurationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfigurationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfigurationOutputReference <a name="DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfigurationOutputReference" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfigurationOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apm_synthetics_monitors

dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfigurationOutputReference.property.numberOfHops">number_of_hops</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfigurationOutputReference.property.probeMode">probe_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfigurationOutputReference.property.probePerHop">probe_per_hop</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfigurationOutputReference.property.protocol">protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfigurationOutputReference.property.transmissionRate">transmission_rate</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfiguration">DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `number_of_hops`<sup>Required</sup> <a name="number_of_hops" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfigurationOutputReference.property.numberOfHops"></a>

```python
number_of_hops: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `probe_mode`<sup>Required</sup> <a name="probe_mode" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfigurationOutputReference.property.probeMode"></a>

```python
probe_mode: str
```

- *Type:* str

---

##### `probe_per_hop`<sup>Required</sup> <a name="probe_per_hop" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfigurationOutputReference.property.probePerHop"></a>

```python
probe_per_hop: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfigurationOutputReference.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

---

##### `transmission_rate`<sup>Required</sup> <a name="transmission_rate" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfigurationOutputReference.property.transmissionRate"></a>

```python
transmission_rate: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfiguration
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfiguration">DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfiguration</a>

---


### DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference <a name="DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apm_synthetics_monitors

dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.property.clientCertificateDetails">client_certificate_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsList">DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.property.configType">config_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.property.connectionString">connection_string</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.property.databaseAuthenticationDetails">database_authentication_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsList">DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.property.databaseConnectionType">database_connection_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.property.databaseRole">database_role</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.property.databaseType">database_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.property.databaseWalletDetails">database_wallet_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseWalletDetailsList">DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseWalletDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.property.dnsConfiguration">dns_configuration</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDnsConfigurationList">DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDnsConfigurationList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.property.downloadSizeLimitInBytes">download_size_limit_in_bytes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.property.ftpBasicAuthenticationDetails">ftp_basic_authentication_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsList">DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.property.ftpProtocol">ftp_protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.property.ftpRequestType">ftp_request_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.property.isActiveMode">is_active_mode</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.property.isCertificateValidationEnabled">is_certificate_validation_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.property.isDefaultSnapshotEnabled">is_default_snapshot_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.property.isFailureRetried">is_failure_retried</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.property.isQueryRecursive">is_query_recursive</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.property.isRedirectionEnabled">is_redirection_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.property.nameServer">name_server</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.property.networkConfiguration">network_configuration</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfigurationList">DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfigurationList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.property.protocol">protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.property.query">query</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.property.recordType">record_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.property.reqAuthenticationDetails">req_authentication_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsList">DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.property.reqAuthenticationScheme">req_authentication_scheme</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.property.requestHeaders">request_headers</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestHeadersList">DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestHeadersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.property.requestMethod">request_method</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.property.requestPostBody">request_post_body</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.property.requestQueryParams">request_query_params</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestQueryParamsList">DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestQueryParamsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.property.uploadFileSizeInBytes">upload_file_size_in_bytes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.property.verifyResponseCodes">verify_response_codes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.property.verifyResponseContent">verify_response_content</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.property.verifyTexts">verify_texts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationVerifyTextsList">DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationVerifyTextsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfiguration">DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `client_certificate_details`<sup>Required</sup> <a name="client_certificate_details" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.property.clientCertificateDetails"></a>

```python
client_certificate_details: DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsList">DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsList</a>

---

##### `config_type`<sup>Required</sup> <a name="config_type" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.property.configType"></a>

```python
config_type: str
```

- *Type:* str

---

##### `connection_string`<sup>Required</sup> <a name="connection_string" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.property.connectionString"></a>

```python
connection_string: str
```

- *Type:* str

---

##### `database_authentication_details`<sup>Required</sup> <a name="database_authentication_details" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.property.databaseAuthenticationDetails"></a>

```python
database_authentication_details: DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsList">DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsList</a>

---

##### `database_connection_type`<sup>Required</sup> <a name="database_connection_type" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.property.databaseConnectionType"></a>

```python
database_connection_type: str
```

- *Type:* str

---

##### `database_role`<sup>Required</sup> <a name="database_role" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.property.databaseRole"></a>

```python
database_role: str
```

- *Type:* str

---

##### `database_type`<sup>Required</sup> <a name="database_type" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.property.databaseType"></a>

```python
database_type: str
```

- *Type:* str

---

##### `database_wallet_details`<sup>Required</sup> <a name="database_wallet_details" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.property.databaseWalletDetails"></a>

```python
database_wallet_details: DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseWalletDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseWalletDetailsList">DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseWalletDetailsList</a>

---

##### `dns_configuration`<sup>Required</sup> <a name="dns_configuration" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.property.dnsConfiguration"></a>

```python
dns_configuration: DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDnsConfigurationList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDnsConfigurationList">DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDnsConfigurationList</a>

---

##### `download_size_limit_in_bytes`<sup>Required</sup> <a name="download_size_limit_in_bytes" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.property.downloadSizeLimitInBytes"></a>

```python
download_size_limit_in_bytes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ftp_basic_authentication_details`<sup>Required</sup> <a name="ftp_basic_authentication_details" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.property.ftpBasicAuthenticationDetails"></a>

```python
ftp_basic_authentication_details: DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsList">DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsList</a>

---

##### `ftp_protocol`<sup>Required</sup> <a name="ftp_protocol" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.property.ftpProtocol"></a>

```python
ftp_protocol: str
```

- *Type:* str

---

##### `ftp_request_type`<sup>Required</sup> <a name="ftp_request_type" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.property.ftpRequestType"></a>

```python
ftp_request_type: str
```

- *Type:* str

---

##### `is_active_mode`<sup>Required</sup> <a name="is_active_mode" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.property.isActiveMode"></a>

```python
is_active_mode: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_certificate_validation_enabled`<sup>Required</sup> <a name="is_certificate_validation_enabled" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.property.isCertificateValidationEnabled"></a>

```python
is_certificate_validation_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_default_snapshot_enabled`<sup>Required</sup> <a name="is_default_snapshot_enabled" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.property.isDefaultSnapshotEnabled"></a>

```python
is_default_snapshot_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_failure_retried`<sup>Required</sup> <a name="is_failure_retried" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.property.isFailureRetried"></a>

```python
is_failure_retried: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_query_recursive`<sup>Required</sup> <a name="is_query_recursive" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.property.isQueryRecursive"></a>

```python
is_query_recursive: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_redirection_enabled`<sup>Required</sup> <a name="is_redirection_enabled" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.property.isRedirectionEnabled"></a>

```python
is_redirection_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `name_server`<sup>Required</sup> <a name="name_server" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.property.nameServer"></a>

```python
name_server: str
```

- *Type:* str

---

##### `network_configuration`<sup>Required</sup> <a name="network_configuration" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.property.networkConfiguration"></a>

```python
network_configuration: DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfigurationList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfigurationList">DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfigurationList</a>

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

---

##### `query`<sup>Required</sup> <a name="query" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.property.query"></a>

```python
query: str
```

- *Type:* str

---

##### `record_type`<sup>Required</sup> <a name="record_type" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.property.recordType"></a>

```python
record_type: str
```

- *Type:* str

---

##### `req_authentication_details`<sup>Required</sup> <a name="req_authentication_details" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.property.reqAuthenticationDetails"></a>

```python
req_authentication_details: DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsList">DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsList</a>

---

##### `req_authentication_scheme`<sup>Required</sup> <a name="req_authentication_scheme" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.property.reqAuthenticationScheme"></a>

```python
req_authentication_scheme: str
```

- *Type:* str

---

##### `request_headers`<sup>Required</sup> <a name="request_headers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.property.requestHeaders"></a>

```python
request_headers: DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestHeadersList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestHeadersList">DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestHeadersList</a>

---

##### `request_method`<sup>Required</sup> <a name="request_method" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.property.requestMethod"></a>

```python
request_method: str
```

- *Type:* str

---

##### `request_post_body`<sup>Required</sup> <a name="request_post_body" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.property.requestPostBody"></a>

```python
request_post_body: str
```

- *Type:* str

---

##### `request_query_params`<sup>Required</sup> <a name="request_query_params" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.property.requestQueryParams"></a>

```python
request_query_params: DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestQueryParamsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestQueryParamsList">DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestQueryParamsList</a>

---

##### `upload_file_size_in_bytes`<sup>Required</sup> <a name="upload_file_size_in_bytes" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.property.uploadFileSizeInBytes"></a>

```python
upload_file_size_in_bytes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `verify_response_codes`<sup>Required</sup> <a name="verify_response_codes" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.property.verifyResponseCodes"></a>

```python
verify_response_codes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `verify_response_content`<sup>Required</sup> <a name="verify_response_content" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.property.verifyResponseContent"></a>

```python
verify_response_content: str
```

- *Type:* str

---

##### `verify_texts`<sup>Required</sup> <a name="verify_texts" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.property.verifyTexts"></a>

```python
verify_texts: DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationVerifyTextsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationVerifyTextsList">DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationVerifyTextsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfiguration
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfiguration">DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfiguration</a>

---


### DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsAuthHeadersList <a name="DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsAuthHeadersList" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsAuthHeadersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsAuthHeadersList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apm_synthetics_monitors

dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsAuthHeadersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsAuthHeadersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsAuthHeadersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsAuthHeadersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsAuthHeadersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsAuthHeadersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsAuthHeadersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsAuthHeadersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsAuthHeadersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsAuthHeadersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsAuthHeadersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsAuthHeadersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsAuthHeadersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsAuthHeadersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsAuthHeadersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsAuthHeadersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsAuthHeadersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsAuthHeadersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsAuthHeadersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsAuthHeadersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsAuthHeadersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsAuthHeadersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsAuthHeadersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsAuthHeadersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsAuthHeadersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsAuthHeadersOutputReference <a name="DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsAuthHeadersOutputReference" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsAuthHeadersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apm_synthetics_monitors

dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsAuthHeadersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.property.headerName">header_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.property.headerValue">header_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsAuthHeaders">DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsAuthHeaders</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `header_name`<sup>Required</sup> <a name="header_name" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.property.headerName"></a>

```python
header_name: str
```

- *Type:* str

---

##### `header_value`<sup>Required</sup> <a name="header_value" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.property.headerValue"></a>

```python
header_value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.property.internalValue"></a>

```python
internal_value: DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsAuthHeaders
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsAuthHeaders">DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsAuthHeaders</a>

---


### DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsList <a name="DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsList" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apm_synthetics_monitors

dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsOutputReference <a name="DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apm_synthetics_monitors

dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsOutputReference.property.authHeaders">auth_headers</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsAuthHeadersList">DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsAuthHeadersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsOutputReference.property.authRequestMethod">auth_request_method</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsOutputReference.property.authRequestPostBody">auth_request_post_body</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsOutputReference.property.authToken">auth_token</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsOutputReference.property.authUrl">auth_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsOutputReference.property.authUserName">auth_user_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsOutputReference.property.authUserPassword">auth_user_password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsOutputReference.property.oauthScheme">oauth_scheme</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetails">DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `auth_headers`<sup>Required</sup> <a name="auth_headers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsOutputReference.property.authHeaders"></a>

```python
auth_headers: DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsAuthHeadersList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsAuthHeadersList">DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsAuthHeadersList</a>

---

##### `auth_request_method`<sup>Required</sup> <a name="auth_request_method" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsOutputReference.property.authRequestMethod"></a>

```python
auth_request_method: str
```

- *Type:* str

---

##### `auth_request_post_body`<sup>Required</sup> <a name="auth_request_post_body" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsOutputReference.property.authRequestPostBody"></a>

```python
auth_request_post_body: str
```

- *Type:* str

---

##### `auth_token`<sup>Required</sup> <a name="auth_token" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsOutputReference.property.authToken"></a>

```python
auth_token: str
```

- *Type:* str

---

##### `auth_url`<sup>Required</sup> <a name="auth_url" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsOutputReference.property.authUrl"></a>

```python
auth_url: str
```

- *Type:* str

---

##### `auth_user_name`<sup>Required</sup> <a name="auth_user_name" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsOutputReference.property.authUserName"></a>

```python
auth_user_name: str
```

- *Type:* str

---

##### `auth_user_password`<sup>Required</sup> <a name="auth_user_password" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsOutputReference.property.authUserPassword"></a>

```python
auth_user_password: str
```

- *Type:* str

---

##### `oauth_scheme`<sup>Required</sup> <a name="oauth_scheme" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsOutputReference.property.oauthScheme"></a>

```python
oauth_scheme: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetails">DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetails</a>

---


### DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestHeadersList <a name="DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestHeadersList" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestHeadersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestHeadersList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apm_synthetics_monitors

dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestHeadersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestHeadersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestHeadersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestHeadersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestHeadersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestHeadersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestHeadersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestHeadersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestHeadersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestHeadersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestHeadersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestHeadersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestHeadersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestHeadersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestHeadersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestHeadersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestHeadersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestHeadersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestHeadersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestHeadersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestHeadersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestHeadersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestHeadersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestHeadersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestHeadersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestHeadersOutputReference <a name="DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestHeadersOutputReference" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestHeadersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestHeadersOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apm_synthetics_monitors

dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestHeadersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestHeadersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestHeadersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestHeadersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestHeadersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestHeadersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestHeadersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestHeadersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestHeadersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestHeadersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestHeadersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestHeadersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestHeadersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestHeadersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestHeadersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestHeadersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestHeadersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestHeadersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestHeadersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestHeadersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestHeadersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestHeadersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestHeadersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestHeadersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestHeadersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestHeadersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestHeadersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestHeadersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestHeadersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestHeadersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestHeadersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestHeadersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestHeadersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestHeadersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestHeadersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestHeadersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestHeadersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestHeadersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestHeadersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestHeadersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestHeadersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestHeadersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestHeadersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestHeadersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestHeadersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestHeadersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestHeadersOutputReference.property.headerName">header_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestHeadersOutputReference.property.headerValue">header_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestHeadersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestHeaders">DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestHeaders</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestHeadersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestHeadersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `header_name`<sup>Required</sup> <a name="header_name" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestHeadersOutputReference.property.headerName"></a>

```python
header_name: str
```

- *Type:* str

---

##### `header_value`<sup>Required</sup> <a name="header_value" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestHeadersOutputReference.property.headerValue"></a>

```python
header_value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestHeadersOutputReference.property.internalValue"></a>

```python
internal_value: DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestHeaders
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestHeaders">DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestHeaders</a>

---


### DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestQueryParamsList <a name="DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestQueryParamsList" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestQueryParamsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestQueryParamsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apm_synthetics_monitors

dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestQueryParamsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestQueryParamsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestQueryParamsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestQueryParamsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestQueryParamsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestQueryParamsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestQueryParamsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestQueryParamsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestQueryParamsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestQueryParamsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestQueryParamsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestQueryParamsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestQueryParamsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestQueryParamsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestQueryParamsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestQueryParamsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestQueryParamsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestQueryParamsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestQueryParamsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestQueryParamsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestQueryParamsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestQueryParamsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestQueryParamsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestQueryParamsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestQueryParamsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestQueryParamsOutputReference <a name="DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestQueryParamsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestQueryParamsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestQueryParamsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apm_synthetics_monitors

dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestQueryParamsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestQueryParamsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestQueryParamsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestQueryParamsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestQueryParamsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestQueryParamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestQueryParamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestQueryParamsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestQueryParamsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestQueryParamsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestQueryParamsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestQueryParamsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestQueryParamsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestQueryParamsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestQueryParamsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestQueryParamsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestQueryParamsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestQueryParamsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestQueryParamsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestQueryParamsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestQueryParamsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestQueryParamsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestQueryParamsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestQueryParamsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestQueryParamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestQueryParamsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestQueryParamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestQueryParamsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestQueryParamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestQueryParamsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestQueryParamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestQueryParamsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestQueryParamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestQueryParamsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestQueryParamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestQueryParamsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestQueryParamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestQueryParamsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestQueryParamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestQueryParamsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestQueryParamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestQueryParamsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestQueryParamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestQueryParamsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestQueryParamsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestQueryParamsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestQueryParamsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestQueryParamsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestQueryParamsOutputReference.property.paramName">param_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestQueryParamsOutputReference.property.paramValue">param_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestQueryParamsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestQueryParams">DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestQueryParams</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestQueryParamsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestQueryParamsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `param_name`<sup>Required</sup> <a name="param_name" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestQueryParamsOutputReference.property.paramName"></a>

```python
param_name: str
```

- *Type:* str

---

##### `param_value`<sup>Required</sup> <a name="param_value" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestQueryParamsOutputReference.property.paramValue"></a>

```python
param_value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestQueryParamsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestQueryParams
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestQueryParams">DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestQueryParams</a>

---


### DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationVerifyTextsList <a name="DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationVerifyTextsList" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationVerifyTextsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationVerifyTextsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apm_synthetics_monitors

dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationVerifyTextsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationVerifyTextsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationVerifyTextsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationVerifyTextsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationVerifyTextsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationVerifyTextsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationVerifyTextsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationVerifyTextsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationVerifyTextsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationVerifyTextsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationVerifyTextsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationVerifyTextsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationVerifyTextsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationVerifyTextsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationVerifyTextsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationVerifyTextsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationVerifyTextsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationVerifyTextsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationVerifyTextsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationVerifyTextsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationVerifyTextsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationVerifyTextsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationVerifyTextsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationVerifyTextsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationVerifyTextsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationVerifyTextsOutputReference <a name="DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationVerifyTextsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationVerifyTextsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationVerifyTextsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apm_synthetics_monitors

dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationVerifyTextsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationVerifyTextsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationVerifyTextsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationVerifyTextsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationVerifyTextsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationVerifyTextsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationVerifyTextsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationVerifyTextsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationVerifyTextsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationVerifyTextsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationVerifyTextsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationVerifyTextsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationVerifyTextsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationVerifyTextsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationVerifyTextsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationVerifyTextsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationVerifyTextsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationVerifyTextsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationVerifyTextsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationVerifyTextsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationVerifyTextsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationVerifyTextsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationVerifyTextsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationVerifyTextsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationVerifyTextsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationVerifyTextsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationVerifyTextsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationVerifyTextsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationVerifyTextsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationVerifyTextsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationVerifyTextsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationVerifyTextsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationVerifyTextsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationVerifyTextsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationVerifyTextsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationVerifyTextsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationVerifyTextsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationVerifyTextsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationVerifyTextsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationVerifyTextsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationVerifyTextsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationVerifyTextsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationVerifyTextsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationVerifyTextsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationVerifyTextsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationVerifyTextsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationVerifyTextsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationVerifyTextsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationVerifyTextsOutputReference.property.text">text</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationVerifyTextsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationVerifyTexts">DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationVerifyTexts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationVerifyTextsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationVerifyTextsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `text`<sup>Required</sup> <a name="text" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationVerifyTextsOutputReference.property.text"></a>

```python
text: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationVerifyTextsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationVerifyTexts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationVerifyTexts">DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationVerifyTexts</a>

---


### DataOciApmSyntheticsMonitorsMonitorCollectionItemsList <a name="DataOciApmSyntheticsMonitorsMonitorCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apm_synthetics_monitors

dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciApmSyntheticsMonitorsMonitorCollectionItemsMaintenanceWindowScheduleList <a name="DataOciApmSyntheticsMonitorsMonitorCollectionItemsMaintenanceWindowScheduleList" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsMaintenanceWindowScheduleList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsMaintenanceWindowScheduleList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apm_synthetics_monitors

dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsMaintenanceWindowScheduleList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsMaintenanceWindowScheduleList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsMaintenanceWindowScheduleList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsMaintenanceWindowScheduleList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsMaintenanceWindowScheduleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsMaintenanceWindowScheduleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsMaintenanceWindowScheduleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsMaintenanceWindowScheduleList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsMaintenanceWindowScheduleList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsMaintenanceWindowScheduleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsMaintenanceWindowScheduleList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsMaintenanceWindowScheduleList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsMaintenanceWindowScheduleList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsMaintenanceWindowScheduleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsMaintenanceWindowScheduleList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsMaintenanceWindowScheduleList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsMaintenanceWindowScheduleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsMaintenanceWindowScheduleList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsMaintenanceWindowScheduleList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciApmSyntheticsMonitorsMonitorCollectionItemsMaintenanceWindowScheduleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsMaintenanceWindowScheduleList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsMaintenanceWindowScheduleList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsMaintenanceWindowScheduleList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsMaintenanceWindowScheduleList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsMaintenanceWindowScheduleList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciApmSyntheticsMonitorsMonitorCollectionItemsMaintenanceWindowScheduleOutputReference <a name="DataOciApmSyntheticsMonitorsMonitorCollectionItemsMaintenanceWindowScheduleOutputReference" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsMaintenanceWindowScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsMaintenanceWindowScheduleOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apm_synthetics_monitors

dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsMaintenanceWindowScheduleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsMaintenanceWindowScheduleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsMaintenanceWindowScheduleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsMaintenanceWindowScheduleOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsMaintenanceWindowScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsMaintenanceWindowScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsMaintenanceWindowScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsMaintenanceWindowScheduleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsMaintenanceWindowScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsMaintenanceWindowScheduleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsMaintenanceWindowScheduleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsMaintenanceWindowScheduleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsMaintenanceWindowScheduleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsMaintenanceWindowScheduleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsMaintenanceWindowScheduleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsMaintenanceWindowScheduleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsMaintenanceWindowScheduleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsMaintenanceWindowScheduleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsMaintenanceWindowScheduleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsMaintenanceWindowScheduleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsMaintenanceWindowScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsMaintenanceWindowScheduleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsMaintenanceWindowScheduleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsMaintenanceWindowScheduleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsMaintenanceWindowScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsMaintenanceWindowScheduleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsMaintenanceWindowScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsMaintenanceWindowScheduleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsMaintenanceWindowScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsMaintenanceWindowScheduleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsMaintenanceWindowScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsMaintenanceWindowScheduleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsMaintenanceWindowScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsMaintenanceWindowScheduleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsMaintenanceWindowScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsMaintenanceWindowScheduleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsMaintenanceWindowScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsMaintenanceWindowScheduleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsMaintenanceWindowScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsMaintenanceWindowScheduleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsMaintenanceWindowScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsMaintenanceWindowScheduleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsMaintenanceWindowScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsMaintenanceWindowScheduleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsMaintenanceWindowScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsMaintenanceWindowScheduleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsMaintenanceWindowScheduleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsMaintenanceWindowScheduleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsMaintenanceWindowScheduleOutputReference.property.timeEnded">time_ended</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsMaintenanceWindowScheduleOutputReference.property.timeStarted">time_started</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsMaintenanceWindowScheduleOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsMaintenanceWindowSchedule">DataOciApmSyntheticsMonitorsMonitorCollectionItemsMaintenanceWindowSchedule</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsMaintenanceWindowScheduleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsMaintenanceWindowScheduleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `time_ended`<sup>Required</sup> <a name="time_ended" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsMaintenanceWindowScheduleOutputReference.property.timeEnded"></a>

```python
time_ended: str
```

- *Type:* str

---

##### `time_started`<sup>Required</sup> <a name="time_started" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsMaintenanceWindowScheduleOutputReference.property.timeStarted"></a>

```python
time_started: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsMaintenanceWindowScheduleOutputReference.property.internalValue"></a>

```python
internal_value: DataOciApmSyntheticsMonitorsMonitorCollectionItemsMaintenanceWindowSchedule
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsMaintenanceWindowSchedule">DataOciApmSyntheticsMonitorsMonitorCollectionItemsMaintenanceWindowSchedule</a>

---


### DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference <a name="DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apm_synthetics_monitors

dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference.property.apmDomainId">apm_domain_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference.property.availabilityConfiguration">availability_configuration</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsAvailabilityConfigurationList">DataOciApmSyntheticsMonitorsMonitorCollectionItemsAvailabilityConfigurationList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference.property.batchIntervalInSeconds">batch_interval_in_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference.property.configuration">configuration</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationList">DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference.property.createdBy">created_by</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference.property.definedTags">defined_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference.property.freeformTags">freeform_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference.property.isIpv6">is_ipv6</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference.property.isRunNow">is_run_now</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference.property.isRunOnce">is_run_once</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference.property.lastUpdatedBy">last_updated_by</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference.property.maintenanceWindowSchedule">maintenance_window_schedule</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsMaintenanceWindowScheduleList">DataOciApmSyntheticsMonitorsMonitorCollectionItemsMaintenanceWindowScheduleList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference.property.monitorType">monitor_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference.property.repeatIntervalInSeconds">repeat_interval_in_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference.property.schedulingPolicy">scheduling_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference.property.scriptId">script_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference.property.scriptName">script_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference.property.scriptParameters">script_parameters</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersList">DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference.property.target">target</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference.property.timeoutInSeconds">timeout_in_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference.property.vantagePointCount">vantage_point_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference.property.vantagePoints">vantage_points</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsVantagePointsList">DataOciApmSyntheticsMonitorsMonitorCollectionItemsVantagePointsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItems">DataOciApmSyntheticsMonitorsMonitorCollectionItems</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `apm_domain_id`<sup>Required</sup> <a name="apm_domain_id" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference.property.apmDomainId"></a>

```python
apm_domain_id: str
```

- *Type:* str

---

##### `availability_configuration`<sup>Required</sup> <a name="availability_configuration" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference.property.availabilityConfiguration"></a>

```python
availability_configuration: DataOciApmSyntheticsMonitorsMonitorCollectionItemsAvailabilityConfigurationList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsAvailabilityConfigurationList">DataOciApmSyntheticsMonitorsMonitorCollectionItemsAvailabilityConfigurationList</a>

---

##### `batch_interval_in_seconds`<sup>Required</sup> <a name="batch_interval_in_seconds" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference.property.batchIntervalInSeconds"></a>

```python
batch_interval_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `configuration`<sup>Required</sup> <a name="configuration" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference.property.configuration"></a>

```python
configuration: DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationList">DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationList</a>

---

##### `created_by`<sup>Required</sup> <a name="created_by" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference.property.createdBy"></a>

```python
created_by: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference.property.definedTags"></a>

```python
defined_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference.property.freeformTags"></a>

```python
freeform_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `is_ipv6`<sup>Required</sup> <a name="is_ipv6" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference.property.isIpv6"></a>

```python
is_ipv6: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_run_now`<sup>Required</sup> <a name="is_run_now" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference.property.isRunNow"></a>

```python
is_run_now: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_run_once`<sup>Required</sup> <a name="is_run_once" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference.property.isRunOnce"></a>

```python
is_run_once: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `last_updated_by`<sup>Required</sup> <a name="last_updated_by" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference.property.lastUpdatedBy"></a>

```python
last_updated_by: str
```

- *Type:* str

---

##### `maintenance_window_schedule`<sup>Required</sup> <a name="maintenance_window_schedule" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference.property.maintenanceWindowSchedule"></a>

```python
maintenance_window_schedule: DataOciApmSyntheticsMonitorsMonitorCollectionItemsMaintenanceWindowScheduleList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsMaintenanceWindowScheduleList">DataOciApmSyntheticsMonitorsMonitorCollectionItemsMaintenanceWindowScheduleList</a>

---

##### `monitor_type`<sup>Required</sup> <a name="monitor_type" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference.property.monitorType"></a>

```python
monitor_type: str
```

- *Type:* str

---

##### `repeat_interval_in_seconds`<sup>Required</sup> <a name="repeat_interval_in_seconds" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference.property.repeatIntervalInSeconds"></a>

```python
repeat_interval_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `scheduling_policy`<sup>Required</sup> <a name="scheduling_policy" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference.property.schedulingPolicy"></a>

```python
scheduling_policy: str
```

- *Type:* str

---

##### `script_id`<sup>Required</sup> <a name="script_id" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference.property.scriptId"></a>

```python
script_id: str
```

- *Type:* str

---

##### `script_name`<sup>Required</sup> <a name="script_name" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference.property.scriptName"></a>

```python
script_name: str
```

- *Type:* str

---

##### `script_parameters`<sup>Required</sup> <a name="script_parameters" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference.property.scriptParameters"></a>

```python
script_parameters: DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersList">DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersList</a>

---

##### `status`<sup>Required</sup> <a name="status" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `target`<sup>Required</sup> <a name="target" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference.property.target"></a>

```python
target: str
```

- *Type:* str

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `timeout_in_seconds`<sup>Required</sup> <a name="timeout_in_seconds" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference.property.timeoutInSeconds"></a>

```python
timeout_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `vantage_point_count`<sup>Required</sup> <a name="vantage_point_count" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference.property.vantagePointCount"></a>

```python
vantage_point_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `vantage_points`<sup>Required</sup> <a name="vantage_points" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference.property.vantagePoints"></a>

```python
vantage_points: DataOciApmSyntheticsMonitorsMonitorCollectionItemsVantagePointsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsVantagePointsList">DataOciApmSyntheticsMonitorsMonitorCollectionItemsVantagePointsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciApmSyntheticsMonitorsMonitorCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItems">DataOciApmSyntheticsMonitorsMonitorCollectionItems</a>

---


### DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersList <a name="DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersList" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apm_synthetics_monitors

dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersMonitorScriptParameterList <a name="DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersMonitorScriptParameterList" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersMonitorScriptParameterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersMonitorScriptParameterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apm_synthetics_monitors

dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersMonitorScriptParameterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersMonitorScriptParameterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersMonitorScriptParameterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersMonitorScriptParameterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersMonitorScriptParameterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersMonitorScriptParameterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersMonitorScriptParameterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersMonitorScriptParameterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersMonitorScriptParameterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersMonitorScriptParameterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersMonitorScriptParameterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersMonitorScriptParameterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersMonitorScriptParameterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersMonitorScriptParameterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersMonitorScriptParameterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersMonitorScriptParameterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersMonitorScriptParameterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersMonitorScriptParameterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersMonitorScriptParameterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersMonitorScriptParameterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersMonitorScriptParameterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersMonitorScriptParameterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersMonitorScriptParameterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersMonitorScriptParameterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersMonitorScriptParameterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersMonitorScriptParameterOutputReference <a name="DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersMonitorScriptParameterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersMonitorScriptParameterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersMonitorScriptParameterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apm_synthetics_monitors

dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersMonitorScriptParameterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersMonitorScriptParameterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersMonitorScriptParameterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersMonitorScriptParameterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersMonitorScriptParameterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersMonitorScriptParameterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersMonitorScriptParameterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersMonitorScriptParameterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersMonitorScriptParameterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersMonitorScriptParameterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersMonitorScriptParameterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersMonitorScriptParameterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersMonitorScriptParameterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersMonitorScriptParameterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersMonitorScriptParameterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersMonitorScriptParameterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersMonitorScriptParameterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersMonitorScriptParameterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersMonitorScriptParameterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersMonitorScriptParameterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersMonitorScriptParameterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersMonitorScriptParameterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersMonitorScriptParameterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersMonitorScriptParameterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersMonitorScriptParameterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersMonitorScriptParameterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersMonitorScriptParameterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersMonitorScriptParameterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersMonitorScriptParameterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersMonitorScriptParameterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersMonitorScriptParameterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersMonitorScriptParameterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersMonitorScriptParameterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersMonitorScriptParameterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersMonitorScriptParameterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersMonitorScriptParameterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersMonitorScriptParameterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersMonitorScriptParameterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersMonitorScriptParameterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersMonitorScriptParameterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersMonitorScriptParameterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersMonitorScriptParameterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersMonitorScriptParameterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersMonitorScriptParameterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersMonitorScriptParameterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersMonitorScriptParameterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersMonitorScriptParameterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersMonitorScriptParameterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersMonitorScriptParameterOutputReference.property.paramName">param_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersMonitorScriptParameterOutputReference.property.paramValue">param_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersMonitorScriptParameterOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersMonitorScriptParameter">DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersMonitorScriptParameter</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersMonitorScriptParameterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersMonitorScriptParameterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `param_name`<sup>Required</sup> <a name="param_name" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersMonitorScriptParameterOutputReference.property.paramName"></a>

```python
param_name: str
```

- *Type:* str

---

##### `param_value`<sup>Required</sup> <a name="param_value" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersMonitorScriptParameterOutputReference.property.paramValue"></a>

```python
param_value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersMonitorScriptParameterOutputReference.property.internalValue"></a>

```python
internal_value: DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersMonitorScriptParameter
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersMonitorScriptParameter">DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersMonitorScriptParameter</a>

---


### DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersOutputReference <a name="DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersOutputReference" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apm_synthetics_monitors

dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersOutputReference.property.isOverwritten">is_overwritten</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersOutputReference.property.isSecret">is_secret</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersOutputReference.property.monitorScriptParameter">monitor_script_parameter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersMonitorScriptParameterList">DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersMonitorScriptParameterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersOutputReference.property.paramName">param_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersOutputReference.property.paramValue">param_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParameters">DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParameters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `is_overwritten`<sup>Required</sup> <a name="is_overwritten" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersOutputReference.property.isOverwritten"></a>

```python
is_overwritten: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_secret`<sup>Required</sup> <a name="is_secret" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersOutputReference.property.isSecret"></a>

```python
is_secret: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `monitor_script_parameter`<sup>Required</sup> <a name="monitor_script_parameter" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersOutputReference.property.monitorScriptParameter"></a>

```python
monitor_script_parameter: DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersMonitorScriptParameterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersMonitorScriptParameterList">DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersMonitorScriptParameterList</a>

---

##### `param_name`<sup>Required</sup> <a name="param_name" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersOutputReference.property.paramName"></a>

```python
param_name: str
```

- *Type:* str

---

##### `param_value`<sup>Required</sup> <a name="param_value" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersOutputReference.property.paramValue"></a>

```python
param_value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersOutputReference.property.internalValue"></a>

```python
internal_value: DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParameters
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParameters">DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParameters</a>

---


### DataOciApmSyntheticsMonitorsMonitorCollectionItemsVantagePointsList <a name="DataOciApmSyntheticsMonitorsMonitorCollectionItemsVantagePointsList" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsVantagePointsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsVantagePointsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apm_synthetics_monitors

dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsVantagePointsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsVantagePointsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsVantagePointsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsVantagePointsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsVantagePointsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsVantagePointsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsVantagePointsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsVantagePointsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsVantagePointsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsVantagePointsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsVantagePointsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsVantagePointsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsVantagePointsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsVantagePointsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsVantagePointsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsVantagePointsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsVantagePointsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsVantagePointsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsVantagePointsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciApmSyntheticsMonitorsMonitorCollectionItemsVantagePointsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsVantagePointsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsVantagePointsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsVantagePointsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsVantagePointsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsVantagePointsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciApmSyntheticsMonitorsMonitorCollectionItemsVantagePointsOutputReference <a name="DataOciApmSyntheticsMonitorsMonitorCollectionItemsVantagePointsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsVantagePointsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsVantagePointsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apm_synthetics_monitors

dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsVantagePointsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsVantagePointsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsVantagePointsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsVantagePointsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsVantagePointsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsVantagePointsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsVantagePointsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsVantagePointsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsVantagePointsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsVantagePointsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsVantagePointsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsVantagePointsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsVantagePointsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsVantagePointsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsVantagePointsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsVantagePointsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsVantagePointsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsVantagePointsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsVantagePointsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsVantagePointsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsVantagePointsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsVantagePointsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsVantagePointsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsVantagePointsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsVantagePointsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsVantagePointsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsVantagePointsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsVantagePointsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsVantagePointsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsVantagePointsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsVantagePointsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsVantagePointsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsVantagePointsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsVantagePointsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsVantagePointsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsVantagePointsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsVantagePointsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsVantagePointsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsVantagePointsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsVantagePointsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsVantagePointsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsVantagePointsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsVantagePointsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsVantagePointsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsVantagePointsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsVantagePointsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsVantagePointsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsVantagePointsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsVantagePointsOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsVantagePointsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsVantagePointsOutputReference.property.workerList">worker_list</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsVantagePointsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsVantagePoints">DataOciApmSyntheticsMonitorsMonitorCollectionItemsVantagePoints</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsVantagePointsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsVantagePointsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsVantagePointsOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsVantagePointsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `worker_list`<sup>Required</sup> <a name="worker_list" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsVantagePointsOutputReference.property.workerList"></a>

```python
worker_list: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsVantagePointsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciApmSyntheticsMonitorsMonitorCollectionItemsVantagePoints
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsVantagePoints">DataOciApmSyntheticsMonitorsMonitorCollectionItemsVantagePoints</a>

---


### DataOciApmSyntheticsMonitorsMonitorCollectionList <a name="DataOciApmSyntheticsMonitorsMonitorCollectionList" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apm_synthetics_monitors

dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciApmSyntheticsMonitorsMonitorCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciApmSyntheticsMonitorsMonitorCollectionOutputReference <a name="DataOciApmSyntheticsMonitorsMonitorCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apm_synthetics_monitors

dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsList">DataOciApmSyntheticsMonitorsMonitorCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollection">DataOciApmSyntheticsMonitorsMonitorCollection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionOutputReference.property.items"></a>

```python
items: DataOciApmSyntheticsMonitorsMonitorCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsList">DataOciApmSyntheticsMonitorsMonitorCollectionItemsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionOutputReference.property.internalValue"></a>

```python
internal_value: DataOciApmSyntheticsMonitorsMonitorCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollection">DataOciApmSyntheticsMonitorsMonitorCollection</a>

---



