# `dataOciOperatorAccessControlOperatorControlAssignments` Submodule <a name="`dataOciOperatorAccessControlOperatorControlAssignments` Submodule" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciOperatorAccessControlOperatorControlAssignments <a name="DataOciOperatorAccessControlOperatorControlAssignments" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/operator_access_control_operator_control_assignments oci_operator_access_control_operator_control_assignments}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_operator_access_control_operator_control_assignments

dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments(
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
  filter: typing.Union[IResolvable, typing.List[DataOciOperatorAccessControlOperatorControlAssignmentsFilter]] = None,
  id: str = None,
  operator_control_name: str = None,
  resource_name: str = None,
  resource_type: str = None,
  state: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/operator_access_control_operator_control_assignments#compartment_id DataOciOperatorAccessControlOperatorControlAssignments#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilter">DataOciOperatorAccessControlOperatorControlAssignmentsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/operator_access_control_operator_control_assignments#id DataOciOperatorAccessControlOperatorControlAssignments#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.Initializer.parameter.operatorControlName">operator_control_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/operator_access_control_operator_control_assignments#operator_control_name DataOciOperatorAccessControlOperatorControlAssignments#operator_control_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.Initializer.parameter.resourceName">resource_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/operator_access_control_operator_control_assignments#resource_name DataOciOperatorAccessControlOperatorControlAssignments#resource_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.Initializer.parameter.resourceType">resource_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/operator_access_control_operator_control_assignments#resource_type DataOciOperatorAccessControlOperatorControlAssignments#resource_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.Initializer.parameter.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/operator_access_control_operator_control_assignments#state DataOciOperatorAccessControlOperatorControlAssignments#state}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/operator_access_control_operator_control_assignments#compartment_id DataOciOperatorAccessControlOperatorControlAssignments#compartment_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilter">DataOciOperatorAccessControlOperatorControlAssignmentsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/operator_access_control_operator_control_assignments#filter DataOciOperatorAccessControlOperatorControlAssignments#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/operator_access_control_operator_control_assignments#id DataOciOperatorAccessControlOperatorControlAssignments#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `operator_control_name`<sup>Optional</sup> <a name="operator_control_name" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.Initializer.parameter.operatorControlName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/operator_access_control_operator_control_assignments#operator_control_name DataOciOperatorAccessControlOperatorControlAssignments#operator_control_name}.

---

##### `resource_name`<sup>Optional</sup> <a name="resource_name" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.Initializer.parameter.resourceName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/operator_access_control_operator_control_assignments#resource_name DataOciOperatorAccessControlOperatorControlAssignments#resource_name}.

---

##### `resource_type`<sup>Optional</sup> <a name="resource_type" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.Initializer.parameter.resourceType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/operator_access_control_operator_control_assignments#resource_type DataOciOperatorAccessControlOperatorControlAssignments#resource_type}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.Initializer.parameter.state"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/operator_access_control_operator_control_assignments#state DataOciOperatorAccessControlOperatorControlAssignments#state}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.resetOperatorControlName">reset_operator_control_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.resetResourceName">reset_resource_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.resetResourceType">reset_resource_type</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.resetState">reset_state</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciOperatorAccessControlOperatorControlAssignmentsFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilter">DataOciOperatorAccessControlOperatorControlAssignmentsFilter</a>]]

---

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_operator_control_name` <a name="reset_operator_control_name" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.resetOperatorControlName"></a>

```python
def reset_operator_control_name() -> None
```

##### `reset_resource_name` <a name="reset_resource_name" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.resetResourceName"></a>

```python
def reset_resource_name() -> None
```

##### `reset_resource_type` <a name="reset_resource_type" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.resetResourceType"></a>

```python
def reset_resource_type() -> None
```

##### `reset_state` <a name="reset_state" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.resetState"></a>

```python
def reset_state() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciOperatorAccessControlOperatorControlAssignments resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_operator_access_control_operator_control_assignments

dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_operator_access_control_operator_control_assignments

dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_operator_access_control_operator_control_assignments

dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_operator_access_control_operator_control_assignments

dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciOperatorAccessControlOperatorControlAssignments resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciOperatorAccessControlOperatorControlAssignments to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciOperatorAccessControlOperatorControlAssignments that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/operator_access_control_operator_control_assignments#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciOperatorAccessControlOperatorControlAssignments to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilterList">DataOciOperatorAccessControlOperatorControlAssignmentsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.property.operatorControlAssignmentCollection">operator_control_assignment_collection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionList">DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilter">DataOciOperatorAccessControlOperatorControlAssignmentsFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.property.operatorControlNameInput">operator_control_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.property.resourceNameInput">resource_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.property.resourceTypeInput">resource_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.property.stateInput">state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.property.operatorControlName">operator_control_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.property.resourceName">resource_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.property.resourceType">resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.property.state">state</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.property.filter"></a>

```python
filter: DataOciOperatorAccessControlOperatorControlAssignmentsFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilterList">DataOciOperatorAccessControlOperatorControlAssignmentsFilterList</a>

---

##### `operator_control_assignment_collection`<sup>Required</sup> <a name="operator_control_assignment_collection" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.property.operatorControlAssignmentCollection"></a>

```python
operator_control_assignment_collection: DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionList">DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionList</a>

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciOperatorAccessControlOperatorControlAssignmentsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilter">DataOciOperatorAccessControlOperatorControlAssignmentsFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `operator_control_name_input`<sup>Optional</sup> <a name="operator_control_name_input" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.property.operatorControlNameInput"></a>

```python
operator_control_name_input: str
```

- *Type:* str

---

##### `resource_name_input`<sup>Optional</sup> <a name="resource_name_input" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.property.resourceNameInput"></a>

```python
resource_name_input: str
```

- *Type:* str

---

##### `resource_type_input`<sup>Optional</sup> <a name="resource_type_input" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.property.resourceTypeInput"></a>

```python
resource_type_input: str
```

- *Type:* str

---

##### `state_input`<sup>Optional</sup> <a name="state_input" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.property.stateInput"></a>

```python
state_input: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `operator_control_name`<sup>Required</sup> <a name="operator_control_name" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.property.operatorControlName"></a>

```python
operator_control_name: str
```

- *Type:* str

---

##### `resource_name`<sup>Required</sup> <a name="resource_name" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.property.resourceName"></a>

```python
resource_name: str
```

- *Type:* str

---

##### `resource_type`<sup>Required</sup> <a name="resource_type" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.property.resourceType"></a>

```python
resource_type: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.property.state"></a>

```python
state: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciOperatorAccessControlOperatorControlAssignmentsConfig <a name="DataOciOperatorAccessControlOperatorControlAssignmentsConfig" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_operator_access_control_operator_control_assignments

dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  filter: typing.Union[IResolvable, typing.List[DataOciOperatorAccessControlOperatorControlAssignmentsFilter]] = None,
  id: str = None,
  operator_control_name: str = None,
  resource_name: str = None,
  resource_type: str = None,
  state: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/operator_access_control_operator_control_assignments#compartment_id DataOciOperatorAccessControlOperatorControlAssignments#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilter">DataOciOperatorAccessControlOperatorControlAssignmentsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/operator_access_control_operator_control_assignments#id DataOciOperatorAccessControlOperatorControlAssignments#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsConfig.property.operatorControlName">operator_control_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/operator_access_control_operator_control_assignments#operator_control_name DataOciOperatorAccessControlOperatorControlAssignments#operator_control_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsConfig.property.resourceName">resource_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/operator_access_control_operator_control_assignments#resource_name DataOciOperatorAccessControlOperatorControlAssignments#resource_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsConfig.property.resourceType">resource_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/operator_access_control_operator_control_assignments#resource_type DataOciOperatorAccessControlOperatorControlAssignments#resource_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsConfig.property.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/operator_access_control_operator_control_assignments#state DataOciOperatorAccessControlOperatorControlAssignments#state}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/operator_access_control_operator_control_assignments#compartment_id DataOciOperatorAccessControlOperatorControlAssignments#compartment_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciOperatorAccessControlOperatorControlAssignmentsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilter">DataOciOperatorAccessControlOperatorControlAssignmentsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/operator_access_control_operator_control_assignments#filter DataOciOperatorAccessControlOperatorControlAssignments#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/operator_access_control_operator_control_assignments#id DataOciOperatorAccessControlOperatorControlAssignments#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `operator_control_name`<sup>Optional</sup> <a name="operator_control_name" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsConfig.property.operatorControlName"></a>

```python
operator_control_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/operator_access_control_operator_control_assignments#operator_control_name DataOciOperatorAccessControlOperatorControlAssignments#operator_control_name}.

---

##### `resource_name`<sup>Optional</sup> <a name="resource_name" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsConfig.property.resourceName"></a>

```python
resource_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/operator_access_control_operator_control_assignments#resource_name DataOciOperatorAccessControlOperatorControlAssignments#resource_name}.

---

##### `resource_type`<sup>Optional</sup> <a name="resource_type" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsConfig.property.resourceType"></a>

```python
resource_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/operator_access_control_operator_control_assignments#resource_type DataOciOperatorAccessControlOperatorControlAssignments#resource_type}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsConfig.property.state"></a>

```python
state: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/operator_access_control_operator_control_assignments#state DataOciOperatorAccessControlOperatorControlAssignments#state}.

---

### DataOciOperatorAccessControlOperatorControlAssignmentsFilter <a name="DataOciOperatorAccessControlOperatorControlAssignmentsFilter" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_operator_access_control_operator_control_assignments

dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/operator_access_control_operator_control_assignments#name DataOciOperatorAccessControlOperatorControlAssignments#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/operator_access_control_operator_control_assignments#values DataOciOperatorAccessControlOperatorControlAssignments#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/operator_access_control_operator_control_assignments#regex DataOciOperatorAccessControlOperatorControlAssignments#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/operator_access_control_operator_control_assignments#name DataOciOperatorAccessControlOperatorControlAssignments#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/operator_access_control_operator_control_assignments#values DataOciOperatorAccessControlOperatorControlAssignments#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/operator_access_control_operator_control_assignments#regex DataOciOperatorAccessControlOperatorControlAssignments#regex}.

---

### DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollection <a name="DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollection" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollection.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_operator_access_control_operator_control_assignments

dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollection()
```


### DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItems <a name="DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItems.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_operator_access_control_operator_control_assignments

dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItems()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciOperatorAccessControlOperatorControlAssignmentsFilterList <a name="DataOciOperatorAccessControlOperatorControlAssignmentsFilterList" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_operator_access_control_operator_control_assignments

dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOperatorAccessControlOperatorControlAssignmentsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilter">DataOciOperatorAccessControlOperatorControlAssignmentsFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciOperatorAccessControlOperatorControlAssignmentsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilter">DataOciOperatorAccessControlOperatorControlAssignmentsFilter</a>]]

---


### DataOciOperatorAccessControlOperatorControlAssignmentsFilterOutputReference <a name="DataOciOperatorAccessControlOperatorControlAssignmentsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_operator_access_control_operator_control_assignments

dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilter">DataOciOperatorAccessControlOperatorControlAssignmentsFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciOperatorAccessControlOperatorControlAssignmentsFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilter">DataOciOperatorAccessControlOperatorControlAssignmentsFilter</a>]

---


### DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsList <a name="DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_operator_access_control_operator_control_assignments

dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference <a name="DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_operator_access_control_operator_control_assignments

dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.property.assignerId">assigner_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.property.comment">comment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.property.definedTags">defined_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.property.detachmentDescription">detachment_description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.property.errorCode">error_code</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.property.errorMessage">error_message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.property.freeformTags">freeform_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.property.isAutoApproveDuringMaintenance">is_auto_approve_during_maintenance</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.property.isDefaultAssignment">is_default_assignment</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.property.isEnforcedAlways">is_enforced_always</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.property.isHypervisorLogForwarded">is_hypervisor_log_forwarded</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.property.isLogForwarded">is_log_forwarded</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.property.opControlName">op_control_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.property.operatorControlId">operator_control_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.property.remoteSyslogServerAddress">remote_syslog_server_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.property.remoteSyslogServerCaCert">remote_syslog_server_ca_cert</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.property.remoteSyslogServerPort">remote_syslog_server_port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.property.resourceCompartmentId">resource_compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.property.resourceId">resource_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.property.resourceName">resource_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.property.resourceType">resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.property.timeAssignmentFrom">time_assignment_from</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.property.timeAssignmentTo">time_assignment_to</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.property.timeOfAssignment">time_of_assignment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.property.timeOfDeletion">time_of_deletion</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.property.unassignerId">unassigner_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.property.validateAssignmentTrigger">validate_assignment_trigger</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItems">DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItems</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `assigner_id`<sup>Required</sup> <a name="assigner_id" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.property.assignerId"></a>

```python
assigner_id: str
```

- *Type:* str

---

##### `comment`<sup>Required</sup> <a name="comment" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.property.comment"></a>

```python
comment: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.property.definedTags"></a>

```python
defined_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `detachment_description`<sup>Required</sup> <a name="detachment_description" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.property.detachmentDescription"></a>

```python
detachment_description: str
```

- *Type:* str

---

##### `error_code`<sup>Required</sup> <a name="error_code" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.property.errorCode"></a>

```python
error_code: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `error_message`<sup>Required</sup> <a name="error_message" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.property.errorMessage"></a>

```python
error_message: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.property.freeformTags"></a>

```python
freeform_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `is_auto_approve_during_maintenance`<sup>Required</sup> <a name="is_auto_approve_during_maintenance" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.property.isAutoApproveDuringMaintenance"></a>

```python
is_auto_approve_during_maintenance: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_default_assignment`<sup>Required</sup> <a name="is_default_assignment" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.property.isDefaultAssignment"></a>

```python
is_default_assignment: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_enforced_always`<sup>Required</sup> <a name="is_enforced_always" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.property.isEnforcedAlways"></a>

```python
is_enforced_always: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_hypervisor_log_forwarded`<sup>Required</sup> <a name="is_hypervisor_log_forwarded" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.property.isHypervisorLogForwarded"></a>

```python
is_hypervisor_log_forwarded: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_log_forwarded`<sup>Required</sup> <a name="is_log_forwarded" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.property.isLogForwarded"></a>

```python
is_log_forwarded: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `op_control_name`<sup>Required</sup> <a name="op_control_name" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.property.opControlName"></a>

```python
op_control_name: str
```

- *Type:* str

---

##### `operator_control_id`<sup>Required</sup> <a name="operator_control_id" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.property.operatorControlId"></a>

```python
operator_control_id: str
```

- *Type:* str

---

##### `remote_syslog_server_address`<sup>Required</sup> <a name="remote_syslog_server_address" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.property.remoteSyslogServerAddress"></a>

```python
remote_syslog_server_address: str
```

- *Type:* str

---

##### `remote_syslog_server_ca_cert`<sup>Required</sup> <a name="remote_syslog_server_ca_cert" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.property.remoteSyslogServerCaCert"></a>

```python
remote_syslog_server_ca_cert: str
```

- *Type:* str

---

##### `remote_syslog_server_port`<sup>Required</sup> <a name="remote_syslog_server_port" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.property.remoteSyslogServerPort"></a>

```python
remote_syslog_server_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `resource_compartment_id`<sup>Required</sup> <a name="resource_compartment_id" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.property.resourceCompartmentId"></a>

```python
resource_compartment_id: str
```

- *Type:* str

---

##### `resource_id`<sup>Required</sup> <a name="resource_id" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.property.resourceId"></a>

```python
resource_id: str
```

- *Type:* str

---

##### `resource_name`<sup>Required</sup> <a name="resource_name" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.property.resourceName"></a>

```python
resource_name: str
```

- *Type:* str

---

##### `resource_type`<sup>Required</sup> <a name="resource_type" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.property.resourceType"></a>

```python
resource_type: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `time_assignment_from`<sup>Required</sup> <a name="time_assignment_from" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.property.timeAssignmentFrom"></a>

```python
time_assignment_from: str
```

- *Type:* str

---

##### `time_assignment_to`<sup>Required</sup> <a name="time_assignment_to" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.property.timeAssignmentTo"></a>

```python
time_assignment_to: str
```

- *Type:* str

---

##### `time_of_assignment`<sup>Required</sup> <a name="time_of_assignment" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.property.timeOfAssignment"></a>

```python
time_of_assignment: str
```

- *Type:* str

---

##### `time_of_deletion`<sup>Required</sup> <a name="time_of_deletion" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.property.timeOfDeletion"></a>

```python
time_of_deletion: str
```

- *Type:* str

---

##### `unassigner_id`<sup>Required</sup> <a name="unassigner_id" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.property.unassignerId"></a>

```python
unassigner_id: str
```

- *Type:* str

---

##### `validate_assignment_trigger`<sup>Required</sup> <a name="validate_assignment_trigger" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.property.validateAssignmentTrigger"></a>

```python
validate_assignment_trigger: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItems">DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItems</a>

---


### DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionList <a name="DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionList" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_operator_access_control_operator_control_assignments

dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionOutputReference <a name="DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_operator_access_control_operator_control_assignments

dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsList">DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollection">DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionOutputReference.property.items"></a>

```python
items: DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsList">DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionOutputReference.property.internalValue"></a>

```python
internal_value: DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollection">DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollection</a>

---



