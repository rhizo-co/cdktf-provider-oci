# `dataOciHealthChecksPingProbeResults` Submodule <a name="`dataOciHealthChecksPingProbeResults` Submodule" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciHealthChecksPingProbeResults <a name="DataOciHealthChecksPingProbeResults" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/health_checks_ping_probe_results oci_health_checks_ping_probe_results}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_health_checks_ping_probe_results

dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  probe_configuration_id: str,
  filter: typing.Union[IResolvable, typing.List[DataOciHealthChecksPingProbeResultsFilter]] = None,
  id: str = None,
  start_time_greater_than_or_equal_to: typing.Union[int, float] = None,
  start_time_less_than_or_equal_to: typing.Union[int, float] = None,
  target: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.Initializer.parameter.probeConfigurationId">probe_configuration_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/health_checks_ping_probe_results#probe_configuration_id DataOciHealthChecksPingProbeResults#probe_configuration_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilter">DataOciHealthChecksPingProbeResultsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/health_checks_ping_probe_results#id DataOciHealthChecksPingProbeResults#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.Initializer.parameter.startTimeGreaterThanOrEqualTo">start_time_greater_than_or_equal_to</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/health_checks_ping_probe_results#start_time_greater_than_or_equal_to DataOciHealthChecksPingProbeResults#start_time_greater_than_or_equal_to}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.Initializer.parameter.startTimeLessThanOrEqualTo">start_time_less_than_or_equal_to</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/health_checks_ping_probe_results#start_time_less_than_or_equal_to DataOciHealthChecksPingProbeResults#start_time_less_than_or_equal_to}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.Initializer.parameter.target">target</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/health_checks_ping_probe_results#target DataOciHealthChecksPingProbeResults#target}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `probe_configuration_id`<sup>Required</sup> <a name="probe_configuration_id" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.Initializer.parameter.probeConfigurationId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/health_checks_ping_probe_results#probe_configuration_id DataOciHealthChecksPingProbeResults#probe_configuration_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilter">DataOciHealthChecksPingProbeResultsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/health_checks_ping_probe_results#filter DataOciHealthChecksPingProbeResults#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/health_checks_ping_probe_results#id DataOciHealthChecksPingProbeResults#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `start_time_greater_than_or_equal_to`<sup>Optional</sup> <a name="start_time_greater_than_or_equal_to" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.Initializer.parameter.startTimeGreaterThanOrEqualTo"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/health_checks_ping_probe_results#start_time_greater_than_or_equal_to DataOciHealthChecksPingProbeResults#start_time_greater_than_or_equal_to}.

---

##### `start_time_less_than_or_equal_to`<sup>Optional</sup> <a name="start_time_less_than_or_equal_to" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.Initializer.parameter.startTimeLessThanOrEqualTo"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/health_checks_ping_probe_results#start_time_less_than_or_equal_to DataOciHealthChecksPingProbeResults#start_time_less_than_or_equal_to}.

---

##### `target`<sup>Optional</sup> <a name="target" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.Initializer.parameter.target"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/health_checks_ping_probe_results#target DataOciHealthChecksPingProbeResults#target}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.resetStartTimeGreaterThanOrEqualTo">reset_start_time_greater_than_or_equal_to</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.resetStartTimeLessThanOrEqualTo">reset_start_time_less_than_or_equal_to</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.resetTarget">reset_target</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciHealthChecksPingProbeResultsFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilter">DataOciHealthChecksPingProbeResultsFilter</a>]]

---

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_start_time_greater_than_or_equal_to` <a name="reset_start_time_greater_than_or_equal_to" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.resetStartTimeGreaterThanOrEqualTo"></a>

```python
def reset_start_time_greater_than_or_equal_to() -> None
```

##### `reset_start_time_less_than_or_equal_to` <a name="reset_start_time_less_than_or_equal_to" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.resetStartTimeLessThanOrEqualTo"></a>

```python
def reset_start_time_less_than_or_equal_to() -> None
```

##### `reset_target` <a name="reset_target" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.resetTarget"></a>

```python
def reset_target() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciHealthChecksPingProbeResults resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_health_checks_ping_probe_results

dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_health_checks_ping_probe_results

dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_health_checks_ping_probe_results

dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_health_checks_ping_probe_results

dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciHealthChecksPingProbeResults resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciHealthChecksPingProbeResults to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciHealthChecksPingProbeResults that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/health_checks_ping_probe_results#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciHealthChecksPingProbeResults to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterList">DataOciHealthChecksPingProbeResultsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.property.pingProbeResults">ping_probe_results</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsList">DataOciHealthChecksPingProbeResultsPingProbeResultsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilter">DataOciHealthChecksPingProbeResultsFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.property.probeConfigurationIdInput">probe_configuration_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.property.startTimeGreaterThanOrEqualToInput">start_time_greater_than_or_equal_to_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.property.startTimeLessThanOrEqualToInput">start_time_less_than_or_equal_to_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.property.targetInput">target_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.property.probeConfigurationId">probe_configuration_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.property.startTimeGreaterThanOrEqualTo">start_time_greater_than_or_equal_to</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.property.startTimeLessThanOrEqualTo">start_time_less_than_or_equal_to</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.property.target">target</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.property.filter"></a>

```python
filter: DataOciHealthChecksPingProbeResultsFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterList">DataOciHealthChecksPingProbeResultsFilterList</a>

---

##### `ping_probe_results`<sup>Required</sup> <a name="ping_probe_results" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.property.pingProbeResults"></a>

```python
ping_probe_results: DataOciHealthChecksPingProbeResultsPingProbeResultsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsList">DataOciHealthChecksPingProbeResultsPingProbeResultsList</a>

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciHealthChecksPingProbeResultsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilter">DataOciHealthChecksPingProbeResultsFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `probe_configuration_id_input`<sup>Optional</sup> <a name="probe_configuration_id_input" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.property.probeConfigurationIdInput"></a>

```python
probe_configuration_id_input: str
```

- *Type:* str

---

##### `start_time_greater_than_or_equal_to_input`<sup>Optional</sup> <a name="start_time_greater_than_or_equal_to_input" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.property.startTimeGreaterThanOrEqualToInput"></a>

```python
start_time_greater_than_or_equal_to_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `start_time_less_than_or_equal_to_input`<sup>Optional</sup> <a name="start_time_less_than_or_equal_to_input" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.property.startTimeLessThanOrEqualToInput"></a>

```python
start_time_less_than_or_equal_to_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `target_input`<sup>Optional</sup> <a name="target_input" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.property.targetInput"></a>

```python
target_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `probe_configuration_id`<sup>Required</sup> <a name="probe_configuration_id" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.property.probeConfigurationId"></a>

```python
probe_configuration_id: str
```

- *Type:* str

---

##### `start_time_greater_than_or_equal_to`<sup>Required</sup> <a name="start_time_greater_than_or_equal_to" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.property.startTimeGreaterThanOrEqualTo"></a>

```python
start_time_greater_than_or_equal_to: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `start_time_less_than_or_equal_to`<sup>Required</sup> <a name="start_time_less_than_or_equal_to" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.property.startTimeLessThanOrEqualTo"></a>

```python
start_time_less_than_or_equal_to: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `target`<sup>Required</sup> <a name="target" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.property.target"></a>

```python
target: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciHealthChecksPingProbeResultsConfig <a name="DataOciHealthChecksPingProbeResultsConfig" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_health_checks_ping_probe_results

dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  probe_configuration_id: str,
  filter: typing.Union[IResolvable, typing.List[DataOciHealthChecksPingProbeResultsFilter]] = None,
  id: str = None,
  start_time_greater_than_or_equal_to: typing.Union[int, float] = None,
  start_time_less_than_or_equal_to: typing.Union[int, float] = None,
  target: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsConfig.property.probeConfigurationId">probe_configuration_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/health_checks_ping_probe_results#probe_configuration_id DataOciHealthChecksPingProbeResults#probe_configuration_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilter">DataOciHealthChecksPingProbeResultsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/health_checks_ping_probe_results#id DataOciHealthChecksPingProbeResults#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsConfig.property.startTimeGreaterThanOrEqualTo">start_time_greater_than_or_equal_to</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/health_checks_ping_probe_results#start_time_greater_than_or_equal_to DataOciHealthChecksPingProbeResults#start_time_greater_than_or_equal_to}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsConfig.property.startTimeLessThanOrEqualTo">start_time_less_than_or_equal_to</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/health_checks_ping_probe_results#start_time_less_than_or_equal_to DataOciHealthChecksPingProbeResults#start_time_less_than_or_equal_to}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsConfig.property.target">target</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/health_checks_ping_probe_results#target DataOciHealthChecksPingProbeResults#target}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `probe_configuration_id`<sup>Required</sup> <a name="probe_configuration_id" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsConfig.property.probeConfigurationId"></a>

```python
probe_configuration_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/health_checks_ping_probe_results#probe_configuration_id DataOciHealthChecksPingProbeResults#probe_configuration_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciHealthChecksPingProbeResultsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilter">DataOciHealthChecksPingProbeResultsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/health_checks_ping_probe_results#filter DataOciHealthChecksPingProbeResults#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/health_checks_ping_probe_results#id DataOciHealthChecksPingProbeResults#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `start_time_greater_than_or_equal_to`<sup>Optional</sup> <a name="start_time_greater_than_or_equal_to" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsConfig.property.startTimeGreaterThanOrEqualTo"></a>

```python
start_time_greater_than_or_equal_to: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/health_checks_ping_probe_results#start_time_greater_than_or_equal_to DataOciHealthChecksPingProbeResults#start_time_greater_than_or_equal_to}.

---

##### `start_time_less_than_or_equal_to`<sup>Optional</sup> <a name="start_time_less_than_or_equal_to" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsConfig.property.startTimeLessThanOrEqualTo"></a>

```python
start_time_less_than_or_equal_to: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/health_checks_ping_probe_results#start_time_less_than_or_equal_to DataOciHealthChecksPingProbeResults#start_time_less_than_or_equal_to}.

---

##### `target`<sup>Optional</sup> <a name="target" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsConfig.property.target"></a>

```python
target: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/health_checks_ping_probe_results#target DataOciHealthChecksPingProbeResults#target}.

---

### DataOciHealthChecksPingProbeResultsFilter <a name="DataOciHealthChecksPingProbeResultsFilter" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_health_checks_ping_probe_results

dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/health_checks_ping_probe_results#name DataOciHealthChecksPingProbeResults#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/health_checks_ping_probe_results#values DataOciHealthChecksPingProbeResults#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/health_checks_ping_probe_results#regex DataOciHealthChecksPingProbeResults#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/health_checks_ping_probe_results#name DataOciHealthChecksPingProbeResults#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/health_checks_ping_probe_results#values DataOciHealthChecksPingProbeResults#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/health_checks_ping_probe_results#regex DataOciHealthChecksPingProbeResults#regex}.

---

### DataOciHealthChecksPingProbeResultsPingProbeResults <a name="DataOciHealthChecksPingProbeResultsPingProbeResults" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResults"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResults.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_health_checks_ping_probe_results

dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResults()
```


### DataOciHealthChecksPingProbeResultsPingProbeResultsConnection <a name="DataOciHealthChecksPingProbeResultsPingProbeResultsConnection" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnection.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_health_checks_ping_probe_results

dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnection()
```


### DataOciHealthChecksPingProbeResultsPingProbeResultsDns <a name="DataOciHealthChecksPingProbeResultsPingProbeResultsDns" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDns"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDns.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_health_checks_ping_probe_results

dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDns()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciHealthChecksPingProbeResultsFilterList <a name="DataOciHealthChecksPingProbeResultsFilterList" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_health_checks_ping_probe_results

dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciHealthChecksPingProbeResultsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilter">DataOciHealthChecksPingProbeResultsFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciHealthChecksPingProbeResultsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilter">DataOciHealthChecksPingProbeResultsFilter</a>]]

---


### DataOciHealthChecksPingProbeResultsFilterOutputReference <a name="DataOciHealthChecksPingProbeResultsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_health_checks_ping_probe_results

dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilter">DataOciHealthChecksPingProbeResultsFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciHealthChecksPingProbeResultsFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilter">DataOciHealthChecksPingProbeResultsFilter</a>]

---


### DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionList <a name="DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionList" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_health_checks_ping_probe_results

dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionOutputReference <a name="DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_health_checks_ping_probe_results

dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionOutputReference.property.address">address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionOutputReference.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnection">DataOciHealthChecksPingProbeResultsPingProbeResultsConnection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `address`<sup>Required</sup> <a name="address" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionOutputReference.property.address"></a>

```python
address: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionOutputReference.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionOutputReference.property.internalValue"></a>

```python
internal_value: DataOciHealthChecksPingProbeResultsPingProbeResultsConnection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnection">DataOciHealthChecksPingProbeResultsPingProbeResultsConnection</a>

---


### DataOciHealthChecksPingProbeResultsPingProbeResultsDnsList <a name="DataOciHealthChecksPingProbeResultsPingProbeResultsDnsList" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_health_checks_ping_probe_results

dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciHealthChecksPingProbeResultsPingProbeResultsDnsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciHealthChecksPingProbeResultsPingProbeResultsDnsOutputReference <a name="DataOciHealthChecksPingProbeResultsPingProbeResultsDnsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_health_checks_ping_probe_results

dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsOutputReference.property.addresses">addresses</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsOutputReference.property.domainLookupDuration">domain_lookup_duration</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDns">DataOciHealthChecksPingProbeResultsPingProbeResultsDns</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `addresses`<sup>Required</sup> <a name="addresses" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsOutputReference.property.addresses"></a>

```python
addresses: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `domain_lookup_duration`<sup>Required</sup> <a name="domain_lookup_duration" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsOutputReference.property.domainLookupDuration"></a>

```python
domain_lookup_duration: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciHealthChecksPingProbeResultsPingProbeResultsDns
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDns">DataOciHealthChecksPingProbeResultsPingProbeResultsDns</a>

---


### DataOciHealthChecksPingProbeResultsPingProbeResultsList <a name="DataOciHealthChecksPingProbeResultsPingProbeResultsList" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_health_checks_ping_probe_results

dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference <a name="DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_health_checks_ping_probe_results

dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.property.connection">connection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionList">DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.property.dns">dns</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsList">DataOciHealthChecksPingProbeResultsPingProbeResultsDnsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.property.domainLookupEnd">domain_lookup_end</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.property.domainLookupStart">domain_lookup_start</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.property.errorCategory">error_category</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.property.errorMessage">error_message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.property.icmpCode">icmp_code</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.property.isHealthy">is_healthy</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.property.isTimedOut">is_timed_out</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.property.latencyInMs">latency_in_ms</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.property.probeConfigurationId">probe_configuration_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.property.protocol">protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.property.startTime">start_time</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.property.target">target</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.property.vantagePointName">vantage_point_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResults">DataOciHealthChecksPingProbeResultsPingProbeResults</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `connection`<sup>Required</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.property.connection"></a>

```python
connection: DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionList">DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionList</a>

---

##### `dns`<sup>Required</sup> <a name="dns" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.property.dns"></a>

```python
dns: DataOciHealthChecksPingProbeResultsPingProbeResultsDnsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsList">DataOciHealthChecksPingProbeResultsPingProbeResultsDnsList</a>

---

##### `domain_lookup_end`<sup>Required</sup> <a name="domain_lookup_end" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.property.domainLookupEnd"></a>

```python
domain_lookup_end: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `domain_lookup_start`<sup>Required</sup> <a name="domain_lookup_start" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.property.domainLookupStart"></a>

```python
domain_lookup_start: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `error_category`<sup>Required</sup> <a name="error_category" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.property.errorCategory"></a>

```python
error_category: str
```

- *Type:* str

---

##### `error_message`<sup>Required</sup> <a name="error_message" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.property.errorMessage"></a>

```python
error_message: str
```

- *Type:* str

---

##### `icmp_code`<sup>Required</sup> <a name="icmp_code" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.property.icmpCode"></a>

```python
icmp_code: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `is_healthy`<sup>Required</sup> <a name="is_healthy" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.property.isHealthy"></a>

```python
is_healthy: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_timed_out`<sup>Required</sup> <a name="is_timed_out" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.property.isTimedOut"></a>

```python
is_timed_out: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `latency_in_ms`<sup>Required</sup> <a name="latency_in_ms" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.property.latencyInMs"></a>

```python
latency_in_ms: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `probe_configuration_id`<sup>Required</sup> <a name="probe_configuration_id" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.property.probeConfigurationId"></a>

```python
probe_configuration_id: str
```

- *Type:* str

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

---

##### `start_time`<sup>Required</sup> <a name="start_time" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.property.startTime"></a>

```python
start_time: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `target`<sup>Required</sup> <a name="target" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.property.target"></a>

```python
target: str
```

- *Type:* str

---

##### `vantage_point_name`<sup>Required</sup> <a name="vantage_point_name" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.property.vantagePointName"></a>

```python
vantage_point_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciHealthChecksPingProbeResultsPingProbeResults
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResults">DataOciHealthChecksPingProbeResultsPingProbeResults</a>

---



