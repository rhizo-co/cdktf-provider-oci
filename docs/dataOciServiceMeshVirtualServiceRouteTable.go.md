# `dataOciServiceMeshVirtualServiceRouteTable` Submodule <a name="`dataOciServiceMeshVirtualServiceRouteTable` Submodule" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciServiceMeshVirtualServiceRouteTable <a name="DataOciServiceMeshVirtualServiceRouteTable" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTable"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_virtual_service_route_table oci_service_mesh_virtual_service_route_table}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTable.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociservicemeshvirtualserviceroutetable"

dataociservicemeshvirtualserviceroutetable.NewDataOciServiceMeshVirtualServiceRouteTable(scope Construct, id *string, config DataOciServiceMeshVirtualServiceRouteTableConfig) DataOciServiceMeshVirtualServiceRouteTable
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTable.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTable.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTable.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableConfig">DataOciServiceMeshVirtualServiceRouteTableConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTable.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTable.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTable.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableConfig">DataOciServiceMeshVirtualServiceRouteTableConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTable.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTable.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTable.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTable.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTable.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTable.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTable.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTable.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTable.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTable.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTable.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTable.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTable.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTable.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTable.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTable.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTable.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTable.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTable.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTable.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTable.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTable.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTable.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTable.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTable.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTable.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTable.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTable.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTable.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTable.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTable.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTable.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTable.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTable.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTable.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTable.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTable.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTable.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTable.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTable.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTable.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTable.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTable.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTable.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTable.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTable.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTable.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTable.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTable.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTable.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTable.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciServiceMeshVirtualServiceRouteTable resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTable.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociservicemeshvirtualserviceroutetable"

dataociservicemeshvirtualserviceroutetable.DataOciServiceMeshVirtualServiceRouteTable_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTable.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTable.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociservicemeshvirtualserviceroutetable"

dataociservicemeshvirtualserviceroutetable.DataOciServiceMeshVirtualServiceRouteTable_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTable.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTable.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociservicemeshvirtualserviceroutetable"

dataociservicemeshvirtualserviceroutetable.DataOciServiceMeshVirtualServiceRouteTable_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTable.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTable.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociservicemeshvirtualserviceroutetable"

dataociservicemeshvirtualserviceroutetable.DataOciServiceMeshVirtualServiceRouteTable_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciServiceMeshVirtualServiceRouteTable resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTable.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTable.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciServiceMeshVirtualServiceRouteTable to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTable.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciServiceMeshVirtualServiceRouteTable that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_virtual_service_route_table#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTable.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciServiceMeshVirtualServiceRouteTable to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTable.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTable.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTable.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTable.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTable.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTable.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTable.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTable.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTable.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTable.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTable.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTable.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTable.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTable.property.definedTags">DefinedTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTable.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTable.property.freeformTags">FreeformTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTable.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTable.property.lifecycleDetails">LifecycleDetails</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTable.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTable.property.priority">Priority</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTable.property.routeRules">RouteRules</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesList">DataOciServiceMeshVirtualServiceRouteTableRouteRulesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTable.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTable.property.systemTags">SystemTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTable.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTable.property.timeUpdated">TimeUpdated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTable.property.virtualServiceId">VirtualServiceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTable.property.virtualServiceRouteTableIdInput">VirtualServiceRouteTableIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTable.property.virtualServiceRouteTableId">VirtualServiceRouteTableId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTable.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTable.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTable.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTable.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTable.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTable.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTable.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTable.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTable.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTable.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTable.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTable.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTable.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTable.property.definedTags"></a>

```go
func DefinedTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTable.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTable.property.freeformTags"></a>

```go
func FreeformTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTable.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTable.property.lifecycleDetails"></a>

```go
func LifecycleDetails() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTable.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTable.property.priority"></a>

```go
func Priority() *f64
```

- *Type:* *f64

---

##### `RouteRules`<sup>Required</sup> <a name="RouteRules" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTable.property.routeRules"></a>

```go
func RouteRules() DataOciServiceMeshVirtualServiceRouteTableRouteRulesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesList">DataOciServiceMeshVirtualServiceRouteTableRouteRulesList</a>

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTable.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTable.property.systemTags"></a>

```go
func SystemTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTable.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTable.property.timeUpdated"></a>

```go
func TimeUpdated() *string
```

- *Type:* *string

---

##### `VirtualServiceId`<sup>Required</sup> <a name="VirtualServiceId" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTable.property.virtualServiceId"></a>

```go
func VirtualServiceId() *string
```

- *Type:* *string

---

##### `VirtualServiceRouteTableIdInput`<sup>Optional</sup> <a name="VirtualServiceRouteTableIdInput" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTable.property.virtualServiceRouteTableIdInput"></a>

```go
func VirtualServiceRouteTableIdInput() *string
```

- *Type:* *string

---

##### `VirtualServiceRouteTableId`<sup>Required</sup> <a name="VirtualServiceRouteTableId" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTable.property.virtualServiceRouteTableId"></a>

```go
func VirtualServiceRouteTableId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTable.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTable.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciServiceMeshVirtualServiceRouteTableConfig <a name="DataOciServiceMeshVirtualServiceRouteTableConfig" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociservicemeshvirtualserviceroutetable"

&dataociservicemeshvirtualserviceroutetable.DataOciServiceMeshVirtualServiceRouteTableConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	VirtualServiceRouteTableId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableConfig.property.virtualServiceRouteTableId">VirtualServiceRouteTableId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_virtual_service_route_table#virtual_service_route_table_id DataOciServiceMeshVirtualServiceRouteTable#virtual_service_route_table_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `VirtualServiceRouteTableId`<sup>Required</sup> <a name="VirtualServiceRouteTableId" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableConfig.property.virtualServiceRouteTableId"></a>

```go
VirtualServiceRouteTableId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_virtual_service_route_table#virtual_service_route_table_id DataOciServiceMeshVirtualServiceRouteTable#virtual_service_route_table_id}.

---

### DataOciServiceMeshVirtualServiceRouteTableRouteRules <a name="DataOciServiceMeshVirtualServiceRouteTableRouteRules" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRules"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRules.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociservicemeshvirtualserviceroutetable"

&dataociservicemeshvirtualserviceroutetable.DataOciServiceMeshVirtualServiceRouteTableRouteRules {

}
```


### DataOciServiceMeshVirtualServiceRouteTableRouteRulesDestinations <a name="DataOciServiceMeshVirtualServiceRouteTableRouteRulesDestinations" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesDestinations"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesDestinations.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociservicemeshvirtualserviceroutetable"

&dataociservicemeshvirtualserviceroutetable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesDestinations {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciServiceMeshVirtualServiceRouteTableRouteRulesDestinationsList <a name="DataOciServiceMeshVirtualServiceRouteTableRouteRulesDestinationsList" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesDestinationsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesDestinationsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociservicemeshvirtualserviceroutetable"

dataociservicemeshvirtualserviceroutetable.NewDataOciServiceMeshVirtualServiceRouteTableRouteRulesDestinationsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciServiceMeshVirtualServiceRouteTableRouteRulesDestinationsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesDestinationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesDestinationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesDestinationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesDestinationsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesDestinationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesDestinationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesDestinationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesDestinationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesDestinationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesDestinationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesDestinationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesDestinationsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesDestinationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesDestinationsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesDestinationsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesDestinationsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesDestinationsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesDestinationsList.get"></a>

```go
func Get(index *f64) DataOciServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesDestinationsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesDestinationsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesDestinationsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesDestinationsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesDestinationsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference <a name="DataOciServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociservicemeshvirtualserviceroutetable"

dataociservicemeshvirtualserviceroutetable.NewDataOciServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference.property.virtualDeploymentId">VirtualDeploymentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference.property.weight">Weight</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesDestinations">DataOciServiceMeshVirtualServiceRouteTableRouteRulesDestinations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Port`<sup>Required</sup> <a name="Port" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `VirtualDeploymentId`<sup>Required</sup> <a name="VirtualDeploymentId" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference.property.virtualDeploymentId"></a>

```go
func VirtualDeploymentId() *string
```

- *Type:* *string

---

##### `Weight`<sup>Required</sup> <a name="Weight" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference.property.weight"></a>

```go
func Weight() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciServiceMeshVirtualServiceRouteTableRouteRulesDestinations
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesDestinations">DataOciServiceMeshVirtualServiceRouteTableRouteRulesDestinations</a>

---


### DataOciServiceMeshVirtualServiceRouteTableRouteRulesList <a name="DataOciServiceMeshVirtualServiceRouteTableRouteRulesList" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociservicemeshvirtualserviceroutetable"

dataociservicemeshvirtualserviceroutetable.NewDataOciServiceMeshVirtualServiceRouteTableRouteRulesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciServiceMeshVirtualServiceRouteTableRouteRulesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesList.get"></a>

```go
func Get(index *f64) DataOciServiceMeshVirtualServiceRouteTableRouteRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciServiceMeshVirtualServiceRouteTableRouteRulesOutputReference <a name="DataOciServiceMeshVirtualServiceRouteTableRouteRulesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociservicemeshvirtualserviceroutetable"

dataociservicemeshvirtualserviceroutetable.NewDataOciServiceMeshVirtualServiceRouteTableRouteRulesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciServiceMeshVirtualServiceRouteTableRouteRulesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.property.destinations">Destinations</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesDestinationsList">DataOciServiceMeshVirtualServiceRouteTableRouteRulesDestinationsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.property.isGrpc">IsGrpc</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.property.path">Path</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.property.pathType">PathType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.property.requestTimeoutInMs">RequestTimeoutInMs</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRules">DataOciServiceMeshVirtualServiceRouteTableRouteRules</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Destinations`<sup>Required</sup> <a name="Destinations" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.property.destinations"></a>

```go
func Destinations() DataOciServiceMeshVirtualServiceRouteTableRouteRulesDestinationsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesDestinationsList">DataOciServiceMeshVirtualServiceRouteTableRouteRulesDestinationsList</a>

---

##### `IsGrpc`<sup>Required</sup> <a name="IsGrpc" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.property.isGrpc"></a>

```go
func IsGrpc() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.property.path"></a>

```go
func Path() *string
```

- *Type:* *string

---

##### `PathType`<sup>Required</sup> <a name="PathType" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.property.pathType"></a>

```go
func PathType() *string
```

- *Type:* *string

---

##### `RequestTimeoutInMs`<sup>Required</sup> <a name="RequestTimeoutInMs" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.property.requestTimeoutInMs"></a>

```go
func RequestTimeoutInMs() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciServiceMeshVirtualServiceRouteTableRouteRules
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTable.DataOciServiceMeshVirtualServiceRouteTableRouteRules">DataOciServiceMeshVirtualServiceRouteTableRouteRules</a>

---



