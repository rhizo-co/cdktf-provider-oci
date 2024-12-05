# `dataOciBdsBdsInstanceResourcePrincipalConfiguration` Submodule <a name="`dataOciBdsBdsInstanceResourcePrincipalConfiguration` Submodule" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciBdsBdsInstanceResourcePrincipalConfiguration <a name="DataOciBdsBdsInstanceResourcePrincipalConfiguration" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance_resource_principal_configuration oci_bds_bds_instance_resource_principal_configuration}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_bds_bds_instance_resource_principal_configuration

dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  bds_instance_id: str,
  resource_principal_configuration_id: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.Initializer.parameter.bdsInstanceId">bds_instance_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance_resource_principal_configuration#bds_instance_id DataOciBdsBdsInstanceResourcePrincipalConfiguration#bds_instance_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.Initializer.parameter.resourcePrincipalConfigurationId">resource_principal_configuration_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance_resource_principal_configuration#resource_principal_configuration_id DataOciBdsBdsInstanceResourcePrincipalConfiguration#resource_principal_configuration_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `bds_instance_id`<sup>Required</sup> <a name="bds_instance_id" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.Initializer.parameter.bdsInstanceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance_resource_principal_configuration#bds_instance_id DataOciBdsBdsInstanceResourcePrincipalConfiguration#bds_instance_id}.

---

##### `resource_principal_configuration_id`<sup>Required</sup> <a name="resource_principal_configuration_id" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.Initializer.parameter.resourcePrincipalConfigurationId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance_resource_principal_configuration#resource_principal_configuration_id DataOciBdsBdsInstanceResourcePrincipalConfiguration#resource_principal_configuration_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciBdsBdsInstanceResourcePrincipalConfiguration resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_bds_bds_instance_resource_principal_configuration

dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_bds_bds_instance_resource_principal_configuration

dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_bds_bds_instance_resource_principal_configuration

dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_bds_bds_instance_resource_principal_configuration

dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciBdsBdsInstanceResourcePrincipalConfiguration resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciBdsBdsInstanceResourcePrincipalConfiguration to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciBdsBdsInstanceResourcePrincipalConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance_resource_principal_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciBdsBdsInstanceResourcePrincipalConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.property.clusterAdminPassword">cluster_admin_password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.property.forceRefreshResourcePrincipalTrigger">force_refresh_resource_principal_trigger</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.property.sessionTokenLifeSpanDurationInHours">session_token_life_span_duration_in_hours</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.property.timeTokenExpiry">time_token_expiry</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.property.timeTokenRefreshed">time_token_refreshed</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.property.bdsInstanceIdInput">bds_instance_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.property.resourcePrincipalConfigurationIdInput">resource_principal_configuration_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.property.bdsInstanceId">bds_instance_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.property.resourcePrincipalConfigurationId">resource_principal_configuration_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `cluster_admin_password`<sup>Required</sup> <a name="cluster_admin_password" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.property.clusterAdminPassword"></a>

```python
cluster_admin_password: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `force_refresh_resource_principal_trigger`<sup>Required</sup> <a name="force_refresh_resource_principal_trigger" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.property.forceRefreshResourcePrincipalTrigger"></a>

```python
force_refresh_resource_principal_trigger: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `session_token_life_span_duration_in_hours`<sup>Required</sup> <a name="session_token_life_span_duration_in_hours" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.property.sessionTokenLifeSpanDurationInHours"></a>

```python
session_token_life_span_duration_in_hours: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `time_token_expiry`<sup>Required</sup> <a name="time_token_expiry" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.property.timeTokenExpiry"></a>

```python
time_token_expiry: str
```

- *Type:* str

---

##### `time_token_refreshed`<sup>Required</sup> <a name="time_token_refreshed" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.property.timeTokenRefreshed"></a>

```python
time_token_refreshed: str
```

- *Type:* str

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `bds_instance_id_input`<sup>Optional</sup> <a name="bds_instance_id_input" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.property.bdsInstanceIdInput"></a>

```python
bds_instance_id_input: str
```

- *Type:* str

---

##### `resource_principal_configuration_id_input`<sup>Optional</sup> <a name="resource_principal_configuration_id_input" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.property.resourcePrincipalConfigurationIdInput"></a>

```python
resource_principal_configuration_id_input: str
```

- *Type:* str

---

##### `bds_instance_id`<sup>Required</sup> <a name="bds_instance_id" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.property.bdsInstanceId"></a>

```python
bds_instance_id: str
```

- *Type:* str

---

##### `resource_principal_configuration_id`<sup>Required</sup> <a name="resource_principal_configuration_id" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.property.resourcePrincipalConfigurationId"></a>

```python
resource_principal_configuration_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciBdsBdsInstanceResourcePrincipalConfigurationConfig <a name="DataOciBdsBdsInstanceResourcePrincipalConfigurationConfig" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfigurationConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_bds_bds_instance_resource_principal_configuration

dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfigurationConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  bds_instance_id: str,
  resource_principal_configuration_id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfigurationConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfigurationConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfigurationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfigurationConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfigurationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfigurationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfigurationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfigurationConfig.property.bdsInstanceId">bds_instance_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance_resource_principal_configuration#bds_instance_id DataOciBdsBdsInstanceResourcePrincipalConfiguration#bds_instance_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfigurationConfig.property.resourcePrincipalConfigurationId">resource_principal_configuration_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance_resource_principal_configuration#resource_principal_configuration_id DataOciBdsBdsInstanceResourcePrincipalConfiguration#resource_principal_configuration_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfigurationConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfigurationConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfigurationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfigurationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfigurationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfigurationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfigurationConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `bds_instance_id`<sup>Required</sup> <a name="bds_instance_id" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfigurationConfig.property.bdsInstanceId"></a>

```python
bds_instance_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance_resource_principal_configuration#bds_instance_id DataOciBdsBdsInstanceResourcePrincipalConfiguration#bds_instance_id}.

---

##### `resource_principal_configuration_id`<sup>Required</sup> <a name="resource_principal_configuration_id" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfigurationConfig.property.resourcePrincipalConfigurationId"></a>

```python
resource_principal_configuration_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance_resource_principal_configuration#resource_principal_configuration_id DataOciBdsBdsInstanceResourcePrincipalConfiguration#resource_principal_configuration_id}.

---



