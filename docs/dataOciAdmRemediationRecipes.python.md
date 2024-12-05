# `dataOciAdmRemediationRecipes` Submodule <a name="`dataOciAdmRemediationRecipes` Submodule" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciAdmRemediationRecipes <a name="DataOciAdmRemediationRecipes" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipes"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/adm_remediation_recipes oci_adm_remediation_recipes}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipes.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_adm_remediation_recipes

dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipes(
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
  display_name: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciAdmRemediationRecipesFilter]] = None,
  id: str = None,
  state: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipes.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipes.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipes.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipes.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipes.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipes.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipes.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipes.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipes.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipes.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/adm_remediation_recipes#compartment_id DataOciAdmRemediationRecipes#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipes.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/adm_remediation_recipes#display_name DataOciAdmRemediationRecipes#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipes.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesFilter">DataOciAdmRemediationRecipesFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipes.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/adm_remediation_recipes#id DataOciAdmRemediationRecipes#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipes.Initializer.parameter.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/adm_remediation_recipes#state DataOciAdmRemediationRecipes#state}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipes.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipes.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipes.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipes.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipes.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipes.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipes.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipes.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipes.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Optional</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipes.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/adm_remediation_recipes#compartment_id DataOciAdmRemediationRecipes#compartment_id}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipes.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/adm_remediation_recipes#display_name DataOciAdmRemediationRecipes#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipes.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesFilter">DataOciAdmRemediationRecipesFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/adm_remediation_recipes#filter DataOciAdmRemediationRecipes#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipes.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/adm_remediation_recipes#id DataOciAdmRemediationRecipes#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipes.Initializer.parameter.state"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/adm_remediation_recipes#state DataOciAdmRemediationRecipes#state}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipes.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipes.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipes.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipes.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipes.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipes.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipes.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipes.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipes.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipes.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipes.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipes.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipes.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipes.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipes.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipes.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipes.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipes.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipes.resetCompartmentId">reset_compartment_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipes.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipes.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipes.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipes.resetState">reset_state</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipes.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipes.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipes.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipes.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipes.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipes.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipes.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipes.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipes.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipes.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipes.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipes.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipes.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipes.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipes.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipes.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipes.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipes.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipes.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipes.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipes.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipes.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipes.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipes.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipes.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipes.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipes.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipes.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipes.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipes.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipes.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciAdmRemediationRecipesFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipes.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesFilter">DataOciAdmRemediationRecipesFilter</a>]]

---

##### `reset_compartment_id` <a name="reset_compartment_id" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipes.resetCompartmentId"></a>

```python
def reset_compartment_id() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipes.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipes.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipes.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_state` <a name="reset_state" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipes.resetState"></a>

```python
def reset_state() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipes.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipes.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipes.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipes.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciAdmRemediationRecipes resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipes.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_adm_remediation_recipes

dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipes.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipes.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipes.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_adm_remediation_recipes

dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipes.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipes.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipes.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_adm_remediation_recipes

dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipes.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipes.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipes.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_adm_remediation_recipes

dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipes.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciAdmRemediationRecipes resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipes.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipes.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciAdmRemediationRecipes to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipes.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciAdmRemediationRecipes that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/adm_remediation_recipes#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipes.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciAdmRemediationRecipes to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipes.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipes.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipes.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipes.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipes.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipes.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipes.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipes.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipes.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipes.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipes.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipes.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipes.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesFilterList">DataOciAdmRemediationRecipesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipes.property.remediationRecipeCollection">remediation_recipe_collection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionList">DataOciAdmRemediationRecipesRemediationRecipeCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipes.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipes.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipes.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesFilter">DataOciAdmRemediationRecipesFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipes.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipes.property.stateInput">state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipes.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipes.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipes.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipes.property.state">state</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipes.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipes.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipes.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipes.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipes.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipes.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipes.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipes.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipes.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipes.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipes.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipes.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipes.property.filter"></a>

```python
filter: DataOciAdmRemediationRecipesFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesFilterList">DataOciAdmRemediationRecipesFilterList</a>

---

##### `remediation_recipe_collection`<sup>Required</sup> <a name="remediation_recipe_collection" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipes.property.remediationRecipeCollection"></a>

```python
remediation_recipe_collection: DataOciAdmRemediationRecipesRemediationRecipeCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionList">DataOciAdmRemediationRecipesRemediationRecipeCollectionList</a>

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipes.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipes.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipes.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciAdmRemediationRecipesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesFilter">DataOciAdmRemediationRecipesFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipes.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `state_input`<sup>Optional</sup> <a name="state_input" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipes.property.stateInput"></a>

```python
state_input: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipes.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipes.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipes.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipes.property.state"></a>

```python
state: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipes.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipes.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciAdmRemediationRecipesConfig <a name="DataOciAdmRemediationRecipesConfig" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_adm_remediation_recipes

dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str = None,
  display_name: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciAdmRemediationRecipesFilter]] = None,
  id: str = None,
  state: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/adm_remediation_recipes#compartment_id DataOciAdmRemediationRecipes#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/adm_remediation_recipes#display_name DataOciAdmRemediationRecipes#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesFilter">DataOciAdmRemediationRecipesFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/adm_remediation_recipes#id DataOciAdmRemediationRecipes#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesConfig.property.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/adm_remediation_recipes#state DataOciAdmRemediationRecipes#state}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Optional</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/adm_remediation_recipes#compartment_id DataOciAdmRemediationRecipes#compartment_id}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/adm_remediation_recipes#display_name DataOciAdmRemediationRecipes#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciAdmRemediationRecipesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesFilter">DataOciAdmRemediationRecipesFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/adm_remediation_recipes#filter DataOciAdmRemediationRecipes#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/adm_remediation_recipes#id DataOciAdmRemediationRecipes#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesConfig.property.state"></a>

```python
state: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/adm_remediation_recipes#state DataOciAdmRemediationRecipes#state}.

---

### DataOciAdmRemediationRecipesFilter <a name="DataOciAdmRemediationRecipesFilter" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_adm_remediation_recipes

dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/adm_remediation_recipes#name DataOciAdmRemediationRecipes#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/adm_remediation_recipes#values DataOciAdmRemediationRecipes#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/adm_remediation_recipes#regex DataOciAdmRemediationRecipes#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/adm_remediation_recipes#name DataOciAdmRemediationRecipes#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/adm_remediation_recipes#values DataOciAdmRemediationRecipes#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/adm_remediation_recipes#regex DataOciAdmRemediationRecipes#regex}.

---

### DataOciAdmRemediationRecipesRemediationRecipeCollection <a name="DataOciAdmRemediationRecipesRemediationRecipeCollection" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollection.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_adm_remediation_recipes

dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollection()
```


### DataOciAdmRemediationRecipesRemediationRecipeCollectionItems <a name="DataOciAdmRemediationRecipesRemediationRecipeCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItems.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_adm_remediation_recipes

dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItems()
```


### DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsDetectConfiguration <a name="DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsDetectConfiguration" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsDetectConfiguration"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsDetectConfiguration.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_adm_remediation_recipes

dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsDetectConfiguration()
```


### DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsNetworkConfiguration <a name="DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsNetworkConfiguration" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsNetworkConfiguration"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsNetworkConfiguration.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_adm_remediation_recipes

dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsNetworkConfiguration()
```


### DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsScmConfiguration <a name="DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsScmConfiguration" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsScmConfiguration"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsScmConfiguration.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_adm_remediation_recipes

dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsScmConfiguration()
```


### DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsVerifyConfiguration <a name="DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsVerifyConfiguration" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsVerifyConfiguration"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsVerifyConfiguration.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_adm_remediation_recipes

dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsVerifyConfiguration()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciAdmRemediationRecipesFilterList <a name="DataOciAdmRemediationRecipesFilterList" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_adm_remediation_recipes

dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciAdmRemediationRecipesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesFilter">DataOciAdmRemediationRecipesFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciAdmRemediationRecipesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesFilter">DataOciAdmRemediationRecipesFilter</a>]]

---


### DataOciAdmRemediationRecipesFilterOutputReference <a name="DataOciAdmRemediationRecipesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_adm_remediation_recipes

dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesFilter">DataOciAdmRemediationRecipesFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciAdmRemediationRecipesFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesFilter">DataOciAdmRemediationRecipesFilter</a>]

---


### DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsDetectConfigurationList <a name="DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsDetectConfigurationList" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsDetectConfigurationList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsDetectConfigurationList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_adm_remediation_recipes

dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsDetectConfigurationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsDetectConfigurationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsDetectConfigurationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsDetectConfigurationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsDetectConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsDetectConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsDetectConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsDetectConfigurationList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsDetectConfigurationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsDetectConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsDetectConfigurationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsDetectConfigurationList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsDetectConfigurationList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsDetectConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsDetectConfigurationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsDetectConfigurationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsDetectConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsDetectConfigurationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsDetectConfigurationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsDetectConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsDetectConfigurationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsDetectConfigurationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsDetectConfigurationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsDetectConfigurationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsDetectConfigurationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsDetectConfigurationOutputReference <a name="DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsDetectConfigurationOutputReference" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsDetectConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsDetectConfigurationOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_adm_remediation_recipes

dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsDetectConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsDetectConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsDetectConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsDetectConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsDetectConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsDetectConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsDetectConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsDetectConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsDetectConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsDetectConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsDetectConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsDetectConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsDetectConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsDetectConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsDetectConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsDetectConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsDetectConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsDetectConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsDetectConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsDetectConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsDetectConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsDetectConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsDetectConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsDetectConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsDetectConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsDetectConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsDetectConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsDetectConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsDetectConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsDetectConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsDetectConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsDetectConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsDetectConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsDetectConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsDetectConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsDetectConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsDetectConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsDetectConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsDetectConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsDetectConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsDetectConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsDetectConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsDetectConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsDetectConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsDetectConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsDetectConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsDetectConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsDetectConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsDetectConfigurationOutputReference.property.exclusions">exclusions</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsDetectConfigurationOutputReference.property.maxPermissibleCvssV2Score">max_permissible_cvss_v2_score</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsDetectConfigurationOutputReference.property.maxPermissibleCvssV3Score">max_permissible_cvss_v3_score</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsDetectConfigurationOutputReference.property.maxPermissibleSeverity">max_permissible_severity</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsDetectConfigurationOutputReference.property.upgradePolicy">upgrade_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsDetectConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsDetectConfiguration">DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsDetectConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsDetectConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsDetectConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `exclusions`<sup>Required</sup> <a name="exclusions" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsDetectConfigurationOutputReference.property.exclusions"></a>

```python
exclusions: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `max_permissible_cvss_v2_score`<sup>Required</sup> <a name="max_permissible_cvss_v2_score" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsDetectConfigurationOutputReference.property.maxPermissibleCvssV2Score"></a>

```python
max_permissible_cvss_v2_score: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_permissible_cvss_v3_score`<sup>Required</sup> <a name="max_permissible_cvss_v3_score" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsDetectConfigurationOutputReference.property.maxPermissibleCvssV3Score"></a>

```python
max_permissible_cvss_v3_score: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_permissible_severity`<sup>Required</sup> <a name="max_permissible_severity" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsDetectConfigurationOutputReference.property.maxPermissibleSeverity"></a>

```python
max_permissible_severity: str
```

- *Type:* str

---

##### `upgrade_policy`<sup>Required</sup> <a name="upgrade_policy" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsDetectConfigurationOutputReference.property.upgradePolicy"></a>

```python
upgrade_policy: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsDetectConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsDetectConfiguration
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsDetectConfiguration">DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsDetectConfiguration</a>

---


### DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsList <a name="DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_adm_remediation_recipes

dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsNetworkConfigurationList <a name="DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsNetworkConfigurationList" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsNetworkConfigurationList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsNetworkConfigurationList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_adm_remediation_recipes

dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsNetworkConfigurationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsNetworkConfigurationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsNetworkConfigurationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsNetworkConfigurationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsNetworkConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsNetworkConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsNetworkConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsNetworkConfigurationList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsNetworkConfigurationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsNetworkConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsNetworkConfigurationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsNetworkConfigurationList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsNetworkConfigurationList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsNetworkConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsNetworkConfigurationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsNetworkConfigurationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsNetworkConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsNetworkConfigurationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsNetworkConfigurationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsNetworkConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsNetworkConfigurationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsNetworkConfigurationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsNetworkConfigurationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsNetworkConfigurationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsNetworkConfigurationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsNetworkConfigurationOutputReference <a name="DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsNetworkConfigurationOutputReference" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsNetworkConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsNetworkConfigurationOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_adm_remediation_recipes

dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsNetworkConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsNetworkConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsNetworkConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsNetworkConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsNetworkConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsNetworkConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsNetworkConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsNetworkConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsNetworkConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsNetworkConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsNetworkConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsNetworkConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsNetworkConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsNetworkConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsNetworkConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsNetworkConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsNetworkConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsNetworkConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsNetworkConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsNetworkConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsNetworkConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsNetworkConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsNetworkConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsNetworkConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsNetworkConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsNetworkConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsNetworkConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsNetworkConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsNetworkConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsNetworkConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsNetworkConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsNetworkConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsNetworkConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsNetworkConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsNetworkConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsNetworkConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsNetworkConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsNetworkConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsNetworkConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsNetworkConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsNetworkConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsNetworkConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsNetworkConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsNetworkConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsNetworkConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsNetworkConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsNetworkConfigurationOutputReference.property.nsgIds">nsg_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsNetworkConfigurationOutputReference.property.subnetId">subnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsNetworkConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsNetworkConfiguration">DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsNetworkConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsNetworkConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsNetworkConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `nsg_ids`<sup>Required</sup> <a name="nsg_ids" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsNetworkConfigurationOutputReference.property.nsgIds"></a>

```python
nsg_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsNetworkConfigurationOutputReference.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsNetworkConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsNetworkConfiguration
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsNetworkConfiguration">DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsNetworkConfiguration</a>

---


### DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsOutputReference <a name="DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_adm_remediation_recipes

dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsOutputReference.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsOutputReference.property.definedTags">defined_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsOutputReference.property.detectConfiguration">detect_configuration</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsDetectConfigurationList">DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsDetectConfigurationList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsOutputReference.property.freeformTags">freeform_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsOutputReference.property.isRunTriggeredOnKbChange">is_run_triggered_on_kb_change</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsOutputReference.property.knowledgeBaseId">knowledge_base_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsOutputReference.property.networkConfiguration">network_configuration</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsNetworkConfigurationList">DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsNetworkConfigurationList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsOutputReference.property.scmConfiguration">scm_configuration</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsScmConfigurationList">DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsScmConfigurationList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsOutputReference.property.systemTags">system_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsOutputReference.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsOutputReference.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsOutputReference.property.verifyConfiguration">verify_configuration</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsVerifyConfigurationList">DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsVerifyConfigurationList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItems">DataOciAdmRemediationRecipesRemediationRecipeCollectionItems</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsOutputReference.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsOutputReference.property.definedTags"></a>

```python
defined_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `detect_configuration`<sup>Required</sup> <a name="detect_configuration" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsOutputReference.property.detectConfiguration"></a>

```python
detect_configuration: DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsDetectConfigurationList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsDetectConfigurationList">DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsDetectConfigurationList</a>

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsOutputReference.property.freeformTags"></a>

```python
freeform_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `is_run_triggered_on_kb_change`<sup>Required</sup> <a name="is_run_triggered_on_kb_change" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsOutputReference.property.isRunTriggeredOnKbChange"></a>

```python
is_run_triggered_on_kb_change: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `knowledge_base_id`<sup>Required</sup> <a name="knowledge_base_id" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsOutputReference.property.knowledgeBaseId"></a>

```python
knowledge_base_id: str
```

- *Type:* str

---

##### `network_configuration`<sup>Required</sup> <a name="network_configuration" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsOutputReference.property.networkConfiguration"></a>

```python
network_configuration: DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsNetworkConfigurationList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsNetworkConfigurationList">DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsNetworkConfigurationList</a>

---

##### `scm_configuration`<sup>Required</sup> <a name="scm_configuration" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsOutputReference.property.scmConfiguration"></a>

```python
scm_configuration: DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsScmConfigurationList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsScmConfigurationList">DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsScmConfigurationList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `system_tags`<sup>Required</sup> <a name="system_tags" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsOutputReference.property.systemTags"></a>

```python
system_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsOutputReference.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsOutputReference.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `verify_configuration`<sup>Required</sup> <a name="verify_configuration" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsOutputReference.property.verifyConfiguration"></a>

```python
verify_configuration: DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsVerifyConfigurationList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsVerifyConfigurationList">DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsVerifyConfigurationList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciAdmRemediationRecipesRemediationRecipeCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItems">DataOciAdmRemediationRecipesRemediationRecipeCollectionItems</a>

---


### DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsScmConfigurationList <a name="DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsScmConfigurationList" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsScmConfigurationList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsScmConfigurationList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_adm_remediation_recipes

dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsScmConfigurationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsScmConfigurationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsScmConfigurationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsScmConfigurationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsScmConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsScmConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsScmConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsScmConfigurationList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsScmConfigurationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsScmConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsScmConfigurationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsScmConfigurationList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsScmConfigurationList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsScmConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsScmConfigurationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsScmConfigurationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsScmConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsScmConfigurationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsScmConfigurationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsScmConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsScmConfigurationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsScmConfigurationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsScmConfigurationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsScmConfigurationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsScmConfigurationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsScmConfigurationOutputReference <a name="DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsScmConfigurationOutputReference" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsScmConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsScmConfigurationOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_adm_remediation_recipes

dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsScmConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsScmConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsScmConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsScmConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsScmConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsScmConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsScmConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsScmConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsScmConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsScmConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsScmConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsScmConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsScmConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsScmConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsScmConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsScmConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsScmConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsScmConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsScmConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsScmConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsScmConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsScmConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsScmConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsScmConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsScmConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsScmConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsScmConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsScmConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsScmConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsScmConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsScmConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsScmConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsScmConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsScmConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsScmConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsScmConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsScmConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsScmConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsScmConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsScmConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsScmConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsScmConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsScmConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsScmConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsScmConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsScmConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsScmConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsScmConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsScmConfigurationOutputReference.property.branch">branch</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsScmConfigurationOutputReference.property.buildFileLocation">build_file_location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsScmConfigurationOutputReference.property.externalScmType">external_scm_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsScmConfigurationOutputReference.property.isAutomergeEnabled">is_automerge_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsScmConfigurationOutputReference.property.ociCodeRepositoryId">oci_code_repository_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsScmConfigurationOutputReference.property.patSecretId">pat_secret_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsScmConfigurationOutputReference.property.repositoryUrl">repository_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsScmConfigurationOutputReference.property.scmType">scm_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsScmConfigurationOutputReference.property.username">username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsScmConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsScmConfiguration">DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsScmConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsScmConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsScmConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `branch`<sup>Required</sup> <a name="branch" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsScmConfigurationOutputReference.property.branch"></a>

```python
branch: str
```

- *Type:* str

---

##### `build_file_location`<sup>Required</sup> <a name="build_file_location" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsScmConfigurationOutputReference.property.buildFileLocation"></a>

```python
build_file_location: str
```

- *Type:* str

---

##### `external_scm_type`<sup>Required</sup> <a name="external_scm_type" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsScmConfigurationOutputReference.property.externalScmType"></a>

```python
external_scm_type: str
```

- *Type:* str

---

##### `is_automerge_enabled`<sup>Required</sup> <a name="is_automerge_enabled" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsScmConfigurationOutputReference.property.isAutomergeEnabled"></a>

```python
is_automerge_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `oci_code_repository_id`<sup>Required</sup> <a name="oci_code_repository_id" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsScmConfigurationOutputReference.property.ociCodeRepositoryId"></a>

```python
oci_code_repository_id: str
```

- *Type:* str

---

##### `pat_secret_id`<sup>Required</sup> <a name="pat_secret_id" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsScmConfigurationOutputReference.property.patSecretId"></a>

```python
pat_secret_id: str
```

- *Type:* str

---

##### `repository_url`<sup>Required</sup> <a name="repository_url" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsScmConfigurationOutputReference.property.repositoryUrl"></a>

```python
repository_url: str
```

- *Type:* str

---

##### `scm_type`<sup>Required</sup> <a name="scm_type" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsScmConfigurationOutputReference.property.scmType"></a>

```python
scm_type: str
```

- *Type:* str

---

##### `username`<sup>Required</sup> <a name="username" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsScmConfigurationOutputReference.property.username"></a>

```python
username: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsScmConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsScmConfiguration
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsScmConfiguration">DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsScmConfiguration</a>

---


### DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsVerifyConfigurationList <a name="DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsVerifyConfigurationList" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsVerifyConfigurationList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsVerifyConfigurationList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_adm_remediation_recipes

dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsVerifyConfigurationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsVerifyConfigurationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsVerifyConfigurationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsVerifyConfigurationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsVerifyConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsVerifyConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsVerifyConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsVerifyConfigurationList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsVerifyConfigurationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsVerifyConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsVerifyConfigurationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsVerifyConfigurationList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsVerifyConfigurationList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsVerifyConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsVerifyConfigurationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsVerifyConfigurationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsVerifyConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsVerifyConfigurationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsVerifyConfigurationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsVerifyConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsVerifyConfigurationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsVerifyConfigurationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsVerifyConfigurationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsVerifyConfigurationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsVerifyConfigurationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsVerifyConfigurationOutputReference <a name="DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsVerifyConfigurationOutputReference" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsVerifyConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsVerifyConfigurationOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_adm_remediation_recipes

dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsVerifyConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsVerifyConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsVerifyConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsVerifyConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsVerifyConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsVerifyConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsVerifyConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsVerifyConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsVerifyConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsVerifyConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsVerifyConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsVerifyConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsVerifyConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsVerifyConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsVerifyConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsVerifyConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsVerifyConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsVerifyConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsVerifyConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsVerifyConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsVerifyConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsVerifyConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsVerifyConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsVerifyConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsVerifyConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsVerifyConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsVerifyConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsVerifyConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsVerifyConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsVerifyConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsVerifyConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsVerifyConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsVerifyConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsVerifyConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsVerifyConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsVerifyConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsVerifyConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsVerifyConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsVerifyConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsVerifyConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsVerifyConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsVerifyConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsVerifyConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsVerifyConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsVerifyConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsVerifyConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsVerifyConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsVerifyConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsVerifyConfigurationOutputReference.property.additionalParameters">additional_parameters</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsVerifyConfigurationOutputReference.property.buildServiceType">build_service_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsVerifyConfigurationOutputReference.property.jenkinsUrl">jenkins_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsVerifyConfigurationOutputReference.property.jobName">job_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsVerifyConfigurationOutputReference.property.patSecretId">pat_secret_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsVerifyConfigurationOutputReference.property.pipelineId">pipeline_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsVerifyConfigurationOutputReference.property.repositoryUrl">repository_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsVerifyConfigurationOutputReference.property.triggerSecretId">trigger_secret_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsVerifyConfigurationOutputReference.property.username">username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsVerifyConfigurationOutputReference.property.workflowName">workflow_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsVerifyConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsVerifyConfiguration">DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsVerifyConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsVerifyConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsVerifyConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `additional_parameters`<sup>Required</sup> <a name="additional_parameters" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsVerifyConfigurationOutputReference.property.additionalParameters"></a>

```python
additional_parameters: StringMap
```

- *Type:* cdktf.StringMap

---

##### `build_service_type`<sup>Required</sup> <a name="build_service_type" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsVerifyConfigurationOutputReference.property.buildServiceType"></a>

```python
build_service_type: str
```

- *Type:* str

---

##### `jenkins_url`<sup>Required</sup> <a name="jenkins_url" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsVerifyConfigurationOutputReference.property.jenkinsUrl"></a>

```python
jenkins_url: str
```

- *Type:* str

---

##### `job_name`<sup>Required</sup> <a name="job_name" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsVerifyConfigurationOutputReference.property.jobName"></a>

```python
job_name: str
```

- *Type:* str

---

##### `pat_secret_id`<sup>Required</sup> <a name="pat_secret_id" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsVerifyConfigurationOutputReference.property.patSecretId"></a>

```python
pat_secret_id: str
```

- *Type:* str

---

##### `pipeline_id`<sup>Required</sup> <a name="pipeline_id" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsVerifyConfigurationOutputReference.property.pipelineId"></a>

```python
pipeline_id: str
```

- *Type:* str

---

##### `repository_url`<sup>Required</sup> <a name="repository_url" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsVerifyConfigurationOutputReference.property.repositoryUrl"></a>

```python
repository_url: str
```

- *Type:* str

---

##### `trigger_secret_id`<sup>Required</sup> <a name="trigger_secret_id" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsVerifyConfigurationOutputReference.property.triggerSecretId"></a>

```python
trigger_secret_id: str
```

- *Type:* str

---

##### `username`<sup>Required</sup> <a name="username" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsVerifyConfigurationOutputReference.property.username"></a>

```python
username: str
```

- *Type:* str

---

##### `workflow_name`<sup>Required</sup> <a name="workflow_name" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsVerifyConfigurationOutputReference.property.workflowName"></a>

```python
workflow_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsVerifyConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsVerifyConfiguration
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsVerifyConfiguration">DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsVerifyConfiguration</a>

---


### DataOciAdmRemediationRecipesRemediationRecipeCollectionList <a name="DataOciAdmRemediationRecipesRemediationRecipeCollectionList" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_adm_remediation_recipes

dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciAdmRemediationRecipesRemediationRecipeCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciAdmRemediationRecipesRemediationRecipeCollectionOutputReference <a name="DataOciAdmRemediationRecipesRemediationRecipeCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_adm_remediation_recipes

dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsList">DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollection">DataOciAdmRemediationRecipesRemediationRecipeCollection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionOutputReference.property.items"></a>

```python
items: DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsList">DataOciAdmRemediationRecipesRemediationRecipeCollectionItemsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollectionOutputReference.property.internalValue"></a>

```python
internal_value: DataOciAdmRemediationRecipesRemediationRecipeCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipes.DataOciAdmRemediationRecipesRemediationRecipeCollection">DataOciAdmRemediationRecipesRemediationRecipeCollection</a>

---



