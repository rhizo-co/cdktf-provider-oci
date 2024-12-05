# `dataOciOnesubscriptionOrganizationSubscriptions` Submodule <a name="`dataOciOnesubscriptionOrganizationSubscriptions` Submodule" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciOnesubscriptionOrganizationSubscriptions <a name="DataOciOnesubscriptionOrganizationSubscriptions" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_organization_subscriptions oci_onesubscription_organization_subscriptions}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_onesubscription_organization_subscriptions

dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions(
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
  filter: typing.Union[IResolvable, typing.List[DataOciOnesubscriptionOrganizationSubscriptionsFilter]] = None,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_organization_subscriptions#compartment_id DataOciOnesubscriptionOrganizationSubscriptions#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilter">DataOciOnesubscriptionOrganizationSubscriptionsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_organization_subscriptions#id DataOciOnesubscriptionOrganizationSubscriptions#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_organization_subscriptions#compartment_id DataOciOnesubscriptionOrganizationSubscriptions#compartment_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilter">DataOciOnesubscriptionOrganizationSubscriptionsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_organization_subscriptions#filter DataOciOnesubscriptionOrganizationSubscriptions#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_organization_subscriptions#id DataOciOnesubscriptionOrganizationSubscriptions#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciOnesubscriptionOrganizationSubscriptionsFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilter">DataOciOnesubscriptionOrganizationSubscriptionsFilter</a>]]

---

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciOnesubscriptionOrganizationSubscriptions resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_onesubscription_organization_subscriptions

dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_onesubscription_organization_subscriptions

dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_onesubscription_organization_subscriptions

dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_onesubscription_organization_subscriptions

dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciOnesubscriptionOrganizationSubscriptions resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciOnesubscriptionOrganizationSubscriptions to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciOnesubscriptionOrganizationSubscriptions that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_organization_subscriptions#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciOnesubscriptionOrganizationSubscriptions to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterList">DataOciOnesubscriptionOrganizationSubscriptionsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.property.organizationSubscriptions">organization_subscriptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsList">DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilter">DataOciOnesubscriptionOrganizationSubscriptionsFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.property.filter"></a>

```python
filter: DataOciOnesubscriptionOrganizationSubscriptionsFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterList">DataOciOnesubscriptionOrganizationSubscriptionsFilterList</a>

---

##### `organization_subscriptions`<sup>Required</sup> <a name="organization_subscriptions" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.property.organizationSubscriptions"></a>

```python
organization_subscriptions: DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsList">DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsList</a>

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciOnesubscriptionOrganizationSubscriptionsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilter">DataOciOnesubscriptionOrganizationSubscriptionsFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciOnesubscriptionOrganizationSubscriptionsConfig <a name="DataOciOnesubscriptionOrganizationSubscriptionsConfig" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_onesubscription_organization_subscriptions

dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  filter: typing.Union[IResolvable, typing.List[DataOciOnesubscriptionOrganizationSubscriptionsFilter]] = None,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_organization_subscriptions#compartment_id DataOciOnesubscriptionOrganizationSubscriptions#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilter">DataOciOnesubscriptionOrganizationSubscriptionsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_organization_subscriptions#id DataOciOnesubscriptionOrganizationSubscriptions#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_organization_subscriptions#compartment_id DataOciOnesubscriptionOrganizationSubscriptions#compartment_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciOnesubscriptionOrganizationSubscriptionsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilter">DataOciOnesubscriptionOrganizationSubscriptionsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_organization_subscriptions#filter DataOciOnesubscriptionOrganizationSubscriptions#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_organization_subscriptions#id DataOciOnesubscriptionOrganizationSubscriptions#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciOnesubscriptionOrganizationSubscriptionsFilter <a name="DataOciOnesubscriptionOrganizationSubscriptionsFilter" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_onesubscription_organization_subscriptions

dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_organization_subscriptions#name DataOciOnesubscriptionOrganizationSubscriptions#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_organization_subscriptions#values DataOciOnesubscriptionOrganizationSubscriptions#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_organization_subscriptions#regex DataOciOnesubscriptionOrganizationSubscriptions#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_organization_subscriptions#name DataOciOnesubscriptionOrganizationSubscriptions#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_organization_subscriptions#values DataOciOnesubscriptionOrganizationSubscriptions#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_organization_subscriptions#regex DataOciOnesubscriptionOrganizationSubscriptions#regex}.

---

### DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptions <a name="DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptions" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptions.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_onesubscription_organization_subscriptions

dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptions()
```


### DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrency <a name="DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrency" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrency"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrency.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_onesubscription_organization_subscriptions

dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrency()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciOnesubscriptionOrganizationSubscriptionsFilterList <a name="DataOciOnesubscriptionOrganizationSubscriptionsFilterList" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_onesubscription_organization_subscriptions

dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOnesubscriptionOrganizationSubscriptionsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilter">DataOciOnesubscriptionOrganizationSubscriptionsFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciOnesubscriptionOrganizationSubscriptionsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilter">DataOciOnesubscriptionOrganizationSubscriptionsFilter</a>]]

---


### DataOciOnesubscriptionOrganizationSubscriptionsFilterOutputReference <a name="DataOciOnesubscriptionOrganizationSubscriptionsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_onesubscription_organization_subscriptions

dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilter">DataOciOnesubscriptionOrganizationSubscriptionsFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciOnesubscriptionOrganizationSubscriptionsFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilter">DataOciOnesubscriptionOrganizationSubscriptionsFilter</a>]

---


### DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyList <a name="DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyList" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_onesubscription_organization_subscriptions

dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyOutputReference <a name="DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_onesubscription_organization_subscriptions

dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyOutputReference.property.isoCode">iso_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyOutputReference.property.stdPrecision">std_precision</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrency">DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrency</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `iso_code`<sup>Required</sup> <a name="iso_code" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyOutputReference.property.isoCode"></a>

```python
iso_code: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `std_precision`<sup>Required</sup> <a name="std_precision" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyOutputReference.property.stdPrecision"></a>

```python
std_precision: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyOutputReference.property.internalValue"></a>

```python
internal_value: DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrency
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrency">DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrency</a>

---


### DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsList <a name="DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsList" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_onesubscription_organization_subscriptions

dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsOutputReference <a name="DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_onesubscription_organization_subscriptions

dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsOutputReference.property.currency">currency</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyList">DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsOutputReference.property.serviceName">service_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsOutputReference.property.timeEnd">time_end</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsOutputReference.property.timeStart">time_start</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsOutputReference.property.totalValue">total_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptions">DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `currency`<sup>Required</sup> <a name="currency" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsOutputReference.property.currency"></a>

```python
currency: DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyList">DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `service_name`<sup>Required</sup> <a name="service_name" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsOutputReference.property.serviceName"></a>

```python
service_name: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `time_end`<sup>Required</sup> <a name="time_end" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsOutputReference.property.timeEnd"></a>

```python
time_end: str
```

- *Type:* str

---

##### `time_start`<sup>Required</sup> <a name="time_start" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsOutputReference.property.timeStart"></a>

```python
time_start: str
```

- *Type:* str

---

##### `total_value`<sup>Required</sup> <a name="total_value" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsOutputReference.property.totalValue"></a>

```python
total_value: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptions
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptions">DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptions</a>

---



