# `dataOciServiceMeshIngressGateways` Submodule <a name="`dataOciServiceMeshIngressGateways` Submodule" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciServiceMeshIngressGateways <a name="DataOciServiceMeshIngressGateways" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_ingress_gateways oci_service_mesh_ingress_gateways}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_service_mesh_ingress_gateways

dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways(
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
  filter: typing.Union[IResolvable, typing.List[DataOciServiceMeshIngressGatewaysFilter]] = None,
  id: str = None,
  mesh_id: str = None,
  name: str = None,
  state: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_ingress_gateways#compartment_id DataOciServiceMeshIngressGateways#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilter">DataOciServiceMeshIngressGatewaysFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_ingress_gateways#id DataOciServiceMeshIngressGateways#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.Initializer.parameter.meshId">mesh_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_ingress_gateways#mesh_id DataOciServiceMeshIngressGateways#mesh_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_ingress_gateways#name DataOciServiceMeshIngressGateways#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.Initializer.parameter.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_ingress_gateways#state DataOciServiceMeshIngressGateways#state}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_ingress_gateways#compartment_id DataOciServiceMeshIngressGateways#compartment_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilter">DataOciServiceMeshIngressGatewaysFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_ingress_gateways#filter DataOciServiceMeshIngressGateways#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_ingress_gateways#id DataOciServiceMeshIngressGateways#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `mesh_id`<sup>Optional</sup> <a name="mesh_id" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.Initializer.parameter.meshId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_ingress_gateways#mesh_id DataOciServiceMeshIngressGateways#mesh_id}.

---

##### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_ingress_gateways#name DataOciServiceMeshIngressGateways#name}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.Initializer.parameter.state"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_ingress_gateways#state DataOciServiceMeshIngressGateways#state}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.resetMeshId">reset_mesh_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.resetState">reset_state</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciServiceMeshIngressGatewaysFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilter">DataOciServiceMeshIngressGatewaysFilter</a>]]

---

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_mesh_id` <a name="reset_mesh_id" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.resetMeshId"></a>

```python
def reset_mesh_id() -> None
```

##### `reset_name` <a name="reset_name" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_state` <a name="reset_state" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.resetState"></a>

```python
def reset_state() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciServiceMeshIngressGateways resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_service_mesh_ingress_gateways

dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_service_mesh_ingress_gateways

dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_service_mesh_ingress_gateways

dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_service_mesh_ingress_gateways

dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciServiceMeshIngressGateways resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciServiceMeshIngressGateways to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciServiceMeshIngressGateways that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_ingress_gateways#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciServiceMeshIngressGateways to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilterList">DataOciServiceMeshIngressGatewaysFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.property.ingressGatewayCollection">ingress_gateway_collection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionList">DataOciServiceMeshIngressGatewaysIngressGatewayCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilter">DataOciServiceMeshIngressGatewaysFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.property.meshIdInput">mesh_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.property.stateInput">state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.property.meshId">mesh_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.property.state">state</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.property.filter"></a>

```python
filter: DataOciServiceMeshIngressGatewaysFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilterList">DataOciServiceMeshIngressGatewaysFilterList</a>

---

##### `ingress_gateway_collection`<sup>Required</sup> <a name="ingress_gateway_collection" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.property.ingressGatewayCollection"></a>

```python
ingress_gateway_collection: DataOciServiceMeshIngressGatewaysIngressGatewayCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionList">DataOciServiceMeshIngressGatewaysIngressGatewayCollectionList</a>

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciServiceMeshIngressGatewaysFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilter">DataOciServiceMeshIngressGatewaysFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `mesh_id_input`<sup>Optional</sup> <a name="mesh_id_input" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.property.meshIdInput"></a>

```python
mesh_id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `state_input`<sup>Optional</sup> <a name="state_input" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.property.stateInput"></a>

```python
state_input: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `mesh_id`<sup>Required</sup> <a name="mesh_id" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.property.meshId"></a>

```python
mesh_id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.property.state"></a>

```python
state: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciServiceMeshIngressGatewaysConfig <a name="DataOciServiceMeshIngressGatewaysConfig" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_service_mesh_ingress_gateways

dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  filter: typing.Union[IResolvable, typing.List[DataOciServiceMeshIngressGatewaysFilter]] = None,
  id: str = None,
  mesh_id: str = None,
  name: str = None,
  state: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_ingress_gateways#compartment_id DataOciServiceMeshIngressGateways#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilter">DataOciServiceMeshIngressGatewaysFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_ingress_gateways#id DataOciServiceMeshIngressGateways#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysConfig.property.meshId">mesh_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_ingress_gateways#mesh_id DataOciServiceMeshIngressGateways#mesh_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_ingress_gateways#name DataOciServiceMeshIngressGateways#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysConfig.property.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_ingress_gateways#state DataOciServiceMeshIngressGateways#state}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_ingress_gateways#compartment_id DataOciServiceMeshIngressGateways#compartment_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciServiceMeshIngressGatewaysFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilter">DataOciServiceMeshIngressGatewaysFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_ingress_gateways#filter DataOciServiceMeshIngressGateways#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_ingress_gateways#id DataOciServiceMeshIngressGateways#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `mesh_id`<sup>Optional</sup> <a name="mesh_id" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysConfig.property.meshId"></a>

```python
mesh_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_ingress_gateways#mesh_id DataOciServiceMeshIngressGateways#mesh_id}.

---

##### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_ingress_gateways#name DataOciServiceMeshIngressGateways#name}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysConfig.property.state"></a>

```python
state: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_ingress_gateways#state DataOciServiceMeshIngressGateways#state}.

---

### DataOciServiceMeshIngressGatewaysFilter <a name="DataOciServiceMeshIngressGatewaysFilter" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_service_mesh_ingress_gateways

dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_ingress_gateways#name DataOciServiceMeshIngressGateways#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_ingress_gateways#values DataOciServiceMeshIngressGateways#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_ingress_gateways#regex DataOciServiceMeshIngressGateways#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_ingress_gateways#name DataOciServiceMeshIngressGateways#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_ingress_gateways#values DataOciServiceMeshIngressGateways#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_ingress_gateways#regex DataOciServiceMeshIngressGateways#regex}.

---

### DataOciServiceMeshIngressGatewaysIngressGatewayCollection <a name="DataOciServiceMeshIngressGatewaysIngressGatewayCollection" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollection.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_service_mesh_ingress_gateways

dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollection()
```


### DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItems <a name="DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItems.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_service_mesh_ingress_gateways

dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItems()
```


### DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsAccessLogging <a name="DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsAccessLogging" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsAccessLogging"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsAccessLogging.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_service_mesh_ingress_gateways

dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsAccessLogging()
```


### DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHosts <a name="DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHosts" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHosts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHosts.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_service_mesh_ingress_gateways

dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHosts()
```


### DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListeners <a name="DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListeners" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListeners"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListeners.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_service_mesh_ingress_gateways

dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListeners()
```


### DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTls <a name="DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTls" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTls"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTls.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_service_mesh_ingress_gateways

dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTls()
```


### DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidation <a name="DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidation" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidation"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidation.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_service_mesh_ingress_gateways

dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidation()
```


### DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationTrustedCaBundle <a name="DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationTrustedCaBundle" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationTrustedCaBundle"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationTrustedCaBundle.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_service_mesh_ingress_gateways

dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationTrustedCaBundle()
```


### DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsServerCertificate <a name="DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsServerCertificate" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsServerCertificate"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsServerCertificate.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_service_mesh_ingress_gateways

dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsServerCertificate()
```


### DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsMtls <a name="DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsMtls" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsMtls"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsMtls.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_service_mesh_ingress_gateways

dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsMtls()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciServiceMeshIngressGatewaysFilterList <a name="DataOciServiceMeshIngressGatewaysFilterList" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_service_mesh_ingress_gateways

dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciServiceMeshIngressGatewaysFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilter">DataOciServiceMeshIngressGatewaysFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciServiceMeshIngressGatewaysFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilter">DataOciServiceMeshIngressGatewaysFilter</a>]]

---


### DataOciServiceMeshIngressGatewaysFilterOutputReference <a name="DataOciServiceMeshIngressGatewaysFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_service_mesh_ingress_gateways

dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilter">DataOciServiceMeshIngressGatewaysFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciServiceMeshIngressGatewaysFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilter">DataOciServiceMeshIngressGatewaysFilter</a>]

---


### DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsAccessLoggingList <a name="DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsAccessLoggingList" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsAccessLoggingList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsAccessLoggingList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_service_mesh_ingress_gateways

dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsAccessLoggingList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsAccessLoggingList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsAccessLoggingList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsAccessLoggingList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsAccessLoggingList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsAccessLoggingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsAccessLoggingList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsAccessLoggingList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsAccessLoggingList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsAccessLoggingList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsAccessLoggingList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsAccessLoggingList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsAccessLoggingList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsAccessLoggingList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsAccessLoggingList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsAccessLoggingList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsAccessLoggingList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsAccessLoggingList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsAccessLoggingList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsAccessLoggingOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsAccessLoggingList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsAccessLoggingList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsAccessLoggingList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsAccessLoggingList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsAccessLoggingList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsAccessLoggingOutputReference <a name="DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsAccessLoggingOutputReference" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsAccessLoggingOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsAccessLoggingOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_service_mesh_ingress_gateways

dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsAccessLoggingOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsAccessLoggingOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsAccessLoggingOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsAccessLoggingOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsAccessLoggingOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsAccessLoggingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsAccessLoggingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsAccessLoggingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsAccessLoggingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsAccessLoggingOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsAccessLoggingOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsAccessLoggingOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsAccessLoggingOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsAccessLoggingOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsAccessLoggingOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsAccessLoggingOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsAccessLoggingOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsAccessLoggingOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsAccessLoggingOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsAccessLoggingOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsAccessLoggingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsAccessLoggingOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsAccessLoggingOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsAccessLoggingOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsAccessLoggingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsAccessLoggingOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsAccessLoggingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsAccessLoggingOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsAccessLoggingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsAccessLoggingOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsAccessLoggingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsAccessLoggingOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsAccessLoggingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsAccessLoggingOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsAccessLoggingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsAccessLoggingOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsAccessLoggingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsAccessLoggingOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsAccessLoggingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsAccessLoggingOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsAccessLoggingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsAccessLoggingOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsAccessLoggingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsAccessLoggingOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsAccessLoggingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsAccessLoggingOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsAccessLoggingOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsAccessLoggingOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsAccessLoggingOutputReference.property.isEnabled">is_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsAccessLoggingOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsAccessLogging">DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsAccessLogging</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsAccessLoggingOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsAccessLoggingOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `is_enabled`<sup>Required</sup> <a name="is_enabled" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsAccessLoggingOutputReference.property.isEnabled"></a>

```python
is_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsAccessLoggingOutputReference.property.internalValue"></a>

```python
internal_value: DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsAccessLogging
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsAccessLogging">DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsAccessLogging</a>

---


### DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsList <a name="DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsList" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_service_mesh_ingress_gateways

dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersList <a name="DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersList" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_service_mesh_ingress_gateways

dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersOutputReference <a name="DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersOutputReference" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_service_mesh_ingress_gateways

dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersOutputReference.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersOutputReference.property.protocol">protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersOutputReference.property.tls">tls</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsList">DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListeners">DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListeners</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersOutputReference.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersOutputReference.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

---

##### `tls`<sup>Required</sup> <a name="tls" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersOutputReference.property.tls"></a>

```python
tls: DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsList">DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersOutputReference.property.internalValue"></a>

```python
internal_value: DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListeners
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListeners">DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListeners</a>

---


### DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationList <a name="DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationList" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_service_mesh_ingress_gateways

dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationOutputReference <a name="DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationOutputReference" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_service_mesh_ingress_gateways

dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationOutputReference.property.subjectAlternateNames">subject_alternate_names</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationOutputReference.property.trustedCaBundle">trusted_ca_bundle</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationTrustedCaBundleList">DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationTrustedCaBundleList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidation">DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidation</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `subject_alternate_names`<sup>Required</sup> <a name="subject_alternate_names" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationOutputReference.property.subjectAlternateNames"></a>

```python
subject_alternate_names: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `trusted_ca_bundle`<sup>Required</sup> <a name="trusted_ca_bundle" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationOutputReference.property.trustedCaBundle"></a>

```python
trusted_ca_bundle: DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationTrustedCaBundleList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationTrustedCaBundleList">DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationTrustedCaBundleList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationOutputReference.property.internalValue"></a>

```python
internal_value: DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidation
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidation">DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidation</a>

---


### DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationTrustedCaBundleList <a name="DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationTrustedCaBundleList" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationTrustedCaBundleList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationTrustedCaBundleList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_service_mesh_ingress_gateways

dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationTrustedCaBundleList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationTrustedCaBundleList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationTrustedCaBundleList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationTrustedCaBundleList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationTrustedCaBundleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationTrustedCaBundleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationTrustedCaBundleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationTrustedCaBundleList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationTrustedCaBundleList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationTrustedCaBundleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationTrustedCaBundleList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationTrustedCaBundleList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationTrustedCaBundleList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationTrustedCaBundleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationTrustedCaBundleList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationTrustedCaBundleList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationTrustedCaBundleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationTrustedCaBundleList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationTrustedCaBundleList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationTrustedCaBundleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationTrustedCaBundleList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationTrustedCaBundleList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationTrustedCaBundleList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationTrustedCaBundleList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationTrustedCaBundleList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationTrustedCaBundleOutputReference <a name="DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationTrustedCaBundleOutputReference" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationTrustedCaBundleOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationTrustedCaBundleOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_service_mesh_ingress_gateways

dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationTrustedCaBundleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationTrustedCaBundleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationTrustedCaBundleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationTrustedCaBundleOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationTrustedCaBundleOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationTrustedCaBundleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationTrustedCaBundleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationTrustedCaBundleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationTrustedCaBundleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationTrustedCaBundleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationTrustedCaBundleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationTrustedCaBundleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationTrustedCaBundleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationTrustedCaBundleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationTrustedCaBundleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationTrustedCaBundleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationTrustedCaBundleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationTrustedCaBundleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationTrustedCaBundleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationTrustedCaBundleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationTrustedCaBundleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationTrustedCaBundleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationTrustedCaBundleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationTrustedCaBundleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationTrustedCaBundleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationTrustedCaBundleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationTrustedCaBundleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationTrustedCaBundleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationTrustedCaBundleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationTrustedCaBundleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationTrustedCaBundleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationTrustedCaBundleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationTrustedCaBundleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationTrustedCaBundleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationTrustedCaBundleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationTrustedCaBundleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationTrustedCaBundleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationTrustedCaBundleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationTrustedCaBundleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationTrustedCaBundleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationTrustedCaBundleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationTrustedCaBundleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationTrustedCaBundleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationTrustedCaBundleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationTrustedCaBundleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationTrustedCaBundleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationTrustedCaBundleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationTrustedCaBundleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationTrustedCaBundleOutputReference.property.caBundleId">ca_bundle_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationTrustedCaBundleOutputReference.property.secretName">secret_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationTrustedCaBundleOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationTrustedCaBundleOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationTrustedCaBundle">DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationTrustedCaBundle</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationTrustedCaBundleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationTrustedCaBundleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ca_bundle_id`<sup>Required</sup> <a name="ca_bundle_id" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationTrustedCaBundleOutputReference.property.caBundleId"></a>

```python
ca_bundle_id: str
```

- *Type:* str

---

##### `secret_name`<sup>Required</sup> <a name="secret_name" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationTrustedCaBundleOutputReference.property.secretName"></a>

```python
secret_name: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationTrustedCaBundleOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationTrustedCaBundleOutputReference.property.internalValue"></a>

```python
internal_value: DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationTrustedCaBundle
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationTrustedCaBundle">DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationTrustedCaBundle</a>

---


### DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsList <a name="DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsList" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_service_mesh_ingress_gateways

dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsOutputReference <a name="DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_service_mesh_ingress_gateways

dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsOutputReference.property.clientValidation">client_validation</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationList">DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsOutputReference.property.mode">mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsOutputReference.property.serverCertificate">server_certificate</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsServerCertificateList">DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsServerCertificateList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTls">DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTls</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `client_validation`<sup>Required</sup> <a name="client_validation" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsOutputReference.property.clientValidation"></a>

```python
client_validation: DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationList">DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationList</a>

---

##### `mode`<sup>Required</sup> <a name="mode" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsOutputReference.property.mode"></a>

```python
mode: str
```

- *Type:* str

---

##### `server_certificate`<sup>Required</sup> <a name="server_certificate" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsOutputReference.property.serverCertificate"></a>

```python
server_certificate: DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsServerCertificateList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsServerCertificateList">DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsServerCertificateList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTls
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTls">DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTls</a>

---


### DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsServerCertificateList <a name="DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsServerCertificateList" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsServerCertificateList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsServerCertificateList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_service_mesh_ingress_gateways

dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsServerCertificateList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsServerCertificateList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsServerCertificateList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsServerCertificateList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsServerCertificateList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsServerCertificateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsServerCertificateList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsServerCertificateList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsServerCertificateList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsServerCertificateList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsServerCertificateList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsServerCertificateList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsServerCertificateList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsServerCertificateList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsServerCertificateList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsServerCertificateList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsServerCertificateList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsServerCertificateList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsServerCertificateList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsServerCertificateOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsServerCertificateList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsServerCertificateList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsServerCertificateList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsServerCertificateList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsServerCertificateList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsServerCertificateOutputReference <a name="DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsServerCertificateOutputReference" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsServerCertificateOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsServerCertificateOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_service_mesh_ingress_gateways

dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsServerCertificateOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsServerCertificateOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsServerCertificateOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsServerCertificateOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsServerCertificateOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsServerCertificateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsServerCertificateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsServerCertificateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsServerCertificateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsServerCertificateOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsServerCertificateOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsServerCertificateOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsServerCertificateOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsServerCertificateOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsServerCertificateOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsServerCertificateOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsServerCertificateOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsServerCertificateOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsServerCertificateOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsServerCertificateOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsServerCertificateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsServerCertificateOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsServerCertificateOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsServerCertificateOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsServerCertificateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsServerCertificateOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsServerCertificateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsServerCertificateOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsServerCertificateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsServerCertificateOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsServerCertificateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsServerCertificateOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsServerCertificateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsServerCertificateOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsServerCertificateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsServerCertificateOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsServerCertificateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsServerCertificateOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsServerCertificateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsServerCertificateOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsServerCertificateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsServerCertificateOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsServerCertificateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsServerCertificateOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsServerCertificateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsServerCertificateOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsServerCertificateOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsServerCertificateOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsServerCertificateOutputReference.property.certificateId">certificate_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsServerCertificateOutputReference.property.secretName">secret_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsServerCertificateOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsServerCertificateOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsServerCertificate">DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsServerCertificate</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsServerCertificateOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsServerCertificateOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `certificate_id`<sup>Required</sup> <a name="certificate_id" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsServerCertificateOutputReference.property.certificateId"></a>

```python
certificate_id: str
```

- *Type:* str

---

##### `secret_name`<sup>Required</sup> <a name="secret_name" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsServerCertificateOutputReference.property.secretName"></a>

```python
secret_name: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsServerCertificateOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsServerCertificateOutputReference.property.internalValue"></a>

```python
internal_value: DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsServerCertificate
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsServerCertificate">DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsServerCertificate</a>

---


### DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsOutputReference <a name="DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_service_mesh_ingress_gateways

dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsOutputReference.property.hostnames">hostnames</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsOutputReference.property.listeners">listeners</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersList">DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHosts">DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHosts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `hostnames`<sup>Required</sup> <a name="hostnames" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsOutputReference.property.hostnames"></a>

```python
hostnames: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `listeners`<sup>Required</sup> <a name="listeners" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsOutputReference.property.listeners"></a>

```python
listeners: DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersList">DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHosts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHosts">DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHosts</a>

---


### DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsList <a name="DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_service_mesh_ingress_gateways

dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsMtlsList <a name="DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsMtlsList" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsMtlsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsMtlsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_service_mesh_ingress_gateways

dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsMtlsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsMtlsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsMtlsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsMtlsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsMtlsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsMtlsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsMtlsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsMtlsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsMtlsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsMtlsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsMtlsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsMtlsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsMtlsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsMtlsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsMtlsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsMtlsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsMtlsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsMtlsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsMtlsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsMtlsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsMtlsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsMtlsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsMtlsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsMtlsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsMtlsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsMtlsOutputReference <a name="DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsMtlsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsMtlsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsMtlsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_service_mesh_ingress_gateways

dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsMtlsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsMtlsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsMtlsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsMtlsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsMtlsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsMtlsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsMtlsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsMtlsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsMtlsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsMtlsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsMtlsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsMtlsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsMtlsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsMtlsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsMtlsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsMtlsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsMtlsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsMtlsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsMtlsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsMtlsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsMtlsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsMtlsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsMtlsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsMtlsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsMtlsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsMtlsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsMtlsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsMtlsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsMtlsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsMtlsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsMtlsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsMtlsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsMtlsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsMtlsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsMtlsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsMtlsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsMtlsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsMtlsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsMtlsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsMtlsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsMtlsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsMtlsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsMtlsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsMtlsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsMtlsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsMtlsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsMtlsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsMtlsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsMtlsOutputReference.property.certificateId">certificate_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsMtlsOutputReference.property.maximumValidity">maximum_validity</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsMtlsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsMtls">DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsMtls</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsMtlsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsMtlsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `certificate_id`<sup>Required</sup> <a name="certificate_id" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsMtlsOutputReference.property.certificateId"></a>

```python
certificate_id: str
```

- *Type:* str

---

##### `maximum_validity`<sup>Required</sup> <a name="maximum_validity" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsMtlsOutputReference.property.maximumValidity"></a>

```python
maximum_validity: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsMtlsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsMtls
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsMtls">DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsMtls</a>

---


### DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsOutputReference <a name="DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_service_mesh_ingress_gateways

dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsOutputReference.property.accessLogging">access_logging</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsAccessLoggingList">DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsAccessLoggingList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsOutputReference.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsOutputReference.property.definedTags">defined_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsOutputReference.property.freeformTags">freeform_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsOutputReference.property.hosts">hosts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsList">DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsOutputReference.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsOutputReference.property.meshId">mesh_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsOutputReference.property.mtls">mtls</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsMtlsList">DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsMtlsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsOutputReference.property.systemTags">system_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsOutputReference.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsOutputReference.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItems">DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItems</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `access_logging`<sup>Required</sup> <a name="access_logging" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsOutputReference.property.accessLogging"></a>

```python
access_logging: DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsAccessLoggingList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsAccessLoggingList">DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsAccessLoggingList</a>

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsOutputReference.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsOutputReference.property.definedTags"></a>

```python
defined_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsOutputReference.property.freeformTags"></a>

```python
freeform_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `hosts`<sup>Required</sup> <a name="hosts" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsOutputReference.property.hosts"></a>

```python
hosts: DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsList">DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsOutputReference.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `mesh_id`<sup>Required</sup> <a name="mesh_id" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsOutputReference.property.meshId"></a>

```python
mesh_id: str
```

- *Type:* str

---

##### `mtls`<sup>Required</sup> <a name="mtls" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsOutputReference.property.mtls"></a>

```python
mtls: DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsMtlsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsMtlsList">DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsMtlsList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `system_tags`<sup>Required</sup> <a name="system_tags" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsOutputReference.property.systemTags"></a>

```python
system_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsOutputReference.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsOutputReference.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItems">DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItems</a>

---


### DataOciServiceMeshIngressGatewaysIngressGatewayCollectionList <a name="DataOciServiceMeshIngressGatewaysIngressGatewayCollectionList" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_service_mesh_ingress_gateways

dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciServiceMeshIngressGatewaysIngressGatewayCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciServiceMeshIngressGatewaysIngressGatewayCollectionOutputReference <a name="DataOciServiceMeshIngressGatewaysIngressGatewayCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_service_mesh_ingress_gateways

dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsList">DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollection">DataOciServiceMeshIngressGatewaysIngressGatewayCollection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionOutputReference.property.items"></a>

```python
items: DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsList">DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionOutputReference.property.internalValue"></a>

```python
internal_value: DataOciServiceMeshIngressGatewaysIngressGatewayCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollection">DataOciServiceMeshIngressGatewaysIngressGatewayCollection</a>

---



