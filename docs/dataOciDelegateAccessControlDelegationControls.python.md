# `dataOciDelegateAccessControlDelegationControls` Submodule <a name="`dataOciDelegateAccessControlDelegationControls` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDelegateAccessControlDelegationControls <a name="DataOciDelegateAccessControlDelegationControls" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControls"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_delegation_controls oci_delegate_access_control_delegation_controls}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControls.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_delegate_access_control_delegation_controls

dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControls(
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
  filter: typing.Union[IResolvable, typing.List[DataOciDelegateAccessControlDelegationControlsFilter]] = None,
  id: str = None,
  resource_id: str = None,
  resource_type: str = None,
  state: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControls.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControls.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControls.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControls.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControls.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControls.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControls.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControls.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControls.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControls.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_delegation_controls#compartment_id DataOciDelegateAccessControlDelegationControls#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControls.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_delegation_controls#display_name DataOciDelegateAccessControlDelegationControls#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControls.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsFilter">DataOciDelegateAccessControlDelegationControlsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControls.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_delegation_controls#id DataOciDelegateAccessControlDelegationControls#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControls.Initializer.parameter.resourceId">resource_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_delegation_controls#resource_id DataOciDelegateAccessControlDelegationControls#resource_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControls.Initializer.parameter.resourceType">resource_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_delegation_controls#resource_type DataOciDelegateAccessControlDelegationControls#resource_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControls.Initializer.parameter.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_delegation_controls#state DataOciDelegateAccessControlDelegationControls#state}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControls.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControls.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControls.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControls.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControls.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControls.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControls.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControls.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControls.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControls.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_delegation_controls#compartment_id DataOciDelegateAccessControlDelegationControls#compartment_id}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControls.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_delegation_controls#display_name DataOciDelegateAccessControlDelegationControls#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControls.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsFilter">DataOciDelegateAccessControlDelegationControlsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_delegation_controls#filter DataOciDelegateAccessControlDelegationControls#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControls.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_delegation_controls#id DataOciDelegateAccessControlDelegationControls#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `resource_id`<sup>Optional</sup> <a name="resource_id" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControls.Initializer.parameter.resourceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_delegation_controls#resource_id DataOciDelegateAccessControlDelegationControls#resource_id}.

---

##### `resource_type`<sup>Optional</sup> <a name="resource_type" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControls.Initializer.parameter.resourceType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_delegation_controls#resource_type DataOciDelegateAccessControlDelegationControls#resource_type}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControls.Initializer.parameter.state"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_delegation_controls#state DataOciDelegateAccessControlDelegationControls#state}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControls.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControls.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControls.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControls.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControls.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControls.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControls.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControls.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControls.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControls.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControls.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControls.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControls.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControls.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControls.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControls.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControls.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControls.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControls.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControls.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControls.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControls.resetResourceId">reset_resource_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControls.resetResourceType">reset_resource_type</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControls.resetState">reset_state</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControls.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControls.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControls.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControls.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControls.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControls.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControls.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControls.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControls.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControls.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControls.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControls.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControls.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControls.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControls.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControls.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControls.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControls.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControls.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControls.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControls.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControls.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControls.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControls.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControls.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControls.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControls.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControls.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControls.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControls.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControls.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciDelegateAccessControlDelegationControlsFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControls.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsFilter">DataOciDelegateAccessControlDelegationControlsFilter</a>]]

---

##### `reset_display_name` <a name="reset_display_name" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControls.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControls.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControls.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_resource_id` <a name="reset_resource_id" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControls.resetResourceId"></a>

```python
def reset_resource_id() -> None
```

##### `reset_resource_type` <a name="reset_resource_type" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControls.resetResourceType"></a>

```python
def reset_resource_type() -> None
```

##### `reset_state` <a name="reset_state" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControls.resetState"></a>

```python
def reset_state() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControls.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControls.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControls.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControls.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciDelegateAccessControlDelegationControls resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControls.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_delegate_access_control_delegation_controls

dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControls.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControls.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControls.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_delegate_access_control_delegation_controls

dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControls.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControls.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControls.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_delegate_access_control_delegation_controls

dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControls.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControls.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControls.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_delegate_access_control_delegation_controls

dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControls.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciDelegateAccessControlDelegationControls resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControls.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControls.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciDelegateAccessControlDelegationControls to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControls.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciDelegateAccessControlDelegationControls that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_delegation_controls#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControls.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDelegateAccessControlDelegationControls to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControls.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControls.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControls.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControls.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControls.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControls.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControls.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControls.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControls.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControls.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControls.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControls.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControls.property.delegationControlSummaryCollection">delegation_control_summary_collection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsDelegationControlSummaryCollectionList">DataOciDelegateAccessControlDelegationControlsDelegationControlSummaryCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControls.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsFilterList">DataOciDelegateAccessControlDelegationControlsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControls.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControls.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControls.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsFilter">DataOciDelegateAccessControlDelegationControlsFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControls.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControls.property.resourceIdInput">resource_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControls.property.resourceTypeInput">resource_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControls.property.stateInput">state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControls.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControls.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControls.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControls.property.resourceId">resource_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControls.property.resourceType">resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControls.property.state">state</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControls.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControls.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControls.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControls.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControls.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControls.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControls.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControls.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControls.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControls.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControls.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControls.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `delegation_control_summary_collection`<sup>Required</sup> <a name="delegation_control_summary_collection" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControls.property.delegationControlSummaryCollection"></a>

```python
delegation_control_summary_collection: DataOciDelegateAccessControlDelegationControlsDelegationControlSummaryCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsDelegationControlSummaryCollectionList">DataOciDelegateAccessControlDelegationControlsDelegationControlSummaryCollectionList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControls.property.filter"></a>

```python
filter: DataOciDelegateAccessControlDelegationControlsFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsFilterList">DataOciDelegateAccessControlDelegationControlsFilterList</a>

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControls.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControls.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControls.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciDelegateAccessControlDelegationControlsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsFilter">DataOciDelegateAccessControlDelegationControlsFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControls.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `resource_id_input`<sup>Optional</sup> <a name="resource_id_input" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControls.property.resourceIdInput"></a>

```python
resource_id_input: str
```

- *Type:* str

---

##### `resource_type_input`<sup>Optional</sup> <a name="resource_type_input" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControls.property.resourceTypeInput"></a>

```python
resource_type_input: str
```

- *Type:* str

---

##### `state_input`<sup>Optional</sup> <a name="state_input" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControls.property.stateInput"></a>

```python
state_input: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControls.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControls.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControls.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `resource_id`<sup>Required</sup> <a name="resource_id" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControls.property.resourceId"></a>

```python
resource_id: str
```

- *Type:* str

---

##### `resource_type`<sup>Required</sup> <a name="resource_type" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControls.property.resourceType"></a>

```python
resource_type: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControls.property.state"></a>

```python
state: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControls.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControls.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDelegateAccessControlDelegationControlsConfig <a name="DataOciDelegateAccessControlDelegationControlsConfig" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_delegate_access_control_delegation_controls

dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  display_name: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciDelegateAccessControlDelegationControlsFilter]] = None,
  id: str = None,
  resource_id: str = None,
  resource_type: str = None,
  state: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_delegation_controls#compartment_id DataOciDelegateAccessControlDelegationControls#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_delegation_controls#display_name DataOciDelegateAccessControlDelegationControls#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsFilter">DataOciDelegateAccessControlDelegationControlsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_delegation_controls#id DataOciDelegateAccessControlDelegationControls#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsConfig.property.resourceId">resource_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_delegation_controls#resource_id DataOciDelegateAccessControlDelegationControls#resource_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsConfig.property.resourceType">resource_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_delegation_controls#resource_type DataOciDelegateAccessControlDelegationControls#resource_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsConfig.property.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_delegation_controls#state DataOciDelegateAccessControlDelegationControls#state}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_delegation_controls#compartment_id DataOciDelegateAccessControlDelegationControls#compartment_id}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_delegation_controls#display_name DataOciDelegateAccessControlDelegationControls#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciDelegateAccessControlDelegationControlsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsFilter">DataOciDelegateAccessControlDelegationControlsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_delegation_controls#filter DataOciDelegateAccessControlDelegationControls#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_delegation_controls#id DataOciDelegateAccessControlDelegationControls#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `resource_id`<sup>Optional</sup> <a name="resource_id" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsConfig.property.resourceId"></a>

```python
resource_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_delegation_controls#resource_id DataOciDelegateAccessControlDelegationControls#resource_id}.

---

##### `resource_type`<sup>Optional</sup> <a name="resource_type" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsConfig.property.resourceType"></a>

```python
resource_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_delegation_controls#resource_type DataOciDelegateAccessControlDelegationControls#resource_type}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsConfig.property.state"></a>

```python
state: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_delegation_controls#state DataOciDelegateAccessControlDelegationControls#state}.

---

### DataOciDelegateAccessControlDelegationControlsDelegationControlSummaryCollection <a name="DataOciDelegateAccessControlDelegationControlsDelegationControlSummaryCollection" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsDelegationControlSummaryCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsDelegationControlSummaryCollection.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_delegate_access_control_delegation_controls

dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsDelegationControlSummaryCollection()
```


### DataOciDelegateAccessControlDelegationControlsDelegationControlSummaryCollectionItems <a name="DataOciDelegateAccessControlDelegationControlsDelegationControlSummaryCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsDelegationControlSummaryCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsDelegationControlSummaryCollectionItems.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_delegate_access_control_delegation_controls

dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsDelegationControlSummaryCollectionItems()
```


### DataOciDelegateAccessControlDelegationControlsFilter <a name="DataOciDelegateAccessControlDelegationControlsFilter" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_delegate_access_control_delegation_controls

dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_delegation_controls#name DataOciDelegateAccessControlDelegationControls#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_delegation_controls#values DataOciDelegateAccessControlDelegationControls#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_delegation_controls#regex DataOciDelegateAccessControlDelegationControls#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_delegation_controls#name DataOciDelegateAccessControlDelegationControls#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_delegation_controls#values DataOciDelegateAccessControlDelegationControls#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_delegation_controls#regex DataOciDelegateAccessControlDelegationControls#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciDelegateAccessControlDelegationControlsDelegationControlSummaryCollectionItemsList <a name="DataOciDelegateAccessControlDelegationControlsDelegationControlSummaryCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsDelegationControlSummaryCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsDelegationControlSummaryCollectionItemsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_delegate_access_control_delegation_controls

dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsDelegationControlSummaryCollectionItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsDelegationControlSummaryCollectionItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsDelegationControlSummaryCollectionItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsDelegationControlSummaryCollectionItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsDelegationControlSummaryCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsDelegationControlSummaryCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsDelegationControlSummaryCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsDelegationControlSummaryCollectionItemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsDelegationControlSummaryCollectionItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsDelegationControlSummaryCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsDelegationControlSummaryCollectionItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsDelegationControlSummaryCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsDelegationControlSummaryCollectionItemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsDelegationControlSummaryCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsDelegationControlSummaryCollectionItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsDelegationControlSummaryCollectionItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsDelegationControlSummaryCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsDelegationControlSummaryCollectionItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsDelegationControlSummaryCollectionItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDelegateAccessControlDelegationControlsDelegationControlSummaryCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsDelegationControlSummaryCollectionItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsDelegationControlSummaryCollectionItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsDelegationControlSummaryCollectionItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsDelegationControlSummaryCollectionItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsDelegationControlSummaryCollectionItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDelegateAccessControlDelegationControlsDelegationControlSummaryCollectionItemsOutputReference <a name="DataOciDelegateAccessControlDelegationControlsDelegationControlSummaryCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsDelegationControlSummaryCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsDelegationControlSummaryCollectionItemsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_delegate_access_control_delegation_controls

dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsDelegationControlSummaryCollectionItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsDelegationControlSummaryCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsDelegationControlSummaryCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsDelegationControlSummaryCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsDelegationControlSummaryCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsDelegationControlSummaryCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsDelegationControlSummaryCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsDelegationControlSummaryCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsDelegationControlSummaryCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsDelegationControlSummaryCollectionItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsDelegationControlSummaryCollectionItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsDelegationControlSummaryCollectionItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsDelegationControlSummaryCollectionItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsDelegationControlSummaryCollectionItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsDelegationControlSummaryCollectionItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsDelegationControlSummaryCollectionItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsDelegationControlSummaryCollectionItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsDelegationControlSummaryCollectionItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsDelegationControlSummaryCollectionItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsDelegationControlSummaryCollectionItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsDelegationControlSummaryCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsDelegationControlSummaryCollectionItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsDelegationControlSummaryCollectionItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsDelegationControlSummaryCollectionItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsDelegationControlSummaryCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsDelegationControlSummaryCollectionItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsDelegationControlSummaryCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsDelegationControlSummaryCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsDelegationControlSummaryCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsDelegationControlSummaryCollectionItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsDelegationControlSummaryCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsDelegationControlSummaryCollectionItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsDelegationControlSummaryCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsDelegationControlSummaryCollectionItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsDelegationControlSummaryCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsDelegationControlSummaryCollectionItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsDelegationControlSummaryCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsDelegationControlSummaryCollectionItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsDelegationControlSummaryCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsDelegationControlSummaryCollectionItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsDelegationControlSummaryCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsDelegationControlSummaryCollectionItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsDelegationControlSummaryCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsDelegationControlSummaryCollectionItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsDelegationControlSummaryCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsDelegationControlSummaryCollectionItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsDelegationControlSummaryCollectionItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsDelegationControlSummaryCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsDelegationControlSummaryCollectionItemsOutputReference.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsDelegationControlSummaryCollectionItemsOutputReference.property.definedTags">defined_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsDelegationControlSummaryCollectionItemsOutputReference.property.delegationSubscriptionIds">delegation_subscription_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsDelegationControlSummaryCollectionItemsOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsDelegationControlSummaryCollectionItemsOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsDelegationControlSummaryCollectionItemsOutputReference.property.freeformTags">freeform_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsDelegationControlSummaryCollectionItemsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsDelegationControlSummaryCollectionItemsOutputReference.property.isAutoApproveDuringMaintenance">is_auto_approve_during_maintenance</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsDelegationControlSummaryCollectionItemsOutputReference.property.lifecycleStateDetails">lifecycle_state_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsDelegationControlSummaryCollectionItemsOutputReference.property.notificationMessageFormat">notification_message_format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsDelegationControlSummaryCollectionItemsOutputReference.property.notificationTopicId">notification_topic_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsDelegationControlSummaryCollectionItemsOutputReference.property.numApprovalsRequired">num_approvals_required</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsDelegationControlSummaryCollectionItemsOutputReference.property.preApprovedServiceProviderActionNames">pre_approved_service_provider_action_names</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsDelegationControlSummaryCollectionItemsOutputReference.property.resourceIds">resource_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsDelegationControlSummaryCollectionItemsOutputReference.property.resourceType">resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsDelegationControlSummaryCollectionItemsOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsDelegationControlSummaryCollectionItemsOutputReference.property.systemTags">system_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsDelegationControlSummaryCollectionItemsOutputReference.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsDelegationControlSummaryCollectionItemsOutputReference.property.timeDeleted">time_deleted</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsDelegationControlSummaryCollectionItemsOutputReference.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsDelegationControlSummaryCollectionItemsOutputReference.property.vaultId">vault_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsDelegationControlSummaryCollectionItemsOutputReference.property.vaultKeyId">vault_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsDelegationControlSummaryCollectionItemsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsDelegationControlSummaryCollectionItems">DataOciDelegateAccessControlDelegationControlsDelegationControlSummaryCollectionItems</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsDelegationControlSummaryCollectionItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsDelegationControlSummaryCollectionItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsDelegationControlSummaryCollectionItemsOutputReference.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsDelegationControlSummaryCollectionItemsOutputReference.property.definedTags"></a>

```python
defined_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `delegation_subscription_ids`<sup>Required</sup> <a name="delegation_subscription_ids" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsDelegationControlSummaryCollectionItemsOutputReference.property.delegationSubscriptionIds"></a>

```python
delegation_subscription_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsDelegationControlSummaryCollectionItemsOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsDelegationControlSummaryCollectionItemsOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsDelegationControlSummaryCollectionItemsOutputReference.property.freeformTags"></a>

```python
freeform_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsDelegationControlSummaryCollectionItemsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `is_auto_approve_during_maintenance`<sup>Required</sup> <a name="is_auto_approve_during_maintenance" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsDelegationControlSummaryCollectionItemsOutputReference.property.isAutoApproveDuringMaintenance"></a>

```python
is_auto_approve_during_maintenance: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `lifecycle_state_details`<sup>Required</sup> <a name="lifecycle_state_details" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsDelegationControlSummaryCollectionItemsOutputReference.property.lifecycleStateDetails"></a>

```python
lifecycle_state_details: str
```

- *Type:* str

---

##### `notification_message_format`<sup>Required</sup> <a name="notification_message_format" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsDelegationControlSummaryCollectionItemsOutputReference.property.notificationMessageFormat"></a>

```python
notification_message_format: str
```

- *Type:* str

---

##### `notification_topic_id`<sup>Required</sup> <a name="notification_topic_id" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsDelegationControlSummaryCollectionItemsOutputReference.property.notificationTopicId"></a>

```python
notification_topic_id: str
```

- *Type:* str

---

##### `num_approvals_required`<sup>Required</sup> <a name="num_approvals_required" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsDelegationControlSummaryCollectionItemsOutputReference.property.numApprovalsRequired"></a>

```python
num_approvals_required: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `pre_approved_service_provider_action_names`<sup>Required</sup> <a name="pre_approved_service_provider_action_names" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsDelegationControlSummaryCollectionItemsOutputReference.property.preApprovedServiceProviderActionNames"></a>

```python
pre_approved_service_provider_action_names: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `resource_ids`<sup>Required</sup> <a name="resource_ids" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsDelegationControlSummaryCollectionItemsOutputReference.property.resourceIds"></a>

```python
resource_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `resource_type`<sup>Required</sup> <a name="resource_type" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsDelegationControlSummaryCollectionItemsOutputReference.property.resourceType"></a>

```python
resource_type: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsDelegationControlSummaryCollectionItemsOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `system_tags`<sup>Required</sup> <a name="system_tags" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsDelegationControlSummaryCollectionItemsOutputReference.property.systemTags"></a>

```python
system_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsDelegationControlSummaryCollectionItemsOutputReference.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `time_deleted`<sup>Required</sup> <a name="time_deleted" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsDelegationControlSummaryCollectionItemsOutputReference.property.timeDeleted"></a>

```python
time_deleted: str
```

- *Type:* str

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsDelegationControlSummaryCollectionItemsOutputReference.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `vault_id`<sup>Required</sup> <a name="vault_id" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsDelegationControlSummaryCollectionItemsOutputReference.property.vaultId"></a>

```python
vault_id: str
```

- *Type:* str

---

##### `vault_key_id`<sup>Required</sup> <a name="vault_key_id" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsDelegationControlSummaryCollectionItemsOutputReference.property.vaultKeyId"></a>

```python
vault_key_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsDelegationControlSummaryCollectionItemsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDelegateAccessControlDelegationControlsDelegationControlSummaryCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsDelegationControlSummaryCollectionItems">DataOciDelegateAccessControlDelegationControlsDelegationControlSummaryCollectionItems</a>

---


### DataOciDelegateAccessControlDelegationControlsDelegationControlSummaryCollectionList <a name="DataOciDelegateAccessControlDelegationControlsDelegationControlSummaryCollectionList" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsDelegationControlSummaryCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsDelegationControlSummaryCollectionList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_delegate_access_control_delegation_controls

dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsDelegationControlSummaryCollectionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsDelegationControlSummaryCollectionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsDelegationControlSummaryCollectionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsDelegationControlSummaryCollectionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsDelegationControlSummaryCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsDelegationControlSummaryCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsDelegationControlSummaryCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsDelegationControlSummaryCollectionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsDelegationControlSummaryCollectionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsDelegationControlSummaryCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsDelegationControlSummaryCollectionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsDelegationControlSummaryCollectionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsDelegationControlSummaryCollectionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsDelegationControlSummaryCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsDelegationControlSummaryCollectionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsDelegationControlSummaryCollectionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsDelegationControlSummaryCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsDelegationControlSummaryCollectionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsDelegationControlSummaryCollectionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDelegateAccessControlDelegationControlsDelegationControlSummaryCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsDelegationControlSummaryCollectionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsDelegationControlSummaryCollectionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsDelegationControlSummaryCollectionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsDelegationControlSummaryCollectionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsDelegationControlSummaryCollectionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDelegateAccessControlDelegationControlsDelegationControlSummaryCollectionOutputReference <a name="DataOciDelegateAccessControlDelegationControlsDelegationControlSummaryCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsDelegationControlSummaryCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsDelegationControlSummaryCollectionOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_delegate_access_control_delegation_controls

dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsDelegationControlSummaryCollectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsDelegationControlSummaryCollectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsDelegationControlSummaryCollectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsDelegationControlSummaryCollectionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsDelegationControlSummaryCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsDelegationControlSummaryCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsDelegationControlSummaryCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsDelegationControlSummaryCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsDelegationControlSummaryCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsDelegationControlSummaryCollectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsDelegationControlSummaryCollectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsDelegationControlSummaryCollectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsDelegationControlSummaryCollectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsDelegationControlSummaryCollectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsDelegationControlSummaryCollectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsDelegationControlSummaryCollectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsDelegationControlSummaryCollectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsDelegationControlSummaryCollectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsDelegationControlSummaryCollectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsDelegationControlSummaryCollectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsDelegationControlSummaryCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsDelegationControlSummaryCollectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsDelegationControlSummaryCollectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsDelegationControlSummaryCollectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsDelegationControlSummaryCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsDelegationControlSummaryCollectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsDelegationControlSummaryCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsDelegationControlSummaryCollectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsDelegationControlSummaryCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsDelegationControlSummaryCollectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsDelegationControlSummaryCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsDelegationControlSummaryCollectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsDelegationControlSummaryCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsDelegationControlSummaryCollectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsDelegationControlSummaryCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsDelegationControlSummaryCollectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsDelegationControlSummaryCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsDelegationControlSummaryCollectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsDelegationControlSummaryCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsDelegationControlSummaryCollectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsDelegationControlSummaryCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsDelegationControlSummaryCollectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsDelegationControlSummaryCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsDelegationControlSummaryCollectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsDelegationControlSummaryCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsDelegationControlSummaryCollectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsDelegationControlSummaryCollectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsDelegationControlSummaryCollectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsDelegationControlSummaryCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsDelegationControlSummaryCollectionItemsList">DataOciDelegateAccessControlDelegationControlsDelegationControlSummaryCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsDelegationControlSummaryCollectionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsDelegationControlSummaryCollection">DataOciDelegateAccessControlDelegationControlsDelegationControlSummaryCollection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsDelegationControlSummaryCollectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsDelegationControlSummaryCollectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsDelegationControlSummaryCollectionOutputReference.property.items"></a>

```python
items: DataOciDelegateAccessControlDelegationControlsDelegationControlSummaryCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsDelegationControlSummaryCollectionItemsList">DataOciDelegateAccessControlDelegationControlsDelegationControlSummaryCollectionItemsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsDelegationControlSummaryCollectionOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDelegateAccessControlDelegationControlsDelegationControlSummaryCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsDelegationControlSummaryCollection">DataOciDelegateAccessControlDelegationControlsDelegationControlSummaryCollection</a>

---


### DataOciDelegateAccessControlDelegationControlsFilterList <a name="DataOciDelegateAccessControlDelegationControlsFilterList" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_delegate_access_control_delegation_controls

dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDelegateAccessControlDelegationControlsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsFilter">DataOciDelegateAccessControlDelegationControlsFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciDelegateAccessControlDelegationControlsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsFilter">DataOciDelegateAccessControlDelegationControlsFilter</a>]]

---


### DataOciDelegateAccessControlDelegationControlsFilterOutputReference <a name="DataOciDelegateAccessControlDelegationControlsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_delegate_access_control_delegation_controls

dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsFilter">DataOciDelegateAccessControlDelegationControlsFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciDelegateAccessControlDelegationControlsFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControls.DataOciDelegateAccessControlDelegationControlsFilter">DataOciDelegateAccessControlDelegationControlsFilter</a>]

---



