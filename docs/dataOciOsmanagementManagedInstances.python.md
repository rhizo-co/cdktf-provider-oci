# `dataOciOsmanagementManagedInstances` Submodule <a name="`dataOciOsmanagementManagedInstances` Submodule" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciOsmanagementManagedInstances <a name="DataOciOsmanagementManagedInstances" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstances"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_managed_instances oci_osmanagement_managed_instances}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstances.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osmanagement_managed_instances

dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstances(
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
  display_name: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciOsmanagementManagedInstancesFilter]] = None,
  id: str = None,
  os_family: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstances.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstances.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstances.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstances.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstances.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstances.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstances.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstances.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstances.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstances.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_managed_instances#compartment_id DataOciOsmanagementManagedInstances#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstances.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_managed_instances#display_name DataOciOsmanagementManagedInstances#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstances.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesFilter">DataOciOsmanagementManagedInstancesFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstances.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_managed_instances#id DataOciOsmanagementManagedInstances#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstances.Initializer.parameter.osFamily">os_family</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_managed_instances#os_family DataOciOsmanagementManagedInstances#os_family}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstances.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstances.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstances.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstances.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstances.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstances.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstances.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstances.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstances.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstances.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_managed_instances#compartment_id DataOciOsmanagementManagedInstances#compartment_id}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstances.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_managed_instances#display_name DataOciOsmanagementManagedInstances#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstances.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesFilter">DataOciOsmanagementManagedInstancesFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_managed_instances#filter DataOciOsmanagementManagedInstances#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstances.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_managed_instances#id DataOciOsmanagementManagedInstances#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `os_family`<sup>Optional</sup> <a name="os_family" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstances.Initializer.parameter.osFamily"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_managed_instances#os_family DataOciOsmanagementManagedInstances#os_family}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstances.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstances.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstances.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstances.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstances.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstances.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstances.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstances.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstances.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstances.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstances.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstances.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstances.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstances.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstances.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstances.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstances.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstances.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstances.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstances.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstances.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstances.resetOsFamily">reset_os_family</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstances.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstances.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstances.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstances.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstances.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstances.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstances.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstances.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstances.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstances.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstances.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstances.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstances.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstances.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstances.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstances.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstances.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstances.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstances.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstances.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstances.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstances.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstances.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstances.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstances.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstances.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstances.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstances.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstances.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstances.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstances.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciOsmanagementManagedInstancesFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstances.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesFilter">DataOciOsmanagementManagedInstancesFilter</a>]]

---

##### `reset_display_name` <a name="reset_display_name" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstances.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstances.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstances.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_os_family` <a name="reset_os_family" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstances.resetOsFamily"></a>

```python
def reset_os_family() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstances.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstances.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstances.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstances.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciOsmanagementManagedInstances resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstances.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osmanagement_managed_instances

dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstances.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstances.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstances.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osmanagement_managed_instances

dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstances.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstances.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstances.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osmanagement_managed_instances

dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstances.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstances.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstances.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osmanagement_managed_instances

dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstances.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciOsmanagementManagedInstances resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstances.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstances.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciOsmanagementManagedInstances to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstances.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciOsmanagementManagedInstances that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_managed_instances#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstances.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciOsmanagementManagedInstances to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstances.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstances.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstances.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstances.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstances.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstances.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstances.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstances.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstances.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstances.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstances.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstances.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstances.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesFilterList">DataOciOsmanagementManagedInstancesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstances.property.managedInstances">managed_instances</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesList">DataOciOsmanagementManagedInstancesManagedInstancesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstances.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstances.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstances.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesFilter">DataOciOsmanagementManagedInstancesFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstances.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstances.property.osFamilyInput">os_family_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstances.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstances.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstances.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstances.property.osFamily">os_family</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstances.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstances.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstances.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstances.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstances.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstances.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstances.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstances.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstances.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstances.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstances.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstances.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstances.property.filter"></a>

```python
filter: DataOciOsmanagementManagedInstancesFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesFilterList">DataOciOsmanagementManagedInstancesFilterList</a>

---

##### `managed_instances`<sup>Required</sup> <a name="managed_instances" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstances.property.managedInstances"></a>

```python
managed_instances: DataOciOsmanagementManagedInstancesManagedInstancesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesList">DataOciOsmanagementManagedInstancesManagedInstancesList</a>

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstances.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstances.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstances.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciOsmanagementManagedInstancesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesFilter">DataOciOsmanagementManagedInstancesFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstances.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `os_family_input`<sup>Optional</sup> <a name="os_family_input" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstances.property.osFamilyInput"></a>

```python
os_family_input: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstances.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstances.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstances.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `os_family`<sup>Required</sup> <a name="os_family" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstances.property.osFamily"></a>

```python
os_family: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstances.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstances.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciOsmanagementManagedInstancesConfig <a name="DataOciOsmanagementManagedInstancesConfig" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osmanagement_managed_instances

dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  display_name: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciOsmanagementManagedInstancesFilter]] = None,
  id: str = None,
  os_family: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_managed_instances#compartment_id DataOciOsmanagementManagedInstances#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_managed_instances#display_name DataOciOsmanagementManagedInstances#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesFilter">DataOciOsmanagementManagedInstancesFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_managed_instances#id DataOciOsmanagementManagedInstances#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesConfig.property.osFamily">os_family</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_managed_instances#os_family DataOciOsmanagementManagedInstances#os_family}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_managed_instances#compartment_id DataOciOsmanagementManagedInstances#compartment_id}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_managed_instances#display_name DataOciOsmanagementManagedInstances#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciOsmanagementManagedInstancesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesFilter">DataOciOsmanagementManagedInstancesFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_managed_instances#filter DataOciOsmanagementManagedInstances#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_managed_instances#id DataOciOsmanagementManagedInstances#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `os_family`<sup>Optional</sup> <a name="os_family" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesConfig.property.osFamily"></a>

```python
os_family: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_managed_instances#os_family DataOciOsmanagementManagedInstances#os_family}.

---

### DataOciOsmanagementManagedInstancesFilter <a name="DataOciOsmanagementManagedInstancesFilter" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osmanagement_managed_instances

dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_managed_instances#name DataOciOsmanagementManagedInstances#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_managed_instances#values DataOciOsmanagementManagedInstances#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_managed_instances#regex DataOciOsmanagementManagedInstances#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_managed_instances#name DataOciOsmanagementManagedInstances#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_managed_instances#values DataOciOsmanagementManagedInstances#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_managed_instances#regex DataOciOsmanagementManagedInstances#regex}.

---

### DataOciOsmanagementManagedInstancesManagedInstances <a name="DataOciOsmanagementManagedInstancesManagedInstances" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstances"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstances.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osmanagement_managed_instances

dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstances()
```


### DataOciOsmanagementManagedInstancesManagedInstancesAutonomous <a name="DataOciOsmanagementManagedInstancesManagedInstancesAutonomous" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesAutonomous"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesAutonomous.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osmanagement_managed_instances

dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesAutonomous()
```


### DataOciOsmanagementManagedInstancesManagedInstancesChildSoftwareSources <a name="DataOciOsmanagementManagedInstancesManagedInstancesChildSoftwareSources" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesChildSoftwareSources"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesChildSoftwareSources.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osmanagement_managed_instances

dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesChildSoftwareSources()
```


### DataOciOsmanagementManagedInstancesManagedInstancesManagedInstanceGroups <a name="DataOciOsmanagementManagedInstancesManagedInstancesManagedInstanceGroups" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesManagedInstanceGroups"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesManagedInstanceGroups.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osmanagement_managed_instances

dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesManagedInstanceGroups()
```


### DataOciOsmanagementManagedInstancesManagedInstancesParentSoftwareSource <a name="DataOciOsmanagementManagedInstancesManagedInstancesParentSoftwareSource" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesParentSoftwareSource"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesParentSoftwareSource.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osmanagement_managed_instances

dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesParentSoftwareSource()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciOsmanagementManagedInstancesFilterList <a name="DataOciOsmanagementManagedInstancesFilterList" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osmanagement_managed_instances

dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOsmanagementManagedInstancesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesFilter">DataOciOsmanagementManagedInstancesFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciOsmanagementManagedInstancesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesFilter">DataOciOsmanagementManagedInstancesFilter</a>]]

---


### DataOciOsmanagementManagedInstancesFilterOutputReference <a name="DataOciOsmanagementManagedInstancesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osmanagement_managed_instances

dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesFilter">DataOciOsmanagementManagedInstancesFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciOsmanagementManagedInstancesFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesFilter">DataOciOsmanagementManagedInstancesFilter</a>]

---


### DataOciOsmanagementManagedInstancesManagedInstancesAutonomousList <a name="DataOciOsmanagementManagedInstancesManagedInstancesAutonomousList" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesAutonomousList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesAutonomousList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osmanagement_managed_instances

dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesAutonomousList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesAutonomousList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesAutonomousList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesAutonomousList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesAutonomousList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesAutonomousList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesAutonomousList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesAutonomousList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesAutonomousList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesAutonomousList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesAutonomousList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesAutonomousList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesAutonomousList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesAutonomousList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesAutonomousList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesAutonomousList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesAutonomousList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesAutonomousList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesAutonomousList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOsmanagementManagedInstancesManagedInstancesAutonomousOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesAutonomousList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesAutonomousList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesAutonomousList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesAutonomousList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesAutonomousList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciOsmanagementManagedInstancesManagedInstancesAutonomousOutputReference <a name="DataOciOsmanagementManagedInstancesManagedInstancesAutonomousOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesAutonomousOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesAutonomousOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osmanagement_managed_instances

dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesAutonomousOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesAutonomousOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesAutonomousOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesAutonomousOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesAutonomousOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesAutonomousOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesAutonomousOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesAutonomousOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesAutonomousOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesAutonomousOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesAutonomousOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesAutonomousOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesAutonomousOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesAutonomousOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesAutonomousOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesAutonomousOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesAutonomousOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesAutonomousOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesAutonomousOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesAutonomousOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesAutonomousOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesAutonomousOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesAutonomousOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesAutonomousOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesAutonomousOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesAutonomousOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesAutonomousOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesAutonomousOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesAutonomousOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesAutonomousOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesAutonomousOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesAutonomousOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesAutonomousOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesAutonomousOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesAutonomousOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesAutonomousOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesAutonomousOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesAutonomousOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesAutonomousOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesAutonomousOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesAutonomousOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesAutonomousOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesAutonomousOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesAutonomousOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesAutonomousOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesAutonomousOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesAutonomousOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesAutonomousOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesAutonomousOutputReference.property.isAutoUpdateEnabled">is_auto_update_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesAutonomousOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesAutonomous">DataOciOsmanagementManagedInstancesManagedInstancesAutonomous</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesAutonomousOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesAutonomousOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `is_auto_update_enabled`<sup>Required</sup> <a name="is_auto_update_enabled" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesAutonomousOutputReference.property.isAutoUpdateEnabled"></a>

```python
is_auto_update_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesAutonomousOutputReference.property.internalValue"></a>

```python
internal_value: DataOciOsmanagementManagedInstancesManagedInstancesAutonomous
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesAutonomous">DataOciOsmanagementManagedInstancesManagedInstancesAutonomous</a>

---


### DataOciOsmanagementManagedInstancesManagedInstancesChildSoftwareSourcesList <a name="DataOciOsmanagementManagedInstancesManagedInstancesChildSoftwareSourcesList" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesChildSoftwareSourcesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesChildSoftwareSourcesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osmanagement_managed_instances

dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesChildSoftwareSourcesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesChildSoftwareSourcesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesChildSoftwareSourcesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesChildSoftwareSourcesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesChildSoftwareSourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesChildSoftwareSourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesChildSoftwareSourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesChildSoftwareSourcesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesChildSoftwareSourcesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesChildSoftwareSourcesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesChildSoftwareSourcesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesChildSoftwareSourcesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesChildSoftwareSourcesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesChildSoftwareSourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesChildSoftwareSourcesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesChildSoftwareSourcesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesChildSoftwareSourcesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesChildSoftwareSourcesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesChildSoftwareSourcesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOsmanagementManagedInstancesManagedInstancesChildSoftwareSourcesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesChildSoftwareSourcesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesChildSoftwareSourcesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesChildSoftwareSourcesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesChildSoftwareSourcesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesChildSoftwareSourcesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciOsmanagementManagedInstancesManagedInstancesChildSoftwareSourcesOutputReference <a name="DataOciOsmanagementManagedInstancesManagedInstancesChildSoftwareSourcesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesChildSoftwareSourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesChildSoftwareSourcesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osmanagement_managed_instances

dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesChildSoftwareSourcesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesChildSoftwareSourcesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesChildSoftwareSourcesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesChildSoftwareSourcesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesChildSoftwareSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesChildSoftwareSourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesChildSoftwareSourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesChildSoftwareSourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesChildSoftwareSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesChildSoftwareSourcesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesChildSoftwareSourcesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesChildSoftwareSourcesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesChildSoftwareSourcesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesChildSoftwareSourcesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesChildSoftwareSourcesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesChildSoftwareSourcesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesChildSoftwareSourcesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesChildSoftwareSourcesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesChildSoftwareSourcesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesChildSoftwareSourcesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesChildSoftwareSourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesChildSoftwareSourcesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesChildSoftwareSourcesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesChildSoftwareSourcesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesChildSoftwareSourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesChildSoftwareSourcesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesChildSoftwareSourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesChildSoftwareSourcesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesChildSoftwareSourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesChildSoftwareSourcesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesChildSoftwareSourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesChildSoftwareSourcesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesChildSoftwareSourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesChildSoftwareSourcesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesChildSoftwareSourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesChildSoftwareSourcesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesChildSoftwareSourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesChildSoftwareSourcesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesChildSoftwareSourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesChildSoftwareSourcesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesChildSoftwareSourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesChildSoftwareSourcesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesChildSoftwareSourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesChildSoftwareSourcesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesChildSoftwareSourcesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesChildSoftwareSourcesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesChildSoftwareSourcesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesChildSoftwareSourcesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesChildSoftwareSourcesOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesChildSoftwareSourcesOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesChildSoftwareSourcesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesChildSoftwareSources">DataOciOsmanagementManagedInstancesManagedInstancesChildSoftwareSources</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesChildSoftwareSourcesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesChildSoftwareSourcesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesChildSoftwareSourcesOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesChildSoftwareSourcesOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesChildSoftwareSourcesOutputReference.property.internalValue"></a>

```python
internal_value: DataOciOsmanagementManagedInstancesManagedInstancesChildSoftwareSources
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesChildSoftwareSources">DataOciOsmanagementManagedInstancesManagedInstancesChildSoftwareSources</a>

---


### DataOciOsmanagementManagedInstancesManagedInstancesList <a name="DataOciOsmanagementManagedInstancesManagedInstancesList" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osmanagement_managed_instances

dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOsmanagementManagedInstancesManagedInstancesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciOsmanagementManagedInstancesManagedInstancesManagedInstanceGroupsList <a name="DataOciOsmanagementManagedInstancesManagedInstancesManagedInstanceGroupsList" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesManagedInstanceGroupsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesManagedInstanceGroupsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osmanagement_managed_instances

dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesManagedInstanceGroupsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesManagedInstanceGroupsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesManagedInstanceGroupsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesManagedInstanceGroupsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesManagedInstanceGroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesManagedInstanceGroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesManagedInstanceGroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesManagedInstanceGroupsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesManagedInstanceGroupsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesManagedInstanceGroupsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesManagedInstanceGroupsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesManagedInstanceGroupsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesManagedInstanceGroupsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesManagedInstanceGroupsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesManagedInstanceGroupsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesManagedInstanceGroupsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesManagedInstanceGroupsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesManagedInstanceGroupsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesManagedInstanceGroupsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOsmanagementManagedInstancesManagedInstancesManagedInstanceGroupsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesManagedInstanceGroupsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesManagedInstanceGroupsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesManagedInstanceGroupsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesManagedInstanceGroupsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesManagedInstanceGroupsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciOsmanagementManagedInstancesManagedInstancesManagedInstanceGroupsOutputReference <a name="DataOciOsmanagementManagedInstancesManagedInstancesManagedInstanceGroupsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesManagedInstanceGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesManagedInstanceGroupsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osmanagement_managed_instances

dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesManagedInstanceGroupsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesManagedInstanceGroupsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesManagedInstanceGroupsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesManagedInstanceGroupsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesManagedInstanceGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesManagedInstanceGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesManagedInstanceGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesManagedInstanceGroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesManagedInstanceGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesManagedInstanceGroupsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesManagedInstanceGroupsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesManagedInstanceGroupsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesManagedInstanceGroupsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesManagedInstanceGroupsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesManagedInstanceGroupsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesManagedInstanceGroupsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesManagedInstanceGroupsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesManagedInstanceGroupsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesManagedInstanceGroupsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesManagedInstanceGroupsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesManagedInstanceGroupsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesManagedInstanceGroupsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesManagedInstanceGroupsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesManagedInstanceGroupsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesManagedInstanceGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesManagedInstanceGroupsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesManagedInstanceGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesManagedInstanceGroupsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesManagedInstanceGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesManagedInstanceGroupsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesManagedInstanceGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesManagedInstanceGroupsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesManagedInstanceGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesManagedInstanceGroupsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesManagedInstanceGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesManagedInstanceGroupsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesManagedInstanceGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesManagedInstanceGroupsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesManagedInstanceGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesManagedInstanceGroupsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesManagedInstanceGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesManagedInstanceGroupsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesManagedInstanceGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesManagedInstanceGroupsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesManagedInstanceGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesManagedInstanceGroupsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesManagedInstanceGroupsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesManagedInstanceGroupsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesManagedInstanceGroupsOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesManagedInstanceGroupsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesManagedInstanceGroupsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesManagedInstanceGroups">DataOciOsmanagementManagedInstancesManagedInstancesManagedInstanceGroups</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesManagedInstanceGroupsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesManagedInstanceGroupsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesManagedInstanceGroupsOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesManagedInstanceGroupsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesManagedInstanceGroupsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciOsmanagementManagedInstancesManagedInstancesManagedInstanceGroups
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesManagedInstanceGroups">DataOciOsmanagementManagedInstancesManagedInstancesManagedInstanceGroups</a>

---


### DataOciOsmanagementManagedInstancesManagedInstancesOutputReference <a name="DataOciOsmanagementManagedInstancesManagedInstancesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osmanagement_managed_instances

dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesOutputReference.property.autonomous">autonomous</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesAutonomousList">DataOciOsmanagementManagedInstancesManagedInstancesAutonomousList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesOutputReference.property.bugUpdatesAvailable">bug_updates_available</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesOutputReference.property.childSoftwareSources">child_software_sources</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesChildSoftwareSourcesList">DataOciOsmanagementManagedInstancesManagedInstancesChildSoftwareSourcesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesOutputReference.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesOutputReference.property.enhancementUpdatesAvailable">enhancement_updates_available</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesOutputReference.property.isDataCollectionAuthorized">is_data_collection_authorized</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesOutputReference.property.isRebootRequired">is_reboot_required</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesOutputReference.property.kspliceEffectiveKernelVersion">ksplice_effective_kernel_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesOutputReference.property.lastBoot">last_boot</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesOutputReference.property.lastCheckin">last_checkin</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesOutputReference.property.managedInstanceGroups">managed_instance_groups</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesManagedInstanceGroupsList">DataOciOsmanagementManagedInstancesManagedInstancesManagedInstanceGroupsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesOutputReference.property.managedInstanceId">managed_instance_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesOutputReference.property.notificationTopicId">notification_topic_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesOutputReference.property.osFamily">os_family</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesOutputReference.property.osKernelVersion">os_kernel_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesOutputReference.property.osName">os_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesOutputReference.property.osVersion">os_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesOutputReference.property.otherUpdatesAvailable">other_updates_available</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesOutputReference.property.parentSoftwareSource">parent_software_source</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesParentSoftwareSourceList">DataOciOsmanagementManagedInstancesManagedInstancesParentSoftwareSourceList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesOutputReference.property.scheduledJobCount">scheduled_job_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesOutputReference.property.securityUpdatesAvailable">security_updates_available</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesOutputReference.property.updatesAvailable">updates_available</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesOutputReference.property.workRequestCount">work_request_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstances">DataOciOsmanagementManagedInstancesManagedInstances</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `autonomous`<sup>Required</sup> <a name="autonomous" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesOutputReference.property.autonomous"></a>

```python
autonomous: DataOciOsmanagementManagedInstancesManagedInstancesAutonomousList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesAutonomousList">DataOciOsmanagementManagedInstancesManagedInstancesAutonomousList</a>

---

##### `bug_updates_available`<sup>Required</sup> <a name="bug_updates_available" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesOutputReference.property.bugUpdatesAvailable"></a>

```python
bug_updates_available: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `child_software_sources`<sup>Required</sup> <a name="child_software_sources" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesOutputReference.property.childSoftwareSources"></a>

```python
child_software_sources: DataOciOsmanagementManagedInstancesManagedInstancesChildSoftwareSourcesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesChildSoftwareSourcesList">DataOciOsmanagementManagedInstancesManagedInstancesChildSoftwareSourcesList</a>

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesOutputReference.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `enhancement_updates_available`<sup>Required</sup> <a name="enhancement_updates_available" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesOutputReference.property.enhancementUpdatesAvailable"></a>

```python
enhancement_updates_available: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `is_data_collection_authorized`<sup>Required</sup> <a name="is_data_collection_authorized" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesOutputReference.property.isDataCollectionAuthorized"></a>

```python
is_data_collection_authorized: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_reboot_required`<sup>Required</sup> <a name="is_reboot_required" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesOutputReference.property.isRebootRequired"></a>

```python
is_reboot_required: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `ksplice_effective_kernel_version`<sup>Required</sup> <a name="ksplice_effective_kernel_version" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesOutputReference.property.kspliceEffectiveKernelVersion"></a>

```python
ksplice_effective_kernel_version: str
```

- *Type:* str

---

##### `last_boot`<sup>Required</sup> <a name="last_boot" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesOutputReference.property.lastBoot"></a>

```python
last_boot: str
```

- *Type:* str

---

##### `last_checkin`<sup>Required</sup> <a name="last_checkin" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesOutputReference.property.lastCheckin"></a>

```python
last_checkin: str
```

- *Type:* str

---

##### `managed_instance_groups`<sup>Required</sup> <a name="managed_instance_groups" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesOutputReference.property.managedInstanceGroups"></a>

```python
managed_instance_groups: DataOciOsmanagementManagedInstancesManagedInstancesManagedInstanceGroupsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesManagedInstanceGroupsList">DataOciOsmanagementManagedInstancesManagedInstancesManagedInstanceGroupsList</a>

---

##### `managed_instance_id`<sup>Required</sup> <a name="managed_instance_id" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesOutputReference.property.managedInstanceId"></a>

```python
managed_instance_id: str
```

- *Type:* str

---

##### `notification_topic_id`<sup>Required</sup> <a name="notification_topic_id" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesOutputReference.property.notificationTopicId"></a>

```python
notification_topic_id: str
```

- *Type:* str

---

##### `os_family`<sup>Required</sup> <a name="os_family" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesOutputReference.property.osFamily"></a>

```python
os_family: str
```

- *Type:* str

---

##### `os_kernel_version`<sup>Required</sup> <a name="os_kernel_version" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesOutputReference.property.osKernelVersion"></a>

```python
os_kernel_version: str
```

- *Type:* str

---

##### `os_name`<sup>Required</sup> <a name="os_name" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesOutputReference.property.osName"></a>

```python
os_name: str
```

- *Type:* str

---

##### `os_version`<sup>Required</sup> <a name="os_version" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesOutputReference.property.osVersion"></a>

```python
os_version: str
```

- *Type:* str

---

##### `other_updates_available`<sup>Required</sup> <a name="other_updates_available" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesOutputReference.property.otherUpdatesAvailable"></a>

```python
other_updates_available: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `parent_software_source`<sup>Required</sup> <a name="parent_software_source" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesOutputReference.property.parentSoftwareSource"></a>

```python
parent_software_source: DataOciOsmanagementManagedInstancesManagedInstancesParentSoftwareSourceList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesParentSoftwareSourceList">DataOciOsmanagementManagedInstancesManagedInstancesParentSoftwareSourceList</a>

---

##### `scheduled_job_count`<sup>Required</sup> <a name="scheduled_job_count" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesOutputReference.property.scheduledJobCount"></a>

```python
scheduled_job_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `security_updates_available`<sup>Required</sup> <a name="security_updates_available" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesOutputReference.property.securityUpdatesAvailable"></a>

```python
security_updates_available: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `status`<sup>Required</sup> <a name="status" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `updates_available`<sup>Required</sup> <a name="updates_available" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesOutputReference.property.updatesAvailable"></a>

```python
updates_available: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `work_request_count`<sup>Required</sup> <a name="work_request_count" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesOutputReference.property.workRequestCount"></a>

```python
work_request_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesOutputReference.property.internalValue"></a>

```python
internal_value: DataOciOsmanagementManagedInstancesManagedInstances
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstances">DataOciOsmanagementManagedInstancesManagedInstances</a>

---


### DataOciOsmanagementManagedInstancesManagedInstancesParentSoftwareSourceList <a name="DataOciOsmanagementManagedInstancesManagedInstancesParentSoftwareSourceList" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesParentSoftwareSourceList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesParentSoftwareSourceList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osmanagement_managed_instances

dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesParentSoftwareSourceList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesParentSoftwareSourceList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesParentSoftwareSourceList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesParentSoftwareSourceList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesParentSoftwareSourceList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesParentSoftwareSourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesParentSoftwareSourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesParentSoftwareSourceList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesParentSoftwareSourceList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesParentSoftwareSourceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesParentSoftwareSourceList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesParentSoftwareSourceList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesParentSoftwareSourceList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesParentSoftwareSourceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesParentSoftwareSourceList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesParentSoftwareSourceList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesParentSoftwareSourceList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesParentSoftwareSourceList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesParentSoftwareSourceList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOsmanagementManagedInstancesManagedInstancesParentSoftwareSourceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesParentSoftwareSourceList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesParentSoftwareSourceList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesParentSoftwareSourceList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesParentSoftwareSourceList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesParentSoftwareSourceList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciOsmanagementManagedInstancesManagedInstancesParentSoftwareSourceOutputReference <a name="DataOciOsmanagementManagedInstancesManagedInstancesParentSoftwareSourceOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesParentSoftwareSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesParentSoftwareSourceOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osmanagement_managed_instances

dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesParentSoftwareSourceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesParentSoftwareSourceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesParentSoftwareSourceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesParentSoftwareSourceOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesParentSoftwareSourceOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesParentSoftwareSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesParentSoftwareSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesParentSoftwareSourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesParentSoftwareSourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesParentSoftwareSourceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesParentSoftwareSourceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesParentSoftwareSourceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesParentSoftwareSourceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesParentSoftwareSourceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesParentSoftwareSourceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesParentSoftwareSourceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesParentSoftwareSourceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesParentSoftwareSourceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesParentSoftwareSourceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesParentSoftwareSourceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesParentSoftwareSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesParentSoftwareSourceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesParentSoftwareSourceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesParentSoftwareSourceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesParentSoftwareSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesParentSoftwareSourceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesParentSoftwareSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesParentSoftwareSourceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesParentSoftwareSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesParentSoftwareSourceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesParentSoftwareSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesParentSoftwareSourceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesParentSoftwareSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesParentSoftwareSourceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesParentSoftwareSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesParentSoftwareSourceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesParentSoftwareSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesParentSoftwareSourceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesParentSoftwareSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesParentSoftwareSourceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesParentSoftwareSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesParentSoftwareSourceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesParentSoftwareSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesParentSoftwareSourceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesParentSoftwareSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesParentSoftwareSourceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesParentSoftwareSourceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesParentSoftwareSourceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesParentSoftwareSourceOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesParentSoftwareSourceOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesParentSoftwareSourceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesParentSoftwareSource">DataOciOsmanagementManagedInstancesManagedInstancesParentSoftwareSource</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesParentSoftwareSourceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesParentSoftwareSourceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesParentSoftwareSourceOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesParentSoftwareSourceOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesParentSoftwareSourceOutputReference.property.internalValue"></a>

```python
internal_value: DataOciOsmanagementManagedInstancesManagedInstancesParentSoftwareSource
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesParentSoftwareSource">DataOciOsmanagementManagedInstancesManagedInstancesParentSoftwareSource</a>

---



