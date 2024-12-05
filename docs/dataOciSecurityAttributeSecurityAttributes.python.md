# `dataOciSecurityAttributeSecurityAttributes` Submodule <a name="`dataOciSecurityAttributeSecurityAttributes` Submodule" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciSecurityAttributeSecurityAttributes <a name="DataOciSecurityAttributeSecurityAttributes" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributes"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/security_attribute_security_attributes oci_security_attribute_security_attributes}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributes.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_security_attribute_security_attributes

dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributes(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  security_attribute_namespace_id: str,
  filter: typing.Union[IResolvable, typing.List[DataOciSecurityAttributeSecurityAttributesFilter]] = None,
  id: str = None,
  state: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributes.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributes.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributes.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributes.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributes.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributes.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributes.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributes.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributes.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributes.Initializer.parameter.securityAttributeNamespaceId">security_attribute_namespace_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/security_attribute_security_attributes#security_attribute_namespace_id DataOciSecurityAttributeSecurityAttributes#security_attribute_namespace_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributes.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesFilter">DataOciSecurityAttributeSecurityAttributesFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributes.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/security_attribute_security_attributes#id DataOciSecurityAttributeSecurityAttributes#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributes.Initializer.parameter.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/security_attribute_security_attributes#state DataOciSecurityAttributeSecurityAttributes#state}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributes.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributes.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributes.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributes.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributes.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributes.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributes.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributes.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributes.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `security_attribute_namespace_id`<sup>Required</sup> <a name="security_attribute_namespace_id" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributes.Initializer.parameter.securityAttributeNamespaceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/security_attribute_security_attributes#security_attribute_namespace_id DataOciSecurityAttributeSecurityAttributes#security_attribute_namespace_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributes.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesFilter">DataOciSecurityAttributeSecurityAttributesFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/security_attribute_security_attributes#filter DataOciSecurityAttributeSecurityAttributes#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributes.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/security_attribute_security_attributes#id DataOciSecurityAttributeSecurityAttributes#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributes.Initializer.parameter.state"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/security_attribute_security_attributes#state DataOciSecurityAttributeSecurityAttributes#state}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributes.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributes.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributes.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributes.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributes.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributes.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributes.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributes.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributes.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributes.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributes.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributes.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributes.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributes.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributes.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributes.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributes.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributes.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributes.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributes.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributes.resetState">reset_state</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributes.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributes.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributes.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributes.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributes.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributes.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributes.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributes.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributes.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributes.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributes.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributes.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributes.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributes.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributes.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributes.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributes.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributes.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributes.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributes.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributes.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributes.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributes.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributes.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributes.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributes.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributes.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributes.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributes.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributes.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributes.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciSecurityAttributeSecurityAttributesFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributes.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesFilter">DataOciSecurityAttributeSecurityAttributesFilter</a>]]

---

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributes.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributes.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_state` <a name="reset_state" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributes.resetState"></a>

```python
def reset_state() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributes.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributes.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributes.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributes.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciSecurityAttributeSecurityAttributes resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributes.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_security_attribute_security_attributes

dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributes.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributes.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributes.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_security_attribute_security_attributes

dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributes.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributes.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributes.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_security_attribute_security_attributes

dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributes.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributes.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributes.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_security_attribute_security_attributes

dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributes.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciSecurityAttributeSecurityAttributes resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributes.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributes.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciSecurityAttributeSecurityAttributes to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributes.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciSecurityAttributeSecurityAttributes that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/security_attribute_security_attributes#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributes.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciSecurityAttributeSecurityAttributes to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributes.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributes.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributes.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributes.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributes.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributes.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributes.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributes.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributes.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributes.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributes.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributes.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributes.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesFilterList">DataOciSecurityAttributeSecurityAttributesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributes.property.securityAttributes">security_attributes</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesList">DataOciSecurityAttributeSecurityAttributesSecurityAttributesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributes.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesFilter">DataOciSecurityAttributeSecurityAttributesFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributes.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributes.property.securityAttributeNamespaceIdInput">security_attribute_namespace_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributes.property.stateInput">state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributes.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributes.property.securityAttributeNamespaceId">security_attribute_namespace_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributes.property.state">state</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributes.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributes.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributes.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributes.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributes.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributes.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributes.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributes.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributes.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributes.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributes.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributes.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributes.property.filter"></a>

```python
filter: DataOciSecurityAttributeSecurityAttributesFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesFilterList">DataOciSecurityAttributeSecurityAttributesFilterList</a>

---

##### `security_attributes`<sup>Required</sup> <a name="security_attributes" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributes.property.securityAttributes"></a>

```python
security_attributes: DataOciSecurityAttributeSecurityAttributesSecurityAttributesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesList">DataOciSecurityAttributeSecurityAttributesSecurityAttributesList</a>

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributes.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciSecurityAttributeSecurityAttributesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesFilter">DataOciSecurityAttributeSecurityAttributesFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributes.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `security_attribute_namespace_id_input`<sup>Optional</sup> <a name="security_attribute_namespace_id_input" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributes.property.securityAttributeNamespaceIdInput"></a>

```python
security_attribute_namespace_id_input: str
```

- *Type:* str

---

##### `state_input`<sup>Optional</sup> <a name="state_input" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributes.property.stateInput"></a>

```python
state_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributes.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `security_attribute_namespace_id`<sup>Required</sup> <a name="security_attribute_namespace_id" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributes.property.securityAttributeNamespaceId"></a>

```python
security_attribute_namespace_id: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributes.property.state"></a>

```python
state: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributes.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributes.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciSecurityAttributeSecurityAttributesConfig <a name="DataOciSecurityAttributeSecurityAttributesConfig" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_security_attribute_security_attributes

dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  security_attribute_namespace_id: str,
  filter: typing.Union[IResolvable, typing.List[DataOciSecurityAttributeSecurityAttributesFilter]] = None,
  id: str = None,
  state: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesConfig.property.securityAttributeNamespaceId">security_attribute_namespace_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/security_attribute_security_attributes#security_attribute_namespace_id DataOciSecurityAttributeSecurityAttributes#security_attribute_namespace_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesFilter">DataOciSecurityAttributeSecurityAttributesFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/security_attribute_security_attributes#id DataOciSecurityAttributeSecurityAttributes#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesConfig.property.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/security_attribute_security_attributes#state DataOciSecurityAttributeSecurityAttributes#state}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `security_attribute_namespace_id`<sup>Required</sup> <a name="security_attribute_namespace_id" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesConfig.property.securityAttributeNamespaceId"></a>

```python
security_attribute_namespace_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/security_attribute_security_attributes#security_attribute_namespace_id DataOciSecurityAttributeSecurityAttributes#security_attribute_namespace_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciSecurityAttributeSecurityAttributesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesFilter">DataOciSecurityAttributeSecurityAttributesFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/security_attribute_security_attributes#filter DataOciSecurityAttributeSecurityAttributes#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/security_attribute_security_attributes#id DataOciSecurityAttributeSecurityAttributes#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesConfig.property.state"></a>

```python
state: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/security_attribute_security_attributes#state DataOciSecurityAttributeSecurityAttributes#state}.

---

### DataOciSecurityAttributeSecurityAttributesFilter <a name="DataOciSecurityAttributeSecurityAttributesFilter" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_security_attribute_security_attributes

dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/security_attribute_security_attributes#name DataOciSecurityAttributeSecurityAttributes#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/security_attribute_security_attributes#values DataOciSecurityAttributeSecurityAttributes#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/security_attribute_security_attributes#regex DataOciSecurityAttributeSecurityAttributes#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/security_attribute_security_attributes#name DataOciSecurityAttributeSecurityAttributes#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/security_attribute_security_attributes#values DataOciSecurityAttributeSecurityAttributes#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/security_attribute_security_attributes#regex DataOciSecurityAttributeSecurityAttributes#regex}.

---

### DataOciSecurityAttributeSecurityAttributesSecurityAttributes <a name="DataOciSecurityAttributeSecurityAttributesSecurityAttributes" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributes"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributes.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_security_attribute_security_attributes

dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributes()
```


### DataOciSecurityAttributeSecurityAttributesSecurityAttributesValidator <a name="DataOciSecurityAttributeSecurityAttributesSecurityAttributesValidator" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesValidator"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesValidator.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_security_attribute_security_attributes

dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesValidator()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciSecurityAttributeSecurityAttributesFilterList <a name="DataOciSecurityAttributeSecurityAttributesFilterList" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_security_attribute_security_attributes

dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciSecurityAttributeSecurityAttributesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesFilter">DataOciSecurityAttributeSecurityAttributesFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciSecurityAttributeSecurityAttributesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesFilter">DataOciSecurityAttributeSecurityAttributesFilter</a>]]

---


### DataOciSecurityAttributeSecurityAttributesFilterOutputReference <a name="DataOciSecurityAttributeSecurityAttributesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_security_attribute_security_attributes

dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesFilter">DataOciSecurityAttributeSecurityAttributesFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciSecurityAttributeSecurityAttributesFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesFilter">DataOciSecurityAttributeSecurityAttributesFilter</a>]

---


### DataOciSecurityAttributeSecurityAttributesSecurityAttributesList <a name="DataOciSecurityAttributeSecurityAttributesSecurityAttributesList" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_security_attribute_security_attributes

dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciSecurityAttributeSecurityAttributesSecurityAttributesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciSecurityAttributeSecurityAttributesSecurityAttributesOutputReference <a name="DataOciSecurityAttributeSecurityAttributesSecurityAttributesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_security_attribute_security_attributes

dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesOutputReference.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesOutputReference.property.isRetired">is_retired</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesOutputReference.property.securityAttributeNamespaceId">security_attribute_namespace_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesOutputReference.property.securityAttributeNamespaceName">security_attribute_namespace_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesOutputReference.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesOutputReference.property.validator">validator</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesValidatorList">DataOciSecurityAttributeSecurityAttributesSecurityAttributesValidatorList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributes">DataOciSecurityAttributeSecurityAttributesSecurityAttributes</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesOutputReference.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `is_retired`<sup>Required</sup> <a name="is_retired" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesOutputReference.property.isRetired"></a>

```python
is_retired: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `security_attribute_namespace_id`<sup>Required</sup> <a name="security_attribute_namespace_id" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesOutputReference.property.securityAttributeNamespaceId"></a>

```python
security_attribute_namespace_id: str
```

- *Type:* str

---

##### `security_attribute_namespace_name`<sup>Required</sup> <a name="security_attribute_namespace_name" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesOutputReference.property.securityAttributeNamespaceName"></a>

```python
security_attribute_namespace_name: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesOutputReference.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `validator`<sup>Required</sup> <a name="validator" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesOutputReference.property.validator"></a>

```python
validator: DataOciSecurityAttributeSecurityAttributesSecurityAttributesValidatorList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesValidatorList">DataOciSecurityAttributeSecurityAttributesSecurityAttributesValidatorList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesOutputReference.property.internalValue"></a>

```python
internal_value: DataOciSecurityAttributeSecurityAttributesSecurityAttributes
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributes">DataOciSecurityAttributeSecurityAttributesSecurityAttributes</a>

---


### DataOciSecurityAttributeSecurityAttributesSecurityAttributesValidatorList <a name="DataOciSecurityAttributeSecurityAttributesSecurityAttributesValidatorList" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesValidatorList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesValidatorList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_security_attribute_security_attributes

dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesValidatorList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesValidatorList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesValidatorList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesValidatorList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesValidatorList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesValidatorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesValidatorList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesValidatorList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesValidatorList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesValidatorList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesValidatorList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesValidatorList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesValidatorList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesValidatorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesValidatorList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesValidatorList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesValidatorList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesValidatorList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesValidatorList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciSecurityAttributeSecurityAttributesSecurityAttributesValidatorOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesValidatorList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesValidatorList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesValidatorList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesValidatorList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesValidatorList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciSecurityAttributeSecurityAttributesSecurityAttributesValidatorOutputReference <a name="DataOciSecurityAttributeSecurityAttributesSecurityAttributesValidatorOutputReference" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesValidatorOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesValidatorOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_security_attribute_security_attributes

dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesValidatorOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesValidatorOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesValidatorOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesValidatorOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesValidatorOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesValidatorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesValidatorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesValidatorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesValidatorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesValidatorOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesValidatorOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesValidatorOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesValidatorOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesValidatorOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesValidatorOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesValidatorOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesValidatorOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesValidatorOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesValidatorOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesValidatorOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesValidatorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesValidatorOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesValidatorOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesValidatorOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesValidatorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesValidatorOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesValidatorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesValidatorOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesValidatorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesValidatorOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesValidatorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesValidatorOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesValidatorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesValidatorOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesValidatorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesValidatorOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesValidatorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesValidatorOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesValidatorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesValidatorOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesValidatorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesValidatorOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesValidatorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesValidatorOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesValidatorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesValidatorOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesValidatorOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesValidatorOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesValidatorOutputReference.property.validatorType">validator_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesValidatorOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesValidatorOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesValidator">DataOciSecurityAttributeSecurityAttributesSecurityAttributesValidator</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesValidatorOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesValidatorOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `validator_type`<sup>Required</sup> <a name="validator_type" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesValidatorOutputReference.property.validatorType"></a>

```python
validator_type: str
```

- *Type:* str

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesValidatorOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesValidatorOutputReference.property.internalValue"></a>

```python
internal_value: DataOciSecurityAttributeSecurityAttributesSecurityAttributesValidator
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributes.DataOciSecurityAttributeSecurityAttributesSecurityAttributesValidator">DataOciSecurityAttributeSecurityAttributesSecurityAttributesValidator</a>

---



