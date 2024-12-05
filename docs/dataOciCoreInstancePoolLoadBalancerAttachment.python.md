# `dataOciCoreInstancePoolLoadBalancerAttachment` Submodule <a name="`dataOciCoreInstancePoolLoadBalancerAttachment` Submodule" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciCoreInstancePoolLoadBalancerAttachment <a name="DataOciCoreInstancePoolLoadBalancerAttachment" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_instance_pool_load_balancer_attachment oci_core_instance_pool_load_balancer_attachment}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_instance_pool_load_balancer_attachment

dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  instance_pool_id: str,
  instance_pool_load_balancer_attachment_id: str,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.Initializer.parameter.instancePoolId">instance_pool_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_instance_pool_load_balancer_attachment#instance_pool_id DataOciCoreInstancePoolLoadBalancerAttachment#instance_pool_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.Initializer.parameter.instancePoolLoadBalancerAttachmentId">instance_pool_load_balancer_attachment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_instance_pool_load_balancer_attachment#instance_pool_load_balancer_attachment_id DataOciCoreInstancePoolLoadBalancerAttachment#instance_pool_load_balancer_attachment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_instance_pool_load_balancer_attachment#id DataOciCoreInstancePoolLoadBalancerAttachment#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `instance_pool_id`<sup>Required</sup> <a name="instance_pool_id" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.Initializer.parameter.instancePoolId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_instance_pool_load_balancer_attachment#instance_pool_id DataOciCoreInstancePoolLoadBalancerAttachment#instance_pool_id}.

---

##### `instance_pool_load_balancer_attachment_id`<sup>Required</sup> <a name="instance_pool_load_balancer_attachment_id" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.Initializer.parameter.instancePoolLoadBalancerAttachmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_instance_pool_load_balancer_attachment#instance_pool_load_balancer_attachment_id DataOciCoreInstancePoolLoadBalancerAttachment#instance_pool_load_balancer_attachment_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_instance_pool_load_balancer_attachment#id DataOciCoreInstancePoolLoadBalancerAttachment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciCoreInstancePoolLoadBalancerAttachment resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_instance_pool_load_balancer_attachment

dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_instance_pool_load_balancer_attachment

dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_instance_pool_load_balancer_attachment

dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_instance_pool_load_balancer_attachment

dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciCoreInstancePoolLoadBalancerAttachment resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciCoreInstancePoolLoadBalancerAttachment to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciCoreInstancePoolLoadBalancerAttachment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_instance_pool_load_balancer_attachment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciCoreInstancePoolLoadBalancerAttachment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.property.backendSetName">backend_set_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.property.loadBalancerId">load_balancer_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.property.vnicSelection">vnic_selection</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.property.instancePoolIdInput">instance_pool_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.property.instancePoolLoadBalancerAttachmentIdInput">instance_pool_load_balancer_attachment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.property.instancePoolId">instance_pool_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.property.instancePoolLoadBalancerAttachmentId">instance_pool_load_balancer_attachment_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `backend_set_name`<sup>Required</sup> <a name="backend_set_name" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.property.backendSetName"></a>

```python
backend_set_name: str
```

- *Type:* str

---

##### `load_balancer_id`<sup>Required</sup> <a name="load_balancer_id" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.property.loadBalancerId"></a>

```python
load_balancer_id: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `vnic_selection`<sup>Required</sup> <a name="vnic_selection" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.property.vnicSelection"></a>

```python
vnic_selection: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `instance_pool_id_input`<sup>Optional</sup> <a name="instance_pool_id_input" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.property.instancePoolIdInput"></a>

```python
instance_pool_id_input: str
```

- *Type:* str

---

##### `instance_pool_load_balancer_attachment_id_input`<sup>Optional</sup> <a name="instance_pool_load_balancer_attachment_id_input" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.property.instancePoolLoadBalancerAttachmentIdInput"></a>

```python
instance_pool_load_balancer_attachment_id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `instance_pool_id`<sup>Required</sup> <a name="instance_pool_id" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.property.instancePoolId"></a>

```python
instance_pool_id: str
```

- *Type:* str

---

##### `instance_pool_load_balancer_attachment_id`<sup>Required</sup> <a name="instance_pool_load_balancer_attachment_id" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.property.instancePoolLoadBalancerAttachmentId"></a>

```python
instance_pool_load_balancer_attachment_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciCoreInstancePoolLoadBalancerAttachmentConfig <a name="DataOciCoreInstancePoolLoadBalancerAttachmentConfig" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachmentConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachmentConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_instance_pool_load_balancer_attachment

dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachmentConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  instance_pool_id: str,
  instance_pool_load_balancer_attachment_id: str,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachmentConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachmentConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachmentConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachmentConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachmentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachmentConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachmentConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachmentConfig.property.instancePoolId">instance_pool_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_instance_pool_load_balancer_attachment#instance_pool_id DataOciCoreInstancePoolLoadBalancerAttachment#instance_pool_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachmentConfig.property.instancePoolLoadBalancerAttachmentId">instance_pool_load_balancer_attachment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_instance_pool_load_balancer_attachment#instance_pool_load_balancer_attachment_id DataOciCoreInstancePoolLoadBalancerAttachment#instance_pool_load_balancer_attachment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachmentConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_instance_pool_load_balancer_attachment#id DataOciCoreInstancePoolLoadBalancerAttachment#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachmentConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachmentConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachmentConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachmentConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachmentConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachmentConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachmentConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `instance_pool_id`<sup>Required</sup> <a name="instance_pool_id" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachmentConfig.property.instancePoolId"></a>

```python
instance_pool_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_instance_pool_load_balancer_attachment#instance_pool_id DataOciCoreInstancePoolLoadBalancerAttachment#instance_pool_id}.

---

##### `instance_pool_load_balancer_attachment_id`<sup>Required</sup> <a name="instance_pool_load_balancer_attachment_id" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachmentConfig.property.instancePoolLoadBalancerAttachmentId"></a>

```python
instance_pool_load_balancer_attachment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_instance_pool_load_balancer_attachment#instance_pool_load_balancer_attachment_id DataOciCoreInstancePoolLoadBalancerAttachment#instance_pool_load_balancer_attachment_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachmentConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_instance_pool_load_balancer_attachment#id DataOciCoreInstancePoolLoadBalancerAttachment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---


