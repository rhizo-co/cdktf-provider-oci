# `dataOciHealthChecksHttpProbeResults` Submodule <a name="`dataOciHealthChecksHttpProbeResults` Submodule" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciHealthChecksHttpProbeResults <a name="DataOciHealthChecksHttpProbeResults" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/health_checks_http_probe_results oci_health_checks_http_probe_results}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_health_checks_http_probe_results

dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults(
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
  filter: typing.Union[IResolvable, typing.List[DataOciHealthChecksHttpProbeResultsFilter]] = None,
  id: str = None,
  start_time_greater_than_or_equal_to: typing.Union[int, float] = None,
  start_time_less_than_or_equal_to: typing.Union[int, float] = None,
  target: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.Initializer.parameter.probeConfigurationId">probe_configuration_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/health_checks_http_probe_results#probe_configuration_id DataOciHealthChecksHttpProbeResults#probe_configuration_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilter">DataOciHealthChecksHttpProbeResultsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/health_checks_http_probe_results#id DataOciHealthChecksHttpProbeResults#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.Initializer.parameter.startTimeGreaterThanOrEqualTo">start_time_greater_than_or_equal_to</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/health_checks_http_probe_results#start_time_greater_than_or_equal_to DataOciHealthChecksHttpProbeResults#start_time_greater_than_or_equal_to}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.Initializer.parameter.startTimeLessThanOrEqualTo">start_time_less_than_or_equal_to</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/health_checks_http_probe_results#start_time_less_than_or_equal_to DataOciHealthChecksHttpProbeResults#start_time_less_than_or_equal_to}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.Initializer.parameter.target">target</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/health_checks_http_probe_results#target DataOciHealthChecksHttpProbeResults#target}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `probe_configuration_id`<sup>Required</sup> <a name="probe_configuration_id" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.Initializer.parameter.probeConfigurationId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/health_checks_http_probe_results#probe_configuration_id DataOciHealthChecksHttpProbeResults#probe_configuration_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilter">DataOciHealthChecksHttpProbeResultsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/health_checks_http_probe_results#filter DataOciHealthChecksHttpProbeResults#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/health_checks_http_probe_results#id DataOciHealthChecksHttpProbeResults#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `start_time_greater_than_or_equal_to`<sup>Optional</sup> <a name="start_time_greater_than_or_equal_to" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.Initializer.parameter.startTimeGreaterThanOrEqualTo"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/health_checks_http_probe_results#start_time_greater_than_or_equal_to DataOciHealthChecksHttpProbeResults#start_time_greater_than_or_equal_to}.

---

##### `start_time_less_than_or_equal_to`<sup>Optional</sup> <a name="start_time_less_than_or_equal_to" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.Initializer.parameter.startTimeLessThanOrEqualTo"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/health_checks_http_probe_results#start_time_less_than_or_equal_to DataOciHealthChecksHttpProbeResults#start_time_less_than_or_equal_to}.

---

##### `target`<sup>Optional</sup> <a name="target" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.Initializer.parameter.target"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/health_checks_http_probe_results#target DataOciHealthChecksHttpProbeResults#target}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.resetStartTimeGreaterThanOrEqualTo">reset_start_time_greater_than_or_equal_to</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.resetStartTimeLessThanOrEqualTo">reset_start_time_less_than_or_equal_to</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.resetTarget">reset_target</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciHealthChecksHttpProbeResultsFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilter">DataOciHealthChecksHttpProbeResultsFilter</a>]]

---

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_start_time_greater_than_or_equal_to` <a name="reset_start_time_greater_than_or_equal_to" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.resetStartTimeGreaterThanOrEqualTo"></a>

```python
def reset_start_time_greater_than_or_equal_to() -> None
```

##### `reset_start_time_less_than_or_equal_to` <a name="reset_start_time_less_than_or_equal_to" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.resetStartTimeLessThanOrEqualTo"></a>

```python
def reset_start_time_less_than_or_equal_to() -> None
```

##### `reset_target` <a name="reset_target" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.resetTarget"></a>

```python
def reset_target() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciHealthChecksHttpProbeResults resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_health_checks_http_probe_results

dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_health_checks_http_probe_results

dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_health_checks_http_probe_results

dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_health_checks_http_probe_results

dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciHealthChecksHttpProbeResults resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciHealthChecksHttpProbeResults to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciHealthChecksHttpProbeResults that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/health_checks_http_probe_results#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciHealthChecksHttpProbeResults to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilterList">DataOciHealthChecksHttpProbeResultsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.property.httpProbeResults">http_probe_results</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsList">DataOciHealthChecksHttpProbeResultsHttpProbeResultsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilter">DataOciHealthChecksHttpProbeResultsFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.property.probeConfigurationIdInput">probe_configuration_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.property.startTimeGreaterThanOrEqualToInput">start_time_greater_than_or_equal_to_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.property.startTimeLessThanOrEqualToInput">start_time_less_than_or_equal_to_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.property.targetInput">target_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.property.probeConfigurationId">probe_configuration_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.property.startTimeGreaterThanOrEqualTo">start_time_greater_than_or_equal_to</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.property.startTimeLessThanOrEqualTo">start_time_less_than_or_equal_to</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.property.target">target</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.property.filter"></a>

```python
filter: DataOciHealthChecksHttpProbeResultsFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilterList">DataOciHealthChecksHttpProbeResultsFilterList</a>

---

##### `http_probe_results`<sup>Required</sup> <a name="http_probe_results" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.property.httpProbeResults"></a>

```python
http_probe_results: DataOciHealthChecksHttpProbeResultsHttpProbeResultsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsList">DataOciHealthChecksHttpProbeResultsHttpProbeResultsList</a>

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciHealthChecksHttpProbeResultsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilter">DataOciHealthChecksHttpProbeResultsFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `probe_configuration_id_input`<sup>Optional</sup> <a name="probe_configuration_id_input" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.property.probeConfigurationIdInput"></a>

```python
probe_configuration_id_input: str
```

- *Type:* str

---

##### `start_time_greater_than_or_equal_to_input`<sup>Optional</sup> <a name="start_time_greater_than_or_equal_to_input" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.property.startTimeGreaterThanOrEqualToInput"></a>

```python
start_time_greater_than_or_equal_to_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `start_time_less_than_or_equal_to_input`<sup>Optional</sup> <a name="start_time_less_than_or_equal_to_input" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.property.startTimeLessThanOrEqualToInput"></a>

```python
start_time_less_than_or_equal_to_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `target_input`<sup>Optional</sup> <a name="target_input" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.property.targetInput"></a>

```python
target_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `probe_configuration_id`<sup>Required</sup> <a name="probe_configuration_id" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.property.probeConfigurationId"></a>

```python
probe_configuration_id: str
```

- *Type:* str

---

##### `start_time_greater_than_or_equal_to`<sup>Required</sup> <a name="start_time_greater_than_or_equal_to" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.property.startTimeGreaterThanOrEqualTo"></a>

```python
start_time_greater_than_or_equal_to: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `start_time_less_than_or_equal_to`<sup>Required</sup> <a name="start_time_less_than_or_equal_to" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.property.startTimeLessThanOrEqualTo"></a>

```python
start_time_less_than_or_equal_to: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `target`<sup>Required</sup> <a name="target" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.property.target"></a>

```python
target: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciHealthChecksHttpProbeResultsConfig <a name="DataOciHealthChecksHttpProbeResultsConfig" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_health_checks_http_probe_results

dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  probe_configuration_id: str,
  filter: typing.Union[IResolvable, typing.List[DataOciHealthChecksHttpProbeResultsFilter]] = None,
  id: str = None,
  start_time_greater_than_or_equal_to: typing.Union[int, float] = None,
  start_time_less_than_or_equal_to: typing.Union[int, float] = None,
  target: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsConfig.property.probeConfigurationId">probe_configuration_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/health_checks_http_probe_results#probe_configuration_id DataOciHealthChecksHttpProbeResults#probe_configuration_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilter">DataOciHealthChecksHttpProbeResultsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/health_checks_http_probe_results#id DataOciHealthChecksHttpProbeResults#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsConfig.property.startTimeGreaterThanOrEqualTo">start_time_greater_than_or_equal_to</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/health_checks_http_probe_results#start_time_greater_than_or_equal_to DataOciHealthChecksHttpProbeResults#start_time_greater_than_or_equal_to}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsConfig.property.startTimeLessThanOrEqualTo">start_time_less_than_or_equal_to</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/health_checks_http_probe_results#start_time_less_than_or_equal_to DataOciHealthChecksHttpProbeResults#start_time_less_than_or_equal_to}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsConfig.property.target">target</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/health_checks_http_probe_results#target DataOciHealthChecksHttpProbeResults#target}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `probe_configuration_id`<sup>Required</sup> <a name="probe_configuration_id" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsConfig.property.probeConfigurationId"></a>

```python
probe_configuration_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/health_checks_http_probe_results#probe_configuration_id DataOciHealthChecksHttpProbeResults#probe_configuration_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciHealthChecksHttpProbeResultsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilter">DataOciHealthChecksHttpProbeResultsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/health_checks_http_probe_results#filter DataOciHealthChecksHttpProbeResults#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/health_checks_http_probe_results#id DataOciHealthChecksHttpProbeResults#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `start_time_greater_than_or_equal_to`<sup>Optional</sup> <a name="start_time_greater_than_or_equal_to" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsConfig.property.startTimeGreaterThanOrEqualTo"></a>

```python
start_time_greater_than_or_equal_to: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/health_checks_http_probe_results#start_time_greater_than_or_equal_to DataOciHealthChecksHttpProbeResults#start_time_greater_than_or_equal_to}.

---

##### `start_time_less_than_or_equal_to`<sup>Optional</sup> <a name="start_time_less_than_or_equal_to" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsConfig.property.startTimeLessThanOrEqualTo"></a>

```python
start_time_less_than_or_equal_to: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/health_checks_http_probe_results#start_time_less_than_or_equal_to DataOciHealthChecksHttpProbeResults#start_time_less_than_or_equal_to}.

---

##### `target`<sup>Optional</sup> <a name="target" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsConfig.property.target"></a>

```python
target: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/health_checks_http_probe_results#target DataOciHealthChecksHttpProbeResults#target}.

---

### DataOciHealthChecksHttpProbeResultsFilter <a name="DataOciHealthChecksHttpProbeResultsFilter" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_health_checks_http_probe_results

dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/health_checks_http_probe_results#name DataOciHealthChecksHttpProbeResults#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/health_checks_http_probe_results#values DataOciHealthChecksHttpProbeResults#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/health_checks_http_probe_results#regex DataOciHealthChecksHttpProbeResults#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/health_checks_http_probe_results#name DataOciHealthChecksHttpProbeResults#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/health_checks_http_probe_results#values DataOciHealthChecksHttpProbeResults#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/health_checks_http_probe_results#regex DataOciHealthChecksHttpProbeResults#regex}.

---

### DataOciHealthChecksHttpProbeResultsHttpProbeResults <a name="DataOciHealthChecksHttpProbeResultsHttpProbeResults" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResults"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResults.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_health_checks_http_probe_results

dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResults()
```


### DataOciHealthChecksHttpProbeResultsHttpProbeResultsConnection <a name="DataOciHealthChecksHttpProbeResultsHttpProbeResultsConnection" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsConnection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsConnection.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_health_checks_http_probe_results

dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsConnection()
```


### DataOciHealthChecksHttpProbeResultsHttpProbeResultsDns <a name="DataOciHealthChecksHttpProbeResultsHttpProbeResultsDns" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsDns"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsDns.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_health_checks_http_probe_results

dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsDns()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciHealthChecksHttpProbeResultsFilterList <a name="DataOciHealthChecksHttpProbeResultsFilterList" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_health_checks_http_probe_results

dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciHealthChecksHttpProbeResultsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilter">DataOciHealthChecksHttpProbeResultsFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciHealthChecksHttpProbeResultsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilter">DataOciHealthChecksHttpProbeResultsFilter</a>]]

---


### DataOciHealthChecksHttpProbeResultsFilterOutputReference <a name="DataOciHealthChecksHttpProbeResultsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_health_checks_http_probe_results

dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilter">DataOciHealthChecksHttpProbeResultsFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciHealthChecksHttpProbeResultsFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilter">DataOciHealthChecksHttpProbeResultsFilter</a>]

---


### DataOciHealthChecksHttpProbeResultsHttpProbeResultsConnectionList <a name="DataOciHealthChecksHttpProbeResultsHttpProbeResultsConnectionList" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsConnectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsConnectionList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_health_checks_http_probe_results

dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsConnectionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsConnectionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsConnectionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsConnectionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsConnectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsConnectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsConnectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsConnectionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsConnectionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsConnectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsConnectionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsConnectionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsConnectionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsConnectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsConnectionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsConnectionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsConnectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsConnectionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsConnectionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciHealthChecksHttpProbeResultsHttpProbeResultsConnectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsConnectionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsConnectionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsConnectionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsConnectionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsConnectionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciHealthChecksHttpProbeResultsHttpProbeResultsConnectionOutputReference <a name="DataOciHealthChecksHttpProbeResultsHttpProbeResultsConnectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsConnectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsConnectionOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_health_checks_http_probe_results

dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsConnectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsConnectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsConnectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsConnectionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsConnectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsConnectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsConnectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsConnectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsConnectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsConnectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsConnectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsConnectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsConnectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsConnectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsConnectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsConnectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsConnectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsConnectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsConnectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsConnectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsConnectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsConnectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsConnectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsConnectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsConnectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsConnectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsConnectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsConnectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsConnectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsConnectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsConnectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsConnectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsConnectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsConnectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsConnectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsConnectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsConnectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsConnectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsConnectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsConnectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsConnectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsConnectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsConnectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsConnectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsConnectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsConnectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsConnectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsConnectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsConnectionOutputReference.property.address">address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsConnectionOutputReference.property.connectDuration">connect_duration</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsConnectionOutputReference.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsConnectionOutputReference.property.secureConnectDuration">secure_connect_duration</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsConnectionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsConnection">DataOciHealthChecksHttpProbeResultsHttpProbeResultsConnection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsConnectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsConnectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `address`<sup>Required</sup> <a name="address" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsConnectionOutputReference.property.address"></a>

```python
address: str
```

- *Type:* str

---

##### `connect_duration`<sup>Required</sup> <a name="connect_duration" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsConnectionOutputReference.property.connectDuration"></a>

```python
connect_duration: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `port`<sup>Required</sup> <a name="port" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsConnectionOutputReference.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `secure_connect_duration`<sup>Required</sup> <a name="secure_connect_duration" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsConnectionOutputReference.property.secureConnectDuration"></a>

```python
secure_connect_duration: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsConnectionOutputReference.property.internalValue"></a>

```python
internal_value: DataOciHealthChecksHttpProbeResultsHttpProbeResultsConnection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsConnection">DataOciHealthChecksHttpProbeResultsHttpProbeResultsConnection</a>

---


### DataOciHealthChecksHttpProbeResultsHttpProbeResultsDnsList <a name="DataOciHealthChecksHttpProbeResultsHttpProbeResultsDnsList" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsDnsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsDnsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_health_checks_http_probe_results

dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsDnsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsDnsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsDnsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsDnsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsDnsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsDnsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsDnsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsDnsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsDnsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsDnsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsDnsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsDnsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsDnsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsDnsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsDnsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsDnsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsDnsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsDnsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsDnsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciHealthChecksHttpProbeResultsHttpProbeResultsDnsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsDnsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsDnsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsDnsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsDnsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsDnsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciHealthChecksHttpProbeResultsHttpProbeResultsDnsOutputReference <a name="DataOciHealthChecksHttpProbeResultsHttpProbeResultsDnsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsDnsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsDnsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_health_checks_http_probe_results

dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsDnsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsDnsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsDnsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsDnsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsDnsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsDnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsDnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsDnsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsDnsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsDnsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsDnsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsDnsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsDnsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsDnsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsDnsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsDnsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsDnsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsDnsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsDnsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsDnsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsDnsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsDnsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsDnsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsDnsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsDnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsDnsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsDnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsDnsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsDnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsDnsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsDnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsDnsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsDnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsDnsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsDnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsDnsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsDnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsDnsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsDnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsDnsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsDnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsDnsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsDnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsDnsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsDnsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsDnsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsDnsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsDnsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsDnsOutputReference.property.addresses">addresses</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsDnsOutputReference.property.domainLookupDuration">domain_lookup_duration</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsDnsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsDns">DataOciHealthChecksHttpProbeResultsHttpProbeResultsDns</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsDnsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsDnsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `addresses`<sup>Required</sup> <a name="addresses" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsDnsOutputReference.property.addresses"></a>

```python
addresses: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `domain_lookup_duration`<sup>Required</sup> <a name="domain_lookup_duration" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsDnsOutputReference.property.domainLookupDuration"></a>

```python
domain_lookup_duration: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsDnsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciHealthChecksHttpProbeResultsHttpProbeResultsDns
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsDns">DataOciHealthChecksHttpProbeResultsHttpProbeResultsDns</a>

---


### DataOciHealthChecksHttpProbeResultsHttpProbeResultsList <a name="DataOciHealthChecksHttpProbeResultsHttpProbeResultsList" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_health_checks_http_probe_results

dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciHealthChecksHttpProbeResultsHttpProbeResultsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciHealthChecksHttpProbeResultsHttpProbeResultsOutputReference <a name="DataOciHealthChecksHttpProbeResultsHttpProbeResultsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_health_checks_http_probe_results

dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsOutputReference.property.connectEnd">connect_end</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsOutputReference.property.connection">connection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsConnectionList">DataOciHealthChecksHttpProbeResultsHttpProbeResultsConnectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsOutputReference.property.connectStart">connect_start</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsOutputReference.property.dns">dns</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsDnsList">DataOciHealthChecksHttpProbeResultsHttpProbeResultsDnsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsOutputReference.property.domainLookupEnd">domain_lookup_end</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsOutputReference.property.domainLookupStart">domain_lookup_start</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsOutputReference.property.duration">duration</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsOutputReference.property.encodedBodySize">encoded_body_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsOutputReference.property.errorCategory">error_category</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsOutputReference.property.errorMessage">error_message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsOutputReference.property.fetchStart">fetch_start</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsOutputReference.property.isHealthy">is_healthy</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsOutputReference.property.isTimedOut">is_timed_out</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsOutputReference.property.probeConfigurationId">probe_configuration_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsOutputReference.property.protocol">protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsOutputReference.property.requestStart">request_start</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsOutputReference.property.responseEnd">response_end</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsOutputReference.property.responseStart">response_start</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsOutputReference.property.secureConnectionStart">secure_connection_start</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsOutputReference.property.startTime">start_time</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsOutputReference.property.statusCode">status_code</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsOutputReference.property.target">target</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsOutputReference.property.vantagePointName">vantage_point_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResults">DataOciHealthChecksHttpProbeResultsHttpProbeResults</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `connect_end`<sup>Required</sup> <a name="connect_end" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsOutputReference.property.connectEnd"></a>

```python
connect_end: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `connection`<sup>Required</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsOutputReference.property.connection"></a>

```python
connection: DataOciHealthChecksHttpProbeResultsHttpProbeResultsConnectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsConnectionList">DataOciHealthChecksHttpProbeResultsHttpProbeResultsConnectionList</a>

---

##### `connect_start`<sup>Required</sup> <a name="connect_start" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsOutputReference.property.connectStart"></a>

```python
connect_start: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `dns`<sup>Required</sup> <a name="dns" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsOutputReference.property.dns"></a>

```python
dns: DataOciHealthChecksHttpProbeResultsHttpProbeResultsDnsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsDnsList">DataOciHealthChecksHttpProbeResultsHttpProbeResultsDnsList</a>

---

##### `domain_lookup_end`<sup>Required</sup> <a name="domain_lookup_end" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsOutputReference.property.domainLookupEnd"></a>

```python
domain_lookup_end: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `domain_lookup_start`<sup>Required</sup> <a name="domain_lookup_start" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsOutputReference.property.domainLookupStart"></a>

```python
domain_lookup_start: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `duration`<sup>Required</sup> <a name="duration" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsOutputReference.property.duration"></a>

```python
duration: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `encoded_body_size`<sup>Required</sup> <a name="encoded_body_size" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsOutputReference.property.encodedBodySize"></a>

```python
encoded_body_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `error_category`<sup>Required</sup> <a name="error_category" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsOutputReference.property.errorCategory"></a>

```python
error_category: str
```

- *Type:* str

---

##### `error_message`<sup>Required</sup> <a name="error_message" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsOutputReference.property.errorMessage"></a>

```python
error_message: str
```

- *Type:* str

---

##### `fetch_start`<sup>Required</sup> <a name="fetch_start" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsOutputReference.property.fetchStart"></a>

```python
fetch_start: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `is_healthy`<sup>Required</sup> <a name="is_healthy" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsOutputReference.property.isHealthy"></a>

```python
is_healthy: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_timed_out`<sup>Required</sup> <a name="is_timed_out" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsOutputReference.property.isTimedOut"></a>

```python
is_timed_out: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `probe_configuration_id`<sup>Required</sup> <a name="probe_configuration_id" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsOutputReference.property.probeConfigurationId"></a>

```python
probe_configuration_id: str
```

- *Type:* str

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsOutputReference.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

---

##### `request_start`<sup>Required</sup> <a name="request_start" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsOutputReference.property.requestStart"></a>

```python
request_start: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `response_end`<sup>Required</sup> <a name="response_end" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsOutputReference.property.responseEnd"></a>

```python
response_end: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `response_start`<sup>Required</sup> <a name="response_start" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsOutputReference.property.responseStart"></a>

```python
response_start: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `secure_connection_start`<sup>Required</sup> <a name="secure_connection_start" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsOutputReference.property.secureConnectionStart"></a>

```python
secure_connection_start: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `start_time`<sup>Required</sup> <a name="start_time" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsOutputReference.property.startTime"></a>

```python
start_time: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `status_code`<sup>Required</sup> <a name="status_code" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsOutputReference.property.statusCode"></a>

```python
status_code: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `target`<sup>Required</sup> <a name="target" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsOutputReference.property.target"></a>

```python
target: str
```

- *Type:* str

---

##### `vantage_point_name`<sup>Required</sup> <a name="vantage_point_name" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsOutputReference.property.vantagePointName"></a>

```python
vantage_point_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciHealthChecksHttpProbeResultsHttpProbeResults
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResults">DataOciHealthChecksHttpProbeResultsHttpProbeResults</a>

---



