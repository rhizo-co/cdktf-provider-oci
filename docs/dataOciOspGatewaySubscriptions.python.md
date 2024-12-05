# `dataOciOspGatewaySubscriptions` Submodule <a name="`dataOciOspGatewaySubscriptions` Submodule" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciOspGatewaySubscriptions <a name="DataOciOspGatewaySubscriptions" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_subscriptions oci_osp_gateway_subscriptions}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osp_gateway_subscriptions

dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions(
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
  osp_home_region: str,
  filter: typing.Union[IResolvable, typing.List[DataOciOspGatewaySubscriptionsFilter]] = None,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_subscriptions#compartment_id DataOciOspGatewaySubscriptions#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.Initializer.parameter.ospHomeRegion">osp_home_region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_subscriptions#osp_home_region DataOciOspGatewaySubscriptions#osp_home_region}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilter">DataOciOspGatewaySubscriptionsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_subscriptions#id DataOciOspGatewaySubscriptions#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_subscriptions#compartment_id DataOciOspGatewaySubscriptions#compartment_id}.

---

##### `osp_home_region`<sup>Required</sup> <a name="osp_home_region" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.Initializer.parameter.ospHomeRegion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_subscriptions#osp_home_region DataOciOspGatewaySubscriptions#osp_home_region}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilter">DataOciOspGatewaySubscriptionsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_subscriptions#filter DataOciOspGatewaySubscriptions#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_subscriptions#id DataOciOspGatewaySubscriptions#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciOspGatewaySubscriptionsFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilter">DataOciOspGatewaySubscriptionsFilter</a>]]

---

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciOspGatewaySubscriptions resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osp_gateway_subscriptions

dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osp_gateway_subscriptions

dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osp_gateway_subscriptions

dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osp_gateway_subscriptions

dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciOspGatewaySubscriptions resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciOspGatewaySubscriptions to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciOspGatewaySubscriptions that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_subscriptions#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciOspGatewaySubscriptions to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterList">DataOciOspGatewaySubscriptionsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.property.subscriptionCollection">subscription_collection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionList">DataOciOspGatewaySubscriptionsSubscriptionCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilter">DataOciOspGatewaySubscriptionsFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.property.ospHomeRegionInput">osp_home_region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.property.ospHomeRegion">osp_home_region</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.property.filter"></a>

```python
filter: DataOciOspGatewaySubscriptionsFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterList">DataOciOspGatewaySubscriptionsFilterList</a>

---

##### `subscription_collection`<sup>Required</sup> <a name="subscription_collection" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.property.subscriptionCollection"></a>

```python
subscription_collection: DataOciOspGatewaySubscriptionsSubscriptionCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionList">DataOciOspGatewaySubscriptionsSubscriptionCollectionList</a>

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciOspGatewaySubscriptionsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilter">DataOciOspGatewaySubscriptionsFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `osp_home_region_input`<sup>Optional</sup> <a name="osp_home_region_input" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.property.ospHomeRegionInput"></a>

```python
osp_home_region_input: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `osp_home_region`<sup>Required</sup> <a name="osp_home_region" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.property.ospHomeRegion"></a>

```python
osp_home_region: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciOspGatewaySubscriptionsConfig <a name="DataOciOspGatewaySubscriptionsConfig" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osp_gateway_subscriptions

dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  osp_home_region: str,
  filter: typing.Union[IResolvable, typing.List[DataOciOspGatewaySubscriptionsFilter]] = None,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_subscriptions#compartment_id DataOciOspGatewaySubscriptions#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsConfig.property.ospHomeRegion">osp_home_region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_subscriptions#osp_home_region DataOciOspGatewaySubscriptions#osp_home_region}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilter">DataOciOspGatewaySubscriptionsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_subscriptions#id DataOciOspGatewaySubscriptions#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_subscriptions#compartment_id DataOciOspGatewaySubscriptions#compartment_id}.

---

##### `osp_home_region`<sup>Required</sup> <a name="osp_home_region" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsConfig.property.ospHomeRegion"></a>

```python
osp_home_region: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_subscriptions#osp_home_region DataOciOspGatewaySubscriptions#osp_home_region}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciOspGatewaySubscriptionsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilter">DataOciOspGatewaySubscriptionsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_subscriptions#filter DataOciOspGatewaySubscriptions#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_subscriptions#id DataOciOspGatewaySubscriptions#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciOspGatewaySubscriptionsFilter <a name="DataOciOspGatewaySubscriptionsFilter" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osp_gateway_subscriptions

dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_subscriptions#name DataOciOspGatewaySubscriptions#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_subscriptions#values DataOciOspGatewaySubscriptions#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_subscriptions#regex DataOciOspGatewaySubscriptions#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_subscriptions#name DataOciOspGatewaySubscriptions#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_subscriptions#values DataOciOspGatewaySubscriptions#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_subscriptions#regex DataOciOspGatewaySubscriptions#regex}.

---

### DataOciOspGatewaySubscriptionsSubscriptionCollection <a name="DataOciOspGatewaySubscriptionsSubscriptionCollection" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollection.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osp_gateway_subscriptions

dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollection()
```


### DataOciOspGatewaySubscriptionsSubscriptionCollectionItems <a name="DataOciOspGatewaySubscriptionsSubscriptionCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItems.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osp_gateway_subscriptions

dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItems()
```


### DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddress <a name="DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddress" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddress"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddress.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osp_gateway_subscriptions

dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddress()
```


### DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGateway <a name="DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGateway" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGateway"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGateway.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osp_gateway_subscriptions

dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGateway()
```


### DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedData <a name="DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedData" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedData"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedData.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osp_gateway_subscriptions

dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedData()
```


### DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptions <a name="DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptions" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptions.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osp_gateway_subscriptions

dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptions()
```


### DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscription <a name="DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscription" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscription"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscription.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osp_gateway_subscriptions

dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscription()
```


### DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddress <a name="DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddress" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddress"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddress.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osp_gateway_subscriptions

dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddress()
```


### DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGateway <a name="DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGateway" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGateway"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGateway.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osp_gateway_subscriptions

dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGateway()
```


### DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedData <a name="DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedData" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedData"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedData.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osp_gateway_subscriptions

dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedData()
```


### DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptions <a name="DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptions" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptions.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osp_gateway_subscriptions

dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptions()
```


### DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfo <a name="DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfo" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfo"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfo.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osp_gateway_subscriptions

dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfo()
```


### DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfo <a name="DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfo" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfo"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfo.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osp_gateway_subscriptions

dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfo()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciOspGatewaySubscriptionsFilterList <a name="DataOciOspGatewaySubscriptionsFilterList" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osp_gateway_subscriptions

dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOspGatewaySubscriptionsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilter">DataOciOspGatewaySubscriptionsFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciOspGatewaySubscriptionsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilter">DataOciOspGatewaySubscriptionsFilter</a>]]

---


### DataOciOspGatewaySubscriptionsFilterOutputReference <a name="DataOciOspGatewaySubscriptionsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osp_gateway_subscriptions

dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilter">DataOciOspGatewaySubscriptionsFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciOspGatewaySubscriptionsFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilter">DataOciOspGatewaySubscriptionsFilter</a>]

---


### DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressList <a name="DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressList" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osp_gateway_subscriptions

dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference <a name="DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osp_gateway_subscriptions

dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.property.addressKey">address_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.property.city">city</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.property.companyName">company_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.property.contributorClass">contributor_class</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.property.country">country</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.property.county">county</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.property.departmentName">department_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.property.emailAddress">email_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.property.firstName">first_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.property.internalNumber">internal_number</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.property.jobTitle">job_title</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.property.lastName">last_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.property.line1">line1</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.property.line2">line2</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.property.line3">line3</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.property.line4">line4</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.property.middleName">middle_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.property.municipalInscription">municipal_inscription</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.property.phoneCountryCode">phone_country_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.property.phoneNumber">phone_number</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.property.postalCode">postal_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.property.province">province</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.property.stateInscription">state_inscription</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.property.streetName">street_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.property.streetNumber">street_number</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddress">DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddress</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `address_key`<sup>Required</sup> <a name="address_key" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.property.addressKey"></a>

```python
address_key: str
```

- *Type:* str

---

##### `city`<sup>Required</sup> <a name="city" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.property.city"></a>

```python
city: str
```

- *Type:* str

---

##### `company_name`<sup>Required</sup> <a name="company_name" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.property.companyName"></a>

```python
company_name: str
```

- *Type:* str

---

##### `contributor_class`<sup>Required</sup> <a name="contributor_class" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.property.contributorClass"></a>

```python
contributor_class: str
```

- *Type:* str

---

##### `country`<sup>Required</sup> <a name="country" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.property.country"></a>

```python
country: str
```

- *Type:* str

---

##### `county`<sup>Required</sup> <a name="county" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.property.county"></a>

```python
county: str
```

- *Type:* str

---

##### `department_name`<sup>Required</sup> <a name="department_name" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.property.departmentName"></a>

```python
department_name: str
```

- *Type:* str

---

##### `email_address`<sup>Required</sup> <a name="email_address" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.property.emailAddress"></a>

```python
email_address: str
```

- *Type:* str

---

##### `first_name`<sup>Required</sup> <a name="first_name" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.property.firstName"></a>

```python
first_name: str
```

- *Type:* str

---

##### `internal_number`<sup>Required</sup> <a name="internal_number" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.property.internalNumber"></a>

```python
internal_number: str
```

- *Type:* str

---

##### `job_title`<sup>Required</sup> <a name="job_title" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.property.jobTitle"></a>

```python
job_title: str
```

- *Type:* str

---

##### `last_name`<sup>Required</sup> <a name="last_name" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.property.lastName"></a>

```python
last_name: str
```

- *Type:* str

---

##### `line1`<sup>Required</sup> <a name="line1" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.property.line1"></a>

```python
line1: str
```

- *Type:* str

---

##### `line2`<sup>Required</sup> <a name="line2" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.property.line2"></a>

```python
line2: str
```

- *Type:* str

---

##### `line3`<sup>Required</sup> <a name="line3" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.property.line3"></a>

```python
line3: str
```

- *Type:* str

---

##### `line4`<sup>Required</sup> <a name="line4" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.property.line4"></a>

```python
line4: str
```

- *Type:* str

---

##### `middle_name`<sup>Required</sup> <a name="middle_name" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.property.middleName"></a>

```python
middle_name: str
```

- *Type:* str

---

##### `municipal_inscription`<sup>Required</sup> <a name="municipal_inscription" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.property.municipalInscription"></a>

```python
municipal_inscription: str
```

- *Type:* str

---

##### `phone_country_code`<sup>Required</sup> <a name="phone_country_code" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.property.phoneCountryCode"></a>

```python
phone_country_code: str
```

- *Type:* str

---

##### `phone_number`<sup>Required</sup> <a name="phone_number" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.property.phoneNumber"></a>

```python
phone_number: str
```

- *Type:* str

---

##### `postal_code`<sup>Required</sup> <a name="postal_code" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.property.postalCode"></a>

```python
postal_code: str
```

- *Type:* str

---

##### `province`<sup>Required</sup> <a name="province" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.property.province"></a>

```python
province: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `state_inscription`<sup>Required</sup> <a name="state_inscription" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.property.stateInscription"></a>

```python
state_inscription: str
```

- *Type:* str

---

##### `street_name`<sup>Required</sup> <a name="street_name" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.property.streetName"></a>

```python
street_name: str
```

- *Type:* str

---

##### `street_number`<sup>Required</sup> <a name="street_number" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.property.streetNumber"></a>

```python
street_number: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.property.internalValue"></a>

```python
internal_value: DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddress
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddress">DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddress</a>

---


### DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsList <a name="DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osp_gateway_subscriptions

dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference <a name="DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osp_gateway_subscriptions

dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.property.accountType">account_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.property.billingAddress">billing_address</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressList">DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.property.billToCustAccountId">bill_to_cust_account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.property.currencyCode">currency_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.property.email">email</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.property.gsiOrgCode">gsi_org_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.property.isIntentToPay">is_intent_to_pay</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.property.languageCode">language_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.property.organizationId">organization_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.property.ospHomeRegion">osp_home_region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.property.paymentGateway">payment_gateway</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayList">DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.property.paymentOptions">payment_options</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsList">DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.property.planType">plan_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.property.shipToCustAcctRoleId">ship_to_cust_acct_role_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.property.shipToCustAcctSiteId">ship_to_cust_acct_site_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.property.subscription">subscription</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionList">DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.property.subscriptionId">subscription_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.property.subscriptionPlanNumber">subscription_plan_number</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.property.taxInfo">tax_info</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoList">DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.property.timePersonalToCorporateConv">time_personal_to_corporate_conv</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.property.timePlanUpgrade">time_plan_upgrade</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.property.timeStart">time_start</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.property.upgradeState">upgrade_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.property.upgradeStateDetails">upgrade_state_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItems">DataOciOspGatewaySubscriptionsSubscriptionCollectionItems</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `account_type`<sup>Required</sup> <a name="account_type" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.property.accountType"></a>

```python
account_type: str
```

- *Type:* str

---

##### `billing_address`<sup>Required</sup> <a name="billing_address" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.property.billingAddress"></a>

```python
billing_address: DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressList">DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressList</a>

---

##### `bill_to_cust_account_id`<sup>Required</sup> <a name="bill_to_cust_account_id" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.property.billToCustAccountId"></a>

```python
bill_to_cust_account_id: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `currency_code`<sup>Required</sup> <a name="currency_code" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.property.currencyCode"></a>

```python
currency_code: str
```

- *Type:* str

---

##### `email`<sup>Required</sup> <a name="email" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.property.email"></a>

```python
email: str
```

- *Type:* str

---

##### `gsi_org_code`<sup>Required</sup> <a name="gsi_org_code" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.property.gsiOrgCode"></a>

```python
gsi_org_code: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `is_intent_to_pay`<sup>Required</sup> <a name="is_intent_to_pay" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.property.isIntentToPay"></a>

```python
is_intent_to_pay: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `language_code`<sup>Required</sup> <a name="language_code" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.property.languageCode"></a>

```python
language_code: str
```

- *Type:* str

---

##### `organization_id`<sup>Required</sup> <a name="organization_id" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.property.organizationId"></a>

```python
organization_id: str
```

- *Type:* str

---

##### `osp_home_region`<sup>Required</sup> <a name="osp_home_region" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.property.ospHomeRegion"></a>

```python
osp_home_region: str
```

- *Type:* str

---

##### `payment_gateway`<sup>Required</sup> <a name="payment_gateway" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.property.paymentGateway"></a>

```python
payment_gateway: DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayList">DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayList</a>

---

##### `payment_options`<sup>Required</sup> <a name="payment_options" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.property.paymentOptions"></a>

```python
payment_options: DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsList">DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsList</a>

---

##### `plan_type`<sup>Required</sup> <a name="plan_type" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.property.planType"></a>

```python
plan_type: str
```

- *Type:* str

---

##### `ship_to_cust_acct_role_id`<sup>Required</sup> <a name="ship_to_cust_acct_role_id" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.property.shipToCustAcctRoleId"></a>

```python
ship_to_cust_acct_role_id: str
```

- *Type:* str

---

##### `ship_to_cust_acct_site_id`<sup>Required</sup> <a name="ship_to_cust_acct_site_id" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.property.shipToCustAcctSiteId"></a>

```python
ship_to_cust_acct_site_id: str
```

- *Type:* str

---

##### `subscription`<sup>Required</sup> <a name="subscription" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.property.subscription"></a>

```python
subscription: DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionList">DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionList</a>

---

##### `subscription_id`<sup>Required</sup> <a name="subscription_id" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.property.subscriptionId"></a>

```python
subscription_id: str
```

- *Type:* str

---

##### `subscription_plan_number`<sup>Required</sup> <a name="subscription_plan_number" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.property.subscriptionPlanNumber"></a>

```python
subscription_plan_number: str
```

- *Type:* str

---

##### `tax_info`<sup>Required</sup> <a name="tax_info" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.property.taxInfo"></a>

```python
tax_info: DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoList">DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoList</a>

---

##### `time_personal_to_corporate_conv`<sup>Required</sup> <a name="time_personal_to_corporate_conv" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.property.timePersonalToCorporateConv"></a>

```python
time_personal_to_corporate_conv: str
```

- *Type:* str

---

##### `time_plan_upgrade`<sup>Required</sup> <a name="time_plan_upgrade" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.property.timePlanUpgrade"></a>

```python
time_plan_upgrade: str
```

- *Type:* str

---

##### `time_start`<sup>Required</sup> <a name="time_start" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.property.timeStart"></a>

```python
time_start: str
```

- *Type:* str

---

##### `upgrade_state`<sup>Required</sup> <a name="upgrade_state" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.property.upgradeState"></a>

```python
upgrade_state: str
```

- *Type:* str

---

##### `upgrade_state_details`<sup>Required</sup> <a name="upgrade_state_details" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.property.upgradeStateDetails"></a>

```python
upgrade_state_details: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciOspGatewaySubscriptionsSubscriptionCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItems">DataOciOspGatewaySubscriptionsSubscriptionCollectionItems</a>

---


### DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayList <a name="DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayList" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osp_gateway_subscriptions

dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataList <a name="DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataList" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osp_gateway_subscriptions

dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataOutputReference <a name="DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osp_gateway_subscriptions

dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataOutputReference.property.cloudAccountName">cloud_account_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataOutputReference.property.promoType">promo_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedData">DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedData</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cloud_account_name`<sup>Required</sup> <a name="cloud_account_name" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataOutputReference.property.cloudAccountName"></a>

```python
cloud_account_name: str
```

- *Type:* str

---

##### `promo_type`<sup>Required</sup> <a name="promo_type" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataOutputReference.property.promoType"></a>

```python
promo_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataOutputReference.property.internalValue"></a>

```python
internal_value: DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedData
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedData">DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedData</a>

---


### DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayOutputReference <a name="DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osp_gateway_subscriptions

dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayOutputReference.property.merchantDefinedData">merchant_defined_data</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataList">DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGateway">DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGateway</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `merchant_defined_data`<sup>Required</sup> <a name="merchant_defined_data" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayOutputReference.property.merchantDefinedData"></a>

```python
merchant_defined_data: DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataList">DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayOutputReference.property.internalValue"></a>

```python
internal_value: DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGateway
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGateway">DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGateway</a>

---


### DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsList <a name="DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsList" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osp_gateway_subscriptions

dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsOutputReference <a name="DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osp_gateway_subscriptions

dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsOutputReference.property.creditCardType">credit_card_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsOutputReference.property.emailAddress">email_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsOutputReference.property.extBillingAgreementId">ext_billing_agreement_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsOutputReference.property.firstName">first_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsOutputReference.property.lastDigits">last_digits</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsOutputReference.property.lastName">last_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsOutputReference.property.nameOnCard">name_on_card</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsOutputReference.property.paymentMethod">payment_method</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsOutputReference.property.timeExpiration">time_expiration</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsOutputReference.property.walletInstrumentId">wallet_instrument_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsOutputReference.property.walletTransactionId">wallet_transaction_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptions">DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `credit_card_type`<sup>Required</sup> <a name="credit_card_type" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsOutputReference.property.creditCardType"></a>

```python
credit_card_type: str
```

- *Type:* str

---

##### `email_address`<sup>Required</sup> <a name="email_address" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsOutputReference.property.emailAddress"></a>

```python
email_address: str
```

- *Type:* str

---

##### `ext_billing_agreement_id`<sup>Required</sup> <a name="ext_billing_agreement_id" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsOutputReference.property.extBillingAgreementId"></a>

```python
ext_billing_agreement_id: str
```

- *Type:* str

---

##### `first_name`<sup>Required</sup> <a name="first_name" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsOutputReference.property.firstName"></a>

```python
first_name: str
```

- *Type:* str

---

##### `last_digits`<sup>Required</sup> <a name="last_digits" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsOutputReference.property.lastDigits"></a>

```python
last_digits: str
```

- *Type:* str

---

##### `last_name`<sup>Required</sup> <a name="last_name" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsOutputReference.property.lastName"></a>

```python
last_name: str
```

- *Type:* str

---

##### `name_on_card`<sup>Required</sup> <a name="name_on_card" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsOutputReference.property.nameOnCard"></a>

```python
name_on_card: str
```

- *Type:* str

---

##### `payment_method`<sup>Required</sup> <a name="payment_method" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsOutputReference.property.paymentMethod"></a>

```python
payment_method: str
```

- *Type:* str

---

##### `time_expiration`<sup>Required</sup> <a name="time_expiration" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsOutputReference.property.timeExpiration"></a>

```python
time_expiration: str
```

- *Type:* str

---

##### `wallet_instrument_id`<sup>Required</sup> <a name="wallet_instrument_id" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsOutputReference.property.walletInstrumentId"></a>

```python
wallet_instrument_id: str
```

- *Type:* str

---

##### `wallet_transaction_id`<sup>Required</sup> <a name="wallet_transaction_id" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsOutputReference.property.walletTransactionId"></a>

```python
wallet_transaction_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptions
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptions">DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptions</a>

---


### DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressList <a name="DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressList" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osp_gateway_subscriptions

dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference <a name="DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osp_gateway_subscriptions

dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.property.addressKey">address_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.property.city">city</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.property.companyName">company_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.property.contributorClass">contributor_class</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.property.country">country</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.property.county">county</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.property.departmentName">department_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.property.emailAddress">email_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.property.firstName">first_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.property.internalNumber">internal_number</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.property.jobTitle">job_title</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.property.lastName">last_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.property.line1">line1</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.property.line2">line2</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.property.line3">line3</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.property.line4">line4</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.property.middleName">middle_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.property.municipalInscription">municipal_inscription</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.property.phoneCountryCode">phone_country_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.property.phoneNumber">phone_number</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.property.postalCode">postal_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.property.province">province</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.property.stateInscription">state_inscription</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.property.streetName">street_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.property.streetNumber">street_number</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddress">DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddress</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `address_key`<sup>Required</sup> <a name="address_key" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.property.addressKey"></a>

```python
address_key: str
```

- *Type:* str

---

##### `city`<sup>Required</sup> <a name="city" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.property.city"></a>

```python
city: str
```

- *Type:* str

---

##### `company_name`<sup>Required</sup> <a name="company_name" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.property.companyName"></a>

```python
company_name: str
```

- *Type:* str

---

##### `contributor_class`<sup>Required</sup> <a name="contributor_class" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.property.contributorClass"></a>

```python
contributor_class: str
```

- *Type:* str

---

##### `country`<sup>Required</sup> <a name="country" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.property.country"></a>

```python
country: str
```

- *Type:* str

---

##### `county`<sup>Required</sup> <a name="county" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.property.county"></a>

```python
county: str
```

- *Type:* str

---

##### `department_name`<sup>Required</sup> <a name="department_name" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.property.departmentName"></a>

```python
department_name: str
```

- *Type:* str

---

##### `email_address`<sup>Required</sup> <a name="email_address" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.property.emailAddress"></a>

```python
email_address: str
```

- *Type:* str

---

##### `first_name`<sup>Required</sup> <a name="first_name" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.property.firstName"></a>

```python
first_name: str
```

- *Type:* str

---

##### `internal_number`<sup>Required</sup> <a name="internal_number" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.property.internalNumber"></a>

```python
internal_number: str
```

- *Type:* str

---

##### `job_title`<sup>Required</sup> <a name="job_title" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.property.jobTitle"></a>

```python
job_title: str
```

- *Type:* str

---

##### `last_name`<sup>Required</sup> <a name="last_name" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.property.lastName"></a>

```python
last_name: str
```

- *Type:* str

---

##### `line1`<sup>Required</sup> <a name="line1" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.property.line1"></a>

```python
line1: str
```

- *Type:* str

---

##### `line2`<sup>Required</sup> <a name="line2" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.property.line2"></a>

```python
line2: str
```

- *Type:* str

---

##### `line3`<sup>Required</sup> <a name="line3" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.property.line3"></a>

```python
line3: str
```

- *Type:* str

---

##### `line4`<sup>Required</sup> <a name="line4" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.property.line4"></a>

```python
line4: str
```

- *Type:* str

---

##### `middle_name`<sup>Required</sup> <a name="middle_name" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.property.middleName"></a>

```python
middle_name: str
```

- *Type:* str

---

##### `municipal_inscription`<sup>Required</sup> <a name="municipal_inscription" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.property.municipalInscription"></a>

```python
municipal_inscription: str
```

- *Type:* str

---

##### `phone_country_code`<sup>Required</sup> <a name="phone_country_code" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.property.phoneCountryCode"></a>

```python
phone_country_code: str
```

- *Type:* str

---

##### `phone_number`<sup>Required</sup> <a name="phone_number" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.property.phoneNumber"></a>

```python
phone_number: str
```

- *Type:* str

---

##### `postal_code`<sup>Required</sup> <a name="postal_code" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.property.postalCode"></a>

```python
postal_code: str
```

- *Type:* str

---

##### `province`<sup>Required</sup> <a name="province" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.property.province"></a>

```python
province: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `state_inscription`<sup>Required</sup> <a name="state_inscription" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.property.stateInscription"></a>

```python
state_inscription: str
```

- *Type:* str

---

##### `street_name`<sup>Required</sup> <a name="street_name" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.property.streetName"></a>

```python
street_name: str
```

- *Type:* str

---

##### `street_number`<sup>Required</sup> <a name="street_number" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.property.streetNumber"></a>

```python
street_number: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.property.internalValue"></a>

```python
internal_value: DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddress
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddress">DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddress</a>

---


### DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionList <a name="DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionList" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osp_gateway_subscriptions

dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference <a name="DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osp_gateway_subscriptions

dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.property.accountType">account_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.property.billingAddress">billing_address</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressList">DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.property.billToCustAccountId">bill_to_cust_account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.property.currencyCode">currency_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.property.gsiOrgCode">gsi_org_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.property.isIntentToPay">is_intent_to_pay</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.property.languageCode">language_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.property.organizationId">organization_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.property.paymentGateway">payment_gateway</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayList">DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.property.paymentOptions">payment_options</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsList">DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.property.planType">plan_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.property.shipToCustAcctRoleId">ship_to_cust_acct_role_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.property.shipToCustAcctSiteId">ship_to_cust_acct_site_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.property.subscriptionPlanNumber">subscription_plan_number</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.property.taxInfo">tax_info</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoList">DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.property.timePersonalToCorporateConv">time_personal_to_corporate_conv</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.property.timePlanUpgrade">time_plan_upgrade</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.property.timeStart">time_start</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.property.upgradeState">upgrade_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.property.upgradeStateDetails">upgrade_state_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscription">DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscription</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `account_type`<sup>Required</sup> <a name="account_type" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.property.accountType"></a>

```python
account_type: str
```

- *Type:* str

---

##### `billing_address`<sup>Required</sup> <a name="billing_address" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.property.billingAddress"></a>

```python
billing_address: DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressList">DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressList</a>

---

##### `bill_to_cust_account_id`<sup>Required</sup> <a name="bill_to_cust_account_id" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.property.billToCustAccountId"></a>

```python
bill_to_cust_account_id: str
```

- *Type:* str

---

##### `currency_code`<sup>Required</sup> <a name="currency_code" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.property.currencyCode"></a>

```python
currency_code: str
```

- *Type:* str

---

##### `gsi_org_code`<sup>Required</sup> <a name="gsi_org_code" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.property.gsiOrgCode"></a>

```python
gsi_org_code: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `is_intent_to_pay`<sup>Required</sup> <a name="is_intent_to_pay" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.property.isIntentToPay"></a>

```python
is_intent_to_pay: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `language_code`<sup>Required</sup> <a name="language_code" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.property.languageCode"></a>

```python
language_code: str
```

- *Type:* str

---

##### `organization_id`<sup>Required</sup> <a name="organization_id" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.property.organizationId"></a>

```python
organization_id: str
```

- *Type:* str

---

##### `payment_gateway`<sup>Required</sup> <a name="payment_gateway" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.property.paymentGateway"></a>

```python
payment_gateway: DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayList">DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayList</a>

---

##### `payment_options`<sup>Required</sup> <a name="payment_options" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.property.paymentOptions"></a>

```python
payment_options: DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsList">DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsList</a>

---

##### `plan_type`<sup>Required</sup> <a name="plan_type" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.property.planType"></a>

```python
plan_type: str
```

- *Type:* str

---

##### `ship_to_cust_acct_role_id`<sup>Required</sup> <a name="ship_to_cust_acct_role_id" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.property.shipToCustAcctRoleId"></a>

```python
ship_to_cust_acct_role_id: str
```

- *Type:* str

---

##### `ship_to_cust_acct_site_id`<sup>Required</sup> <a name="ship_to_cust_acct_site_id" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.property.shipToCustAcctSiteId"></a>

```python
ship_to_cust_acct_site_id: str
```

- *Type:* str

---

##### `subscription_plan_number`<sup>Required</sup> <a name="subscription_plan_number" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.property.subscriptionPlanNumber"></a>

```python
subscription_plan_number: str
```

- *Type:* str

---

##### `tax_info`<sup>Required</sup> <a name="tax_info" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.property.taxInfo"></a>

```python
tax_info: DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoList">DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoList</a>

---

##### `time_personal_to_corporate_conv`<sup>Required</sup> <a name="time_personal_to_corporate_conv" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.property.timePersonalToCorporateConv"></a>

```python
time_personal_to_corporate_conv: str
```

- *Type:* str

---

##### `time_plan_upgrade`<sup>Required</sup> <a name="time_plan_upgrade" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.property.timePlanUpgrade"></a>

```python
time_plan_upgrade: str
```

- *Type:* str

---

##### `time_start`<sup>Required</sup> <a name="time_start" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.property.timeStart"></a>

```python
time_start: str
```

- *Type:* str

---

##### `upgrade_state`<sup>Required</sup> <a name="upgrade_state" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.property.upgradeState"></a>

```python
upgrade_state: str
```

- *Type:* str

---

##### `upgrade_state_details`<sup>Required</sup> <a name="upgrade_state_details" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.property.upgradeStateDetails"></a>

```python
upgrade_state_details: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.property.internalValue"></a>

```python
internal_value: DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscription
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscription">DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscription</a>

---


### DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayList <a name="DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayList" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osp_gateway_subscriptions

dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataList <a name="DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataList" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osp_gateway_subscriptions

dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataOutputReference <a name="DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osp_gateway_subscriptions

dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.property.cloudAccountName">cloud_account_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.property.promoType">promo_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedData">DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedData</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cloud_account_name`<sup>Required</sup> <a name="cloud_account_name" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.property.cloudAccountName"></a>

```python
cloud_account_name: str
```

- *Type:* str

---

##### `promo_type`<sup>Required</sup> <a name="promo_type" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.property.promoType"></a>

```python
promo_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.property.internalValue"></a>

```python
internal_value: DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedData
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedData">DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedData</a>

---


### DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayOutputReference <a name="DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osp_gateway_subscriptions

dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayOutputReference.property.merchantDefinedData">merchant_defined_data</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataList">DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGateway">DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGateway</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `merchant_defined_data`<sup>Required</sup> <a name="merchant_defined_data" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayOutputReference.property.merchantDefinedData"></a>

```python
merchant_defined_data: DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataList">DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayOutputReference.property.internalValue"></a>

```python
internal_value: DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGateway
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGateway">DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGateway</a>

---


### DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsList <a name="DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsList" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osp_gateway_subscriptions

dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsOutputReference <a name="DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osp_gateway_subscriptions

dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsOutputReference.property.creditCardType">credit_card_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsOutputReference.property.emailAddress">email_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsOutputReference.property.extBillingAgreementId">ext_billing_agreement_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsOutputReference.property.firstName">first_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsOutputReference.property.lastDigits">last_digits</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsOutputReference.property.lastName">last_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsOutputReference.property.nameOnCard">name_on_card</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsOutputReference.property.paymentMethod">payment_method</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsOutputReference.property.timeExpiration">time_expiration</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsOutputReference.property.walletInstrumentId">wallet_instrument_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsOutputReference.property.walletTransactionId">wallet_transaction_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptions">DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `credit_card_type`<sup>Required</sup> <a name="credit_card_type" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsOutputReference.property.creditCardType"></a>

```python
credit_card_type: str
```

- *Type:* str

---

##### `email_address`<sup>Required</sup> <a name="email_address" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsOutputReference.property.emailAddress"></a>

```python
email_address: str
```

- *Type:* str

---

##### `ext_billing_agreement_id`<sup>Required</sup> <a name="ext_billing_agreement_id" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsOutputReference.property.extBillingAgreementId"></a>

```python
ext_billing_agreement_id: str
```

- *Type:* str

---

##### `first_name`<sup>Required</sup> <a name="first_name" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsOutputReference.property.firstName"></a>

```python
first_name: str
```

- *Type:* str

---

##### `last_digits`<sup>Required</sup> <a name="last_digits" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsOutputReference.property.lastDigits"></a>

```python
last_digits: str
```

- *Type:* str

---

##### `last_name`<sup>Required</sup> <a name="last_name" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsOutputReference.property.lastName"></a>

```python
last_name: str
```

- *Type:* str

---

##### `name_on_card`<sup>Required</sup> <a name="name_on_card" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsOutputReference.property.nameOnCard"></a>

```python
name_on_card: str
```

- *Type:* str

---

##### `payment_method`<sup>Required</sup> <a name="payment_method" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsOutputReference.property.paymentMethod"></a>

```python
payment_method: str
```

- *Type:* str

---

##### `time_expiration`<sup>Required</sup> <a name="time_expiration" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsOutputReference.property.timeExpiration"></a>

```python
time_expiration: str
```

- *Type:* str

---

##### `wallet_instrument_id`<sup>Required</sup> <a name="wallet_instrument_id" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsOutputReference.property.walletInstrumentId"></a>

```python
wallet_instrument_id: str
```

- *Type:* str

---

##### `wallet_transaction_id`<sup>Required</sup> <a name="wallet_transaction_id" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsOutputReference.property.walletTransactionId"></a>

```python
wallet_transaction_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptions
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptions">DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptions</a>

---


### DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoList <a name="DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoList" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osp_gateway_subscriptions

dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoOutputReference <a name="DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osp_gateway_subscriptions

dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoOutputReference.property.noTaxReasonCode">no_tax_reason_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoOutputReference.property.noTaxReasonCodeDetails">no_tax_reason_code_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoOutputReference.property.taxCnpj">tax_cnpj</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoOutputReference.property.taxPayerId">tax_payer_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoOutputReference.property.taxRegNumber">tax_reg_number</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfo">DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfo</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `no_tax_reason_code`<sup>Required</sup> <a name="no_tax_reason_code" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoOutputReference.property.noTaxReasonCode"></a>

```python
no_tax_reason_code: str
```

- *Type:* str

---

##### `no_tax_reason_code_details`<sup>Required</sup> <a name="no_tax_reason_code_details" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoOutputReference.property.noTaxReasonCodeDetails"></a>

```python
no_tax_reason_code_details: str
```

- *Type:* str

---

##### `tax_cnpj`<sup>Required</sup> <a name="tax_cnpj" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoOutputReference.property.taxCnpj"></a>

```python
tax_cnpj: str
```

- *Type:* str

---

##### `tax_payer_id`<sup>Required</sup> <a name="tax_payer_id" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoOutputReference.property.taxPayerId"></a>

```python
tax_payer_id: str
```

- *Type:* str

---

##### `tax_reg_number`<sup>Required</sup> <a name="tax_reg_number" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoOutputReference.property.taxRegNumber"></a>

```python
tax_reg_number: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoOutputReference.property.internalValue"></a>

```python
internal_value: DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfo
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfo">DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfo</a>

---


### DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoList <a name="DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoList" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osp_gateway_subscriptions

dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoOutputReference <a name="DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osp_gateway_subscriptions

dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoOutputReference.property.giro">giro</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoOutputReference.property.noTaxReasonCode">no_tax_reason_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoOutputReference.property.noTaxReasonCodeDetails">no_tax_reason_code_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoOutputReference.property.taxCnpj">tax_cnpj</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoOutputReference.property.taxPayerId">tax_payer_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoOutputReference.property.taxRegNumber">tax_reg_number</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfo">DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfo</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `giro`<sup>Required</sup> <a name="giro" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoOutputReference.property.giro"></a>

```python
giro: str
```

- *Type:* str

---

##### `no_tax_reason_code`<sup>Required</sup> <a name="no_tax_reason_code" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoOutputReference.property.noTaxReasonCode"></a>

```python
no_tax_reason_code: str
```

- *Type:* str

---

##### `no_tax_reason_code_details`<sup>Required</sup> <a name="no_tax_reason_code_details" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoOutputReference.property.noTaxReasonCodeDetails"></a>

```python
no_tax_reason_code_details: str
```

- *Type:* str

---

##### `tax_cnpj`<sup>Required</sup> <a name="tax_cnpj" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoOutputReference.property.taxCnpj"></a>

```python
tax_cnpj: str
```

- *Type:* str

---

##### `tax_payer_id`<sup>Required</sup> <a name="tax_payer_id" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoOutputReference.property.taxPayerId"></a>

```python
tax_payer_id: str
```

- *Type:* str

---

##### `tax_reg_number`<sup>Required</sup> <a name="tax_reg_number" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoOutputReference.property.taxRegNumber"></a>

```python
tax_reg_number: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoOutputReference.property.internalValue"></a>

```python
internal_value: DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfo
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfo">DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfo</a>

---


### DataOciOspGatewaySubscriptionsSubscriptionCollectionList <a name="DataOciOspGatewaySubscriptionsSubscriptionCollectionList" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osp_gateway_subscriptions

dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOspGatewaySubscriptionsSubscriptionCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciOspGatewaySubscriptionsSubscriptionCollectionOutputReference <a name="DataOciOspGatewaySubscriptionsSubscriptionCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osp_gateway_subscriptions

dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsList">DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollection">DataOciOspGatewaySubscriptionsSubscriptionCollection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionOutputReference.property.items"></a>

```python
items: DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsList">DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionOutputReference.property.internalValue"></a>

```python
internal_value: DataOciOspGatewaySubscriptionsSubscriptionCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollection">DataOciOspGatewaySubscriptionsSubscriptionCollection</a>

---



