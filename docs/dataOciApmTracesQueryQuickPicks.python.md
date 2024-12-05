# `dataOciApmTracesQueryQuickPicks` Submodule <a name="`dataOciApmTracesQueryQuickPicks` Submodule" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciApmTracesQueryQuickPicks <a name="DataOciApmTracesQueryQuickPicks" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_traces_query_quick_picks oci_apm_traces_query_quick_picks}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apm_traces_query_quick_picks

dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks(
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
  filter: typing.Union[IResolvable, typing.List[DataOciApmTracesQueryQuickPicksFilter]] = None,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.Initializer.parameter.apmDomainId">apm_domain_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_traces_query_quick_picks#apm_domain_id DataOciApmTracesQueryQuickPicks#apm_domain_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilter">DataOciApmTracesQueryQuickPicksFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_traces_query_quick_picks#id DataOciApmTracesQueryQuickPicks#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `apm_domain_id`<sup>Required</sup> <a name="apm_domain_id" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.Initializer.parameter.apmDomainId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_traces_query_quick_picks#apm_domain_id DataOciApmTracesQueryQuickPicks#apm_domain_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilter">DataOciApmTracesQueryQuickPicksFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_traces_query_quick_picks#filter DataOciApmTracesQueryQuickPicks#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_traces_query_quick_picks#id DataOciApmTracesQueryQuickPicks#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciApmTracesQueryQuickPicksFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilter">DataOciApmTracesQueryQuickPicksFilter</a>]]

---

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciApmTracesQueryQuickPicks resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apm_traces_query_quick_picks

dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apm_traces_query_quick_picks

dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apm_traces_query_quick_picks

dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apm_traces_query_quick_picks

dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciApmTracesQueryQuickPicks resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciApmTracesQueryQuickPicks to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciApmTracesQueryQuickPicks that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_traces_query_quick_picks#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciApmTracesQueryQuickPicks to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilterList">DataOciApmTracesQueryQuickPicksFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.property.quickPicks">quick_picks</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksQuickPicksList">DataOciApmTracesQueryQuickPicksQuickPicksList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.property.apmDomainIdInput">apm_domain_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilter">DataOciApmTracesQueryQuickPicksFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.property.apmDomainId">apm_domain_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.property.filter"></a>

```python
filter: DataOciApmTracesQueryQuickPicksFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilterList">DataOciApmTracesQueryQuickPicksFilterList</a>

---

##### `quick_picks`<sup>Required</sup> <a name="quick_picks" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.property.quickPicks"></a>

```python
quick_picks: DataOciApmTracesQueryQuickPicksQuickPicksList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksQuickPicksList">DataOciApmTracesQueryQuickPicksQuickPicksList</a>

---

##### `apm_domain_id_input`<sup>Optional</sup> <a name="apm_domain_id_input" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.property.apmDomainIdInput"></a>

```python
apm_domain_id_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciApmTracesQueryQuickPicksFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilter">DataOciApmTracesQueryQuickPicksFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `apm_domain_id`<sup>Required</sup> <a name="apm_domain_id" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.property.apmDomainId"></a>

```python
apm_domain_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciApmTracesQueryQuickPicksConfig <a name="DataOciApmTracesQueryQuickPicksConfig" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apm_traces_query_quick_picks

dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  apm_domain_id: str,
  filter: typing.Union[IResolvable, typing.List[DataOciApmTracesQueryQuickPicksFilter]] = None,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksConfig.property.apmDomainId">apm_domain_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_traces_query_quick_picks#apm_domain_id DataOciApmTracesQueryQuickPicks#apm_domain_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilter">DataOciApmTracesQueryQuickPicksFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_traces_query_quick_picks#id DataOciApmTracesQueryQuickPicks#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `apm_domain_id`<sup>Required</sup> <a name="apm_domain_id" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksConfig.property.apmDomainId"></a>

```python
apm_domain_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_traces_query_quick_picks#apm_domain_id DataOciApmTracesQueryQuickPicks#apm_domain_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciApmTracesQueryQuickPicksFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilter">DataOciApmTracesQueryQuickPicksFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_traces_query_quick_picks#filter DataOciApmTracesQueryQuickPicks#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_traces_query_quick_picks#id DataOciApmTracesQueryQuickPicks#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciApmTracesQueryQuickPicksFilter <a name="DataOciApmTracesQueryQuickPicksFilter" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apm_traces_query_quick_picks

dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_traces_query_quick_picks#name DataOciApmTracesQueryQuickPicks#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_traces_query_quick_picks#values DataOciApmTracesQueryQuickPicks#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_traces_query_quick_picks#regex DataOciApmTracesQueryQuickPicks#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_traces_query_quick_picks#name DataOciApmTracesQueryQuickPicks#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_traces_query_quick_picks#values DataOciApmTracesQueryQuickPicks#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_traces_query_quick_picks#regex DataOciApmTracesQueryQuickPicks#regex}.

---

### DataOciApmTracesQueryQuickPicksQuickPicks <a name="DataOciApmTracesQueryQuickPicksQuickPicks" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksQuickPicks"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksQuickPicks.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apm_traces_query_quick_picks

dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksQuickPicks()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciApmTracesQueryQuickPicksFilterList <a name="DataOciApmTracesQueryQuickPicksFilterList" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apm_traces_query_quick_picks

dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciApmTracesQueryQuickPicksFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilter">DataOciApmTracesQueryQuickPicksFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciApmTracesQueryQuickPicksFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilter">DataOciApmTracesQueryQuickPicksFilter</a>]]

---


### DataOciApmTracesQueryQuickPicksFilterOutputReference <a name="DataOciApmTracesQueryQuickPicksFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apm_traces_query_quick_picks

dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilter">DataOciApmTracesQueryQuickPicksFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciApmTracesQueryQuickPicksFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilter">DataOciApmTracesQueryQuickPicksFilter</a>]

---


### DataOciApmTracesQueryQuickPicksQuickPicksList <a name="DataOciApmTracesQueryQuickPicksQuickPicksList" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksQuickPicksList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksQuickPicksList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apm_traces_query_quick_picks

dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksQuickPicksList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksQuickPicksList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksQuickPicksList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksQuickPicksList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksQuickPicksList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksQuickPicksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksQuickPicksList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksQuickPicksList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksQuickPicksList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksQuickPicksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksQuickPicksList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksQuickPicksList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksQuickPicksList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksQuickPicksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksQuickPicksList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksQuickPicksList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksQuickPicksList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksQuickPicksList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksQuickPicksList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciApmTracesQueryQuickPicksQuickPicksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksQuickPicksList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksQuickPicksList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksQuickPicksList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksQuickPicksList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksQuickPicksList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciApmTracesQueryQuickPicksQuickPicksOutputReference <a name="DataOciApmTracesQueryQuickPicksQuickPicksOutputReference" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksQuickPicksOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksQuickPicksOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apm_traces_query_quick_picks

dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksQuickPicksOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksQuickPicksOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksQuickPicksOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksQuickPicksOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksQuickPicksOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksQuickPicksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksQuickPicksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksQuickPicksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksQuickPicksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksQuickPicksOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksQuickPicksOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksQuickPicksOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksQuickPicksOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksQuickPicksOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksQuickPicksOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksQuickPicksOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksQuickPicksOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksQuickPicksOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksQuickPicksOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksQuickPicksOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksQuickPicksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksQuickPicksOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksQuickPicksOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksQuickPicksOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksQuickPicksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksQuickPicksOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksQuickPicksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksQuickPicksOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksQuickPicksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksQuickPicksOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksQuickPicksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksQuickPicksOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksQuickPicksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksQuickPicksOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksQuickPicksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksQuickPicksOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksQuickPicksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksQuickPicksOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksQuickPicksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksQuickPicksOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksQuickPicksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksQuickPicksOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksQuickPicksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksQuickPicksOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksQuickPicksOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksQuickPicksOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksQuickPicksOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksQuickPicksOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksQuickPicksOutputReference.property.quickPickName">quick_pick_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksQuickPicksOutputReference.property.quickPickQuery">quick_pick_query</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksQuickPicksOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksQuickPicks">DataOciApmTracesQueryQuickPicksQuickPicks</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksQuickPicksOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksQuickPicksOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `quick_pick_name`<sup>Required</sup> <a name="quick_pick_name" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksQuickPicksOutputReference.property.quickPickName"></a>

```python
quick_pick_name: str
```

- *Type:* str

---

##### `quick_pick_query`<sup>Required</sup> <a name="quick_pick_query" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksQuickPicksOutputReference.property.quickPickQuery"></a>

```python
quick_pick_query: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksQuickPicksOutputReference.property.internalValue"></a>

```python
internal_value: DataOciApmTracesQueryQuickPicksQuickPicks
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksQuickPicks">DataOciApmTracesQueryQuickPicksQuickPicks</a>

---



