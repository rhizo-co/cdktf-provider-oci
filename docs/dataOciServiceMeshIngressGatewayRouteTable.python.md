# `dataOciServiceMeshIngressGatewayRouteTable` Submodule <a name="`dataOciServiceMeshIngressGatewayRouteTable` Submodule" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciServiceMeshIngressGatewayRouteTable <a name="DataOciServiceMeshIngressGatewayRouteTable" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTable"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_ingress_gateway_route_table oci_service_mesh_ingress_gateway_route_table}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTable.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_service_mesh_ingress_gateway_route_table

dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTable(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  ingress_gateway_route_table_id: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTable.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTable.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTable.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTable.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTable.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTable.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTable.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTable.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTable.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTable.Initializer.parameter.ingressGatewayRouteTableId">ingress_gateway_route_table_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_ingress_gateway_route_table#ingress_gateway_route_table_id DataOciServiceMeshIngressGatewayRouteTable#ingress_gateway_route_table_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTable.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTable.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTable.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTable.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTable.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTable.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTable.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTable.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTable.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `ingress_gateway_route_table_id`<sup>Required</sup> <a name="ingress_gateway_route_table_id" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTable.Initializer.parameter.ingressGatewayRouteTableId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_ingress_gateway_route_table#ingress_gateway_route_table_id DataOciServiceMeshIngressGatewayRouteTable#ingress_gateway_route_table_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTable.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTable.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTable.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTable.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTable.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTable.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTable.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTable.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTable.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTable.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTable.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTable.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTable.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTable.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTable.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTable.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTable.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTable.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTable.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTable.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTable.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTable.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTable.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTable.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTable.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTable.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTable.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTable.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTable.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTable.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTable.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTable.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTable.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTable.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTable.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTable.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTable.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTable.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTable.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTable.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTable.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTable.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTable.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTable.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTable.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTable.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTable.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTable.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTable.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTable.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTable.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciServiceMeshIngressGatewayRouteTable resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTable.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_service_mesh_ingress_gateway_route_table

dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTable.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTable.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTable.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_service_mesh_ingress_gateway_route_table

dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTable.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTable.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTable.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_service_mesh_ingress_gateway_route_table

dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTable.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTable.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTable.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_service_mesh_ingress_gateway_route_table

dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTable.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciServiceMeshIngressGatewayRouteTable resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTable.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTable.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciServiceMeshIngressGatewayRouteTable to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTable.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciServiceMeshIngressGatewayRouteTable that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_ingress_gateway_route_table#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTable.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciServiceMeshIngressGatewayRouteTable to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTable.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTable.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTable.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTable.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTable.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTable.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTable.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTable.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTable.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTable.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTable.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTable.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTable.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTable.property.definedTags">defined_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTable.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTable.property.freeformTags">freeform_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTable.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTable.property.ingressGatewayId">ingress_gateway_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTable.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTable.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTable.property.priority">priority</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTable.property.routeRules">route_rules</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesList">DataOciServiceMeshIngressGatewayRouteTableRouteRulesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTable.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTable.property.systemTags">system_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTable.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTable.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTable.property.ingressGatewayRouteTableIdInput">ingress_gateway_route_table_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTable.property.ingressGatewayRouteTableId">ingress_gateway_route_table_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTable.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTable.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTable.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTable.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTable.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTable.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTable.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTable.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTable.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTable.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTable.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTable.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTable.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTable.property.definedTags"></a>

```python
defined_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTable.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTable.property.freeformTags"></a>

```python
freeform_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTable.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `ingress_gateway_id`<sup>Required</sup> <a name="ingress_gateway_id" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTable.property.ingressGatewayId"></a>

```python
ingress_gateway_id: str
```

- *Type:* str

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTable.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTable.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `priority`<sup>Required</sup> <a name="priority" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTable.property.priority"></a>

```python
priority: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `route_rules`<sup>Required</sup> <a name="route_rules" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTable.property.routeRules"></a>

```python
route_rules: DataOciServiceMeshIngressGatewayRouteTableRouteRulesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesList">DataOciServiceMeshIngressGatewayRouteTableRouteRulesList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTable.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `system_tags`<sup>Required</sup> <a name="system_tags" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTable.property.systemTags"></a>

```python
system_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTable.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTable.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `ingress_gateway_route_table_id_input`<sup>Optional</sup> <a name="ingress_gateway_route_table_id_input" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTable.property.ingressGatewayRouteTableIdInput"></a>

```python
ingress_gateway_route_table_id_input: str
```

- *Type:* str

---

##### `ingress_gateway_route_table_id`<sup>Required</sup> <a name="ingress_gateway_route_table_id" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTable.property.ingressGatewayRouteTableId"></a>

```python
ingress_gateway_route_table_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTable.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTable.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciServiceMeshIngressGatewayRouteTableConfig <a name="DataOciServiceMeshIngressGatewayRouteTableConfig" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_service_mesh_ingress_gateway_route_table

dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  ingress_gateway_route_table_id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableConfig.property.ingressGatewayRouteTableId">ingress_gateway_route_table_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_ingress_gateway_route_table#ingress_gateway_route_table_id DataOciServiceMeshIngressGatewayRouteTable#ingress_gateway_route_table_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `ingress_gateway_route_table_id`<sup>Required</sup> <a name="ingress_gateway_route_table_id" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableConfig.property.ingressGatewayRouteTableId"></a>

```python
ingress_gateway_route_table_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_ingress_gateway_route_table#ingress_gateway_route_table_id DataOciServiceMeshIngressGatewayRouteTable#ingress_gateway_route_table_id}.

---

### DataOciServiceMeshIngressGatewayRouteTableRouteRules <a name="DataOciServiceMeshIngressGatewayRouteTableRouteRules" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRules"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRules.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_service_mesh_ingress_gateway_route_table

dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRules()
```


### DataOciServiceMeshIngressGatewayRouteTableRouteRulesDestinations <a name="DataOciServiceMeshIngressGatewayRouteTableRouteRulesDestinations" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesDestinations"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesDestinations.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_service_mesh_ingress_gateway_route_table

dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesDestinations()
```


### DataOciServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHost <a name="DataOciServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHost" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHost"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHost.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_service_mesh_ingress_gateway_route_table

dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHost()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciServiceMeshIngressGatewayRouteTableRouteRulesDestinationsList <a name="DataOciServiceMeshIngressGatewayRouteTableRouteRulesDestinationsList" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesDestinationsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesDestinationsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_service_mesh_ingress_gateway_route_table

dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesDestinationsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesDestinationsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesDestinationsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesDestinationsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesDestinationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesDestinationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesDestinationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesDestinationsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesDestinationsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesDestinationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesDestinationsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesDestinationsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesDestinationsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesDestinationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesDestinationsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesDestinationsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesDestinationsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesDestinationsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesDestinationsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesDestinationsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesDestinationsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesDestinationsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesDestinationsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesDestinationsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference <a name="DataOciServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_service_mesh_ingress_gateway_route_table

dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference.property.virtualServiceId">virtual_service_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference.property.weight">weight</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesDestinations">DataOciServiceMeshIngressGatewayRouteTableRouteRulesDestinations</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `virtual_service_id`<sup>Required</sup> <a name="virtual_service_id" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference.property.virtualServiceId"></a>

```python
virtual_service_id: str
```

- *Type:* str

---

##### `weight`<sup>Required</sup> <a name="weight" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference.property.weight"></a>

```python
weight: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciServiceMeshIngressGatewayRouteTableRouteRulesDestinations
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesDestinations">DataOciServiceMeshIngressGatewayRouteTableRouteRulesDestinations</a>

---


### DataOciServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostList <a name="DataOciServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostList" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_service_mesh_ingress_gateway_route_table

dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostOutputReference <a name="DataOciServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostOutputReference" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_service_mesh_ingress_gateway_route_table

dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostOutputReference.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHost">DataOciServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHost</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostOutputReference.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostOutputReference.property.internalValue"></a>

```python
internal_value: DataOciServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHost
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHost">DataOciServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHost</a>

---


### DataOciServiceMeshIngressGatewayRouteTableRouteRulesList <a name="DataOciServiceMeshIngressGatewayRouteTableRouteRulesList" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_service_mesh_ingress_gateway_route_table

dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciServiceMeshIngressGatewayRouteTableRouteRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciServiceMeshIngressGatewayRouteTableRouteRulesOutputReference <a name="DataOciServiceMeshIngressGatewayRouteTableRouteRulesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_service_mesh_ingress_gateway_route_table

dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.property.destinations">destinations</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesDestinationsList">DataOciServiceMeshIngressGatewayRouteTableRouteRulesDestinationsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.property.ingressGatewayHost">ingress_gateway_host</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostList">DataOciServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.property.isGrpc">is_grpc</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.property.isHostRewriteEnabled">is_host_rewrite_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.property.isPathRewriteEnabled">is_path_rewrite_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.property.path">path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.property.pathType">path_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.property.requestTimeoutInMs">request_timeout_in_ms</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRules">DataOciServiceMeshIngressGatewayRouteTableRouteRules</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `destinations`<sup>Required</sup> <a name="destinations" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.property.destinations"></a>

```python
destinations: DataOciServiceMeshIngressGatewayRouteTableRouteRulesDestinationsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesDestinationsList">DataOciServiceMeshIngressGatewayRouteTableRouteRulesDestinationsList</a>

---

##### `ingress_gateway_host`<sup>Required</sup> <a name="ingress_gateway_host" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.property.ingressGatewayHost"></a>

```python
ingress_gateway_host: DataOciServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostList">DataOciServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostList</a>

---

##### `is_grpc`<sup>Required</sup> <a name="is_grpc" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.property.isGrpc"></a>

```python
is_grpc: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_host_rewrite_enabled`<sup>Required</sup> <a name="is_host_rewrite_enabled" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.property.isHostRewriteEnabled"></a>

```python
is_host_rewrite_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_path_rewrite_enabled`<sup>Required</sup> <a name="is_path_rewrite_enabled" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.property.isPathRewriteEnabled"></a>

```python
is_path_rewrite_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.property.path"></a>

```python
path: str
```

- *Type:* str

---

##### `path_type`<sup>Required</sup> <a name="path_type" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.property.pathType"></a>

```python
path_type: str
```

- *Type:* str

---

##### `request_timeout_in_ms`<sup>Required</sup> <a name="request_timeout_in_ms" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.property.requestTimeoutInMs"></a>

```python
request_timeout_in_ms: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.property.internalValue"></a>

```python
internal_value: DataOciServiceMeshIngressGatewayRouteTableRouteRules
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTable.DataOciServiceMeshIngressGatewayRouteTableRouteRules">DataOciServiceMeshIngressGatewayRouteTableRouteRules</a>

---



