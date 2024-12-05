# `dataOciCoreIpInventorySubnetCidr` Submodule <a name="`dataOciCoreIpInventorySubnetCidr` Submodule" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciCoreIpInventorySubnetCidr <a name="DataOciCoreIpInventorySubnetCidr" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidr"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_ip_inventory_subnet_cidr oci_core_ip_inventory_subnet_cidr}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidr.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_ip_inventory_subnet_cidr

dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidr(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  subnet_id: str,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidr.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidr.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidr.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidr.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidr.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidr.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidr.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidr.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidr.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidr.Initializer.parameter.subnetId">subnet_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_ip_inventory_subnet_cidr#subnet_id DataOciCoreIpInventorySubnetCidr#subnet_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidr.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_ip_inventory_subnet_cidr#id DataOciCoreIpInventorySubnetCidr#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidr.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidr.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidr.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidr.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidr.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidr.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidr.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidr.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidr.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidr.Initializer.parameter.subnetId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_ip_inventory_subnet_cidr#subnet_id DataOciCoreIpInventorySubnetCidr#subnet_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidr.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_ip_inventory_subnet_cidr#id DataOciCoreIpInventorySubnetCidr#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidr.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidr.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidr.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidr.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidr.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidr.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidr.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidr.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidr.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidr.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidr.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidr.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidr.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidr.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidr.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidr.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidr.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidr.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidr.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidr.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidr.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidr.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidr.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidr.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidr.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidr.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidr.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidr.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidr.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidr.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidr.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidr.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidr.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidr.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidr.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidr.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidr.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidr.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidr.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidr.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidr.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidr.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidr.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidr.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidr.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidr.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidr.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidr.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidr.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidr.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidr.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidr.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidr.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciCoreIpInventorySubnetCidr resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidr.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_ip_inventory_subnet_cidr

dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidr.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidr.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidr.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_ip_inventory_subnet_cidr

dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidr.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidr.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidr.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_ip_inventory_subnet_cidr

dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidr.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidr.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidr.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_ip_inventory_subnet_cidr

dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidr.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciCoreIpInventorySubnetCidr resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidr.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidr.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciCoreIpInventorySubnetCidr to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidr.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciCoreIpInventorySubnetCidr that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_ip_inventory_subnet_cidr#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidr.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciCoreIpInventorySubnetCidr to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidr.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidr.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidr.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidr.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidr.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidr.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidr.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidr.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidr.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidr.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidr.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidr.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidr.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidr.property.ipInventoryCidrUtilizationSummary">ip_inventory_cidr_utilization_summary</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidrIpInventoryCidrUtilizationSummaryList">DataOciCoreIpInventorySubnetCidrIpInventoryCidrUtilizationSummaryList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidr.property.ipInventorySubnetCidrCount">ip_inventory_subnet_cidr_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidr.property.lastUpdatedTimestamp">last_updated_timestamp</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidr.property.message">message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidr.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidr.property.subnetIdInput">subnet_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidr.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidr.property.subnetId">subnet_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidr.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidr.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidr.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidr.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidr.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidr.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidr.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidr.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidr.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidr.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidr.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidr.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidr.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `ip_inventory_cidr_utilization_summary`<sup>Required</sup> <a name="ip_inventory_cidr_utilization_summary" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidr.property.ipInventoryCidrUtilizationSummary"></a>

```python
ip_inventory_cidr_utilization_summary: DataOciCoreIpInventorySubnetCidrIpInventoryCidrUtilizationSummaryList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidrIpInventoryCidrUtilizationSummaryList">DataOciCoreIpInventorySubnetCidrIpInventoryCidrUtilizationSummaryList</a>

---

##### `ip_inventory_subnet_cidr_count`<sup>Required</sup> <a name="ip_inventory_subnet_cidr_count" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidr.property.ipInventorySubnetCidrCount"></a>

```python
ip_inventory_subnet_cidr_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `last_updated_timestamp`<sup>Required</sup> <a name="last_updated_timestamp" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidr.property.lastUpdatedTimestamp"></a>

```python
last_updated_timestamp: str
```

- *Type:* str

---

##### `message`<sup>Required</sup> <a name="message" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidr.property.message"></a>

```python
message: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidr.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `subnet_id_input`<sup>Optional</sup> <a name="subnet_id_input" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidr.property.subnetIdInput"></a>

```python
subnet_id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidr.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidr.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidr.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidr.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciCoreIpInventorySubnetCidrConfig <a name="DataOciCoreIpInventorySubnetCidrConfig" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidrConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidrConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_ip_inventory_subnet_cidr

dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidrConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  subnet_id: str,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidrConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidrConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidrConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidrConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidrConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidrConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidrConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidrConfig.property.subnetId">subnet_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_ip_inventory_subnet_cidr#subnet_id DataOciCoreIpInventorySubnetCidr#subnet_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidrConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_ip_inventory_subnet_cidr#id DataOciCoreIpInventorySubnetCidr#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidrConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidrConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidrConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidrConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidrConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidrConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidrConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidrConfig.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_ip_inventory_subnet_cidr#subnet_id DataOciCoreIpInventorySubnetCidr#subnet_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidrConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_ip_inventory_subnet_cidr#id DataOciCoreIpInventorySubnetCidr#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciCoreIpInventorySubnetCidrIpInventoryCidrUtilizationSummary <a name="DataOciCoreIpInventorySubnetCidrIpInventoryCidrUtilizationSummary" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidrIpInventoryCidrUtilizationSummary"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidrIpInventoryCidrUtilizationSummary.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_ip_inventory_subnet_cidr

dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidrIpInventoryCidrUtilizationSummary()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciCoreIpInventorySubnetCidrIpInventoryCidrUtilizationSummaryList <a name="DataOciCoreIpInventorySubnetCidrIpInventoryCidrUtilizationSummaryList" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidrIpInventoryCidrUtilizationSummaryList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidrIpInventoryCidrUtilizationSummaryList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_ip_inventory_subnet_cidr

dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidrIpInventoryCidrUtilizationSummaryList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidrIpInventoryCidrUtilizationSummaryList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidrIpInventoryCidrUtilizationSummaryList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidrIpInventoryCidrUtilizationSummaryList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidrIpInventoryCidrUtilizationSummaryList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidrIpInventoryCidrUtilizationSummaryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidrIpInventoryCidrUtilizationSummaryList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidrIpInventoryCidrUtilizationSummaryList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidrIpInventoryCidrUtilizationSummaryList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidrIpInventoryCidrUtilizationSummaryList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidrIpInventoryCidrUtilizationSummaryList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidrIpInventoryCidrUtilizationSummaryList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidrIpInventoryCidrUtilizationSummaryList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidrIpInventoryCidrUtilizationSummaryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidrIpInventoryCidrUtilizationSummaryList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidrIpInventoryCidrUtilizationSummaryList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidrIpInventoryCidrUtilizationSummaryList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidrIpInventoryCidrUtilizationSummaryList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidrIpInventoryCidrUtilizationSummaryList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCoreIpInventorySubnetCidrIpInventoryCidrUtilizationSummaryOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidrIpInventoryCidrUtilizationSummaryList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidrIpInventoryCidrUtilizationSummaryList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidrIpInventoryCidrUtilizationSummaryList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidrIpInventoryCidrUtilizationSummaryList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidrIpInventoryCidrUtilizationSummaryList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciCoreIpInventorySubnetCidrIpInventoryCidrUtilizationSummaryOutputReference <a name="DataOciCoreIpInventorySubnetCidrIpInventoryCidrUtilizationSummaryOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidrIpInventoryCidrUtilizationSummaryOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidrIpInventoryCidrUtilizationSummaryOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_ip_inventory_subnet_cidr

dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidrIpInventoryCidrUtilizationSummaryOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidrIpInventoryCidrUtilizationSummaryOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidrIpInventoryCidrUtilizationSummaryOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidrIpInventoryCidrUtilizationSummaryOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidrIpInventoryCidrUtilizationSummaryOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidrIpInventoryCidrUtilizationSummaryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidrIpInventoryCidrUtilizationSummaryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidrIpInventoryCidrUtilizationSummaryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidrIpInventoryCidrUtilizationSummaryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidrIpInventoryCidrUtilizationSummaryOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidrIpInventoryCidrUtilizationSummaryOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidrIpInventoryCidrUtilizationSummaryOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidrIpInventoryCidrUtilizationSummaryOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidrIpInventoryCidrUtilizationSummaryOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidrIpInventoryCidrUtilizationSummaryOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidrIpInventoryCidrUtilizationSummaryOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidrIpInventoryCidrUtilizationSummaryOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidrIpInventoryCidrUtilizationSummaryOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidrIpInventoryCidrUtilizationSummaryOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidrIpInventoryCidrUtilizationSummaryOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidrIpInventoryCidrUtilizationSummaryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidrIpInventoryCidrUtilizationSummaryOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidrIpInventoryCidrUtilizationSummaryOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidrIpInventoryCidrUtilizationSummaryOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidrIpInventoryCidrUtilizationSummaryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidrIpInventoryCidrUtilizationSummaryOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidrIpInventoryCidrUtilizationSummaryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidrIpInventoryCidrUtilizationSummaryOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidrIpInventoryCidrUtilizationSummaryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidrIpInventoryCidrUtilizationSummaryOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidrIpInventoryCidrUtilizationSummaryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidrIpInventoryCidrUtilizationSummaryOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidrIpInventoryCidrUtilizationSummaryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidrIpInventoryCidrUtilizationSummaryOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidrIpInventoryCidrUtilizationSummaryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidrIpInventoryCidrUtilizationSummaryOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidrIpInventoryCidrUtilizationSummaryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidrIpInventoryCidrUtilizationSummaryOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidrIpInventoryCidrUtilizationSummaryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidrIpInventoryCidrUtilizationSummaryOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidrIpInventoryCidrUtilizationSummaryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidrIpInventoryCidrUtilizationSummaryOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidrIpInventoryCidrUtilizationSummaryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidrIpInventoryCidrUtilizationSummaryOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidrIpInventoryCidrUtilizationSummaryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidrIpInventoryCidrUtilizationSummaryOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidrIpInventoryCidrUtilizationSummaryOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidrIpInventoryCidrUtilizationSummaryOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidrIpInventoryCidrUtilizationSummaryOutputReference.property.addressType">address_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidrIpInventoryCidrUtilizationSummaryOutputReference.property.cidr">cidr</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidrIpInventoryCidrUtilizationSummaryOutputReference.property.utilization">utilization</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidrIpInventoryCidrUtilizationSummaryOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidrIpInventoryCidrUtilizationSummary">DataOciCoreIpInventorySubnetCidrIpInventoryCidrUtilizationSummary</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidrIpInventoryCidrUtilizationSummaryOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidrIpInventoryCidrUtilizationSummaryOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `address_type`<sup>Required</sup> <a name="address_type" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidrIpInventoryCidrUtilizationSummaryOutputReference.property.addressType"></a>

```python
address_type: str
```

- *Type:* str

---

##### `cidr`<sup>Required</sup> <a name="cidr" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidrIpInventoryCidrUtilizationSummaryOutputReference.property.cidr"></a>

```python
cidr: str
```

- *Type:* str

---

##### `utilization`<sup>Required</sup> <a name="utilization" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidrIpInventoryCidrUtilizationSummaryOutputReference.property.utilization"></a>

```python
utilization: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidrIpInventoryCidrUtilizationSummaryOutputReference.property.internalValue"></a>

```python
internal_value: DataOciCoreIpInventorySubnetCidrIpInventoryCidrUtilizationSummary
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidrIpInventoryCidrUtilizationSummary">DataOciCoreIpInventorySubnetCidrIpInventoryCidrUtilizationSummary</a>

---



