# `dataOciMarketplacePublishers` Submodule <a name="`dataOciMarketplacePublishers` Submodule" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciMarketplacePublishers <a name="DataOciMarketplacePublishers" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishers"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/marketplace_publishers oci_marketplace_publishers}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishers.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_marketplace_publishers

dataOciMarketplacePublishers.DataOciMarketplacePublishers(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciMarketplacePublishersFilter]] = None,
  id: str = None,
  publisher_id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishers.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishers.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishers.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishers.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishers.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishers.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishers.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishers.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishers.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishers.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/marketplace_publishers#compartment_id DataOciMarketplacePublishers#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishers.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishersFilter">DataOciMarketplacePublishersFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishers.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/marketplace_publishers#id DataOciMarketplacePublishers#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishers.Initializer.parameter.publisherId">publisher_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/marketplace_publishers#publisher_id DataOciMarketplacePublishers#publisher_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishers.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishers.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishers.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishers.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishers.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishers.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishers.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishers.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishers.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Optional</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishers.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/marketplace_publishers#compartment_id DataOciMarketplacePublishers#compartment_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishers.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishersFilter">DataOciMarketplacePublishersFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/marketplace_publishers#filter DataOciMarketplacePublishers#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishers.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/marketplace_publishers#id DataOciMarketplacePublishers#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `publisher_id`<sup>Optional</sup> <a name="publisher_id" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishers.Initializer.parameter.publisherId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/marketplace_publishers#publisher_id DataOciMarketplacePublishers#publisher_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishers.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishers.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishers.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishers.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishers.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishers.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishers.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishers.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishers.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishers.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishers.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishers.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishers.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishers.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishers.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishers.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishers.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishers.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishers.resetCompartmentId">reset_compartment_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishers.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishers.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishers.resetPublisherId">reset_publisher_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishers.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishers.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishers.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishers.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishers.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishers.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishers.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishers.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishers.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishers.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishers.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishers.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishers.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishers.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishers.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishers.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishers.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishers.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishers.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishers.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishers.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishers.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishers.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishers.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishers.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishers.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishers.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishers.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishers.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishers.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishers.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciMarketplacePublishersFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishers.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishersFilter">DataOciMarketplacePublishersFilter</a>]]

---

##### `reset_compartment_id` <a name="reset_compartment_id" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishers.resetCompartmentId"></a>

```python
def reset_compartment_id() -> None
```

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishers.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishers.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_publisher_id` <a name="reset_publisher_id" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishers.resetPublisherId"></a>

```python
def reset_publisher_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishers.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishers.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishers.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishers.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciMarketplacePublishers resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishers.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_marketplace_publishers

dataOciMarketplacePublishers.DataOciMarketplacePublishers.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishers.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishers.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_marketplace_publishers

dataOciMarketplacePublishers.DataOciMarketplacePublishers.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishers.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishers.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_marketplace_publishers

dataOciMarketplacePublishers.DataOciMarketplacePublishers.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishers.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishers.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_marketplace_publishers

dataOciMarketplacePublishers.DataOciMarketplacePublishers.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciMarketplacePublishers resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishers.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishers.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciMarketplacePublishers to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishers.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciMarketplacePublishers that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/marketplace_publishers#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishers.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciMarketplacePublishers to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishers.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishers.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishers.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishers.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishers.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishers.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishers.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishers.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishers.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishers.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishers.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishers.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishers.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishersFilterList">DataOciMarketplacePublishersFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishers.property.publishers">publishers</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishersPublishersList">DataOciMarketplacePublishersPublishersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishers.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishers.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishersFilter">DataOciMarketplacePublishersFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishers.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishers.property.publisherIdInput">publisher_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishers.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishers.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishers.property.publisherId">publisher_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishers.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishers.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishers.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishers.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishers.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishers.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishers.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishers.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishers.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishers.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishers.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishers.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishers.property.filter"></a>

```python
filter: DataOciMarketplacePublishersFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishersFilterList">DataOciMarketplacePublishersFilterList</a>

---

##### `publishers`<sup>Required</sup> <a name="publishers" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishers.property.publishers"></a>

```python
publishers: DataOciMarketplacePublishersPublishersList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishersPublishersList">DataOciMarketplacePublishersPublishersList</a>

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishers.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishers.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciMarketplacePublishersFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishersFilter">DataOciMarketplacePublishersFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishers.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `publisher_id_input`<sup>Optional</sup> <a name="publisher_id_input" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishers.property.publisherIdInput"></a>

```python
publisher_id_input: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishers.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishers.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `publisher_id`<sup>Required</sup> <a name="publisher_id" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishers.property.publisherId"></a>

```python
publisher_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishers.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishers.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciMarketplacePublishersConfig <a name="DataOciMarketplacePublishersConfig" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishersConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishersConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_marketplace_publishers

dataOciMarketplacePublishers.DataOciMarketplacePublishersConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciMarketplacePublishersFilter]] = None,
  id: str = None,
  publisher_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishersConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishersConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishersConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishersConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishersConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishersConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishersConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishersConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/marketplace_publishers#compartment_id DataOciMarketplacePublishers#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishersConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishersFilter">DataOciMarketplacePublishersFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishersConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/marketplace_publishers#id DataOciMarketplacePublishers#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishersConfig.property.publisherId">publisher_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/marketplace_publishers#publisher_id DataOciMarketplacePublishers#publisher_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishersConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishersConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishersConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishersConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishersConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishersConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishersConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Optional</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishersConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/marketplace_publishers#compartment_id DataOciMarketplacePublishers#compartment_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishersConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciMarketplacePublishersFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishersFilter">DataOciMarketplacePublishersFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/marketplace_publishers#filter DataOciMarketplacePublishers#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishersConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/marketplace_publishers#id DataOciMarketplacePublishers#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `publisher_id`<sup>Optional</sup> <a name="publisher_id" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishersConfig.property.publisherId"></a>

```python
publisher_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/marketplace_publishers#publisher_id DataOciMarketplacePublishers#publisher_id}.

---

### DataOciMarketplacePublishersFilter <a name="DataOciMarketplacePublishersFilter" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishersFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishersFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_marketplace_publishers

dataOciMarketplacePublishers.DataOciMarketplacePublishersFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishersFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/marketplace_publishers#name DataOciMarketplacePublishers#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishersFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/marketplace_publishers#values DataOciMarketplacePublishers#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishersFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/marketplace_publishers#regex DataOciMarketplacePublishers#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishersFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/marketplace_publishers#name DataOciMarketplacePublishers#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishersFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/marketplace_publishers#values DataOciMarketplacePublishers#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishersFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/marketplace_publishers#regex DataOciMarketplacePublishers#regex}.

---

### DataOciMarketplacePublishersPublishers <a name="DataOciMarketplacePublishersPublishers" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishersPublishers"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishersPublishers.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_marketplace_publishers

dataOciMarketplacePublishers.DataOciMarketplacePublishersPublishers()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciMarketplacePublishersFilterList <a name="DataOciMarketplacePublishersFilterList" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishersFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishersFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_marketplace_publishers

dataOciMarketplacePublishers.DataOciMarketplacePublishersFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishersFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishersFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishersFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishersFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishersFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishersFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishersFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishersFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishersFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishersFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishersFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishersFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishersFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishersFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishersFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishersFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishersFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishersFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciMarketplacePublishersFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishersFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishersFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishersFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishersFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishersFilter">DataOciMarketplacePublishersFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishersFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishersFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishersFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciMarketplacePublishersFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishersFilter">DataOciMarketplacePublishersFilter</a>]]

---


### DataOciMarketplacePublishersFilterOutputReference <a name="DataOciMarketplacePublishersFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishersFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishersFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_marketplace_publishers

dataOciMarketplacePublishers.DataOciMarketplacePublishersFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishersFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishersFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishersFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishersFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishersFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishersFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishersFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishersFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishersFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishersFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishersFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishersFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishersFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishersFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishersFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishersFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishersFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishersFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishersFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishersFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishersFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishersFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishersFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishersFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishersFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishersFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishersFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishersFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishersFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishersFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishersFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishersFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishersFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishersFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishersFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishersFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishersFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishersFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishersFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishersFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishersFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishersFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishersFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishersFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishersFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishersFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishersFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishersFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishersFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishersFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishersFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishersFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishersFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishersFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishersFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishersFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishersFilter">DataOciMarketplacePublishersFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishersFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishersFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishersFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishersFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishersFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishersFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishersFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishersFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishersFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciMarketplacePublishersFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishersFilter">DataOciMarketplacePublishersFilter</a>]

---


### DataOciMarketplacePublishersPublishersList <a name="DataOciMarketplacePublishersPublishersList" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishersPublishersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishersPublishersList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_marketplace_publishers

dataOciMarketplacePublishers.DataOciMarketplacePublishersPublishersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishersPublishersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishersPublishersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishersPublishersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishersPublishersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishersPublishersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishersPublishersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishersPublishersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishersPublishersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishersPublishersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishersPublishersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishersPublishersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishersPublishersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishersPublishersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishersPublishersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishersPublishersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishersPublishersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishersPublishersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishersPublishersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciMarketplacePublishersPublishersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishersPublishersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishersPublishersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishersPublishersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishersPublishersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishersPublishersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciMarketplacePublishersPublishersOutputReference <a name="DataOciMarketplacePublishersPublishersOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishersPublishersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishersPublishersOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_marketplace_publishers

dataOciMarketplacePublishers.DataOciMarketplacePublishersPublishersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishersPublishersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishersPublishersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishersPublishersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishersPublishersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishersPublishersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishersPublishersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishersPublishersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishersPublishersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishersPublishersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishersPublishersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishersPublishersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishersPublishersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishersPublishersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishersPublishersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishersPublishersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishersPublishersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishersPublishersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishersPublishersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishersPublishersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishersPublishersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishersPublishersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishersPublishersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishersPublishersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishersPublishersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishersPublishersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishersPublishersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishersPublishersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishersPublishersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishersPublishersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishersPublishersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishersPublishersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishersPublishersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishersPublishersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishersPublishersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishersPublishersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishersPublishersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishersPublishersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishersPublishersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishersPublishersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishersPublishersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishersPublishersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishersPublishersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishersPublishersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishersPublishersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishersPublishersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishersPublishersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishersPublishersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishersPublishersOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishersPublishersOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishersPublishersOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishersPublishersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishersPublishers">DataOciMarketplacePublishersPublishers</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishersPublishersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishersPublishersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishersPublishersOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishersPublishersOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishersPublishersOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishersPublishersOutputReference.property.internalValue"></a>

```python
internal_value: DataOciMarketplacePublishersPublishers
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublishers.DataOciMarketplacePublishersPublishers">DataOciMarketplacePublishersPublishers</a>

---



