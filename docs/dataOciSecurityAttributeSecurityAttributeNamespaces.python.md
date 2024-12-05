# `dataOciSecurityAttributeSecurityAttributeNamespaces` Submodule <a name="`dataOciSecurityAttributeSecurityAttributeNamespaces` Submodule" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciSecurityAttributeSecurityAttributeNamespaces <a name="DataOciSecurityAttributeSecurityAttributeNamespaces" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/security_attribute_security_attribute_namespaces oci_security_attribute_security_attribute_namespaces}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_security_attribute_security_attribute_namespaces

dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces(
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
  compartment_id_in_subtree: typing.Union[bool, IResolvable] = None,
  filter: typing.Union[IResolvable, typing.List[DataOciSecurityAttributeSecurityAttributeNamespacesFilter]] = None,
  id: str = None,
  name: str = None,
  state: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/security_attribute_security_attribute_namespaces#compartment_id DataOciSecurityAttributeSecurityAttributeNamespaces#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.Initializer.parameter.compartmentIdInSubtree">compartment_id_in_subtree</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/security_attribute_security_attribute_namespaces#compartment_id_in_subtree DataOciSecurityAttributeSecurityAttributeNamespaces#compartment_id_in_subtree}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilter">DataOciSecurityAttributeSecurityAttributeNamespacesFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/security_attribute_security_attribute_namespaces#id DataOciSecurityAttributeSecurityAttributeNamespaces#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/security_attribute_security_attribute_namespaces#name DataOciSecurityAttributeSecurityAttributeNamespaces#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.Initializer.parameter.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/security_attribute_security_attribute_namespaces#state DataOciSecurityAttributeSecurityAttributeNamespaces#state}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Optional</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/security_attribute_security_attribute_namespaces#compartment_id DataOciSecurityAttributeSecurityAttributeNamespaces#compartment_id}.

---

##### `compartment_id_in_subtree`<sup>Optional</sup> <a name="compartment_id_in_subtree" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.Initializer.parameter.compartmentIdInSubtree"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/security_attribute_security_attribute_namespaces#compartment_id_in_subtree DataOciSecurityAttributeSecurityAttributeNamespaces#compartment_id_in_subtree}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilter">DataOciSecurityAttributeSecurityAttributeNamespacesFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/security_attribute_security_attribute_namespaces#filter DataOciSecurityAttributeSecurityAttributeNamespaces#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/security_attribute_security_attribute_namespaces#id DataOciSecurityAttributeSecurityAttributeNamespaces#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/security_attribute_security_attribute_namespaces#name DataOciSecurityAttributeSecurityAttributeNamespaces#name}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.Initializer.parameter.state"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/security_attribute_security_attribute_namespaces#state DataOciSecurityAttributeSecurityAttributeNamespaces#state}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.resetCompartmentId">reset_compartment_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.resetCompartmentIdInSubtree">reset_compartment_id_in_subtree</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.resetState">reset_state</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciSecurityAttributeSecurityAttributeNamespacesFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilter">DataOciSecurityAttributeSecurityAttributeNamespacesFilter</a>]]

---

##### `reset_compartment_id` <a name="reset_compartment_id" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.resetCompartmentId"></a>

```python
def reset_compartment_id() -> None
```

##### `reset_compartment_id_in_subtree` <a name="reset_compartment_id_in_subtree" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.resetCompartmentIdInSubtree"></a>

```python
def reset_compartment_id_in_subtree() -> None
```

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_name` <a name="reset_name" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_state` <a name="reset_state" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.resetState"></a>

```python
def reset_state() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciSecurityAttributeSecurityAttributeNamespaces resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_security_attribute_security_attribute_namespaces

dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_security_attribute_security_attribute_namespaces

dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_security_attribute_security_attribute_namespaces

dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_security_attribute_security_attribute_namespaces

dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciSecurityAttributeSecurityAttributeNamespaces resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciSecurityAttributeSecurityAttributeNamespaces to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciSecurityAttributeSecurityAttributeNamespaces that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/security_attribute_security_attribute_namespaces#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciSecurityAttributeSecurityAttributeNamespaces to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterList">DataOciSecurityAttributeSecurityAttributeNamespacesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.property.securityAttributeNamespaces">security_attribute_namespaces</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesList">DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.property.compartmentIdInSubtreeInput">compartment_id_in_subtree_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilter">DataOciSecurityAttributeSecurityAttributeNamespacesFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.property.stateInput">state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.property.compartmentIdInSubtree">compartment_id_in_subtree</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.property.state">state</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.property.filter"></a>

```python
filter: DataOciSecurityAttributeSecurityAttributeNamespacesFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterList">DataOciSecurityAttributeSecurityAttributeNamespacesFilterList</a>

---

##### `security_attribute_namespaces`<sup>Required</sup> <a name="security_attribute_namespaces" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.property.securityAttributeNamespaces"></a>

```python
security_attribute_namespaces: DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesList">DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesList</a>

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `compartment_id_in_subtree_input`<sup>Optional</sup> <a name="compartment_id_in_subtree_input" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.property.compartmentIdInSubtreeInput"></a>

```python
compartment_id_in_subtree_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciSecurityAttributeSecurityAttributeNamespacesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilter">DataOciSecurityAttributeSecurityAttributeNamespacesFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `state_input`<sup>Optional</sup> <a name="state_input" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.property.stateInput"></a>

```python
state_input: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `compartment_id_in_subtree`<sup>Required</sup> <a name="compartment_id_in_subtree" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.property.compartmentIdInSubtree"></a>

```python
compartment_id_in_subtree: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.property.state"></a>

```python
state: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciSecurityAttributeSecurityAttributeNamespacesConfig <a name="DataOciSecurityAttributeSecurityAttributeNamespacesConfig" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_security_attribute_security_attribute_namespaces

dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str = None,
  compartment_id_in_subtree: typing.Union[bool, IResolvable] = None,
  filter: typing.Union[IResolvable, typing.List[DataOciSecurityAttributeSecurityAttributeNamespacesFilter]] = None,
  id: str = None,
  name: str = None,
  state: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/security_attribute_security_attribute_namespaces#compartment_id DataOciSecurityAttributeSecurityAttributeNamespaces#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesConfig.property.compartmentIdInSubtree">compartment_id_in_subtree</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/security_attribute_security_attribute_namespaces#compartment_id_in_subtree DataOciSecurityAttributeSecurityAttributeNamespaces#compartment_id_in_subtree}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilter">DataOciSecurityAttributeSecurityAttributeNamespacesFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/security_attribute_security_attribute_namespaces#id DataOciSecurityAttributeSecurityAttributeNamespaces#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/security_attribute_security_attribute_namespaces#name DataOciSecurityAttributeSecurityAttributeNamespaces#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesConfig.property.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/security_attribute_security_attribute_namespaces#state DataOciSecurityAttributeSecurityAttributeNamespaces#state}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Optional</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/security_attribute_security_attribute_namespaces#compartment_id DataOciSecurityAttributeSecurityAttributeNamespaces#compartment_id}.

---

##### `compartment_id_in_subtree`<sup>Optional</sup> <a name="compartment_id_in_subtree" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesConfig.property.compartmentIdInSubtree"></a>

```python
compartment_id_in_subtree: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/security_attribute_security_attribute_namespaces#compartment_id_in_subtree DataOciSecurityAttributeSecurityAttributeNamespaces#compartment_id_in_subtree}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciSecurityAttributeSecurityAttributeNamespacesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilter">DataOciSecurityAttributeSecurityAttributeNamespacesFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/security_attribute_security_attribute_namespaces#filter DataOciSecurityAttributeSecurityAttributeNamespaces#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/security_attribute_security_attribute_namespaces#id DataOciSecurityAttributeSecurityAttributeNamespaces#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/security_attribute_security_attribute_namespaces#name DataOciSecurityAttributeSecurityAttributeNamespaces#name}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesConfig.property.state"></a>

```python
state: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/security_attribute_security_attribute_namespaces#state DataOciSecurityAttributeSecurityAttributeNamespaces#state}.

---

### DataOciSecurityAttributeSecurityAttributeNamespacesFilter <a name="DataOciSecurityAttributeSecurityAttributeNamespacesFilter" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_security_attribute_security_attribute_namespaces

dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/security_attribute_security_attribute_namespaces#name DataOciSecurityAttributeSecurityAttributeNamespaces#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/security_attribute_security_attribute_namespaces#values DataOciSecurityAttributeSecurityAttributeNamespaces#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/security_attribute_security_attribute_namespaces#regex DataOciSecurityAttributeSecurityAttributeNamespaces#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/security_attribute_security_attribute_namespaces#name DataOciSecurityAttributeSecurityAttributeNamespaces#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/security_attribute_security_attribute_namespaces#values DataOciSecurityAttributeSecurityAttributeNamespaces#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/security_attribute_security_attribute_namespaces#regex DataOciSecurityAttributeSecurityAttributeNamespaces#regex}.

---

### DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespaces <a name="DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespaces" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespaces"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespaces.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_security_attribute_security_attribute_namespaces

dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespaces()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciSecurityAttributeSecurityAttributeNamespacesFilterList <a name="DataOciSecurityAttributeSecurityAttributeNamespacesFilterList" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_security_attribute_security_attribute_namespaces

dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciSecurityAttributeSecurityAttributeNamespacesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilter">DataOciSecurityAttributeSecurityAttributeNamespacesFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciSecurityAttributeSecurityAttributeNamespacesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilter">DataOciSecurityAttributeSecurityAttributeNamespacesFilter</a>]]

---


### DataOciSecurityAttributeSecurityAttributeNamespacesFilterOutputReference <a name="DataOciSecurityAttributeSecurityAttributeNamespacesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_security_attribute_security_attribute_namespaces

dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilter">DataOciSecurityAttributeSecurityAttributeNamespacesFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciSecurityAttributeSecurityAttributeNamespacesFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilter">DataOciSecurityAttributeSecurityAttributeNamespacesFilter</a>]

---


### DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesList <a name="DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesList" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_security_attribute_security_attribute_namespaces

dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesOutputReference <a name="DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_security_attribute_security_attribute_namespaces

dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesOutputReference.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesOutputReference.property.definedTags">defined_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesOutputReference.property.freeformTags">freeform_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesOutputReference.property.isRetired">is_retired</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesOutputReference.property.mode">mode</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesOutputReference.property.systemTags">system_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesOutputReference.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespaces">DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespaces</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesOutputReference.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesOutputReference.property.definedTags"></a>

```python
defined_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesOutputReference.property.freeformTags"></a>

```python
freeform_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `is_retired`<sup>Required</sup> <a name="is_retired" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesOutputReference.property.isRetired"></a>

```python
is_retired: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `mode`<sup>Required</sup> <a name="mode" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesOutputReference.property.mode"></a>

```python
mode: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `system_tags`<sup>Required</sup> <a name="system_tags" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesOutputReference.property.systemTags"></a>

```python
system_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesOutputReference.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesOutputReference.property.internalValue"></a>

```python
internal_value: DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespaces
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespaces">DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespaces</a>

---



