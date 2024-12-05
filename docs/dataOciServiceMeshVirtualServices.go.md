# `dataOciServiceMeshVirtualServices` Submodule <a name="`dataOciServiceMeshVirtualServices` Submodule" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciServiceMeshVirtualServices <a name="DataOciServiceMeshVirtualServices" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_virtual_services oci_service_mesh_virtual_services}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociservicemeshvirtualservices"

dataociservicemeshvirtualservices.NewDataOciServiceMeshVirtualServices(scope Construct, id *string, config DataOciServiceMeshVirtualServicesConfig) DataOciServiceMeshVirtualServices
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesConfig">DataOciServiceMeshVirtualServicesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesConfig">DataOciServiceMeshVirtualServicesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.resetMeshId">ResetMeshId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.resetState">ResetState</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.putFilter"></a>

```go
func PutFilter(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.putFilter.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.resetFilter"></a>

```go
func ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.resetId"></a>

```go
func ResetId()
```

##### `ResetMeshId` <a name="ResetMeshId" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.resetMeshId"></a>

```go
func ResetMeshId()
```

##### `ResetName` <a name="ResetName" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.resetName"></a>

```go
func ResetName()
```

##### `ResetState` <a name="ResetState" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.resetState"></a>

```go
func ResetState()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciServiceMeshVirtualServices resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociservicemeshvirtualservices"

dataociservicemeshvirtualservices.DataOciServiceMeshVirtualServices_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociservicemeshvirtualservices"

dataociservicemeshvirtualservices.DataOciServiceMeshVirtualServices_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociservicemeshvirtualservices"

dataociservicemeshvirtualservices.DataOciServiceMeshVirtualServices_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociservicemeshvirtualservices"

dataociservicemeshvirtualservices.DataOciServiceMeshVirtualServices_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciServiceMeshVirtualServices resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciServiceMeshVirtualServices to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciServiceMeshVirtualServices that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_virtual_services#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciServiceMeshVirtualServices to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesFilterList">DataOciServiceMeshVirtualServicesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.property.virtualServiceCollection">VirtualServiceCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionList">DataOciServiceMeshVirtualServicesVirtualServiceCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.property.filterInput">FilterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.property.meshIdInput">MeshIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.property.stateInput">StateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.property.meshId">MeshId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.property.state">State</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.property.filter"></a>

```go
func Filter() DataOciServiceMeshVirtualServicesFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesFilterList">DataOciServiceMeshVirtualServicesFilterList</a>

---

##### `VirtualServiceCollection`<sup>Required</sup> <a name="VirtualServiceCollection" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.property.virtualServiceCollection"></a>

```go
func VirtualServiceCollection() DataOciServiceMeshVirtualServicesVirtualServiceCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionList">DataOciServiceMeshVirtualServicesVirtualServiceCollectionList</a>

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.property.compartmentIdInput"></a>

```go
func CompartmentIdInput() *string
```

- *Type:* *string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.property.filterInput"></a>

```go
func FilterInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `MeshIdInput`<sup>Optional</sup> <a name="MeshIdInput" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.property.meshIdInput"></a>

```go
func MeshIdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.property.stateInput"></a>

```go
func StateInput() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `MeshId`<sup>Required</sup> <a name="MeshId" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.property.meshId"></a>

```go
func MeshId() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciServiceMeshVirtualServicesConfig <a name="DataOciServiceMeshVirtualServicesConfig" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociservicemeshvirtualservices"

&dataociservicemeshvirtualservices.DataOciServiceMeshVirtualServicesConfig {
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
	MeshId: *string,
	Name: *string,
	State: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesConfig.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_virtual_services#compartment_id DataOciServiceMeshVirtualServices#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesConfig.property.filter">Filter</a></code> | <code>interface{}</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_virtual_services#id DataOciServiceMeshVirtualServices#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesConfig.property.meshId">MeshId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_virtual_services#mesh_id DataOciServiceMeshVirtualServices#mesh_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_virtual_services#name DataOciServiceMeshVirtualServices#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesConfig.property.state">State</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_virtual_services#state DataOciServiceMeshVirtualServices#state}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesConfig.property.compartmentId"></a>

```go
CompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_virtual_services#compartment_id DataOciServiceMeshVirtualServices#compartment_id}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesConfig.property.filter"></a>

```go
Filter interface{}
```

- *Type:* interface{}

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_virtual_services#filter DataOciServiceMeshVirtualServices#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_virtual_services#id DataOciServiceMeshVirtualServices#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `MeshId`<sup>Optional</sup> <a name="MeshId" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesConfig.property.meshId"></a>

```go
MeshId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_virtual_services#mesh_id DataOciServiceMeshVirtualServices#mesh_id}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_virtual_services#name DataOciServiceMeshVirtualServices#name}.

---

##### `State`<sup>Optional</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesConfig.property.state"></a>

```go
State *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_virtual_services#state DataOciServiceMeshVirtualServices#state}.

---

### DataOciServiceMeshVirtualServicesFilter <a name="DataOciServiceMeshVirtualServicesFilter" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesFilter.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociservicemeshvirtualservices"

&dataociservicemeshvirtualservices.DataOciServiceMeshVirtualServicesFilter {
	Name: *string,
	Values: *[]*string,
	Regex: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesFilter.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_virtual_services#name DataOciServiceMeshVirtualServices#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesFilter.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_virtual_services#values DataOciServiceMeshVirtualServices#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesFilter.property.regex">Regex</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_virtual_services#regex DataOciServiceMeshVirtualServices#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesFilter.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_virtual_services#name DataOciServiceMeshVirtualServices#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesFilter.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_virtual_services#values DataOciServiceMeshVirtualServices#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesFilter.property.regex"></a>

```go
Regex interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_virtual_services#regex DataOciServiceMeshVirtualServices#regex}.

---

### DataOciServiceMeshVirtualServicesVirtualServiceCollection <a name="DataOciServiceMeshVirtualServicesVirtualServiceCollection" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollection.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociservicemeshvirtualservices"

&dataociservicemeshvirtualservices.DataOciServiceMeshVirtualServicesVirtualServiceCollection {

}
```


### DataOciServiceMeshVirtualServicesVirtualServiceCollectionItems <a name="DataOciServiceMeshVirtualServicesVirtualServiceCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItems.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociservicemeshvirtualservices"

&dataociservicemeshvirtualservices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItems {

}
```


### DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsDefaultRoutingPolicy <a name="DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsDefaultRoutingPolicy" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsDefaultRoutingPolicy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsDefaultRoutingPolicy.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociservicemeshvirtualservices"

&dataociservicemeshvirtualservices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsDefaultRoutingPolicy {

}
```


### DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsMtls <a name="DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsMtls" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsMtls"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsMtls.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociservicemeshvirtualservices"

&dataociservicemeshvirtualservices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsMtls {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciServiceMeshVirtualServicesFilterList <a name="DataOciServiceMeshVirtualServicesFilterList" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesFilterList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociservicemeshvirtualservices"

dataociservicemeshvirtualservices.NewDataOciServiceMeshVirtualServicesFilterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciServiceMeshVirtualServicesFilterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesFilterList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesFilterList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesFilterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesFilterList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesFilterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesFilterList.get"></a>

```go
func Get(index *f64) DataOciServiceMeshVirtualServicesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesFilterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesFilterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesFilterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesFilterList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesFilterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesFilterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesFilterList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciServiceMeshVirtualServicesFilterOutputReference <a name="DataOciServiceMeshVirtualServicesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesFilterOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociservicemeshvirtualservices"

dataociservicemeshvirtualservices.NewDataOciServiceMeshVirtualServicesFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciServiceMeshVirtualServicesFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesFilterOutputReference.resetRegex"></a>

```go
func ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesFilterOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesFilterOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesFilterOutputReference.property.regex">Regex</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesFilterOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesFilterOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesFilterOutputReference.property.regexInput"></a>

```go
func RegexInput() interface{}
```

- *Type:* interface{}

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesFilterOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesFilterOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesFilterOutputReference.property.regex"></a>

```go
func Regex() interface{}
```

- *Type:* interface{}

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesFilterOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsDefaultRoutingPolicyList <a name="DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsDefaultRoutingPolicyList" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsDefaultRoutingPolicyList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsDefaultRoutingPolicyList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociservicemeshvirtualservices"

dataociservicemeshvirtualservices.NewDataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsDefaultRoutingPolicyList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsDefaultRoutingPolicyList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsDefaultRoutingPolicyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsDefaultRoutingPolicyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsDefaultRoutingPolicyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsDefaultRoutingPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsDefaultRoutingPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsDefaultRoutingPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsDefaultRoutingPolicyList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsDefaultRoutingPolicyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsDefaultRoutingPolicyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsDefaultRoutingPolicyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsDefaultRoutingPolicyList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsDefaultRoutingPolicyList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsDefaultRoutingPolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsDefaultRoutingPolicyList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsDefaultRoutingPolicyList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsDefaultRoutingPolicyList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsDefaultRoutingPolicyList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsDefaultRoutingPolicyList.get"></a>

```go
func Get(index *f64) DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsDefaultRoutingPolicyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsDefaultRoutingPolicyList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsDefaultRoutingPolicyList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsDefaultRoutingPolicyList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsDefaultRoutingPolicyList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsDefaultRoutingPolicyList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsDefaultRoutingPolicyOutputReference <a name="DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsDefaultRoutingPolicyOutputReference" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsDefaultRoutingPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsDefaultRoutingPolicyOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociservicemeshvirtualservices"

dataociservicemeshvirtualservices.NewDataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsDefaultRoutingPolicyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsDefaultRoutingPolicyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsDefaultRoutingPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsDefaultRoutingPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsDefaultRoutingPolicyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsDefaultRoutingPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsDefaultRoutingPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsDefaultRoutingPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsDefaultRoutingPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsDefaultRoutingPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsDefaultRoutingPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsDefaultRoutingPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsDefaultRoutingPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsDefaultRoutingPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsDefaultRoutingPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsDefaultRoutingPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsDefaultRoutingPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsDefaultRoutingPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsDefaultRoutingPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsDefaultRoutingPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsDefaultRoutingPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsDefaultRoutingPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsDefaultRoutingPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsDefaultRoutingPolicyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsDefaultRoutingPolicyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsDefaultRoutingPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsDefaultRoutingPolicyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsDefaultRoutingPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsDefaultRoutingPolicyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsDefaultRoutingPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsDefaultRoutingPolicyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsDefaultRoutingPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsDefaultRoutingPolicyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsDefaultRoutingPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsDefaultRoutingPolicyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsDefaultRoutingPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsDefaultRoutingPolicyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsDefaultRoutingPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsDefaultRoutingPolicyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsDefaultRoutingPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsDefaultRoutingPolicyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsDefaultRoutingPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsDefaultRoutingPolicyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsDefaultRoutingPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsDefaultRoutingPolicyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsDefaultRoutingPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsDefaultRoutingPolicyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsDefaultRoutingPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsDefaultRoutingPolicyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsDefaultRoutingPolicyOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsDefaultRoutingPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsDefaultRoutingPolicy">DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsDefaultRoutingPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsDefaultRoutingPolicyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsDefaultRoutingPolicyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsDefaultRoutingPolicyOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsDefaultRoutingPolicyOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsDefaultRoutingPolicy
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsDefaultRoutingPolicy">DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsDefaultRoutingPolicy</a>

---


### DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsList <a name="DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociservicemeshvirtualservices"

dataociservicemeshvirtualservices.NewDataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsList.get"></a>

```go
func Get(index *f64) DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsMtlsList <a name="DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsMtlsList" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsMtlsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsMtlsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociservicemeshvirtualservices"

dataociservicemeshvirtualservices.NewDataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsMtlsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsMtlsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsMtlsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsMtlsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsMtlsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsMtlsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsMtlsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsMtlsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsMtlsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsMtlsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsMtlsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsMtlsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsMtlsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsMtlsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsMtlsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsMtlsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsMtlsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsMtlsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsMtlsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsMtlsList.get"></a>

```go
func Get(index *f64) DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsMtlsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsMtlsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsMtlsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsMtlsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsMtlsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsMtlsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsMtlsOutputReference <a name="DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsMtlsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsMtlsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsMtlsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociservicemeshvirtualservices"

dataociservicemeshvirtualservices.NewDataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsMtlsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsMtlsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsMtlsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsMtlsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsMtlsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsMtlsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsMtlsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsMtlsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsMtlsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsMtlsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsMtlsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsMtlsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsMtlsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsMtlsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsMtlsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsMtlsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsMtlsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsMtlsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsMtlsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsMtlsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsMtlsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsMtlsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsMtlsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsMtlsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsMtlsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsMtlsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsMtlsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsMtlsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsMtlsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsMtlsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsMtlsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsMtlsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsMtlsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsMtlsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsMtlsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsMtlsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsMtlsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsMtlsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsMtlsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsMtlsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsMtlsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsMtlsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsMtlsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsMtlsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsMtlsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsMtlsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsMtlsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsMtlsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsMtlsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsMtlsOutputReference.property.certificateId">CertificateId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsMtlsOutputReference.property.maximumValidity">MaximumValidity</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsMtlsOutputReference.property.mode">Mode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsMtlsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsMtls">DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsMtls</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsMtlsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsMtlsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CertificateId`<sup>Required</sup> <a name="CertificateId" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsMtlsOutputReference.property.certificateId"></a>

```go
func CertificateId() *string
```

- *Type:* *string

---

##### `MaximumValidity`<sup>Required</sup> <a name="MaximumValidity" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsMtlsOutputReference.property.maximumValidity"></a>

```go
func MaximumValidity() *f64
```

- *Type:* *f64

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsMtlsOutputReference.property.mode"></a>

```go
func Mode() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsMtlsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsMtls
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsMtls">DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsMtls</a>

---


### DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsOutputReference <a name="DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociservicemeshvirtualservices"

dataociservicemeshvirtualservices.NewDataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsOutputReference.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsOutputReference.property.defaultRoutingPolicy">DefaultRoutingPolicy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsDefaultRoutingPolicyList">DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsDefaultRoutingPolicyList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsOutputReference.property.definedTags">DefinedTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsOutputReference.property.freeformTags">FreeformTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsOutputReference.property.hosts">Hosts</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsOutputReference.property.lifecycleDetails">LifecycleDetails</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsOutputReference.property.meshId">MeshId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsOutputReference.property.mtls">Mtls</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsMtlsList">DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsMtlsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsOutputReference.property.systemTags">SystemTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsOutputReference.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsOutputReference.property.timeUpdated">TimeUpdated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItems">DataOciServiceMeshVirtualServicesVirtualServiceCollectionItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsOutputReference.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `DefaultRoutingPolicy`<sup>Required</sup> <a name="DefaultRoutingPolicy" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsOutputReference.property.defaultRoutingPolicy"></a>

```go
func DefaultRoutingPolicy() DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsDefaultRoutingPolicyList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsDefaultRoutingPolicyList">DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsDefaultRoutingPolicyList</a>

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsOutputReference.property.definedTags"></a>

```go
func DefinedTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsOutputReference.property.freeformTags"></a>

```go
func FreeformTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Hosts`<sup>Required</sup> <a name="Hosts" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsOutputReference.property.hosts"></a>

```go
func Hosts() *[]*string
```

- *Type:* *[]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsOutputReference.property.lifecycleDetails"></a>

```go
func LifecycleDetails() *string
```

- *Type:* *string

---

##### `MeshId`<sup>Required</sup> <a name="MeshId" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsOutputReference.property.meshId"></a>

```go
func MeshId() *string
```

- *Type:* *string

---

##### `Mtls`<sup>Required</sup> <a name="Mtls" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsOutputReference.property.mtls"></a>

```go
func Mtls() DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsMtlsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsMtlsList">DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsMtlsList</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsOutputReference.property.systemTags"></a>

```go
func SystemTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsOutputReference.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsOutputReference.property.timeUpdated"></a>

```go
func TimeUpdated() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciServiceMeshVirtualServicesVirtualServiceCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItems">DataOciServiceMeshVirtualServicesVirtualServiceCollectionItems</a>

---


### DataOciServiceMeshVirtualServicesVirtualServiceCollectionList <a name="DataOciServiceMeshVirtualServicesVirtualServiceCollectionList" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociservicemeshvirtualservices"

dataociservicemeshvirtualservices.NewDataOciServiceMeshVirtualServicesVirtualServiceCollectionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciServiceMeshVirtualServicesVirtualServiceCollectionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionList.get"></a>

```go
func Get(index *f64) DataOciServiceMeshVirtualServicesVirtualServiceCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciServiceMeshVirtualServicesVirtualServiceCollectionOutputReference <a name="DataOciServiceMeshVirtualServicesVirtualServiceCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociservicemeshvirtualservices"

dataociservicemeshvirtualservices.NewDataOciServiceMeshVirtualServicesVirtualServiceCollectionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciServiceMeshVirtualServicesVirtualServiceCollectionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsList">DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollection">DataOciServiceMeshVirtualServicesVirtualServiceCollection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionOutputReference.property.items"></a>

```go
func Items() DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsList">DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciServiceMeshVirtualServicesVirtualServiceCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollection">DataOciServiceMeshVirtualServicesVirtualServiceCollection</a>

---



