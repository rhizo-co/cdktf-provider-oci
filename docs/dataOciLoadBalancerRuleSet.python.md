# `dataOciLoadBalancerRuleSet` Submodule <a name="`dataOciLoadBalancerRuleSet` Submodule" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciLoadBalancerRuleSet <a name="DataOciLoadBalancerRuleSet" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSet"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/load_balancer_rule_set oci_load_balancer_rule_set}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSet.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_load_balancer_rule_set

dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSet(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  load_balancer_id: str,
  name: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSet.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSet.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSet.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSet.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSet.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSet.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSet.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSet.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSet.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSet.Initializer.parameter.loadBalancerId">load_balancer_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/load_balancer_rule_set#load_balancer_id DataOciLoadBalancerRuleSet#load_balancer_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSet.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/load_balancer_rule_set#name DataOciLoadBalancerRuleSet#name}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSet.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSet.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSet.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSet.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSet.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSet.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSet.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSet.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSet.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `load_balancer_id`<sup>Required</sup> <a name="load_balancer_id" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSet.Initializer.parameter.loadBalancerId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/load_balancer_rule_set#load_balancer_id DataOciLoadBalancerRuleSet#load_balancer_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSet.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/load_balancer_rule_set#name DataOciLoadBalancerRuleSet#name}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSet.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSet.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSet.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSet.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSet.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSet.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSet.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSet.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSet.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSet.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSet.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSet.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSet.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSet.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSet.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSet.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSet.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSet.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSet.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSet.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSet.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSet.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSet.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSet.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSet.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSet.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSet.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSet.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSet.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSet.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSet.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSet.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSet.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSet.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSet.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSet.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSet.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSet.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSet.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSet.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSet.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSet.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSet.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSet.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSet.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSet.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSet.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSet.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSet.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSet.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSet.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciLoadBalancerRuleSet resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSet.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_load_balancer_rule_set

dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSet.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSet.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSet.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_load_balancer_rule_set

dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSet.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSet.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSet.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_load_balancer_rule_set

dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSet.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSet.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSet.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_load_balancer_rule_set

dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSet.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciLoadBalancerRuleSet resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSet.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSet.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciLoadBalancerRuleSet to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSet.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciLoadBalancerRuleSet that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/load_balancer_rule_set#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSet.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciLoadBalancerRuleSet to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSet.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSet.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSet.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSet.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSet.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSet.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSet.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSet.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSet.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSet.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSet.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSet.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSet.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSet.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsList">DataOciLoadBalancerRuleSetItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSet.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSet.property.loadBalancerIdInput">load_balancer_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSet.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSet.property.loadBalancerId">load_balancer_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSet.property.name">name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSet.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSet.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSet.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSet.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSet.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSet.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSet.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSet.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSet.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSet.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSet.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSet.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSet.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSet.property.items"></a>

```python
items: DataOciLoadBalancerRuleSetItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsList">DataOciLoadBalancerRuleSetItemsList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSet.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `load_balancer_id_input`<sup>Optional</sup> <a name="load_balancer_id_input" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSet.property.loadBalancerIdInput"></a>

```python
load_balancer_id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSet.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `load_balancer_id`<sup>Required</sup> <a name="load_balancer_id" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSet.property.loadBalancerId"></a>

```python
load_balancer_id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSet.property.name"></a>

```python
name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSet.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSet.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciLoadBalancerRuleSetConfig <a name="DataOciLoadBalancerRuleSetConfig" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_load_balancer_rule_set

dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  load_balancer_id: str,
  name: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetConfig.property.loadBalancerId">load_balancer_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/load_balancer_rule_set#load_balancer_id DataOciLoadBalancerRuleSet#load_balancer_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/load_balancer_rule_set#name DataOciLoadBalancerRuleSet#name}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `load_balancer_id`<sup>Required</sup> <a name="load_balancer_id" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetConfig.property.loadBalancerId"></a>

```python
load_balancer_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/load_balancer_rule_set#load_balancer_id DataOciLoadBalancerRuleSet#load_balancer_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/load_balancer_rule_set#name DataOciLoadBalancerRuleSet#name}.

---

### DataOciLoadBalancerRuleSetItems <a name="DataOciLoadBalancerRuleSetItems" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItems.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_load_balancer_rule_set

dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItems()
```


### DataOciLoadBalancerRuleSetItemsConditions <a name="DataOciLoadBalancerRuleSetItemsConditions" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsConditions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsConditions.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_load_balancer_rule_set

dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsConditions()
```


### DataOciLoadBalancerRuleSetItemsIpMaxConnections <a name="DataOciLoadBalancerRuleSetItemsIpMaxConnections" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsIpMaxConnections"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsIpMaxConnections.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_load_balancer_rule_set

dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsIpMaxConnections()
```


### DataOciLoadBalancerRuleSetItemsRedirectUri <a name="DataOciLoadBalancerRuleSetItemsRedirectUri" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsRedirectUri"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsRedirectUri.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_load_balancer_rule_set

dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsRedirectUri()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciLoadBalancerRuleSetItemsConditionsList <a name="DataOciLoadBalancerRuleSetItemsConditionsList" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsConditionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsConditionsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_load_balancer_rule_set

dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsConditionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsConditionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsConditionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsConditionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsConditionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsConditionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsConditionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsConditionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsConditionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsConditionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsConditionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsConditionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsConditionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsConditionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsConditionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsConditionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciLoadBalancerRuleSetItemsConditionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsConditionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsConditionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsConditionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsConditionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsConditionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciLoadBalancerRuleSetItemsConditionsOutputReference <a name="DataOciLoadBalancerRuleSetItemsConditionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsConditionsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_load_balancer_rule_set

dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsConditionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsConditionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsConditionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsConditionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsConditionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsConditionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsConditionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsConditionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsConditionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsConditionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsConditionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsConditionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsConditionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsConditionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsConditionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsConditionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsConditionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsConditionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsConditionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsConditionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsConditionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsConditionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsConditionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsConditionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsConditionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsConditionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsConditionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsConditionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsConditionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsConditionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsConditionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsConditionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsConditionsOutputReference.property.attributeName">attribute_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsConditionsOutputReference.property.attributeValue">attribute_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsConditionsOutputReference.property.operator">operator</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsConditionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsConditions">DataOciLoadBalancerRuleSetItemsConditions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsConditionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsConditionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `attribute_name`<sup>Required</sup> <a name="attribute_name" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsConditionsOutputReference.property.attributeName"></a>

```python
attribute_name: str
```

- *Type:* str

---

##### `attribute_value`<sup>Required</sup> <a name="attribute_value" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsConditionsOutputReference.property.attributeValue"></a>

```python
attribute_value: str
```

- *Type:* str

---

##### `operator`<sup>Required</sup> <a name="operator" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsConditionsOutputReference.property.operator"></a>

```python
operator: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsConditionsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciLoadBalancerRuleSetItemsConditions
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsConditions">DataOciLoadBalancerRuleSetItemsConditions</a>

---


### DataOciLoadBalancerRuleSetItemsIpMaxConnectionsList <a name="DataOciLoadBalancerRuleSetItemsIpMaxConnectionsList" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsIpMaxConnectionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsIpMaxConnectionsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_load_balancer_rule_set

dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsIpMaxConnectionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsIpMaxConnectionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsIpMaxConnectionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsIpMaxConnectionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsIpMaxConnectionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsIpMaxConnectionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsIpMaxConnectionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsIpMaxConnectionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsIpMaxConnectionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsIpMaxConnectionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsIpMaxConnectionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsIpMaxConnectionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsIpMaxConnectionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsIpMaxConnectionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsIpMaxConnectionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsIpMaxConnectionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsIpMaxConnectionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsIpMaxConnectionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsIpMaxConnectionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciLoadBalancerRuleSetItemsIpMaxConnectionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsIpMaxConnectionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsIpMaxConnectionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsIpMaxConnectionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsIpMaxConnectionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsIpMaxConnectionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciLoadBalancerRuleSetItemsIpMaxConnectionsOutputReference <a name="DataOciLoadBalancerRuleSetItemsIpMaxConnectionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsIpMaxConnectionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsIpMaxConnectionsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_load_balancer_rule_set

dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsIpMaxConnectionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsIpMaxConnectionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsIpMaxConnectionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsIpMaxConnectionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsIpMaxConnectionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsIpMaxConnectionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsIpMaxConnectionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsIpMaxConnectionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsIpMaxConnectionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsIpMaxConnectionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsIpMaxConnectionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsIpMaxConnectionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsIpMaxConnectionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsIpMaxConnectionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsIpMaxConnectionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsIpMaxConnectionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsIpMaxConnectionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsIpMaxConnectionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsIpMaxConnectionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsIpMaxConnectionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsIpMaxConnectionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsIpMaxConnectionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsIpMaxConnectionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsIpMaxConnectionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsIpMaxConnectionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsIpMaxConnectionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsIpMaxConnectionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsIpMaxConnectionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsIpMaxConnectionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsIpMaxConnectionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsIpMaxConnectionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsIpMaxConnectionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsIpMaxConnectionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsIpMaxConnectionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsIpMaxConnectionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsIpMaxConnectionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsIpMaxConnectionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsIpMaxConnectionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsIpMaxConnectionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsIpMaxConnectionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsIpMaxConnectionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsIpMaxConnectionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsIpMaxConnectionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsIpMaxConnectionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsIpMaxConnectionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsIpMaxConnectionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsIpMaxConnectionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsIpMaxConnectionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsIpMaxConnectionsOutputReference.property.ipAddresses">ip_addresses</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsIpMaxConnectionsOutputReference.property.maxConnections">max_connections</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsIpMaxConnectionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsIpMaxConnections">DataOciLoadBalancerRuleSetItemsIpMaxConnections</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsIpMaxConnectionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsIpMaxConnectionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ip_addresses`<sup>Required</sup> <a name="ip_addresses" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsIpMaxConnectionsOutputReference.property.ipAddresses"></a>

```python
ip_addresses: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `max_connections`<sup>Required</sup> <a name="max_connections" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsIpMaxConnectionsOutputReference.property.maxConnections"></a>

```python
max_connections: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsIpMaxConnectionsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciLoadBalancerRuleSetItemsIpMaxConnections
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsIpMaxConnections">DataOciLoadBalancerRuleSetItemsIpMaxConnections</a>

---


### DataOciLoadBalancerRuleSetItemsList <a name="DataOciLoadBalancerRuleSetItemsList" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_load_balancer_rule_set

dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciLoadBalancerRuleSetItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciLoadBalancerRuleSetItemsOutputReference <a name="DataOciLoadBalancerRuleSetItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_load_balancer_rule_set

dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsOutputReference.property.action">action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsOutputReference.property.allowedMethods">allowed_methods</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsOutputReference.property.areInvalidCharactersAllowed">are_invalid_characters_allowed</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsOutputReference.property.conditions">conditions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsConditionsList">DataOciLoadBalancerRuleSetItemsConditionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsOutputReference.property.defaultMaxConnections">default_max_connections</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsOutputReference.property.header">header</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsOutputReference.property.httpLargeHeaderSizeInKb">http_large_header_size_in_kb</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsOutputReference.property.ipMaxConnections">ip_max_connections</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsIpMaxConnectionsList">DataOciLoadBalancerRuleSetItemsIpMaxConnectionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsOutputReference.property.prefix">prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsOutputReference.property.redirectUri">redirect_uri</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsRedirectUriList">DataOciLoadBalancerRuleSetItemsRedirectUriList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsOutputReference.property.responseCode">response_code</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsOutputReference.property.statusCode">status_code</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsOutputReference.property.suffix">suffix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItems">DataOciLoadBalancerRuleSetItems</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `action`<sup>Required</sup> <a name="action" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsOutputReference.property.action"></a>

```python
action: str
```

- *Type:* str

---

##### `allowed_methods`<sup>Required</sup> <a name="allowed_methods" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsOutputReference.property.allowedMethods"></a>

```python
allowed_methods: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `are_invalid_characters_allowed`<sup>Required</sup> <a name="are_invalid_characters_allowed" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsOutputReference.property.areInvalidCharactersAllowed"></a>

```python
are_invalid_characters_allowed: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `conditions`<sup>Required</sup> <a name="conditions" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsOutputReference.property.conditions"></a>

```python
conditions: DataOciLoadBalancerRuleSetItemsConditionsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsConditionsList">DataOciLoadBalancerRuleSetItemsConditionsList</a>

---

##### `default_max_connections`<sup>Required</sup> <a name="default_max_connections" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsOutputReference.property.defaultMaxConnections"></a>

```python
default_max_connections: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `header`<sup>Required</sup> <a name="header" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsOutputReference.property.header"></a>

```python
header: str
```

- *Type:* str

---

##### `http_large_header_size_in_kb`<sup>Required</sup> <a name="http_large_header_size_in_kb" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsOutputReference.property.httpLargeHeaderSizeInKb"></a>

```python
http_large_header_size_in_kb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ip_max_connections`<sup>Required</sup> <a name="ip_max_connections" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsOutputReference.property.ipMaxConnections"></a>

```python
ip_max_connections: DataOciLoadBalancerRuleSetItemsIpMaxConnectionsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsIpMaxConnectionsList">DataOciLoadBalancerRuleSetItemsIpMaxConnectionsList</a>

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsOutputReference.property.prefix"></a>

```python
prefix: str
```

- *Type:* str

---

##### `redirect_uri`<sup>Required</sup> <a name="redirect_uri" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsOutputReference.property.redirectUri"></a>

```python
redirect_uri: DataOciLoadBalancerRuleSetItemsRedirectUriList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsRedirectUriList">DataOciLoadBalancerRuleSetItemsRedirectUriList</a>

---

##### `response_code`<sup>Required</sup> <a name="response_code" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsOutputReference.property.responseCode"></a>

```python
response_code: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `status_code`<sup>Required</sup> <a name="status_code" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsOutputReference.property.statusCode"></a>

```python
status_code: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `suffix`<sup>Required</sup> <a name="suffix" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsOutputReference.property.suffix"></a>

```python
suffix: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciLoadBalancerRuleSetItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItems">DataOciLoadBalancerRuleSetItems</a>

---


### DataOciLoadBalancerRuleSetItemsRedirectUriList <a name="DataOciLoadBalancerRuleSetItemsRedirectUriList" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsRedirectUriList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsRedirectUriList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_load_balancer_rule_set

dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsRedirectUriList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsRedirectUriList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsRedirectUriList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsRedirectUriList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsRedirectUriList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsRedirectUriList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsRedirectUriList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsRedirectUriList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsRedirectUriList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsRedirectUriList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsRedirectUriList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsRedirectUriList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsRedirectUriList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsRedirectUriList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsRedirectUriList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsRedirectUriList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsRedirectUriList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsRedirectUriList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsRedirectUriList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciLoadBalancerRuleSetItemsRedirectUriOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsRedirectUriList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsRedirectUriList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsRedirectUriList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsRedirectUriList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsRedirectUriList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciLoadBalancerRuleSetItemsRedirectUriOutputReference <a name="DataOciLoadBalancerRuleSetItemsRedirectUriOutputReference" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsRedirectUriOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsRedirectUriOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_load_balancer_rule_set

dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsRedirectUriOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsRedirectUriOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsRedirectUriOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsRedirectUriOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsRedirectUriOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsRedirectUriOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsRedirectUriOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsRedirectUriOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsRedirectUriOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsRedirectUriOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsRedirectUriOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsRedirectUriOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsRedirectUriOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsRedirectUriOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsRedirectUriOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsRedirectUriOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsRedirectUriOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsRedirectUriOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsRedirectUriOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsRedirectUriOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsRedirectUriOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsRedirectUriOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsRedirectUriOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsRedirectUriOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsRedirectUriOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsRedirectUriOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsRedirectUriOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsRedirectUriOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsRedirectUriOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsRedirectUriOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsRedirectUriOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsRedirectUriOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsRedirectUriOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsRedirectUriOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsRedirectUriOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsRedirectUriOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsRedirectUriOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsRedirectUriOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsRedirectUriOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsRedirectUriOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsRedirectUriOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsRedirectUriOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsRedirectUriOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsRedirectUriOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsRedirectUriOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsRedirectUriOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsRedirectUriOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsRedirectUriOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsRedirectUriOutputReference.property.host">host</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsRedirectUriOutputReference.property.path">path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsRedirectUriOutputReference.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsRedirectUriOutputReference.property.protocol">protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsRedirectUriOutputReference.property.query">query</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsRedirectUriOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsRedirectUri">DataOciLoadBalancerRuleSetItemsRedirectUri</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsRedirectUriOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsRedirectUriOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `host`<sup>Required</sup> <a name="host" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsRedirectUriOutputReference.property.host"></a>

```python
host: str
```

- *Type:* str

---

##### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsRedirectUriOutputReference.property.path"></a>

```python
path: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsRedirectUriOutputReference.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsRedirectUriOutputReference.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

---

##### `query`<sup>Required</sup> <a name="query" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsRedirectUriOutputReference.property.query"></a>

```python
query: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsRedirectUriOutputReference.property.internalValue"></a>

```python
internal_value: DataOciLoadBalancerRuleSetItemsRedirectUri
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsRedirectUri">DataOciLoadBalancerRuleSetItemsRedirectUri</a>

---



