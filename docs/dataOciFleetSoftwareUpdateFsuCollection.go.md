# `dataOciFleetSoftwareUpdateFsuCollection` Submodule <a name="`dataOciFleetSoftwareUpdateFsuCollection` Submodule" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciFleetSoftwareUpdateFsuCollection <a name="DataOciFleetSoftwareUpdateFsuCollection" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollection"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_software_update_fsu_collection oci_fleet_software_update_fsu_collection}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollection.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifleetsoftwareupdatefsucollection"

dataocifleetsoftwareupdatefsucollection.NewDataOciFleetSoftwareUpdateFsuCollection(scope Construct, id *string, config DataOciFleetSoftwareUpdateFsuCollectionConfig) DataOciFleetSoftwareUpdateFsuCollection
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollection.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollection.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollection.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionConfig">DataOciFleetSoftwareUpdateFsuCollectionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollection.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollection.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollection.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionConfig">DataOciFleetSoftwareUpdateFsuCollectionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollection.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollection.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollection.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollection.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollection.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollection.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollection.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollection.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollection.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollection.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollection.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollection.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollection.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollection.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollection.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollection.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollection.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollection.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollection.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollection.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollection.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollection.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollection.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollection.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollection.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollection.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollection.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollection.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollection.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollection.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollection.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollection.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollection.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollection.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollection.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollection.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollection.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollection.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollection.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollection.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciFleetSoftwareUpdateFsuCollection resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollection.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifleetsoftwareupdatefsucollection"

dataocifleetsoftwareupdatefsucollection.DataOciFleetSoftwareUpdateFsuCollection_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollection.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollection.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifleetsoftwareupdatefsucollection"

dataocifleetsoftwareupdatefsucollection.DataOciFleetSoftwareUpdateFsuCollection_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollection.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollection.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifleetsoftwareupdatefsucollection"

dataocifleetsoftwareupdatefsucollection.DataOciFleetSoftwareUpdateFsuCollection_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollection.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollection.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifleetsoftwareupdatefsucollection"

dataocifleetsoftwareupdatefsucollection.DataOciFleetSoftwareUpdateFsuCollection_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciFleetSoftwareUpdateFsuCollection resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollection.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollection.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciFleetSoftwareUpdateFsuCollection to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollection.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciFleetSoftwareUpdateFsuCollection that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_software_update_fsu_collection#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollection.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciFleetSoftwareUpdateFsuCollection to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollection.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollection.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollection.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollection.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollection.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollection.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollection.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollection.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollection.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollection.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollection.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollection.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollection.property.activeFsuCycle">ActiveFsuCycle</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionActiveFsuCycleList">DataOciFleetSoftwareUpdateFsuCollectionActiveFsuCycleList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollection.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollection.property.definedTags">DefinedTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollection.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollection.property.fleetDiscovery">FleetDiscovery</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryList">DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollection.property.freeformTags">FreeformTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollection.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollection.property.lifecycleDetails">LifecycleDetails</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollection.property.serviceType">ServiceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollection.property.sourceMajorVersion">SourceMajorVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollection.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollection.property.systemTags">SystemTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollection.property.targetCount">TargetCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollection.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollection.property.timeUpdated">TimeUpdated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollection.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollection.property.fsuCollectionIdInput">FsuCollectionIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollection.property.fsuCollectionId">FsuCollectionId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollection.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollection.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollection.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollection.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollection.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollection.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollection.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollection.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollection.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollection.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollection.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollection.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `ActiveFsuCycle`<sup>Required</sup> <a name="ActiveFsuCycle" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollection.property.activeFsuCycle"></a>

```go
func ActiveFsuCycle() DataOciFleetSoftwareUpdateFsuCollectionActiveFsuCycleList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionActiveFsuCycleList">DataOciFleetSoftwareUpdateFsuCollectionActiveFsuCycleList</a>

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollection.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollection.property.definedTags"></a>

```go
func DefinedTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollection.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `FleetDiscovery`<sup>Required</sup> <a name="FleetDiscovery" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollection.property.fleetDiscovery"></a>

```go
func FleetDiscovery() DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryList">DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryList</a>

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollection.property.freeformTags"></a>

```go
func FreeformTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollection.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollection.property.lifecycleDetails"></a>

```go
func LifecycleDetails() *string
```

- *Type:* *string

---

##### `ServiceType`<sup>Required</sup> <a name="ServiceType" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollection.property.serviceType"></a>

```go
func ServiceType() *string
```

- *Type:* *string

---

##### `SourceMajorVersion`<sup>Required</sup> <a name="SourceMajorVersion" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollection.property.sourceMajorVersion"></a>

```go
func SourceMajorVersion() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollection.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollection.property.systemTags"></a>

```go
func SystemTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `TargetCount`<sup>Required</sup> <a name="TargetCount" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollection.property.targetCount"></a>

```go
func TargetCount() *f64
```

- *Type:* *f64

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollection.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollection.property.timeUpdated"></a>

```go
func TimeUpdated() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollection.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `FsuCollectionIdInput`<sup>Optional</sup> <a name="FsuCollectionIdInput" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollection.property.fsuCollectionIdInput"></a>

```go
func FsuCollectionIdInput() *string
```

- *Type:* *string

---

##### `FsuCollectionId`<sup>Required</sup> <a name="FsuCollectionId" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollection.property.fsuCollectionId"></a>

```go
func FsuCollectionId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollection.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollection.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciFleetSoftwareUpdateFsuCollectionActiveFsuCycle <a name="DataOciFleetSoftwareUpdateFsuCollectionActiveFsuCycle" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionActiveFsuCycle"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionActiveFsuCycle.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifleetsoftwareupdatefsucollection"

&dataocifleetsoftwareupdatefsucollection.DataOciFleetSoftwareUpdateFsuCollectionActiveFsuCycle {

}
```


### DataOciFleetSoftwareUpdateFsuCollectionConfig <a name="DataOciFleetSoftwareUpdateFsuCollectionConfig" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifleetsoftwareupdatefsucollection"

&dataocifleetsoftwareupdatefsucollection.DataOciFleetSoftwareUpdateFsuCollectionConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	FsuCollectionId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionConfig.property.fsuCollectionId">FsuCollectionId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_software_update_fsu_collection#fsu_collection_id DataOciFleetSoftwareUpdateFsuCollection#fsu_collection_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `FsuCollectionId`<sup>Required</sup> <a name="FsuCollectionId" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionConfig.property.fsuCollectionId"></a>

```go
FsuCollectionId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_software_update_fsu_collection#fsu_collection_id DataOciFleetSoftwareUpdateFsuCollection#fsu_collection_id}.

---

### DataOciFleetSoftwareUpdateFsuCollectionFleetDiscovery <a name="DataOciFleetSoftwareUpdateFsuCollectionFleetDiscovery" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscovery"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscovery.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifleetsoftwareupdatefsucollection"

&dataocifleetsoftwareupdatefsucollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscovery {

}
```


### DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFilters <a name="DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFilters" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFilters"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFilters.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifleetsoftwareupdatefsucollection"

&dataocifleetsoftwareupdatefsucollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFilters {

}
```


### DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTags <a name="DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTags" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTags"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTags.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifleetsoftwareupdatefsucollection"

&dataocifleetsoftwareupdatefsucollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTags {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciFleetSoftwareUpdateFsuCollectionActiveFsuCycleList <a name="DataOciFleetSoftwareUpdateFsuCollectionActiveFsuCycleList" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionActiveFsuCycleList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionActiveFsuCycleList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifleetsoftwareupdatefsucollection"

dataocifleetsoftwareupdatefsucollection.NewDataOciFleetSoftwareUpdateFsuCollectionActiveFsuCycleList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciFleetSoftwareUpdateFsuCollectionActiveFsuCycleList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionActiveFsuCycleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionActiveFsuCycleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionActiveFsuCycleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionActiveFsuCycleList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionActiveFsuCycleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionActiveFsuCycleList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionActiveFsuCycleList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionActiveFsuCycleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionActiveFsuCycleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionActiveFsuCycleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionActiveFsuCycleList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionActiveFsuCycleList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionActiveFsuCycleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionActiveFsuCycleList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionActiveFsuCycleList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionActiveFsuCycleList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionActiveFsuCycleList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionActiveFsuCycleList.get"></a>

```go
func Get(index *f64) DataOciFleetSoftwareUpdateFsuCollectionActiveFsuCycleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionActiveFsuCycleList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionActiveFsuCycleList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionActiveFsuCycleList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionActiveFsuCycleList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionActiveFsuCycleList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciFleetSoftwareUpdateFsuCollectionActiveFsuCycleOutputReference <a name="DataOciFleetSoftwareUpdateFsuCollectionActiveFsuCycleOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionActiveFsuCycleOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionActiveFsuCycleOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifleetsoftwareupdatefsucollection"

dataocifleetsoftwareupdatefsucollection.NewDataOciFleetSoftwareUpdateFsuCollectionActiveFsuCycleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciFleetSoftwareUpdateFsuCollectionActiveFsuCycleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionActiveFsuCycleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionActiveFsuCycleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionActiveFsuCycleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionActiveFsuCycleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionActiveFsuCycleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionActiveFsuCycleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionActiveFsuCycleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionActiveFsuCycleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionActiveFsuCycleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionActiveFsuCycleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionActiveFsuCycleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionActiveFsuCycleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionActiveFsuCycleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionActiveFsuCycleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionActiveFsuCycleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionActiveFsuCycleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionActiveFsuCycleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionActiveFsuCycleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionActiveFsuCycleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionActiveFsuCycleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionActiveFsuCycleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionActiveFsuCycleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionActiveFsuCycleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionActiveFsuCycleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionActiveFsuCycleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionActiveFsuCycleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionActiveFsuCycleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionActiveFsuCycleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionActiveFsuCycleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionActiveFsuCycleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionActiveFsuCycleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionActiveFsuCycleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionActiveFsuCycleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionActiveFsuCycleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionActiveFsuCycleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionActiveFsuCycleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionActiveFsuCycleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionActiveFsuCycleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionActiveFsuCycleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionActiveFsuCycleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionActiveFsuCycleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionActiveFsuCycleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionActiveFsuCycleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionActiveFsuCycleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionActiveFsuCycleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionActiveFsuCycleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionActiveFsuCycleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionActiveFsuCycleOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionActiveFsuCycleOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionActiveFsuCycleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionActiveFsuCycle">DataOciFleetSoftwareUpdateFsuCollectionActiveFsuCycle</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionActiveFsuCycleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionActiveFsuCycleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionActiveFsuCycleOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionActiveFsuCycleOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionActiveFsuCycleOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciFleetSoftwareUpdateFsuCollectionActiveFsuCycle
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionActiveFsuCycle">DataOciFleetSoftwareUpdateFsuCollectionActiveFsuCycle</a>

---


### DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersList <a name="DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersList" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifleetsoftwareupdatefsucollection"

dataocifleetsoftwareupdatefsucollection.NewDataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersList.get"></a>

```go
func Get(index *f64) DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference <a name="DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifleetsoftwareupdatefsucollection"

dataocifleetsoftwareupdatefsucollection.NewDataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.property.entityType">EntityType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.property.identifiers">Identifiers</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.property.mode">Mode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.property.names">Names</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.property.operator">Operator</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.property.tags">Tags</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsList">DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.property.versions">Versions</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFilters">DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFilters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EntityType`<sup>Required</sup> <a name="EntityType" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.property.entityType"></a>

```go
func EntityType() *string
```

- *Type:* *string

---

##### `Identifiers`<sup>Required</sup> <a name="Identifiers" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.property.identifiers"></a>

```go
func Identifiers() *[]*string
```

- *Type:* *[]*string

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.property.mode"></a>

```go
func Mode() *string
```

- *Type:* *string

---

##### `Names`<sup>Required</sup> <a name="Names" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.property.names"></a>

```go
func Names() *[]*string
```

- *Type:* *[]*string

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.property.operator"></a>

```go
func Operator() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.property.tags"></a>

```go
func Tags() DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsList">DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsList</a>

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `Versions`<sup>Required</sup> <a name="Versions" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.property.versions"></a>

```go
func Versions() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFilters
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFilters">DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFilters</a>

---


### DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsList <a name="DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsList" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifleetsoftwareupdatefsucollection"

dataocifleetsoftwareupdatefsucollection.NewDataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsList.get"></a>

```go
func Get(index *f64) DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference <a name="DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifleetsoftwareupdatefsucollection"

dataocifleetsoftwareupdatefsucollection.NewDataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTags">DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTags
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTags">DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTags</a>

---


### DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryList <a name="DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryList" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifleetsoftwareupdatefsucollection"

dataocifleetsoftwareupdatefsucollection.NewDataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryList.get"></a>

```go
func Get(index *f64) DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference <a name="DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifleetsoftwareupdatefsucollection"

dataocifleetsoftwareupdatefsucollection.NewDataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.property.filters">Filters</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersList">DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.property.fsuDiscoveryId">FsuDiscoveryId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.property.query">Query</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.property.strategy">Strategy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.property.targets">Targets</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscovery">DataOciFleetSoftwareUpdateFsuCollectionFleetDiscovery</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Filters`<sup>Required</sup> <a name="Filters" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.property.filters"></a>

```go
func Filters() DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersList">DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersList</a>

---

##### `FsuDiscoveryId`<sup>Required</sup> <a name="FsuDiscoveryId" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.property.fsuDiscoveryId"></a>

```go
func FsuDiscoveryId() *string
```

- *Type:* *string

---

##### `Query`<sup>Required</sup> <a name="Query" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.property.query"></a>

```go
func Query() *string
```

- *Type:* *string

---

##### `Strategy`<sup>Required</sup> <a name="Strategy" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.property.strategy"></a>

```go
func Strategy() *string
```

- *Type:* *string

---

##### `Targets`<sup>Required</sup> <a name="Targets" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.property.targets"></a>

```go
func Targets() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciFleetSoftwareUpdateFsuCollectionFleetDiscovery
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscovery">DataOciFleetSoftwareUpdateFsuCollectionFleetDiscovery</a>

---



