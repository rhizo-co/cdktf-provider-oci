# `dataOciLoadBalancerListenerRules` Submodule <a name="`dataOciLoadBalancerListenerRules` Submodule" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciLoadBalancerListenerRules <a name="DataOciLoadBalancerListenerRules" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRules"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/load_balancer_listener_rules oci_load_balancer_listener_rules}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRules.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_load_balancer_listener_rules

dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRules(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  listener_name: str,
  load_balancer_id: str,
  filter: typing.Union[IResolvable, typing.List[DataOciLoadBalancerListenerRulesFilter]] = None,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRules.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRules.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRules.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRules.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRules.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRules.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRules.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRules.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRules.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRules.Initializer.parameter.listenerName">listener_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/load_balancer_listener_rules#listener_name DataOciLoadBalancerListenerRules#listener_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRules.Initializer.parameter.loadBalancerId">load_balancer_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/load_balancer_listener_rules#load_balancer_id DataOciLoadBalancerListenerRules#load_balancer_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRules.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesFilter">DataOciLoadBalancerListenerRulesFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRules.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/load_balancer_listener_rules#id DataOciLoadBalancerListenerRules#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRules.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRules.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRules.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRules.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRules.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRules.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRules.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRules.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRules.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `listener_name`<sup>Required</sup> <a name="listener_name" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRules.Initializer.parameter.listenerName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/load_balancer_listener_rules#listener_name DataOciLoadBalancerListenerRules#listener_name}.

---

##### `load_balancer_id`<sup>Required</sup> <a name="load_balancer_id" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRules.Initializer.parameter.loadBalancerId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/load_balancer_listener_rules#load_balancer_id DataOciLoadBalancerListenerRules#load_balancer_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRules.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesFilter">DataOciLoadBalancerListenerRulesFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/load_balancer_listener_rules#filter DataOciLoadBalancerListenerRules#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRules.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/load_balancer_listener_rules#id DataOciLoadBalancerListenerRules#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRules.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRules.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRules.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRules.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRules.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRules.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRules.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRules.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRules.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRules.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRules.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRules.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRules.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRules.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRules.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRules.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRules.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRules.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRules.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRules.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRules.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRules.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRules.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRules.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRules.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRules.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRules.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRules.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRules.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRules.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRules.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRules.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRules.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRules.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRules.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRules.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRules.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRules.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRules.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRules.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRules.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRules.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRules.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRules.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRules.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRules.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRules.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRules.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRules.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRules.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRules.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciLoadBalancerListenerRulesFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRules.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesFilter">DataOciLoadBalancerListenerRulesFilter</a>]]

---

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRules.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRules.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRules.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRules.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRules.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRules.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciLoadBalancerListenerRules resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRules.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_load_balancer_listener_rules

dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRules.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRules.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRules.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_load_balancer_listener_rules

dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRules.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRules.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRules.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_load_balancer_listener_rules

dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRules.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRules.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRules.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_load_balancer_listener_rules

dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRules.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciLoadBalancerListenerRules resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRules.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRules.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciLoadBalancerListenerRules to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRules.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciLoadBalancerListenerRules that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/load_balancer_listener_rules#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRules.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciLoadBalancerListenerRules to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRules.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRules.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRules.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRules.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRules.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRules.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRules.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRules.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRules.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRules.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRules.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRules.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRules.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesFilterList">DataOciLoadBalancerListenerRulesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRules.property.listenerRules">listener_rules</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesList">DataOciLoadBalancerListenerRulesListenerRulesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRules.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesFilter">DataOciLoadBalancerListenerRulesFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRules.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRules.property.listenerNameInput">listener_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRules.property.loadBalancerIdInput">load_balancer_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRules.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRules.property.listenerName">listener_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRules.property.loadBalancerId">load_balancer_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRules.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRules.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRules.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRules.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRules.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRules.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRules.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRules.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRules.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRules.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRules.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRules.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRules.property.filter"></a>

```python
filter: DataOciLoadBalancerListenerRulesFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesFilterList">DataOciLoadBalancerListenerRulesFilterList</a>

---

##### `listener_rules`<sup>Required</sup> <a name="listener_rules" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRules.property.listenerRules"></a>

```python
listener_rules: DataOciLoadBalancerListenerRulesListenerRulesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesList">DataOciLoadBalancerListenerRulesListenerRulesList</a>

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRules.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciLoadBalancerListenerRulesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesFilter">DataOciLoadBalancerListenerRulesFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRules.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `listener_name_input`<sup>Optional</sup> <a name="listener_name_input" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRules.property.listenerNameInput"></a>

```python
listener_name_input: str
```

- *Type:* str

---

##### `load_balancer_id_input`<sup>Optional</sup> <a name="load_balancer_id_input" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRules.property.loadBalancerIdInput"></a>

```python
load_balancer_id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRules.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `listener_name`<sup>Required</sup> <a name="listener_name" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRules.property.listenerName"></a>

```python
listener_name: str
```

- *Type:* str

---

##### `load_balancer_id`<sup>Required</sup> <a name="load_balancer_id" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRules.property.loadBalancerId"></a>

```python
load_balancer_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRules.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRules.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciLoadBalancerListenerRulesConfig <a name="DataOciLoadBalancerListenerRulesConfig" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_load_balancer_listener_rules

dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  listener_name: str,
  load_balancer_id: str,
  filter: typing.Union[IResolvable, typing.List[DataOciLoadBalancerListenerRulesFilter]] = None,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesConfig.property.listenerName">listener_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/load_balancer_listener_rules#listener_name DataOciLoadBalancerListenerRules#listener_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesConfig.property.loadBalancerId">load_balancer_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/load_balancer_listener_rules#load_balancer_id DataOciLoadBalancerListenerRules#load_balancer_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesFilter">DataOciLoadBalancerListenerRulesFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/load_balancer_listener_rules#id DataOciLoadBalancerListenerRules#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `listener_name`<sup>Required</sup> <a name="listener_name" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesConfig.property.listenerName"></a>

```python
listener_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/load_balancer_listener_rules#listener_name DataOciLoadBalancerListenerRules#listener_name}.

---

##### `load_balancer_id`<sup>Required</sup> <a name="load_balancer_id" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesConfig.property.loadBalancerId"></a>

```python
load_balancer_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/load_balancer_listener_rules#load_balancer_id DataOciLoadBalancerListenerRules#load_balancer_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciLoadBalancerListenerRulesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesFilter">DataOciLoadBalancerListenerRulesFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/load_balancer_listener_rules#filter DataOciLoadBalancerListenerRules#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/load_balancer_listener_rules#id DataOciLoadBalancerListenerRules#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciLoadBalancerListenerRulesFilter <a name="DataOciLoadBalancerListenerRulesFilter" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_load_balancer_listener_rules

dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/load_balancer_listener_rules#name DataOciLoadBalancerListenerRules#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/load_balancer_listener_rules#values DataOciLoadBalancerListenerRules#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/load_balancer_listener_rules#regex DataOciLoadBalancerListenerRules#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/load_balancer_listener_rules#name DataOciLoadBalancerListenerRules#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/load_balancer_listener_rules#values DataOciLoadBalancerListenerRules#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/load_balancer_listener_rules#regex DataOciLoadBalancerListenerRules#regex}.

---

### DataOciLoadBalancerListenerRulesListenerRules <a name="DataOciLoadBalancerListenerRulesListenerRules" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRules"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRules.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_load_balancer_listener_rules

dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRules()
```


### DataOciLoadBalancerListenerRulesListenerRulesRule <a name="DataOciLoadBalancerListenerRulesListenerRulesRule" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRule"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRule.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_load_balancer_listener_rules

dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRule()
```


### DataOciLoadBalancerListenerRulesListenerRulesRuleConditions <a name="DataOciLoadBalancerListenerRulesListenerRulesRuleConditions" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleConditions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleConditions.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_load_balancer_listener_rules

dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleConditions()
```


### DataOciLoadBalancerListenerRulesListenerRulesRuleIpMaxConnections <a name="DataOciLoadBalancerListenerRulesListenerRulesRuleIpMaxConnections" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleIpMaxConnections"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleIpMaxConnections.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_load_balancer_listener_rules

dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleIpMaxConnections()
```


### DataOciLoadBalancerListenerRulesListenerRulesRuleRedirectUri <a name="DataOciLoadBalancerListenerRulesListenerRulesRuleRedirectUri" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleRedirectUri"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleRedirectUri.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_load_balancer_listener_rules

dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleRedirectUri()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciLoadBalancerListenerRulesFilterList <a name="DataOciLoadBalancerListenerRulesFilterList" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_load_balancer_listener_rules

dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciLoadBalancerListenerRulesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesFilter">DataOciLoadBalancerListenerRulesFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciLoadBalancerListenerRulesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesFilter">DataOciLoadBalancerListenerRulesFilter</a>]]

---


### DataOciLoadBalancerListenerRulesFilterOutputReference <a name="DataOciLoadBalancerListenerRulesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_load_balancer_listener_rules

dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesFilter">DataOciLoadBalancerListenerRulesFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciLoadBalancerListenerRulesFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesFilter">DataOciLoadBalancerListenerRulesFilter</a>]

---


### DataOciLoadBalancerListenerRulesListenerRulesList <a name="DataOciLoadBalancerListenerRulesListenerRulesList" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_load_balancer_listener_rules

dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciLoadBalancerListenerRulesListenerRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciLoadBalancerListenerRulesListenerRulesOutputReference <a name="DataOciLoadBalancerListenerRulesListenerRulesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_load_balancer_listener_rules

dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesOutputReference.property.rule">rule</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleList">DataOciLoadBalancerListenerRulesListenerRulesRuleList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRules">DataOciLoadBalancerListenerRulesListenerRules</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `rule`<sup>Required</sup> <a name="rule" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesOutputReference.property.rule"></a>

```python
rule: DataOciLoadBalancerListenerRulesListenerRulesRuleList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleList">DataOciLoadBalancerListenerRulesListenerRulesRuleList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesOutputReference.property.internalValue"></a>

```python
internal_value: DataOciLoadBalancerListenerRulesListenerRules
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRules">DataOciLoadBalancerListenerRulesListenerRules</a>

---


### DataOciLoadBalancerListenerRulesListenerRulesRuleConditionsList <a name="DataOciLoadBalancerListenerRulesListenerRulesRuleConditionsList" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleConditionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleConditionsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_load_balancer_listener_rules

dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleConditionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleConditionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleConditionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleConditionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleConditionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleConditionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleConditionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleConditionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleConditionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleConditionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleConditionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleConditionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleConditionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleConditionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleConditionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleConditionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciLoadBalancerListenerRulesListenerRulesRuleConditionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleConditionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleConditionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleConditionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleConditionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleConditionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciLoadBalancerListenerRulesListenerRulesRuleConditionsOutputReference <a name="DataOciLoadBalancerListenerRulesListenerRulesRuleConditionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleConditionsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_load_balancer_listener_rules

dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleConditionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleConditionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleConditionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleConditionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleConditionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleConditionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleConditionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleConditionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleConditionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleConditionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleConditionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleConditionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleConditionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleConditionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleConditionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleConditionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleConditionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleConditionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleConditionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleConditionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleConditionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleConditionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleConditionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleConditionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleConditionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleConditionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleConditionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleConditionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleConditionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleConditionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleConditionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleConditionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleConditionsOutputReference.property.attributeName">attribute_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleConditionsOutputReference.property.attributeValue">attribute_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleConditionsOutputReference.property.operator">operator</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleConditionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleConditions">DataOciLoadBalancerListenerRulesListenerRulesRuleConditions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleConditionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleConditionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `attribute_name`<sup>Required</sup> <a name="attribute_name" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleConditionsOutputReference.property.attributeName"></a>

```python
attribute_name: str
```

- *Type:* str

---

##### `attribute_value`<sup>Required</sup> <a name="attribute_value" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleConditionsOutputReference.property.attributeValue"></a>

```python
attribute_value: str
```

- *Type:* str

---

##### `operator`<sup>Required</sup> <a name="operator" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleConditionsOutputReference.property.operator"></a>

```python
operator: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleConditionsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciLoadBalancerListenerRulesListenerRulesRuleConditions
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleConditions">DataOciLoadBalancerListenerRulesListenerRulesRuleConditions</a>

---


### DataOciLoadBalancerListenerRulesListenerRulesRuleIpMaxConnectionsList <a name="DataOciLoadBalancerListenerRulesListenerRulesRuleIpMaxConnectionsList" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleIpMaxConnectionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleIpMaxConnectionsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_load_balancer_listener_rules

dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleIpMaxConnectionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleIpMaxConnectionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleIpMaxConnectionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleIpMaxConnectionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleIpMaxConnectionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleIpMaxConnectionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleIpMaxConnectionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleIpMaxConnectionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleIpMaxConnectionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleIpMaxConnectionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleIpMaxConnectionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleIpMaxConnectionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleIpMaxConnectionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleIpMaxConnectionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleIpMaxConnectionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleIpMaxConnectionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleIpMaxConnectionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleIpMaxConnectionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleIpMaxConnectionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciLoadBalancerListenerRulesListenerRulesRuleIpMaxConnectionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleIpMaxConnectionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleIpMaxConnectionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleIpMaxConnectionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleIpMaxConnectionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleIpMaxConnectionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciLoadBalancerListenerRulesListenerRulesRuleIpMaxConnectionsOutputReference <a name="DataOciLoadBalancerListenerRulesListenerRulesRuleIpMaxConnectionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleIpMaxConnectionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleIpMaxConnectionsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_load_balancer_listener_rules

dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleIpMaxConnectionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleIpMaxConnectionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleIpMaxConnectionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleIpMaxConnectionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleIpMaxConnectionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleIpMaxConnectionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleIpMaxConnectionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleIpMaxConnectionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleIpMaxConnectionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleIpMaxConnectionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleIpMaxConnectionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleIpMaxConnectionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleIpMaxConnectionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleIpMaxConnectionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleIpMaxConnectionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleIpMaxConnectionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleIpMaxConnectionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleIpMaxConnectionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleIpMaxConnectionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleIpMaxConnectionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleIpMaxConnectionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleIpMaxConnectionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleIpMaxConnectionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleIpMaxConnectionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleIpMaxConnectionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleIpMaxConnectionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleIpMaxConnectionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleIpMaxConnectionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleIpMaxConnectionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleIpMaxConnectionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleIpMaxConnectionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleIpMaxConnectionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleIpMaxConnectionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleIpMaxConnectionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleIpMaxConnectionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleIpMaxConnectionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleIpMaxConnectionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleIpMaxConnectionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleIpMaxConnectionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleIpMaxConnectionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleIpMaxConnectionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleIpMaxConnectionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleIpMaxConnectionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleIpMaxConnectionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleIpMaxConnectionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleIpMaxConnectionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleIpMaxConnectionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleIpMaxConnectionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleIpMaxConnectionsOutputReference.property.ipAddresses">ip_addresses</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleIpMaxConnectionsOutputReference.property.maxConnections">max_connections</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleIpMaxConnectionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleIpMaxConnections">DataOciLoadBalancerListenerRulesListenerRulesRuleIpMaxConnections</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleIpMaxConnectionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleIpMaxConnectionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ip_addresses`<sup>Required</sup> <a name="ip_addresses" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleIpMaxConnectionsOutputReference.property.ipAddresses"></a>

```python
ip_addresses: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `max_connections`<sup>Required</sup> <a name="max_connections" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleIpMaxConnectionsOutputReference.property.maxConnections"></a>

```python
max_connections: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleIpMaxConnectionsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciLoadBalancerListenerRulesListenerRulesRuleIpMaxConnections
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleIpMaxConnections">DataOciLoadBalancerListenerRulesListenerRulesRuleIpMaxConnections</a>

---


### DataOciLoadBalancerListenerRulesListenerRulesRuleList <a name="DataOciLoadBalancerListenerRulesListenerRulesRuleList" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_load_balancer_listener_rules

dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciLoadBalancerListenerRulesListenerRulesRuleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciLoadBalancerListenerRulesListenerRulesRuleOutputReference <a name="DataOciLoadBalancerListenerRulesListenerRulesRuleOutputReference" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_load_balancer_listener_rules

dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleOutputReference.property.action">action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleOutputReference.property.allowedMethods">allowed_methods</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleOutputReference.property.areInvalidCharactersAllowed">are_invalid_characters_allowed</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleOutputReference.property.conditions">conditions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleConditionsList">DataOciLoadBalancerListenerRulesListenerRulesRuleConditionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleOutputReference.property.defaultMaxConnections">default_max_connections</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleOutputReference.property.header">header</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleOutputReference.property.httpLargeHeaderSizeInKb">http_large_header_size_in_kb</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleOutputReference.property.ipMaxConnections">ip_max_connections</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleIpMaxConnectionsList">DataOciLoadBalancerListenerRulesListenerRulesRuleIpMaxConnectionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleOutputReference.property.prefix">prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleOutputReference.property.redirectUri">redirect_uri</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleRedirectUriList">DataOciLoadBalancerListenerRulesListenerRulesRuleRedirectUriList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleOutputReference.property.responseCode">response_code</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleOutputReference.property.statusCode">status_code</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleOutputReference.property.suffix">suffix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRule">DataOciLoadBalancerListenerRulesListenerRulesRule</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `action`<sup>Required</sup> <a name="action" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleOutputReference.property.action"></a>

```python
action: str
```

- *Type:* str

---

##### `allowed_methods`<sup>Required</sup> <a name="allowed_methods" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleOutputReference.property.allowedMethods"></a>

```python
allowed_methods: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `are_invalid_characters_allowed`<sup>Required</sup> <a name="are_invalid_characters_allowed" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleOutputReference.property.areInvalidCharactersAllowed"></a>

```python
are_invalid_characters_allowed: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `conditions`<sup>Required</sup> <a name="conditions" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleOutputReference.property.conditions"></a>

```python
conditions: DataOciLoadBalancerListenerRulesListenerRulesRuleConditionsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleConditionsList">DataOciLoadBalancerListenerRulesListenerRulesRuleConditionsList</a>

---

##### `default_max_connections`<sup>Required</sup> <a name="default_max_connections" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleOutputReference.property.defaultMaxConnections"></a>

```python
default_max_connections: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `header`<sup>Required</sup> <a name="header" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleOutputReference.property.header"></a>

```python
header: str
```

- *Type:* str

---

##### `http_large_header_size_in_kb`<sup>Required</sup> <a name="http_large_header_size_in_kb" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleOutputReference.property.httpLargeHeaderSizeInKb"></a>

```python
http_large_header_size_in_kb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ip_max_connections`<sup>Required</sup> <a name="ip_max_connections" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleOutputReference.property.ipMaxConnections"></a>

```python
ip_max_connections: DataOciLoadBalancerListenerRulesListenerRulesRuleIpMaxConnectionsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleIpMaxConnectionsList">DataOciLoadBalancerListenerRulesListenerRulesRuleIpMaxConnectionsList</a>

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleOutputReference.property.prefix"></a>

```python
prefix: str
```

- *Type:* str

---

##### `redirect_uri`<sup>Required</sup> <a name="redirect_uri" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleOutputReference.property.redirectUri"></a>

```python
redirect_uri: DataOciLoadBalancerListenerRulesListenerRulesRuleRedirectUriList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleRedirectUriList">DataOciLoadBalancerListenerRulesListenerRulesRuleRedirectUriList</a>

---

##### `response_code`<sup>Required</sup> <a name="response_code" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleOutputReference.property.responseCode"></a>

```python
response_code: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `status_code`<sup>Required</sup> <a name="status_code" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleOutputReference.property.statusCode"></a>

```python
status_code: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `suffix`<sup>Required</sup> <a name="suffix" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleOutputReference.property.suffix"></a>

```python
suffix: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleOutputReference.property.internalValue"></a>

```python
internal_value: DataOciLoadBalancerListenerRulesListenerRulesRule
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRule">DataOciLoadBalancerListenerRulesListenerRulesRule</a>

---


### DataOciLoadBalancerListenerRulesListenerRulesRuleRedirectUriList <a name="DataOciLoadBalancerListenerRulesListenerRulesRuleRedirectUriList" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleRedirectUriList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleRedirectUriList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_load_balancer_listener_rules

dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleRedirectUriList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleRedirectUriList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleRedirectUriList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleRedirectUriList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleRedirectUriList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleRedirectUriList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleRedirectUriList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleRedirectUriList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleRedirectUriList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleRedirectUriList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleRedirectUriList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleRedirectUriList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleRedirectUriList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleRedirectUriList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleRedirectUriList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleRedirectUriList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleRedirectUriList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleRedirectUriList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleRedirectUriList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciLoadBalancerListenerRulesListenerRulesRuleRedirectUriOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleRedirectUriList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleRedirectUriList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleRedirectUriList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleRedirectUriList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleRedirectUriList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciLoadBalancerListenerRulesListenerRulesRuleRedirectUriOutputReference <a name="DataOciLoadBalancerListenerRulesListenerRulesRuleRedirectUriOutputReference" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleRedirectUriOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleRedirectUriOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_load_balancer_listener_rules

dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleRedirectUriOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleRedirectUriOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleRedirectUriOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleRedirectUriOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleRedirectUriOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleRedirectUriOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleRedirectUriOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleRedirectUriOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleRedirectUriOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleRedirectUriOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleRedirectUriOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleRedirectUriOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleRedirectUriOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleRedirectUriOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleRedirectUriOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleRedirectUriOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleRedirectUriOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleRedirectUriOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleRedirectUriOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleRedirectUriOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleRedirectUriOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleRedirectUriOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleRedirectUriOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleRedirectUriOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleRedirectUriOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleRedirectUriOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleRedirectUriOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleRedirectUriOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleRedirectUriOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleRedirectUriOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleRedirectUriOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleRedirectUriOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleRedirectUriOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleRedirectUriOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleRedirectUriOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleRedirectUriOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleRedirectUriOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleRedirectUriOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleRedirectUriOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleRedirectUriOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleRedirectUriOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleRedirectUriOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleRedirectUriOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleRedirectUriOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleRedirectUriOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleRedirectUriOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleRedirectUriOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleRedirectUriOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleRedirectUriOutputReference.property.host">host</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleRedirectUriOutputReference.property.path">path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleRedirectUriOutputReference.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleRedirectUriOutputReference.property.protocol">protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleRedirectUriOutputReference.property.query">query</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleRedirectUriOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleRedirectUri">DataOciLoadBalancerListenerRulesListenerRulesRuleRedirectUri</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleRedirectUriOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleRedirectUriOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `host`<sup>Required</sup> <a name="host" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleRedirectUriOutputReference.property.host"></a>

```python
host: str
```

- *Type:* str

---

##### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleRedirectUriOutputReference.property.path"></a>

```python
path: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleRedirectUriOutputReference.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleRedirectUriOutputReference.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

---

##### `query`<sup>Required</sup> <a name="query" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleRedirectUriOutputReference.property.query"></a>

```python
query: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleRedirectUriOutputReference.property.internalValue"></a>

```python
internal_value: DataOciLoadBalancerListenerRulesListenerRulesRuleRedirectUri
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerListenerRules.DataOciLoadBalancerListenerRulesListenerRulesRuleRedirectUri">DataOciLoadBalancerListenerRulesListenerRulesRuleRedirectUri</a>

---



