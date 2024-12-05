# `dataOciServiceMeshIngressGatewayRouteTables` Submodule <a name="`dataOciServiceMeshIngressGatewayRouteTables` Submodule" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciServiceMeshIngressGatewayRouteTables <a name="DataOciServiceMeshIngressGatewayRouteTables" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_ingress_gateway_route_tables oci_service_mesh_ingress_gateway_route_tables}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociservicemeshingressgatewayroutetables"

dataociservicemeshingressgatewayroutetables.NewDataOciServiceMeshIngressGatewayRouteTables(scope Construct, id *string, config DataOciServiceMeshIngressGatewayRouteTablesConfig) DataOciServiceMeshIngressGatewayRouteTables
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesConfig">DataOciServiceMeshIngressGatewayRouteTablesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesConfig">DataOciServiceMeshIngressGatewayRouteTablesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.resetIngressGatewayId">ResetIngressGatewayId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.resetState">ResetState</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.putFilter"></a>

```go
func PutFilter(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.putFilter.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.resetFilter"></a>

```go
func ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.resetId"></a>

```go
func ResetId()
```

##### `ResetIngressGatewayId` <a name="ResetIngressGatewayId" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.resetIngressGatewayId"></a>

```go
func ResetIngressGatewayId()
```

##### `ResetName` <a name="ResetName" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.resetName"></a>

```go
func ResetName()
```

##### `ResetState` <a name="ResetState" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.resetState"></a>

```go
func ResetState()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciServiceMeshIngressGatewayRouteTables resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociservicemeshingressgatewayroutetables"

dataociservicemeshingressgatewayroutetables.DataOciServiceMeshIngressGatewayRouteTables_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociservicemeshingressgatewayroutetables"

dataociservicemeshingressgatewayroutetables.DataOciServiceMeshIngressGatewayRouteTables_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociservicemeshingressgatewayroutetables"

dataociservicemeshingressgatewayroutetables.DataOciServiceMeshIngressGatewayRouteTables_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociservicemeshingressgatewayroutetables"

dataociservicemeshingressgatewayroutetables.DataOciServiceMeshIngressGatewayRouteTables_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciServiceMeshIngressGatewayRouteTables resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciServiceMeshIngressGatewayRouteTables to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciServiceMeshIngressGatewayRouteTables that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_ingress_gateway_route_tables#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciServiceMeshIngressGatewayRouteTables to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterList">DataOciServiceMeshIngressGatewayRouteTablesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.property.ingressGatewayRouteTableCollection">IngressGatewayRouteTableCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionList">DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.property.filterInput">FilterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.property.ingressGatewayIdInput">IngressGatewayIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.property.stateInput">StateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.property.ingressGatewayId">IngressGatewayId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.property.state">State</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.property.filter"></a>

```go
func Filter() DataOciServiceMeshIngressGatewayRouteTablesFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterList">DataOciServiceMeshIngressGatewayRouteTablesFilterList</a>

---

##### `IngressGatewayRouteTableCollection`<sup>Required</sup> <a name="IngressGatewayRouteTableCollection" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.property.ingressGatewayRouteTableCollection"></a>

```go
func IngressGatewayRouteTableCollection() DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionList">DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionList</a>

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.property.compartmentIdInput"></a>

```go
func CompartmentIdInput() *string
```

- *Type:* *string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.property.filterInput"></a>

```go
func FilterInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IngressGatewayIdInput`<sup>Optional</sup> <a name="IngressGatewayIdInput" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.property.ingressGatewayIdInput"></a>

```go
func IngressGatewayIdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.property.stateInput"></a>

```go
func StateInput() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IngressGatewayId`<sup>Required</sup> <a name="IngressGatewayId" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.property.ingressGatewayId"></a>

```go
func IngressGatewayId() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciServiceMeshIngressGatewayRouteTablesConfig <a name="DataOciServiceMeshIngressGatewayRouteTablesConfig" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociservicemeshingressgatewayroutetables"

&dataociservicemeshingressgatewayroutetables.DataOciServiceMeshIngressGatewayRouteTablesConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	CompartmentId: *string,
	Filter: interface{},
	Id: *string,
	IngressGatewayId: *string,
	Name: *string,
	State: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesConfig.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_ingress_gateway_route_tables#compartment_id DataOciServiceMeshIngressGatewayRouteTables#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesConfig.property.filter">Filter</a></code> | <code>interface{}</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_ingress_gateway_route_tables#id DataOciServiceMeshIngressGatewayRouteTables#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesConfig.property.ingressGatewayId">IngressGatewayId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_ingress_gateway_route_tables#ingress_gateway_id DataOciServiceMeshIngressGatewayRouteTables#ingress_gateway_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_ingress_gateway_route_tables#name DataOciServiceMeshIngressGatewayRouteTables#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesConfig.property.state">State</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_ingress_gateway_route_tables#state DataOciServiceMeshIngressGatewayRouteTables#state}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesConfig.property.compartmentId"></a>

```go
CompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_ingress_gateway_route_tables#compartment_id DataOciServiceMeshIngressGatewayRouteTables#compartment_id}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesConfig.property.filter"></a>

```go
Filter interface{}
```

- *Type:* interface{}

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_ingress_gateway_route_tables#filter DataOciServiceMeshIngressGatewayRouteTables#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_ingress_gateway_route_tables#id DataOciServiceMeshIngressGatewayRouteTables#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IngressGatewayId`<sup>Optional</sup> <a name="IngressGatewayId" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesConfig.property.ingressGatewayId"></a>

```go
IngressGatewayId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_ingress_gateway_route_tables#ingress_gateway_id DataOciServiceMeshIngressGatewayRouteTables#ingress_gateway_id}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_ingress_gateway_route_tables#name DataOciServiceMeshIngressGatewayRouteTables#name}.

---

##### `State`<sup>Optional</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesConfig.property.state"></a>

```go
State *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_ingress_gateway_route_tables#state DataOciServiceMeshIngressGatewayRouteTables#state}.

---

### DataOciServiceMeshIngressGatewayRouteTablesFilter <a name="DataOciServiceMeshIngressGatewayRouteTablesFilter" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilter.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociservicemeshingressgatewayroutetables"

&dataociservicemeshingressgatewayroutetables.DataOciServiceMeshIngressGatewayRouteTablesFilter {
	Name: *string,
	Values: *[]*string,
	Regex: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilter.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_ingress_gateway_route_tables#name DataOciServiceMeshIngressGatewayRouteTables#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilter.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_ingress_gateway_route_tables#values DataOciServiceMeshIngressGatewayRouteTables#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilter.property.regex">Regex</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_ingress_gateway_route_tables#regex DataOciServiceMeshIngressGatewayRouteTables#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilter.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_ingress_gateway_route_tables#name DataOciServiceMeshIngressGatewayRouteTables#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilter.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_ingress_gateway_route_tables#values DataOciServiceMeshIngressGatewayRouteTables#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilter.property.regex"></a>

```go
Regex interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_ingress_gateway_route_tables#regex DataOciServiceMeshIngressGatewayRouteTables#regex}.

---

### DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollection <a name="DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollection" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollection.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociservicemeshingressgatewayroutetables"

&dataociservicemeshingressgatewayroutetables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollection {

}
```


### DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItems <a name="DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItems.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociservicemeshingressgatewayroutetables"

&dataociservicemeshingressgatewayroutetables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItems {

}
```


### DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRules <a name="DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRules" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRules"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRules.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociservicemeshingressgatewayroutetables"

&dataociservicemeshingressgatewayroutetables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRules {

}
```


### DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinations <a name="DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinations" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinations"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinations.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociservicemeshingressgatewayroutetables"

&dataociservicemeshingressgatewayroutetables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinations {

}
```


### DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHost <a name="DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHost" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHost"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHost.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociservicemeshingressgatewayroutetables"

&dataociservicemeshingressgatewayroutetables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHost {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciServiceMeshIngressGatewayRouteTablesFilterList <a name="DataOciServiceMeshIngressGatewayRouteTablesFilterList" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociservicemeshingressgatewayroutetables"

dataociservicemeshingressgatewayroutetables.NewDataOciServiceMeshIngressGatewayRouteTablesFilterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciServiceMeshIngressGatewayRouteTablesFilterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterList.get"></a>

```go
func Get(index *f64) DataOciServiceMeshIngressGatewayRouteTablesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciServiceMeshIngressGatewayRouteTablesFilterOutputReference <a name="DataOciServiceMeshIngressGatewayRouteTablesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociservicemeshingressgatewayroutetables"

dataociservicemeshingressgatewayroutetables.NewDataOciServiceMeshIngressGatewayRouteTablesFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciServiceMeshIngressGatewayRouteTablesFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterOutputReference.resetRegex"></a>

```go
func ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterOutputReference.property.regex">Regex</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterOutputReference.property.regexInput"></a>

```go
func RegexInput() interface{}
```

- *Type:* interface{}

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterOutputReference.property.regex"></a>

```go
func Regex() interface{}
```

- *Type:* interface{}

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsList <a name="DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociservicemeshingressgatewayroutetables"

dataociservicemeshingressgatewayroutetables.NewDataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsList.get"></a>

```go
func Get(index *f64) DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference <a name="DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociservicemeshingressgatewayroutetables"

dataociservicemeshingressgatewayroutetables.NewDataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference.property.definedTags">DefinedTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference.property.freeformTags">FreeformTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference.property.ingressGatewayId">IngressGatewayId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference.property.lifecycleDetails">LifecycleDetails</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference.property.priority">Priority</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference.property.routeRules">RouteRules</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesList">DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference.property.systemTags">SystemTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference.property.timeUpdated">TimeUpdated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItems">DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference.property.definedTags"></a>

```go
func DefinedTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference.property.freeformTags"></a>

```go
func FreeformTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IngressGatewayId`<sup>Required</sup> <a name="IngressGatewayId" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference.property.ingressGatewayId"></a>

```go
func IngressGatewayId() *string
```

- *Type:* *string

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference.property.lifecycleDetails"></a>

```go
func LifecycleDetails() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference.property.priority"></a>

```go
func Priority() *f64
```

- *Type:* *f64

---

##### `RouteRules`<sup>Required</sup> <a name="RouteRules" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference.property.routeRules"></a>

```go
func RouteRules() DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesList">DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesList</a>

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference.property.systemTags"></a>

```go
func SystemTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference.property.timeUpdated"></a>

```go
func TimeUpdated() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItems">DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItems</a>

---


### DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsList <a name="DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsList" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociservicemeshingressgatewayroutetables"

dataociservicemeshingressgatewayroutetables.NewDataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsList.get"></a>

```go
func Get(index *f64) DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsOutputReference <a name="DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociservicemeshingressgatewayroutetables"

dataociservicemeshingressgatewayroutetables.NewDataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsOutputReference.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsOutputReference.property.virtualServiceId">VirtualServiceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsOutputReference.property.weight">Weight</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinations">DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Port`<sup>Required</sup> <a name="Port" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsOutputReference.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `VirtualServiceId`<sup>Required</sup> <a name="VirtualServiceId" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsOutputReference.property.virtualServiceId"></a>

```go
func VirtualServiceId() *string
```

- *Type:* *string

---

##### `Weight`<sup>Required</sup> <a name="Weight" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsOutputReference.property.weight"></a>

```go
func Weight() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinations
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinations">DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinations</a>

---


### DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostList <a name="DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostList" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociservicemeshingressgatewayroutetables"

dataociservicemeshingressgatewayroutetables.NewDataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostList.get"></a>

```go
func Get(index *f64) DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostOutputReference <a name="DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostOutputReference" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociservicemeshingressgatewayroutetables"

dataociservicemeshingressgatewayroutetables.NewDataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostOutputReference.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHost">DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHost</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Port`<sup>Required</sup> <a name="Port" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostOutputReference.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHost
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHost">DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHost</a>

---


### DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesList <a name="DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesList" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociservicemeshingressgatewayroutetables"

dataociservicemeshingressgatewayroutetables.NewDataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesList.get"></a>

```go
func Get(index *f64) DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesOutputReference <a name="DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociservicemeshingressgatewayroutetables"

dataociservicemeshingressgatewayroutetables.NewDataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesOutputReference.property.destinations">Destinations</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsList">DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesOutputReference.property.ingressGatewayHost">IngressGatewayHost</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostList">DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesOutputReference.property.isGrpc">IsGrpc</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesOutputReference.property.isHostRewriteEnabled">IsHostRewriteEnabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesOutputReference.property.isPathRewriteEnabled">IsPathRewriteEnabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesOutputReference.property.path">Path</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesOutputReference.property.pathType">PathType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesOutputReference.property.requestTimeoutInMs">RequestTimeoutInMs</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRules">DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRules</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Destinations`<sup>Required</sup> <a name="Destinations" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesOutputReference.property.destinations"></a>

```go
func Destinations() DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsList">DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsList</a>

---

##### `IngressGatewayHost`<sup>Required</sup> <a name="IngressGatewayHost" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesOutputReference.property.ingressGatewayHost"></a>

```go
func IngressGatewayHost() DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostList">DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostList</a>

---

##### `IsGrpc`<sup>Required</sup> <a name="IsGrpc" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesOutputReference.property.isGrpc"></a>

```go
func IsGrpc() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IsHostRewriteEnabled`<sup>Required</sup> <a name="IsHostRewriteEnabled" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesOutputReference.property.isHostRewriteEnabled"></a>

```go
func IsHostRewriteEnabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IsPathRewriteEnabled`<sup>Required</sup> <a name="IsPathRewriteEnabled" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesOutputReference.property.isPathRewriteEnabled"></a>

```go
func IsPathRewriteEnabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesOutputReference.property.path"></a>

```go
func Path() *string
```

- *Type:* *string

---

##### `PathType`<sup>Required</sup> <a name="PathType" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesOutputReference.property.pathType"></a>

```go
func PathType() *string
```

- *Type:* *string

---

##### `RequestTimeoutInMs`<sup>Required</sup> <a name="RequestTimeoutInMs" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesOutputReference.property.requestTimeoutInMs"></a>

```go
func RequestTimeoutInMs() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRules
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRules">DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRules</a>

---


### DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionList <a name="DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionList" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociservicemeshingressgatewayroutetables"

dataociservicemeshingressgatewayroutetables.NewDataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionList.get"></a>

```go
func Get(index *f64) DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionOutputReference <a name="DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociservicemeshingressgatewayroutetables"

dataociservicemeshingressgatewayroutetables.NewDataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsList">DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollection">DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionOutputReference.property.items"></a>

```go
func Items() DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsList">DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollection">DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollection</a>

---



